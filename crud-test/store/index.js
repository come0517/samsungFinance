import requestApi from '~/api/requestApi.js'

export const state = () => ({
  books: [],
  book: {},
  funds: [],
  fund: {}
})

export const actions = {
  getBooks({ commit }) {
    return requestApi.getBooks().then(response => {
      commit('SET_BOOKS', response.data)
      console.log(response.data)
    })
  },
  getBook({ commit }, id) {
    return requestApi.getBook(id).then(response => {
      commit('SET_BOOK', response.data)
    })
  },
  addBook({ commit }, book) {
    return requestApi.createBook(book).then(response => {
      commit('ADD_BOOK', book)
    })
  },
  deleteBook({ commit }, id) {
    return requestApi.removeBook(id).then(response => {
      commit('DELETE_BOOK')
    })
  },
  putBook({ state }, id) {
    requestApi.putBook(id, state.book)
  },
  getFunds({ commit }) {
    return requestApi.getFunds().then(response => {
      commit('SET_FUNDS', response.data.data)
      console.log(response.data.data)
    })
  },
  getFundDetail({ commit }, fundCd) {
    return requestApi.getFundDetail(fundCd).then(response => {
      commit('SET_FUND_DETAIL', response.data.data)
      console.log(response.data.data)
    })
  }
}

export const mutations = {
  SET_BOOKS(state, books) {
    state.books = books
  },
  SET_BOOK(state, book) {
    state.book = book
  },
  ADD_BOOK: (state, book) => {
    state.books.push(book)
  },
  DELETE_BOOK: (state, id) => {
    const index = state.books.findIndex(book => book.id === id)
    state.books.splice(index, 1)
  },
  GET_BOOK(state, book) {
    // state.book = Object.assign({}, state.book, book)
    state.book = { ...state.book, ...book }
  },
  SET_FUNDS(state, funds) {
    state.funds = funds
  },
  SET_FUND_DETAIL(state, fund) {
    state.fund = fund
  }
}
