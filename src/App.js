import React, {useState} from 'react';
import Dossier from './Component';

let App = () => {
  const [contenu] = useState("La CS15 best coding ever !")
  const [titre] = useState("Died of boredom")
  return (
    <div className="App">
      <h1>{contenu}</h1>
      <Dossier name={titre}/>
    </div>
  );
}

export default App;