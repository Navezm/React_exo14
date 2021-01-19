import React, {useState} from 'react';

let App = () => {
  const [contenu] = useState("La CS15 best coding ever !")
  return (
    <div className="App">
      <h1>{contenu}</h1>
    </div>
  );
}

export default App;