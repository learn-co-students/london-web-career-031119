class ToyForm {
  static formEl = document.querySelector('#add-toy-form')

  static submit = (event) => {
    event.preventDefault()

    const toy = {
      name: this.formEl.name.value,
      image: this.formEl.image.value,
      likes: 0
    }

    API.createToy(toy)
      .then(toy => ToyCardList.addToy(toy))
    
    this.formEl.reset()
  }

  static addListener = () => {
    this.formEl.addEventListener('submit', this.submit)
  }

}
