import { useState } from 'react';

function Questao03() {
    const [paises, setPaises] = useState([]);
  
    fetch("https://restcountries.com/v3.1/region/europe?fields=capital,population")
      .then(response => response.json())
      .then(data => setPaises(data))
      .catch(error => console.log(error));
  
    // ordena os países por população, do maior para o menor
    const organizarPaises = paises.sort((a, b) => b.population - a.population);
  
    return (
      <div>
        <h1>Questão 3</h1>
        <h2>Capitais dos países com maior e menor população:</h2>
        <p>Maior população: {organizarPaises[0]?.capital[0]}</p>
        <p>Menor população: {organizarPaises[paises.length - 1]?.capital[0]}</p>
      </div>
    );
  }
  
  export default Questao03;