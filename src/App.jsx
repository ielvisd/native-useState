import { useState } from 'react'

function NameList() {
  const [list, setList] = useState(['John', 'Jane', 'Jack'])
  const [name, setName] = useState('')

  const onAddName = () => {
    // You need to invoke the setter function to update the state, I hate this lol
    setList([...list, name])
    setName('')
  }


  return (
    <div>
      <ul>
        {list.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
      <input
        type="text"
        value = {name}
        onChange = {e => setName(e.target.value)}
      />
      <button
        onClick={onAddName}
      >
        Add Name
      </button>
    </div>
  )
}

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
      <NameList />
      <Counter />
    </div>
  )
}

export default App
