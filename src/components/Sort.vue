<template>
  <i class="glyphicon" :class="{
    'glyphicon-sort': sortQuery=='',
    'glyphicon-sort-by-attributes-alt': sortQuery=='desc',
    'glyphicon-sort-by-attributes': sortQuery=='asc',
    }"
    @click="setDir">
  </i>
</template>
<script>
  export default {
    name: 'TableSort',
    props: {
      field: {
        type: String,
        default: ''
      },
    },
    props: {
      sortQuery: {
        type: String,
        default: ''
      }
    },
    methods: {
      setDir () {
        let dir = this.sortQuery
        switch (this.sortQuery) {
          case '':
            dir = 'asc';
            break;
          case 'asc':
            dir = 'desc';
            break;
          case 'desc':
            dir = ''
            break;
        }
        this.$emit('sort', dir)
      }
    }
  }
</script>
