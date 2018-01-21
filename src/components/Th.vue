<template>
  <th>{{header}}</th>
</template>
<script>
  export default {
    name: 'Th',
    props: {
      header: {
        type: String,
        default: ''
      }
    }
  }
</script>
