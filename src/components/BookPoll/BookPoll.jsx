import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import axios from "axios";
import "./BookPoll.scss";

const booksToSearch = [
  { title: "The Night Circus", author: "Erin Morgenstern" },
  { title: "The Midnight Library", author: "Matt Haig" },
  { title: "Circe", author: "Madeline Miller" },
];

export default function BookPoll() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showChart, setShowChart] = useState(false);
  const [hasVoted, setHasVoted] = useState(false);
  const [votes, setVotes] = useState({});

  async function fetchBookData(title, author) {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes`,
        {
          params: {
            q: `intitle:${title}+inauthor:${author}`,
            maxResults: 1,
          },
        }
      );

      const bookItem = response.data.items?.[0];

      if (!bookItem) return null;

      const volume = bookItem.volumeInfo;

      return {
        id: bookItem.id,
        title: volume.title,
        authors: volume.authors?.join(", "),
        genre: volume.categories?.join(", "),
        rating: volume.averageRating,
        image: volume.imageLinks?.thumbnail,
      };
    } catch (error) {
      console.error("Error fetching book:", title, author, error);
      return null;
    }
  }

  useEffect(() => {
    const fetchBooks = async () => {
      const fetchedBooks = await Promise.all(
        booksToSearch.map((book) => fetchBookData(book.title, book.author))
      );

      const cleanedBooks = fetchedBooks.filter(Boolean);

      const initialVotes = {};
      cleanedBooks.forEach((book) => {
        initialVotes[book.id] = 0;
      });
      const votedBookId = localStorage.getItem("votedBookId");
      if (votedBookId) {
        setHasVoted(true);
        setShowChart(true);
      }
      setBooks(cleanedBooks);
      setVotes(initialVotes);
      setLoading(false);
    };

    fetchBooks();
  }, []);

  if (loading) return <p>Loading books...</p>;

  const handleVote = (bookId) => {
    if (hasVoted) return;

    setVotes((prevVotes) => {
      const updated = {
        ...prevVotes,
        [bookId]: prevVotes[bookId] + 1,
      };
      localStorage.setItem("votedBookId", bookId);
      setHasVoted(true);
      setShowChart(true);
      return updated;
    });
  };

  const voteData = books.map((book) => ({
    name: book.title,
    votes: votes[book.id] || 0,
  }));

  return (
    <div className="book-poll">
      <h2 className="book-poll__title">Vote for Book of the Month</h2>

      {!hasVoted && (
        <div className="book-poll__list">
          {books.map((book) => (
            <div key={book.id} className="book-poll__card">
              {book.image && (
                <img
                  src={book.image}
                  alt={`Cover of ${book.title} by ${book.authors}`}
                  className="book-poll__image"
                />
              )}
              <div className="book-poll__info">
                <h3>{book.title}</h3>
                <p>
                  <strong>Author:</strong> {book.authors}
                </p>
                <p>
                  <strong>Rating:</strong> {book.rating ?? "N/A"}
                </p>
                <p className="book-poll__genre">
                  <strong>Genre:</strong> {book.genre ?? "N/A"}
                </p>
                <button
                  className="book-poll__vote-button"
                  onClick={() => handleVote(book.id)}
                >
                  Vote
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {showChart && (
        <div className="book-poll__chart">
          <h3 className="book-poll__chart-title">Current Results</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={voteData} layout="vertical" margin={{ left: 50 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" allowDecimals={false} />
              <YAxis dataKey="name" type="category" width={150} />
              <Tooltip />
              <Bar dataKey="votes" fill="#7d206f" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
}
