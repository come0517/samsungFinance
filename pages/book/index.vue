<template>
  <div>
    <h1>Book wish list:</h1>
    <v-divider></v-divider>
    <br>
    <BookCard v-for="(book, index) in books" :key="index" :book="book" :data-index="index"/>
    <div v-if="!books">
      <nuxt-link to="/book/create">
        <p
          style="color: red; font-size: 1.5rem; font-weight: normal; font-style: italic"
        >Your list is empty, add some books.</p>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import BookCard from '@/components/BookCard.vue'

export default {

  // 사용할 컴포넌트 정의
  components: {
    BookCard
  },

  // 페이지 렌더링되기 전에 데이터를 스토어에 넣기 위해서 사용. 컴포넌트의 데이터를 세팅하지 않는 점을 빼고는 data 메서드와 비슷함.
  // 페이지 컴포넌트가 로딩되기 전에 매번 호출.
  async fetch({ store, error }) {
    try {
      await store.dispatch('getBooks')
    } catch (e) {
      error({
        statusCode: 500,
        message: 'Error'
      })
    }
  },

  // state에 접근하기 위해 component의 computed내에 작성
  computed: mapState({
    books: state => state.books
  })
}
</script>
