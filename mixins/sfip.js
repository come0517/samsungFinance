export default {
  layout: 'sfip',
  transition: 'slide-bottom',
  created: function () {
    if (this.commons?.name) {

      console.log("sfip created", this.commons.name, this.$page)

      this.$page.name = this.commons.name;
    }
  },
  methods: {
    goBack: function () {
      this.$router.go(-1)
    }
  }
  // computed: {
  //   commons: function () {
  //       return {}
  //   },
  //   // commons: function() {
  //   //   //console.log("computed", this.name)
  //   //   return {
  //   //     name: this.name,
  //   //   }
  //   // },
  // },
  // methods: {
  //   // pageInit: function () {
  //   //   this.$emit('pageInit', 'hello!')
  //   // },
  // },
  // head: function () {
  //   return {
  //     title: this.commons.name,
  //   }
  // },
}
