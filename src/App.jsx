import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Search from './Components/Search'

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
  <main> 
    <div className="pattern" />

    <div className="wrapper">
    <header>
        <img src='./hero.png' alt='Hero Banner' />
        <h1 className="text-3xl font-bold">
        Watch Your Favourite <span className="text-gradient">Movies</span> You Enjoy Without Hassle
        </h1>
     </header> 

    <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

    <div class="text-amber-50">{searchTerm}</div>
    </div>
  </main>  
  )
}

export default App
