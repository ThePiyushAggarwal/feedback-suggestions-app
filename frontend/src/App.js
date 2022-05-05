import Header from './components/Header'
import Main from './components/Main'
import Rating from './components/Rating'
import './styles/App.scss'

import { useState } from 'react'
import { getFeedbacks } from './features/feedbackService'

function App() {
  const [text, setText] = useState('')
  const [rating, setRating] = useState('')

  return (
    <div className="container">
      <Header />
      <Rating />
      <Main getFeedbacks={getFeedbacks} />
    </div>
  )
}

export default App
