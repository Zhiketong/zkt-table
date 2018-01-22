<template>
  <th>
    {{header}}
    <Sort v-bind="$props" />
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
    }
  }
</script>
