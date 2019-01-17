<template>
  <div id="app" class="container">
    <div class="panel panel-default">
      <Table
        :data="data"
        :columns="columns"
        :actions="actions"
        ref="table"
        @sort="_onSort"
        @search="_onSearch"
        @filter="_onFilter"
        @edit="_onEdit"
        class="table-bordered" />
    </div>
  </div>
</template>

<script>
import Table from './components'
export default {
  name: 'app',
  components: {
    Table
  },
  data () {
    return {
      data: require('./assets/data.json'),
      columns: require('./assets/columns.json'),
      actions: {
        edit: '编辑',
        delete: '删除'
      }
    }
  },
  methods: {
    _onSort (data) {
      console.log('onsort', data)
    },
    _onSearch (data) {
      console.log('onSearch', data)
    },
    _onFilter (data) {
      console.log('onFIlter', data)
    },
    _onEdit (data) {
      console.log(data)
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
