import "./Homepage.scss";
import Navbar from "../../components/Navbar/Navbar.jsx";
import BookImage from "../../assets/image/hand-book.png";
import BookWindowImage from "../../assets/image/book-windows.png";

function Homepage() {
  return (
    <>
      <Navbar />
      <main className="main">
        <div className="main__slogan">
          <div className="main__text">
            <h1 className="main__headline">A Cozy Corner For Your Book Club</h1>
            <p className="main__subtext">
              Create a profile for your book club on Whimsy Reads
            </p>
          </div>
          <img src={BookImage} alt="book stack" className="main__image" />
        </div>
        <section className="main__description">
          <p>
            Welcome to <strong>Whimsy Reads</strong>! A cozy corner of the
            internet where book lovers gather to share stories, spark
            discussions, and celebrate the magic of reading together.
          </p>
          <p>
            Born out of a love for both community and creativity, Whimsy Reads
            makes it easy to create or join book clubs, vote on monthly reads,
            track chapters, and connect over your favorite stories.
          </p>
          <p>
            Whether you’re into fantasy, thrillers, memoirs, or anything in
            between, there's a seat at the table for you. Here, it’s not just
            about turning pages, it’s about building friendships, discovering
            new worlds, and bringing a little whimsy into everyday life.
          </p>
          <p>
            <em>Let’s read together.</em>
          </p>
          <img
            src={BookWindowImage}
            alt="Girl reading in a whimsical book world"
            className="main__description-image"
          />
        </section>
      </main>
    </>
  );
}

export default Homepage;
