<template>
  <i class="glyphicon" :class="{
    'glyphicon-sort': dir=='',
    'glyphicon-sort-by-attributes-alt': dir=='desc',
    'glyphicon-sort-by-attributes': dir=='asc',
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
      }
    },
    data () {
      return {
        dir: ''
      }
    },
    methods: {
      setDir () {
        switch (this.dir) {
          case '':
            this.dir = 'asc';
            break;
          case 'asc':
            this.dir = 'desc';
            break;
          case 'desc':
            this.dir = ''
            break;
        }
        this.$emit('sort', this.dir)
      }
    }
  }
</script>
