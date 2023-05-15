import { useEffect, useState } from 'react';

function Questao01X() {
  // Coloquei mais objetos para os alunos serem reprovados
  // Especificamente Beltrano, Fulano e Sicrano
  const alunos = [
    { nome: "Almir", notas: { ap1: 8.4, ap2: 5.4 } },
    { nome: "Beltrano", notas: { ap1: 5.7, ap2: 3.5 } },
    { nome: "Fulano", notas: { ap1: 0, ap2: 9.2 } },
    { nome: "Heron", notas: { ap1: 8.4, ap2: 5.4 } },
    { nome: "Valberto", notas: { ap1: 6.7, ap2: 3.5 } },
    { nome: "Rapaaaazzz", notas: { ap1: 7.3, ap2: 9.2 } },
    { nome: "Narizinho", notas: { ap1: 8.4, ap2: 5.4 } },
    { nome: "Pedrinho", notas: { ap1: 6.7, ap2: 3.5 } },
    { nome: "Sicrano", notas: { ap1: 7.3, ap2: 0 } }
  ];

  const [medias, setMedias] = useState([]);

  // declaração de reprovados e adicão deles ao vetor
  const alunosReprovados = [];

  for (let i = 0; i < medias.length; i++) {
    if (medias[i] <= 5.0) {
      alunosReprovados.push(alunos[i].nome);
    }
  }

  return (
    <div>
      <h1>Questão 1</h1>
      <h2>Alunos reprovados:</h2>
      <div>
        {/* Quebrando o vetor em divs*/}
        {alunosReprovados.map((aluno) => (
          <div>{aluno}</div>
        ))}


      </div>
      <Questao01Y alunos={alunos} setMedias={setMedias} />
    </div>
  );
}

const Questao01Y = ({ alunos, setMedias }) => {
  useEffect(() => {
    const calcularMedias = () => {

      const mediasAlunos = alunos.map((aluno) => {
        const media = (aluno.notas.ap1 + aluno.notas.ap2) / 2;
        return media;
      });
      setMedias(mediasAlunos);
    };
    calcularMedias();
  }, [alunos, setMedias]);

  return null;
};

export default Questao01X;
