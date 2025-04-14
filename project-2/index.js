//object {}
const atividade = {
  nome: "Almoço",
  data: new Date("2024-07-08 10:00"),
  finalizada: false
}

//lista, array, vetor []
const atividades = [
  atividade,
  {
    nome: 'Academia em grupo',
    data: new Date("2024-07-09 12:00"),
    finalizada: false
  }
]

//arrow function
const criarItemDeAtividade = (atividade) => {

  let input = '<input type="checkout" '

  if(atividade.finalizada){
    input = input + 'checked'
  }

  input = input + '>'

  return `
    <div>
      ${input}      
      <span> ${atividade.nome}</span>
      <time> ${atividade.data}</time>
    </div>
  `
}

const section = document.querySelector('section')
section.innerHTML = criarItemDeAtividade(atividades)
