// Pega o nome colocado no input pelo usuario
let inputNameItem = document.getElementById('input-title-item')
// Pega o botão adicionar Item
let btnAddItem = document.getElementById('btn-add-item')
// Pega o botão deletar Item
let btnDelete = document.getElementsByClassName('btn-delete')
console.log(btnDelete)

// Validação que impedi do usuário colocar números no nome dos itens da lista
inputNameItem.addEventListener('input', () => {
  console.log(inputNameItem.value)
  const hasCharactersRegex = /[0-9]/g
  inputNameItem.value = inputNameItem.value.replace(hasCharactersRegex, '')
})

// Pega o evento de click no botão de adicionar Item e cria uma div com o nome colocado no input

btnAddItem.addEventListener('click', () => {
  console.log('O botão foi clicado')

  let newDiv = document.createElement('div')
  newDiv.className = 'to-do-item'
  newDiv.innerHTML = `<input class="checkBox" type="checkbox" name="" id="">
        <p>${inputNameItem.value}</p>
        <button class="btn-delete">
          <img src="./assets/images/Frame-3.svg" alt="">
        </button>`
  document.getElementById('to-do-list').appendChild(newDiv)

  newDiv.getElementsByClassName("to-do-item")[0].addEventListener("change",)
})

// Pega qual botão delete foi clicado e deleta o elemento pai 
for (let i = 0; i < btnDelete.length; i++) {
  btnDelete[i].addEventListener('click', event => {
    console.log('Deletou')
    console.log(event.target)
    event.target.parentElement.parentElement.remove()
  })
}

