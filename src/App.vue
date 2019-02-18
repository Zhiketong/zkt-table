<template>
  <div id="app" class="container">
    <div class="panel panel-default">
      <Table
        :data="data"
        :columns="columns"
        :selectable="true"
        :loading="loading"
        :searchParams="params"
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
import data from './assets/data'

export default {
  name: 'app',
  components: {
    Table
  },
  data () {
    return {
      data: [], //require('./assets/data.json'),
      columns,
      loading: false,
      params: {
        tel: '156$$$$$1987'
      }
    }
  },
  methods: {
    _onSort (key, value) {
      console.log('onsort', key, value)
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
    this.loading = true
    setTimeout(() => {
        this.loading = false
        this.data = data
      }, 3000)
  }
}
</script>

<style>
@import "~bootstrap/dist/css/bootstrap.css";
</style>
