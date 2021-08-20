<template>
  <section class="sfip">

    <s-subject :subject="'List'"/>
    <p class="pl-4 fs-cap">CHECK: 가이드상 리스트 타입이 1가지로 고정됨</p>
    <v-list two-line>
      <v-list-item-group
        v-model="selectedItem"
        color="secondary"
        :ripple="false"
      >
        <template v-for="(item, index) in items">
          <v-list-item :key="item.key" :ripple="false" >
            <template v-slot:default="{ active }">
              <v-list-item-content :ripple="false" >
                <v-list-item-title :ripple="false" v-text="item.text"/>
              </v-list-item-content>
              <v-list-item-icon>
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>

            </template>
          </v-list-item>
          <v-divider
            color=""
            v-if="index < items.length - 1"
            :key="index"/>
        </template>
      </v-list-item-group>
    </v-list>

  </section>
</template>

<script>
export default {
  layout: 'sfip',
  data: () => ({
    selectedItem: 1,
    items: [
      { key: 'data-1', text: '리스트1', icon: 'mdi-chevron-right' },
      { key: 'data-2', text: '리스트2', icon: 'mdi-chevron-right' },
      { key: 'data-3', text: '리스트3', icon: 'mdi-chevron-right' },
      { key: 'data-4', text: '리스트4', icon: 'mdi-chevron-right' },
      { key: 'data-5', text: '리스트5', icon: 'mdi-chevron-right' },
      { key: 'data-6', text: '리스트6', icon: 'mdi-chevron-right' },
      { key: 'data-7', text: '리스트7', icon: 'mdi-chevron-right' },
      { key: 'data-8', text: '리스트8', icon: 'mdi-chevron-right' },
      { key: 'data-9', text: '리스트9', icon: 'mdi-chevron-right' },
    ],
  }),
}
</script>
