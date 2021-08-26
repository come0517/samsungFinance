<template>
  <v-checkbox
    v-model="checkbox"
    :class="type"
    :color="color"
    :on-icon="sIcon"
    :off-icon="sIcon"
    :label="label"
    :ripple="ripple"
    hide-details
    @change="change"
  ></v-checkbox>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
    },
    checked: Boolean,
    color: {
      type: String,
      default: 'primary',
    },
    label: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: 'mdi-check',
    },
    type: {
      type: String,
      require: false,
      default: '',
    },
    ripple: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    checkbox: {
      get: function () {
        return this.checked
      },
      set(checked) {
        return checked
      }
    }
  },
  data: function () {
    return {
      sIcon: this.icon === 'circle' ? 'mdi-check-circle-outline' : 'mdi-check',
    }
  },
  methods: {
    change: function (checked) {
      this.$emit('change', this.id, checked);
    }
  }
}
</script>
