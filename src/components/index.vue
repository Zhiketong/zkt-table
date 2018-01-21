<template>
  <table class="table">
    <thead>
    </thead>
    <tbody>
      <tr
        v-for="(row,index) in data"
        :key="index"
        :ref="'row'+index">
        <Td
          v-for="(column,index) in columns"
          :key="index"
          :data="row"
          :column="column"
          :ref="'cell'+column.name" />
      </tr>
    </tbody>
    <tfoot>
    </tfoot>
  </table>
</template>

<script>
  import Td from './Td.vue'
  export default {
    name: 'Table',
    components: {
      Td
    },
    props: {
      data: {
        type: Array,
        default () {
          return []
        }
      },
      columns: {
        type: Array,
        default () {
          return []
        }
      }
    }
  }
</script>
