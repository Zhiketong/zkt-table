<template>
  <div id="app" class="container">
    <div class="panel panel-default">
      <Table
        :data="data"
        :columns="columns"
        :selectable="true"
        ref="table"
        @sort="_onSort"
        @search="_onSearch"
        @edit="_onEdit"
        @select="_onSelect"
        class="table-bordered" />
    </div>
  </div>
</template>

<script>
import Table from './components'
import columns from './assets/columns'

export default {
  name: 'app',
  components: {
    Table
  },
  data () {
    return {
      data: [], //require('./assets/data.json'),
      columns
    }
  },
  methods: {
    _onSort (data) {
      console.log('onsort', data)
    },
    _onSearch (key, value) {
      console.log('onSearch', key, value)
    },
    _onEdit (data) {
      console.log(data)
    },
    _onSelect (items) {
      console.log(items)
    }
  },
  mounted () {
    console.log(this.$refs.table)
  }
}
</script>

<style>
@import "~bootstrap/dist/css/bootstrap.css";
</style>
