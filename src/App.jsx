
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/Header/Header'
import Card from './components/Card/Card'
import Botao from './components/Botao/Botao'


function App() {

  return (
    <>

      <Header />
      <div className="container">
      <Card />
      <Card />
      <Card />
      <Card />
      </div>
      
      <Botao />

    </>
  )
}

export default App
