<template>
  <i class="glyphicon" :class="{
    'glyphicon-sort': sort&&dir=='',
    'glyphicon-sort-by-attributes-alt': sort&&dir=='desc',
    'glyphicon-sort-by-attributes': sort&&dir=='asc',
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
      sort: {
        type: Boolean,
        default: false
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
