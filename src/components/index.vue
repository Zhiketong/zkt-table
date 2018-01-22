<template>
  <table class="table">
    <thead>
      <tr>
        <Th
          v-for="(column, index) in columns"
          :key="index"
          v-bind="{
            header:column.header,
            sort: column.sort
          }"
          @sort="_onSort" />
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(row,index) in data"
        :key="index"
        :ref="'row'+index">
        <component
          v-for="(column,index) in columns"
          :is="column.component||'Td'"
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
    },
    methods: {
      _onSort (dir) {
        this.$emit('sort', dir)
      }
    },
    register (Component) {
      var components = this.components
      if (components[Component.name]) return
      components[Component.name] = Component
    }
  }
</script>
