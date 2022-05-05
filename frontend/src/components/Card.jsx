import '../styles/Card.scss'

function Card({ feedback }) {
  return (
    <div className="card">
      <div className="rated">
        <span>{feedback.rating}</span>
      </div>
      <div className="detail">
        <div className="title">Lo rem Ipsum</div>
        <div className="description">{feedback.text}</div>
      </div>
    </div>
  )
}

export default Card
