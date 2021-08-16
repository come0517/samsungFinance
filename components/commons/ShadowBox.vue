<template>
    <v-card class="shadow-box">
        <slot v-if="!hasContent"/>
        <v-card-title class="headline" v-if="title">
          {{ title }}
        </v-card-title>
        <v-card-text>
          <v-list>
            <v-list-item
              v-for="(item, i) in content"
              :key="i"
              :to="item.to"
              router
              exact
            >
              <v-list-item-action v-if="options.icon">
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title v-text="item.title" />
              </v-list-item-content>
            </v-list-item>
          </v-list>

        </v-card-text>
    </v-card>
</template>

<style>
.shadow-box.v-card {
    box-shadow: 0 2px 10px 0 rgba(0,0,0,0.12) !important;
}
</style>

<script>
export default {
    name: 'ShadowBox',
    props: {
      data: Object,
      required: false,
    },
    data: function () {
      return {
        title: this.data?.title,
        hasContent: this.data?.items.length > 0 ? true : false,
        content: this.data?.items,
        options: this.data?.options,
      }
    },
}
</script>
