import { useEffect, useState } from "react";
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

      setBooks(fetchedBooks.filter(Boolean));
      setLoading(false);
    };

    fetchBooks();
  }, []);

  if (loading) return <p>Loading books...</p>;
  if (!loading && books.length === 0)
    return <p>No books found for this month.</p>;

  return (
    <div className="book-poll">
      <h2 className="book-poll__title">Vote for Book of the Month</h2>
      <div className="book-poll__list">
        {books.map((book, index) => (
          <div key={book.id || index} className="book-poll__card">
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
              <p className="book-poll__genre">
                <strong>Genre:</strong> {book.genre ?? "N/A"}
              </p>

              <button
                className="book-poll__vote-button"
                onClick={() => console.log(`Voted for: ${book.title}`)}
              >
                Vote
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
