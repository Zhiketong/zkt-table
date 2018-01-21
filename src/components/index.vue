<template>
  <table class="table">
    <thead>
      <tr>
        <Th
          v-for="(column, index) in columns"
          :key="index"
          v-bind="{
            header:column.header
          }" />
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(row,index) in data"
        :key="index"
        :ref="'row'+index">
        <Td
          v-for="(column,index) in columns"
          :key="index"
          v-bind="column"
          :data="row"
          :ref="'cell'+column.name" />
      </tr>
    </tbody>
    <tfoot>
    </tfoot>
  </table>
</template>

<script>
  import Td from './Td.vue'
  import Th from './Th.vue'
  export default {
    name: 'Table',
    components: {
      Td,
      Th
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
