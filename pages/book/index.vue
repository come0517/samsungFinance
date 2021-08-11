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
  /*
  // 컴포넌트 로딩 전에 항상 호출됨(context를 인자로 받음)
  asyncData(context) {
    return { name: 'World' }
  },
  */

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

  /*
   
  method: {
    // 컴포넌트 내부에서 변이 커밋하기
    // mutations을 실행하기 위해 component의 method 영역내에 작성해야
    ...mapMutations({
      add: 'item/increment' // this.add()를 this.$store.commit('item/increment')에 매핑
    }),
    // 컴포넌트 내부에서 디스패치 액션 사용하기 - mapActions 헬퍼 사용 (root Store 주입 필요)
    // Actions을 실행하기 위해 component의 method 영역 내에 작성해야
    ...mapActions({
      add: 'item/increment' // this.add()를 this.$store.dispatch('item/increment')에 매핑
    })
  },
  

  */

  // 현재 페이지에 대한 특정 태그 설정
  /*
  head() {
    return {
      title: 'Book Listing'
    }
  },
  // layout directory에 정의된 layout 지정
  layout : 'blog',
  
  // false로 설정 시 페이지가 자동으로 호출되지 않음 (nuxt.config.js 에도 세팅되어 있어야만 적용됨)
  loading : false,

  // 페이지에 대한 특정 전환을 정의 (마치 네이티브에서 페이지 이동이 일어나듯 자연스러운 UI를 보여줌)
  transition: 'fade',

  // 페이지 렌더링 전에 맨위로 스크롤 하도록 설정
  scrollToTop: true,

  // 미들웨어는 페이지 렌더링 전에 실행할 사용자 정의할 수 있음 (validation, auth...)
  middleware: 'auth',

  // 쿼리 문자열에 대한 감시자 설정. 정의된 문자열 변경 시 모든 구성요소 메서드가 호출됨(asyncData, fetch(context), ...). 성능향상을 위해 기본적으로 비활성화.
  watchQuery: ['page'],

  # 참고
  // ignorePrefix 속성[기본 '-' (ex)store/-foo.js)]
  Pages/, layouts/, middleware/ 또는 store/에 있는 모든 파일은 파일 이름이 에서 지정한 접두사로 시작하는 경우 빌드하는 동안 무시

  // 옵션 pages/ 을 설정하여 디렉터리 이름 변경 가능
  dir: {
    pages: 'routes'
  },

* LifeCycle Hook (설명 보다는 해당 링크 참조...)
 - https://blog.martinwork.co.kr/vuejs/2018/02/05/vue-lifecycle-hooks.html
 - https://junho94.tistory.com/17?category=846133
1. Creation : 컴포넌트 초기화 단계
  // 인스턴스가 방금 초기화 된 후 데이터 관찰 및 이벤트/감시자 설정 전에 동기적으로 호출
  // 모든 훅 중에 가장 먼저 실행되는 훅. 아직 data와 event가 세팅되지 않은 시점
  beforeCreate(){
    //can't use Data(this.title ...), events(vm.$on, vm.$once, vm.$off, vm.$emit)
  },

  // 인스턴스가 작성된 후 동기적으로 호출 됨.
  // data와 event 활성화되어 접근 가능. but, 템플릿과 가상돔은 mount 및 rendering 되지 않은 상태
  created(){
    //can use Data(this.title, this.titleComputed ...), events(vm.$on, vm.$once, vm.$off, vm.$emit)
    //don't use $el ($el => Vue Instance가 관리하는 root DOM element)
  },

2. Mounting: DOM 삽입단계. 초기 렌더링 직전에 컴포넌트에 직접 접근가능. 서버렌더링에서는 지원X
  but, 컴포넌트 초기에 세팅되어야할 데이터 fetch는 created 단계를 사용하는 것이 낫다.

  // 템플릿과 렌더 함수들이 컴파일된 후에 첫 렌더링이 일어나기 직전에 실행. server side rendering 시에는 호출되지 않음
  beforeMount(){
    console.log(`this.$el doesn't exist yet, but it will soon!`)
  },

  // 컴포넌트, 템플릿, 렌더링된 돔에 접근가능. 모든 하위 컴포넌트가 마운트된 상태를 보장하지 않음. server side rendering 시에는 호출되지 않음
  // 참고 : Created훅은 부모->자식의 순서로 실행되지만 mounted는 그렇지 않다. 다른 식으로 말하면 부모는 mounted훅을 실행하기 전에 자식의 mounted훅이 끝나기를 기다린다.
     - https://medium.com/@brockreece/vue-parent-and-child-lifecycle-hooks-5d6236bd561f
  mounted() {
    console.log(this.$el.textContent) // can use $el
    this.$nextTick(function () {
      // 모든 화면이 렌더링된 후 실행합니다. (this.$nextTick 사용 시 전체가 렌더링된 상태를 보장)
    })
  },

3. Updating : Diff 및 리렌더링 단계. 컴포넌트에서 사용되는 반응형 속성들이 변경되거나 어떤 이유로 재 렌더링이 발생되면 실행됨. server side rendering 시에는 호출되지 않음
  // 데이터 변경 시 가상 DOM 리렌더링과 패치가 이뤄지기 전에 호출. 이 훅에서 더 많은 상태변경 수행 가능하며, 추가로 리랜더링 트리거하지 않음.
  beforeUpdate(){

  },
  // 데이터가 변경되어 가상 DOM이 리렌더링되고 패치되면 호출됨. DOM 업데이트된 상태가 되어 이 훅에서 DOM 종속적인 연산 가능하나,
  대부분의 경우 무한루프 발생할 수 있으므로, 상태변화에 반응하기 위해 computed 또는 watch 사용하는 것이 좋음.
  updated(){
    this.$nextTick(function () {
      // mounted와 마찬가지로, 모든 자식 컴포넌트가 리랜더링 상태를 보장하지 않으나, this.$nextTick 사용 시 전체가 업데이트된 상태 보장함.
    })
  },

4. Destruction: 해체단계
  // vue 인스턴스가 제거되기 전에 호출. 이 단계에서 인스턴스는 아직 완벽하게 작동합니다. server side rendering 시에는 호출되지 않음
  beforeDestroy(){

  },

  // vue 인스턴스가 제거된 후 호출.이 훅이 호출되면 Vue 인스턴스의 모든 디렉티브가 바인딩 해제 되고 모든 이벤트 리스너가 제거되며 모든 하위 Vue 인스턴스도 삭제됨. server side rendering 시에는 호출되지 않음
  destroyed(){

  },
5. 컴포넌트들을 전환할 때 가끔 성능상의 이유로 상태를 유지하거나 재-렌더링을 피하길 원하는 경우.(ex) 캐시)
  각각 keep-alive 컴포넌트 활성/비활성화 될때 호출됨.
 activated(){

 },
 deactivated(){

 }
*/
}
</script>
