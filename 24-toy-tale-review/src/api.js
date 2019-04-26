// server stuff here

const TOYS_URL = 'http://localhost:3000/toys'

const getToys = () =>
  fetch(TOYS_URL)
    .then(resp => resp.json())

const createToy = toy =>
  fetch(TOYS_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(toy)
  }).then(resp => resp.json())

const updateToy = toy =>
  fetch(TOYS_URL + `/${toy.id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(toy)
  }).then(resp => resp.json())

const increaseLikesJustToPleaseDiogoOk = toy =>
  fetch(TOYS_URL + `/${toy.id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ likes: toy.likes })
  }).then(resp => resp.json())

const deleteToy = id =>
  fetch(TOYS_URL + `/${id}`, {
    method: 'DELETE'
  }).then(resp => resp.json())
