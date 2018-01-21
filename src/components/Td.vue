<template>
  <td>{{data[field]}}</td>
</template>

<script>
  export default {
    name: 'Td',
    props: {
      data: {
        type: Object,
        default () {
          return {}
        }
      },
      field: {
        type: String,
        default: ''
      }
    }
  }
</script>
