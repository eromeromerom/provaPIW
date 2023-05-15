import { useState } from "react";

function Questao02() {
    const [emFrente, setEmFrente] = useState(true);
    // Muda a flag
    const Trocar = () => {
        setEmFrente(!emFrente);
    };

    // Declaração da flag
    let srcImagem;
    
    //condicional para o caminho da imagem 
    if (emFrente) {
        srcImagem =
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png";
    } else {
        srcImagem =
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png";
    }

    return (
        <div>
            <h1>Questão 2</h1>
            <div><img src={srcImagem} alt="Pikachu" /></div>
            <div><button onClick={Trocar}>Me aperte</button></div>     
        </div>
    );
}

export default Questao02;