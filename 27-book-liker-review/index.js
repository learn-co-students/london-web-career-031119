const listEl = document.querySelector('#list')
const showPanelEl = document.querySelector('#show-panel')

const state = {
  books: [],
  currentUser: {"id":1, "username":"pouros"},
  selectedBook: null
}


// get all books from the server
const getBooks = () =>
	fetch('http://localhost:3000/books')
    .then(resp => resp.json())

// update a book on the server
const updateBook = book => 
  fetch(`http://localhost:3000/books/${book.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(book)
  }).then(resp => resp.json())
    
// render a book list item on the page
const renderBookListItem = book => {
	const li = document.createElement('li')
	li.innerText = book.title

  li.addEventListener('click', () => {
    state.selectedBook = book
    renderBookDetails()
  })

	listEl.append(li)
}

// render multiple book list items on the page
const renderBookListItems = () => {
  state.books.forEach(renderBookListItem)
}

// show book details when list item is clicked
const renderBookDetails = () => {
	
	const usersHTML = state.selectedBook.users.map(user => `<li>${user.username}</li>`).join('')

	showPanelEl.innerHTML = `
		<h2>${state.selectedBook.title}</h2>
		<img src='${state.selectedBook.img_url}' />
		<p class='description'>${state.selectedBook.description}</p>
		<ul class='readers'>
			${usersHTML}
		</ul>
		<button class='read-btn'>Read</button>
  `
  
  const readBtn = showPanelEl.querySelector('.read-btn')

  readBtn.addEventListener('click', () => {
    if (userHasReadBook()) {
      alert("You've already read this book!")
    } else {
      readCurrentBook()
    }
  })

}

// read the current book
const readCurrentBook = () => {
  const ulEl = showPanelEl.querySelector('.readers')
  const userLi = document.createElement('li')
  userLi.innerText = state.currentUser.username
  state.selectedBook.users.push(state.currentUser)

  updateBook(state.selectedBook)
  ulEl.append(userLi)
}

// check if the current user has read the selected book
const userHasReadBook = () => {
	const foundUser = state.selectedBook.users.find(user => user.id === state.currentUser.id)
	return foundUser ? true : false
}

// initialize the page
const init = () => {
  getBooks()
	  .then((books) => {
      state.books = books
      renderBookListItems()
    })
}

init()
