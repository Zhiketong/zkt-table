<template>
  <td>{{data[column.name]}}</td>
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
      column: {
        type: Object,
        default () {
          return {
          }
        }
      }
    }
  }
</script>
