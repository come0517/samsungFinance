export default {
  transition: 'slide-bottom',
  created: function () {
    //console.log("mixin sfip created")

    if (this.commons?.name) {

      //console.log("sfip created", this.commons.name, this.$page)

      this.$page.name = this.commons.name;

      this.setNaviName(this.commons.name);
    }

  },
  methods: {
    goBack: function () {
      this.$router.go(-1)
    },
    setNaviName: function (name) {
      this.$store.commit("commons/page/setName", name)
    }
  },
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
  head() {
    return {
      title: this.commons?.name,
    }
  },
}
