/* 
Vetores e objetos

Crie um programa com um objeto para armazenar dados de um programador como nome, idade e tecnologias que trabalha.

Um programador pode trabalhar com várias tecnologias, por isso armazene essas tecnologias em um array.

As tecnologias também devem ser objetos contendo nome e especialidade, use as tecnologias abaixo:

{ nome: 'C++', especialidade: 'Desktop' }
{ nome: 'Python', especialidade: 'Data Science' }
{ nome: 'JavaScript', especialidade: 'Web/Mobile' }

*/

const objeto = {
    programador: [
        {
            nome: "Carlos",
            idade: 35,
            tecnologias: [
                { nome: "C++", especialidade: "Desktop" },
                { nome: "JavaScript", especialidade: "Web/Mobile" }
            ]
        }
    ]
};

console.log(`O usuário ${objeto.programador[0].nome} tem ${objeto.programador[0].idade} anos e usa a tecnologia ${objeto.programador[0].tecnologias[0].nome} com especialidade em ${objeto.programador[0].tecnologias[0].especialidade}`);

