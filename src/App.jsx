
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/Header/Header'
import Card from './components/Card/Card'
import Botao from './components/Botao/Botao'
import { Grid } from './App.style'
import { useEffect, useState } from 'react'


function App() {

  const [items, setItems] = useState([])

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character`)
      .then(res => {
        return res.json()
      })
      .then(data => {
        return setItems(data.results)
      })
      .catch(error => {
        return console.log(error)
      })
  }, [])


  return (
    <>
    
      <Header />
       <div className="container">
        <Grid>
          {items.map((personagem) => (
            <Card  
              image={personagem.image}
              name={personagem.name}
              status={personagem.status}
              species={personagem.species}
            /> 
          ))}
        </Grid>
       </div>

      <div className="container">
      <Botao text="Previous"/>
      <Botao text="Next"/>
      </div>
    </>
  )
}

export default App
