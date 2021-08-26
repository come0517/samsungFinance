<template>
   <div class="agree-wrap">
      <v-checkbox
        v-model="isCheckAll"
        class="title"
        :label="group.label"
        color="primary"
        :ripple="ripple"
        on-icon="mdi-check-circle-outline"
        off-icon="mdi-check-circle-outline"
        @click="toggleAll"
        hide-details
      ></v-checkbox>

      <div class="agree-box">
        <SCheckbox v-for="item in items"
          :id="item.key"
          :key="item.key"
          :label="item.label"
          :checked="item.checked"
          @change="updateCheckAll"
        />
      </div>
    </div>
</template>


<style lang="scss" scope>
.agree-box {
  .v-label {
    font-size: 12px;
    line-height: 18px;
  }
  .v-icon {
    font-size: 16px;
    line-height: 18px;
  }
}
.title .v-label {
  font-size: 13px;
  line-height: 20px;
  color: #212121 !important;
  font-weight: 600;
}
</style>


<script>
export default {
  props: {
    group: Object,
    items: {
      type: Array
    },
  },
  // computed: {
  //   checkAll: function () {
  //     return Object.values(this.items).every(item => item.checked)
  //   }
  // },
  // computed: {
  //   checkAll: function () {
  //     console.log(Object.values(this.items).every(function (item) {
  //       console.log(`${item.key} = ${item.checked}`)
  //       return item.checked
  //     }));
  //     return Object.values(this.items).every(item => item.checked)
  //   }
  // },
  data: function () {
    return {
      isCheckAll: false,
      checkedItems: [],
      checked: [],
      ripple: false,
    }
  },
  methods: {
    // checkAll: function () {
    //   console.log("checkall")
    // },
    updateCheckAll: function (id, checked) {
      this.items[this.items.findIndex(item => item.key === id)].checked = checked;
      this.isCheckAll = Object.values(this.items).every(item => item.checked)
    },
    toggleAll: function(obj) {
      this.items.forEach(item => item.checked = this.isCheckAll);
    },
    // printChecked: function () {
    //   this.selectedItems = "";
    //   for (let key in this.items) {
    //     this.selectedItems += this.items[key]+", ";
    //   }
    // },
    // toggleAgreeAll: function () {
    //   let checked = this.agreeAll;
    //   Object.values(this.agree).forEach(function (item) {
    //     item = checked;
    //   })
    // }
  },
}
</script>
