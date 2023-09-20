import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [pokemons, setPokemons] = useState('')

  useEffect(() => {
    fetch(import.meta.env.VITA_API_BERRIES, {
      mode: 'cors',
      method: 'get',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((res) => res.json())
      .then((data) => {
        setPokemons(data.results)
      }).catch((error) => {
        console.log("Ha ocurrido un error: ", error)
      })
  }, [])

  return (
    <>
    {pokemons && pokemons.map((personaje) => {
      return <p className="read-the-docs" key={personaje.url}>
        {personaje.name}
      </p>
    })}

      
    </>
  )
}

export default App
