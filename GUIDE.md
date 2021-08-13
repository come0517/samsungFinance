# Guide

## pages, component(\*.vue)

```
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
// vuex에서 헬퍼함수인 mapState import
import { mapState } from 'vuex'
import BookCard from '@/components/BookCard.vue'

// 아래 export default{} 이하 내용도 모두 포함
</script>
```

export default{

- LifeCycle Hook : https://ko.nuxtjs.org/docs/2.x/concepts/nuxt-lifecycle

//사용할 컴포넌트 정의  
components: {  
&nbsp;&nbsp;BookCard  
},

// data 초기값 세팅  
data() {

}

// asyncData는 페이지 컴포넌트에만 제공되는 속성(page폴더 하위의 컴포넌트). 컴포넌트 로딩 전에 항상 호출됨(context를 첫번째 인자로 받음)  
// context 속성은 nuxtFramework 전반에 걸쳐 공용으로 사용되는 속성으로 store, route, params, query, env, isDev, isHMR, redirect, error, $config, $http 등의 속성 접근 가능하며 이를 사용해 일부 데이터를 가져와 컴포넌트 데이터를 반환 할 수 있음. return값은 컴포넌트의 data와 병합됨.  
asyncData({ params }) {  
&nbsp;&nbsp;return axios.get(`https://my-api/posts/${params.id}`).then((res) => {  
&nbsp;&nbsp;return { title: res.data.title };  
&nbsp;&nbsp;});  
},

// fetch는 페이지 컴포넌트 뿐만 아니라 일반 뷰 컴포넌트에서도 사용할 수 있는 데이터 호출 속성으로, 페이지가 렌더링 되기 전(컴포넌트 로딩 전)에 데이터를 스토어에 넣기위해 사용.  
// asyncData와 마찬가지로 context 객체를 첫번째 인수로 받으며, 그 데이터를 스토어에 넣을 수 있음. return값은 Promise. nuxtjs는 컴포넌트가 렌더링 되기전에 Promise가 종료되기를 기다림.  
async fetch({ store, params }) {  
&nbsp;&nbsp;const { data } = await axios.get(`https://my-api/posts/${params.id}`);  
&nbsp;&nbsp;store.commit("setPosts", data);

&nbsp;&nbsp;// store.dispatch 메소드로 store/index.js의 해당 액션 실행  
&nbsp;&nbsp;await store.dispatch('getBooks')
},

// layout directory에 정의된 특정 layout 지정  
layout: 'custom',

// 현재 페이지에 대한 HTML 헤드 태그를 설정  
head() {  
&nbsp;&nbsp;return {  
&nbsp;&nbsp;&nbsp;&nbsp;title: 'Book Listing'  
&nbsp;&nbsp;}  
},

// 템플릿({{}}) 내에 복잡한 연산이 필요할 경우 사용.  
// 메소드에 같은 함수를 정의할 수 있고, 최종 결과에 대해 두가지 접근 방식은 동일함. 다만, computed 속성은 해당 속성이 종속된 대상이 변경될 때만 함수를 실행함. 그러므로 아래 method의 예제와 같이 message가 변경되지 않는 한 reversedMessage를 아무리 요청해도 다시 계산하지 않고 캐싱된 결과 즉시 반환됨. 추가적으로 아무곳도 의존하지 않는 computed 속성의 경우 절대로 업데이트 되지 않음.  
// computed 속성은 기본적으로 getter 이지만, 필요할 때엔 setter도 정의할 수 있음.  
computed:{  
&nbsp;&nbsp;fullName: {  
&nbsp;&nbsp;&nbsp;&nbsp;// getter  
&nbsp;&nbsp;&nbsp;&nbsp;get() {  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return this.firstName + ' ' + this.lastName  
&nbsp;&nbsp;},  
&nbsp;&nbsp;&nbsp;&nbsp;// setter  
&nbsp;&nbsp;&nbsp;&nbsp;set(newValue) {  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;const names = newValue.split(' ')  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.firstName = names[0]  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.lastName = names[names.length - 1]  
&nbsp;&nbsp;&nbsp;&nbsp;}  
&nbsp;&nbsp;},

// 헬퍼함수인 mapState(getter함수를 생성)를 사용.  
&nbsp;&nbsp;mapState({  
&nbsp;&nbsp;&nbsp;&nbsp;books: state => state.books  
&nbsp;&nbsp;})  
},

// 주로 computed 사용하나, 데이터 변경에 대한 응답으로 비동기식, 시간이 많이 소요되는 작업을 수행할 때 유용. (ex) 비동기작업(api호출)을 실행하고, 이를 실행하기 위한 조건 설정 가능)  
watch:{  
&nbsp;&nbsp;async searchQuery(searchQuery) {  
&nbsp;&nbsp;&nbsp;&nbsp;if (!searchQuery) {  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.articles = []  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return  
&nbsp;&nbsp;&nbsp;&nbsp;}  
&nbsp;&nbsp;&nbsp;&nbsp;this.articles = await this.\$content('articles')  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.limit(6)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.search(searchQuery)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.fetch()  
&nbsp;&nbsp;}  
},

// computed와 달리 메소드 호출 시 렌더링을 다시 할 때마다 항상 함수를 실행.
method:{  
&nbsp;&nbsp;reversedMessage: {  
&nbsp;&nbsp;&nbsp;&nbsp;return this.message.split('').reverse().join('')  
&nbsp;&nbsp;},  
&nbsp;&nbsp;// 컴포넌트 내부에서 변이 커밋하기  
&nbsp;&nbsp;// mutations을 실행하기 위해 component의 method 영역내에 작성해야함.  
&nbsp;&nbsp;...mapMutations({  
&nbsp;&nbsp;&nbsp;&nbsp;add: 'item/increment' // this.add()를 this.$store.commit('item/increment')에 매핑  
&nbsp;&nbsp;}),  
&nbsp;&nbsp;// 컴포넌트 내부에서 디스패치 액션 사용하기 - mapActions 헬퍼 사용 (root Store 주입 필요)  
&nbsp;&nbsp;// Actions을 실행하기 위해 component의 method 영역 내에 작성해야함.   
&nbsp;&nbsp;&nbsp;&nbsp;...mapActions({  
&nbsp;&nbsp;&nbsp;&nbsp;add: 'item/increment' // this.add()를 this.$store.dispatch('item/increment')에 매핑  
&nbsp;&nbsp;})  
},

// 부모컴포넌트에서 자식컴포넌트로 데이터 전달 시 사용.  
props{  
&nbsp;&nbsp; book: Object  
},

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

// 옵션 pages/ 을 설정하여 디렉터리 이름 변경 가능  
dir: {  
&nbsp;&nbsp;pages: 'routes'  
},

## store

- vuex (상태관리 라이브러리이자 패턴의 의미): https://joshua1988.github.io/vue-camp/vuex/concept.html#%E1%84%87%E1%85%B2%E1%84%8B%E1%85%A6%E1%86%A8%E1%84%89%E1%85%B3-%E1%84%89%E1%85%A9%E1%84%80%E1%85%A2
- 각각 컴포넌트 (dispatch) -> actions(commit) -> mutations (state) -> state -> 모든 컴포넌트에서 활용

// 프로젝트에서 공통으로 사용할 변수를 정의. 프로젝트 내의 모든 곳에서 참조 및 사용 가능.  
export const state = () => ({  
&nbsp;&nbsp;books: [],  
&nbsp;&nbsp;book: {},  
&nbsp;&nbsp;funds: [],  
&nbsp;&nbsp;fund: {}  
})

// mutation을 실행시키는 역할. 비동기 로직만 처리할뿐 state(Data)를 직접 변경하지 않음.  
// 화면단에서 store.dispatch('함수명', '전달인자', {root:true}) 로 실행시킴  
export const actions = {  
&nbsp;&nbsp;getBooks({ commit }) {  
&nbsp;&nbsp;&nbsp;&nbsp;return this.\$axios.get('books').then(response => {  
&nbsp;&nbsp;&nbsp;&nbsp;// commit('함수명', '전달인자') 로 mutation 실행  
&nbsp;&nbsp;&nbsp;&nbsp;commit('SET_BOOKS', response.data)  
&nbsp;&nbsp;&nbsp;&nbsp;})  
&nbsp;&nbsp;}  
}

// actions가 동기로직인 mutation을 호출하여 state(Data)를 변경함.  
export const mutations = {  
&nbsp;&nbsp;SET_BOOKS(state, books) {  
&nbsp;&nbsp;state.books = books  
&nbsp;&nbsp;}  
}

## 참고

// ignorePrefix 속성[기본 '-' (ex)store/-foo.js)]  
Pages/, layouts/, middleware/ 또는 store/에 있는 모든 파일은 파일 이름이 에서 지정한 접두사로 시작하는 경우 빌드하는 동안 무시

## directory 구조

- assets : LESS, SASS, JS 같은 컴파일되지 않은 에셋들을 정의.
- components : component 정의. page가 컴포넌트의 모임이므로, 역시 데이터 기준으로 디렉터리 생성.
- middleware : 애플리케이션의 미들웨어 정의. 페이지 레이아웃이 렌더링 되기 전에 실행할 사용자 정의함수 정의 가능.
- layouts : layout 정의.
- pages : view page 정의. 페이지별 디렉터리 생성하되, edit, delete 페이지 별도 디렉터리 생성(ex) \_id.vue - id값별 페이지 생성)
- plugins : plugin 정의.
- static : 정적파일 정의.
- store : Vuex Store 정의. 데이터 기준으로 디렉터리 생성(ex) book, fund...)
