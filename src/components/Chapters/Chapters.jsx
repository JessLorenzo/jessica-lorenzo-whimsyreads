import "./Chapters.scss";

export default function Chapters({ chapters, onEdit }) {
  return (
    <div className="chapters">
      <h2 className="chapters__title">Chapters (sub-groups)</h2>
      <ul className="chapters__list">
        {chapters.map((chapter, index) => (
          <li key={chapter.id || index} className="chapters__item">
            <div className="chapters__info">
              <p>
                <strong>Chapter {index + 1}</strong>
              </p>
              <p>
                <span>Book:</span> {chapter.book}
              </p>
              <p>
                <span>Meeting Date:</span> {chapter.meetingDate}
              </p>
              <p>
                <span>Location:</span> {chapter.location}
              </p>
            </div>
            <button
              className="chapters__edit-button"
              onClick={() => onEdit(chapter.id || index)}
            >
              Edit
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
