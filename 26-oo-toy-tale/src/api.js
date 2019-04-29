// server stuff here
class API {
  static baseUrl = 'http://localhost:3000'
  static toysUrl = API.baseUrl + '/toys'

  static getToys = () => this.get(this.toysUrl)

  static createToy = toy => this.post(this.toysUrl, toy)

  static updateToy = toy => this.patch(this.toysUrl + `/${toy.id}`, toy)
  
  static increaseLikesJustToPleaseDiogoOk = toy =>
    this.patch(this.toysUrl + `/${toy.id}`, { likes: toy.likes })

  static deleteToy = id => this.delete(this.toysUrl + `/${id}`)

  static get = (url) => 
    fetch(url)
      .then(resp => resp.json())

  static post = (url, data) =>
    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    }).then(resp => resp.json())

  static patch = (url, data) =>
    fetch(url, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    }).then(resp => resp.json())
    
  static delete = (url) => 
    fetch(url, {
      method: 'DELETE'
    }).then(resp => resp.json())

}
