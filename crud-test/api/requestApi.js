import axios from 'axios'

const apiService = axios.create({
  baseURL: `https://crud-books-api.herokuapp.com/`,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getBooks() {
    return apiService.get('/books')
  },
  getBook(id) {
    return apiService.get('/books/' + id)
  },
  createBook(book) {
    return apiService.post('/books', book)
  },
  removeBook(id) {
    return apiService.delete('/books/' + id)
  },
  putBook(id, book) {
    return apiService.put('/books/' + id, book)
  },
  getFunds() {
    return apiService.post('http://10.0.0.119:8080/product/fund/list', {
      nextVal: '',
      nextYN: '',
      orderVal: '',
      searchText: ''
    })
  }
}
