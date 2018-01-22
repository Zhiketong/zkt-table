<template>
  <th>
    {{header}}
    <Sort v-bind="$props" @sort="_onSort" />
  </th>
</template>
<script>
  import Sort from './Sort.vue'
  export default {
    name: 'Th',
    components: {
      Sort
    },
    props: {
      header: {
        type: String,
        default: ''
      },
      field: {
        type: String,
        default: ''
      },
      sort: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      _onSort (dir) {
        this.$emit('sort', dir)
      }
    }
  }
</script>
