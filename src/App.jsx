import React, {useEffect, useState} from 'react';
import Navbar from './Components/Navbar' 
import Characters  from './components/Characters';


function App() {

  const [characters,setCharacters] = useState([])

  const initUrl = "https://rickandmortyapi.com/api/character";

  const caracteresMorty = (url) => {
    fetch(url)
    .then(response => response.json())
    .then(data => setCharacters(data.results))
    .catch(error => console.log(error))
  };

  useEffect(()=> {
    caracteresMorty(initUrl)
  },[])

  return ( 
  <>
    <Navbar brand="Rick and Morty"/>

    <div className='container mt-5'>
    <Characters characters={characters} />
    </div>
  </>
  );
}

export default App
