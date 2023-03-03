import { useState } from 'react'
import './App.css'
import Article from './assets/components/article/Article'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Article />
    </div>
  )
}

export default App
