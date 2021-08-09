import requestApi from '~/api/requestApi.js'

// vuex : 각각 컴포넌트 (dispatch)--> actions (commit)--> mutations (state)--> state -->모든 컴포넌트에서 활용

// 프로젝트에서 공통으로 사용할 변수를 정의. 프로젝트 내의 모든 곳에서 참조 및 사용 가능.
export const state = () => ({
  books: [],
  book: {},
  funds: [],
  fund: {}
})

// mutation을 실행시키는 역할. 비동기 처리.
// 화면단에서 store.dispatch('함수명', '전달인자', {root:true}) 로 실행시킴
export const actions = {
  getBooks({ commit }) {
    return requestApi.getBooks().then(response => {
      // commit('함수명', '전달인자') 로 mutation 실행
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

// state를 변경시는 역할. 동기처리
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
