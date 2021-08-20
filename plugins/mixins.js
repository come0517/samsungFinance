import Vue from "vue";
import LayoutSfip from "~/mixins/sfip";

Vue.mixin(LayoutSfip);

let overrideRipple = {
  directives:{
    ripple:{
      inserted: ()=> {
        //console.log("Ripple overrided")
      }
    }
  }
 }
 Vue.mixin(overrideRipple);
