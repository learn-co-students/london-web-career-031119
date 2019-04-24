const formEl = document.querySelector('#book-form')
const tbody = document.querySelector('tbody')

function addBook (title, desc, year) {
  const tr = document.createElement('tr')
  
  tr.innerHTML = `
    <td>${title}</td>
    <td>${desc}</td>
    <td>${year}</td>
    <td><button class='delete'>X</button></td>
  `
  // individual listener:
  // const deleteBtn = tr.querySelector('.delete')
  // deleteBtn.addEventListener('click', () => {
  //   tr.remove()
  // })

  tbody.append(tr)
}

addBook('HP', 'first book', 1990)
addBook('HP2', 'second book', 1992)
addBook('HP3', 'third book', 1994)
addBook('LoTR', 'long book', 1954)

formEl.addEventListener('submit', event => {
	event.preventDefault()

	const title = formEl.title.value
	const desc = formEl.desc.value
	const year = formEl.year.value

	addBook(title, desc, year)
	event.target.reset()
})

const parent = document.querySelector('#parent')
const child = document.querySelector('#child')
const grandchild = document.querySelector('#grandchild')

document.addEventListener('click', event => {
  console.log("Hey I'm the document!")
})

parent.addEventListener('click', event => {
  console.log("Hey I'm the parent")
})
child.addEventListener('click', event => {
  console.log("Hey I'm the child")
})
grandchild.addEventListener('click', event => {
  event.stopPropagation()
  console.log("Hey I'm the grandchild")
})
