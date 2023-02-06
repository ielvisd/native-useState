import { useState } from 'react'

function Counter() {
  // useState return an array, the first item is the current value and the second item is a setter function
  let [count, setCount] = useState(10)

  function addOne() {
    setCount(count + 1)
  }
  return (
    <div className="App">
      <button
      onClick={addOne}>Count =  {count}</button>
    </div>
  )
}

function App() {
  return (
    <div>
      <Counter />
      <Counter />
    </div>
  )
}

export default App
