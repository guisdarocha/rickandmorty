
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/Header/Header'
import Card from './components/Card/Card'
import { BotaoMais, Grid } from './App.style'
import { useEffect, useState } from 'react'


function App() {

  const [items, setItems] = useState([])
  const [pagina, setPagina] = useState(1)

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${pagina}`)
      .then(res => {
        return res.json()
      })
      .then(data => {
        return setItems(data.results)
      })
      .catch(error => {
        return console.log(error)
      })
  }, [pagina])

 function proxima() {
  setPagina(pagina+1)
 }

 function anterior(){
   setPagina(pagina-1)
 }

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
        <BotaoMais onClick={anterior}>
          Previous    
        </BotaoMais>
        <BotaoMais onClick={proxima}>
          Next    
        </BotaoMais>
      </div>
    </>
  )
}

export default App
