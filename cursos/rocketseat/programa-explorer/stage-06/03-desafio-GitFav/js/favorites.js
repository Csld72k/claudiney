import { GithubUserSearch } from "./githubUserSearch.js"

class UsersDataList {
  constructor(root) {
    this.root = document.querySelector(root)
    this.users
    this.usersData()
  }



  usersData() {
    this.users = JSON.parse(localStorage.getItem('@github-favorites:')) || []
  }

  save() {
    localStorage.setItem('@github-favorites:', JSON.stringify(this.users))
  }

  deleteUser(user) {
    const filteredUsersList = this.users.filter(entry => entry.login !== user.login)
    this.users = filteredUsersList
    this.save()
    this.update()
  }

  async addUser(username) {
    try {
      const userAlreadyExist = this.users.find(user => user.login.toLowerCase() === username.toLowerCase())
      if (userAlreadyExist) throw new Error('Esse usuário já está cadastrado.')
      const newUser = await GithubUserSearch.search(username)
      if (newUser.login === undefined) throw new Error('Usuário não encontrado! Tente outro nome de usuário.')
      this.users = [newUser, ...this.users]
      this.save()
      this.update()
    } catch (error) {
      alert(error.message)
    }
  }

}


export class Favorites extends UsersDataList {
  constructor(root) {
    super(root)
    this.tbody = this.root.querySelector('tbody')
    this.removeAllUsers()
    this.createRow()
    this.update()
    this.btnAddUser()
    this.changePageWhenHasNoUser()
  }

  removeAllUsers() {
    this.tbody.querySelectorAll('tr').forEach((tr) => tr.remove())
  }

  createRow() {
    const tr = document.createElement('tr')
    tr.innerHTML = `
      <td>
        <a href="https://github.com/maykbrito" target="_blank">
          <div class="user">

            <div class="user-profile-picture">
              <img src="https://github.com/maykbrito.png" alt="Imagem de Estrela">
            </div>

            <div class="user-data">
              <span class="name">Mayk Brito</span>
              <span class="username">/maykbrito</span>
            </div>

          </div>
        </a>
      </td>
      <td class="repositories">123</td>
      <td class="followers">1234</td>
      <td class="action"><button class="btn-remove-favorite">Remover</button></td>
    `
    return tr
  }

  update() {
    this.changePageWhenHasNoUser()
    this.removeAllUsers()
    this.users.forEach(user => {
      const row = this.createRow()
      row.querySelector('a').href = `https://github.com/${user.login}`
      row.querySelector('.user-profile-picture img').src = `https://github.com/${user.login}.png`
      row.querySelector('.user-profile-picture img').alt = `Imagem de ${user.name}`
      row.querySelector('.name').textContent = user.name
      row.querySelector('.username').textContent = user.login
      row.querySelector('.repositories').textContent = user.public_repos
      row.querySelector('.followers').textContent = user.followers
      row.querySelector('.btn-remove-favorite').onclick = (event) => {
        const confirmDelete = confirm('Tem certeza que deseja remover esse favorito?')
        if (confirmDelete) this.deleteUser(user)
      }

      this.tbody.append(row)
    })
  }

  btnAddUser() {
    const btnAddUser = this.root.querySelector('.add-favorite')
    btnAddUser.onclick = () => {
      const { value } = this.root.querySelector('#insert-user')
      this.addUser(value)
    }
  }

  changePageWhenHasNoUser() {
    const numbersOfFavorites = this.users
    const tableHasUser = this.root.querySelector('.has-users')
    const tableHasNoUser = this.root.querySelector('.has-no-users')
    if (numbersOfFavorites.length === 0) {
      tableHasUser.classList.add('hide')
      tableHasNoUser.classList.remove('hide')
    } else {
      tableHasUser.classList.remove('hide')
      tableHasNoUser.classList.add('hide')
    }
  }

}