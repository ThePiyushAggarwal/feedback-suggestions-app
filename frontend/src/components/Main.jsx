import '../styles/Main.scss'
import Card from '../components/Card'
import { useEffect, useState } from 'react'

function Main({ getFeedbacks }) {
  const [feedbacks, setFeedbacks] = useState([])

  useEffect(() => {
    getFeedbacks().then((response) => {
      setFeedbacks(response)
    })
  }, [])

  return (
    <section className="main">
      {feedbacks &&
        feedbacks.map((feedback) => (
          <Card key={feedback._id} feedback={feedback} />
        ))}
    </section>
  )
}

export default Main
