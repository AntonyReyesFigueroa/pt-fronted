import { useEffect, useState } from 'react'
import './App.css'

async function App() {
  const [count, setCount] = useState(0)
  const [info, setInfo] = useState()

  const GetDataStarWars = async () => {
    const data = await fetch('https://swapi.dev/api/people/1/')
    const person = await data.json()
    console.log(person)

  }

  useEffect(() => {
    GetDataStarWars()
  }, [])


  return (
    <>
      <div>
        <h1>Lista de personajes Star Wars</h1>
      </div>
    </>
  )
}

export default App
