const dogForm = document.querySelector('#dog-form')
const tableBody = document.querySelector('#table-body')

const state = {
  dogs: [],
  selectedDog: null
}

const DOGS_URL = 'http://localhost:3000/dogs'

// get all dogs from the server
const getDogs = () =>
	fetch(DOGS_URL)
    .then(resp => resp.json())

// update a dog on the server
const updateDog = dog =>
  fetch(DOGS_URL + `/${dog.id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dog)
  })

// update the dog that is currently in state
const updateSelectedDogOnServer = () =>
  updateDog(state.selectedDog)
    
const updateSelectedDogState = () => {
  state.selectedDog.name = dogForm.name.value
  state.selectedDog.breed = dogForm.breed.value
  state.selectedDog.sex = dogForm.sex.value 
}

const updateSelectedDogOnPage = () => {
  const rowEl = tableBody.querySelector(`tr#row-${state.selectedDog.id}`)
  rowEl.querySelector('.dog-name').innerText = state.selectedDog.name
  rowEl.querySelector('.dog-breed').innerText = state.selectedDog.breed
  rowEl.querySelector('.dog-sex').innerText = state.selectedDog.sex
}

// render a single dog
const renderDogRow = dog => {
  const dogRow = document.createElement('tr')
  dogRow.id = `row-${dog.id}`
	dogRow.innerHTML = `
		<td class='dog-name'>${dog.name}</td>
		<td class='dog-breed'>${dog.breed}</td>
		<td class='dog-sex'>${dog.sex}</td>
		<td><button class='edit-btn'>EDIT</button></td>
  `
  const editBtn = dogRow.querySelector('.edit-btn')
  editBtn.addEventListener('click', () => {
    selectDog(dog)
  })
	tableBody.append(dogRow)
}

// render multiple dogs
const renderDogRows = () => {
  tableBody.innerHTML = ''
	state.dogs.forEach(dog => renderDogRow(dog))
}

const selectDog = dog => {
  // update state
  state.selectedDog = dog

  // update the page
  dogForm.name.value = state.selectedDog.name
  dogForm.breed.value = state.selectedDog.breed
  dogForm.sex.value = state.selectedDog.sex
}

const deselectDog = () => {
  state.selectedDog = null
  dogForm.reset()
}

const editDog = () => {
  if (!state.selectedDog) {
    alert("You need to select a dog first!")
    deselectDog()
  } else {
    updateSelectedDogState()
    updateSelectedDogOnServer()
    updateSelectedDogOnPage()
  }
}

const addDogFormListener = () => {
  dogForm.addEventListener('submit', event => {
    event.preventDefault()
    editDog()
    deselectDog()
  })
}

// run this when the page loads
const init = () => {
  getDogs()
    .then(dogs =>{
      state.dogs = dogs
      renderDogRows()
    })
  addDogFormListener()
}

init()