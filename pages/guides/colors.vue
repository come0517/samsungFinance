<template>
  <section class="sfip">
    
    <h1>Colors</h1>
    <v-divider class="mb-5"/>

    <v-avatar color="primary" size="56" tile><span class="white--text text-h5">강조</span></v-avatar>
    <v-avatar color="increase" size="56" tile><span class="white--text text-h5">상승</span></v-avatar>
    <v-avatar color="decrease" size="56" tile><span class="white--text text-h5">하락</span></v-avatar>
    <v-avatar color="warning" size="56" tile><span class="white--text text-h5">경고</span></v-avatar>
    <v-avatar color="error" size="56" tile><span class="white--text text-h5">오류</span></v-avatar>
  </section>
</template>

<script>
  export default {
      layout: 'sfip',
  }
</script>