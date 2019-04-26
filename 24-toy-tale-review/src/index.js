const addBtn = document.querySelector('#new-toy-btn')
const toyForm = document.querySelector('.container')
let addToy = false

// YOUR CODE HERE

addBtn.addEventListener('click', () => {
  // hide & seek with the form
  addToy = !addToy
  if (addToy) {
    toyForm.style.display = 'block'
    // submit listener here
  } else {
    toyForm.style.display = 'none'
  }
})


// MY CODE

const formEl = document.querySelector('#add-toy-form')
const toyCollection = document.querySelector('#toy-collection')

// add a single toy to the page
const renderToy = toy => {
	const toyDiv = document.createElement('div')
	toyDiv.className = 'card'
	toyDiv.innerHTML = `
    <h2>${toy.name}</h2>
    <img src=${toy.image} class="toy-avatar" />
    <p class='likes'>${toy.likes} Likes</p>
    <button class="like-btn">Like <3</button>
    <button class="delete-btn">Delete :X</button>
  `
  
  const likeBtn = toyDiv.querySelector('.like-btn')
  const deleteBtn = toyDiv.querySelector('.delete-btn')
  const likesEl = toyDiv.querySelector('.likes')
  
  likeBtn.addEventListener('click', () => {
    toy.likes++
    increaseLikesJustToPleaseDiogoOk(toy)
    likesEl.innerText = `${toy.likes} Likes`
  })

  deleteBtn.addEventListener('click', () => {
    deleteToy(toy.id)
    toyDiv.remove()
  })

	toyCollection.append(toyDiv)
}

// add multiple toys to the page
const renderToys = toys => {
	toys.forEach(renderToy)
}

// create a new toy using the form
const addNewToyFormListener = () => {
  formEl.addEventListener('submit', event => {
    event.preventDefault()

    const toy = {
      name: formEl.name.value,
      image: formEl.image.value,
      likes: 0
    }

    createToy(toy)
    renderToy(toy)
    formEl.reset()
  })
}

// initialize the page
const init = () => {
  getToys()
    .then(renderToys)
  addNewToyFormListener()
}

init()