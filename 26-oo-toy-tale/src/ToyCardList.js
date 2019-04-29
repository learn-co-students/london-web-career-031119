class ToyCardList {
  static toys = []
  static oldToys = []
  static toyCollection = document.querySelector('#toy-collection')

  static addToy = (toyData) => {
    const toy = new ToyCard(toyData)
    this.toys.push(toy)
    this.toyCollection.append(toy.el)
  }

  static addToys = (toysData) => {
    toysData.forEach(toyData => this.addToy(toyData))
  }

  static removeToy = (id) => {
    // remove from page
    const toy = this.toys.find(toy => toy.id === id)
    toy.remove()
  
    // remove from toys array
    this.toys = this.toys.filter(toy => toy.id !== id)
  
    // remove from server
    API.deleteToy(id)
  }
}
