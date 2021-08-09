<template>
  <div class="-shadow">
    <nuxt-link :to="'/book/' + book.id">
      <h4 class="title">
        {{ book.title }}
        <v-icon>mdi-slash-forward</v-icon>
        {{ book.author }}
      </h4>
    </nuxt-link>
    <span class="float-right">
      <nuxt-link :to="'/book/edit/' + book.id">
        <v-btn text color="amber darken-3">
          Edit
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
      </nuxt-link>
      <nuxt-link :to="'/book/delete/' + book.id">
        <v-btn text color="red darken-3">
          Delete
          <v-icon>mdi-delete</v-icon>
        </v-btn>
      </nuxt-link>
    </span>
    <br>
  </div>
</template>
<script>
export default {
  name: 'BookCard',

  // 상위컴포넌트인 index.vue에서 받은 book 데이터를 prop를 정의해서 받아옴
  props: {
    // eslint-disable-next-line vue/require-default-prop
    book: Object
  }
}
</script>

<style scoped>
div {
  padding: 20px;
  margin-bottom: 24px;
  transition: all 0.2s linear;
  cursor: pointer;
}
div:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
.title {
  margin: 0;
  color: black;
}
a {
  text-decoration: none;
}
</style>
