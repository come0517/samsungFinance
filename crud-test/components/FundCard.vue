<template>
  <v-container>
    <v-row dense>
      <v-col cols="12">
        <v-card>
          <div class="d-flex flex-no-wrap justify-space-between">
            <nuxt-link :to="'/fund/' + fund.fundCd">
              <div>
                <v-card-title class="text-h6" v-text="fund.fundNm"></v-card-title>

                <v-card-subtitle v-text="fund.fundClassTypeName"></v-card-subtitle>

                <v-spacer></v-spacer>

                <v-card-subtitle v-text="fund.yield_3m"></v-card-subtitle>
              </div>

              <!-- <v-avatar class="ma-3" size="125" tile>
              <v-img :src="item.src"></v-img>
              </v-avatar>-->
            </nuxt-link>
            <span class="float-right">
              <nuxt-link :to="'/fund/edit/' + fund.fundCd">
                <v-btn text color="amber darken-3">
                  Edit
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>
              </nuxt-link>
              <nuxt-link :to="'/fund/delete/' + fund.fundCd">
                <v-btn text color="red darken-3">
                  Delete
                  <v-icon>mdi-delete</v-icon>
                </v-btn>
              </nuxt-link>
            </span>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'FundCard',
  props: {
    // eslint-disable-next-line vue/require-default-prop
    fund: Object
  }
}
</script>
