// Front End Framworks practice Activity

import { useState } from 'react'
import StorefrontLogo from './assets/cute-storefront.jpg'
import './App.css'

function App() {

  // demo keeping track of click count
  const [count, setCount] = useState(0)

  // how the app is rendered
  return (
    <>
      <h1>Front End Frameworks</h1>
      <div>
          <img src={StorefrontLogo} />
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
