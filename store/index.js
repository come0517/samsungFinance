import Vuex from 'vuex'
import Vue from 'vue'

import largeSidebar from './modules/largeSidebar'
import compactSidebar from './modules/compactSidebar'
//import chat from './modules/chat'
import themeConfig from './modules/themeConfig'
import authData from './modules/authData'
import invoice from './modules/invoice'
import cart from './modules/cart'
import verticalSidebar from './modules/verticalSidebar'
//import scrumboard from './modules/scrumboard'

// Load Vuex
Vue.use(Vuex)

// Create store
export const store = new Vuex.Store({
  modules: {
    largeSidebar,
    compactSidebar,
    //chat,
    themeConfig,
    authData,
    invoice,
    cart,
    verticalSidebar,
    //scrumboard,
  },
})


//import requestApi from '../api/requestApi.js'

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
    return this.$axios.get('books').then(response => {
      // return requestApi.getBooks().then(response => {
      // commit('함수명', '전달인자') 로 mutation 실행
      commit('SET_BOOKS', response.data)
      // console.log(response.data)
    })
  },
  getBook({ commit }, id) {
    return this.$axios.get('/books/' + id).then(response => {
      //return requestApi.getBook(id).then(response => {
      commit('SET_BOOK', response.data)
    })
  },
  addBook({ commit }, book) {
    return this.$axios.post('/books', book).then(response => {
      commit('ADD_BOOK', book)
    })
  },
  deleteBook({ commit }, id) {
    return this.$axios.delete('/books/' + id).then(response => {
      commit('DELETE_BOOK')
    })
  },
  putBook({ state }, id) {
    this.$axios.put('/books/' + id, state.book)
  },
  getFunds({ commit }) {
    return this.$axios
      .post('http://localhost:8080/product/fund/search')
      .then(response => {
        commit('SET_FUNDS', response.data.data)
        console.log(response.data.data)
      })
  },
  getFundDetail({ commit }, fundCd) {
    return this.$axios
      .post('http://localhost:8080/product/fund/detail/', {
        fundCd: fundCd,
        searchType: 'code'
      })
      .then(response => {
        commit('SET_FUND_DETAIL', response.data.data)
        console.log(response.data.data)
      })
  },
  addFund({ commit }, fund) {
    console.log(fund)
    return this.$axios
      .post('http://localhost:8080/product/fund/create', fund)
      .then(response => {
        //return requestApi.createFund(fund).then(response => {
        commit('ADD_FUND', fund)
        //})
      })
  },
  putFund({ state }, fundCd) {
    this.$axios
      .post('http://localhost:8080/product/fund/create', state.fund)
      .then(response => {
        //return requestApi.createFund(fund).then(response => {
        //commit('UPDATE_FUND', response.data.data)
        //})
      })
  },
  deleteFund({ commit }, fundCd) {
    return this.$axios
      .post('http://localhost:8080/product/fund/delete', {
        fundCd: fundCd
      })
      .then(response => {
        commit('DELETE_FUND')
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
  },
  ADD_FUND: (state, fund) => {
    console.log(state.funds)
    state.funds.push(fund)
  },
  GET_FUND(state, fund) {
    state.fund = { ...state.fund, ...fund }
  },
  UPDATE_FUND(state, fund) {
    state.fund = fund
  },
  DELETE_FUND: (state, fundCd) => {
    const index = state.funds.findIndex(fund => fund.fundCd === fundCd)
    state.funds.splice(index, 1)
  }
}
