class ToyCard {
  constructor (toy) {
    this.id = toy.id
    this.name = toy.name
    this.image = toy.image
    this.likes = toy.likes
    this.create()
  }

  create () {
    if (this.el !== undefined) return this.el

    this.el = document.createElement('div')
    this.el.className = 'card'
    this.el.innerHTML = `
      <h2>${this.name}</h2>
      <img src=${this.image} class="toy-avatar" />
      <p class='likes'>${this.likes} Likes</p>
      <button class="like-btn">Like <3</button>
      <button class="delete-btn">Delete :X</button>
    `
    
    const likeBtn = this.el.querySelector('.like-btn')
    const deleteBtn = this.el.querySelector('.delete-btn')
    const likesEl = this.el.querySelector('.likes')
    
    likeBtn.addEventListener('click', () => {
      this.likes++
      API.increaseLikesJustToPleaseDiogoOk(toy)
      likesEl.innerText = `${this.likes} Likes`
    })
  
    deleteBtn.addEventListener('click', () => ToyCardList.removeToy(toy.id))
  }

  remove () {
    this.el.remove()
  }
}