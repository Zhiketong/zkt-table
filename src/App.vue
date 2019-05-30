<template>
  <div id="app" class="container">
    <div class="panel panel-default">
      <div class="panel-heading">
        <button class="btn btn-default" @click="params = {};sortParams={}">清除参数</button>
      </div>
      <div class="panel-body">
        <Table
          :data="data"
          :columns="columns"
          :beforeColumns="beforeColumns"
          :selectable="true"
          :loading="loading"
          :searchParams="params"
          :sortParams="sortParams"
          ref="table"
          @sort="_onSort"
          @search="_onSearch"
          @edit="_onEdit"
          @select="_onSelect"
          class="table-bordered" />
      </div>
    </div>
  </div>
</template>

<script>
import Table from './components'
import columns from './assets/columns'
import beforeColumns from './assets/beforeColumns'
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
      beforeColumns,
      loading: false,
      params: {
        tel: '156$$$$$1987',
        hobby: '234'
      },
      sortParams: {
        name: 'asc',
        tel: 'desc'
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
      }, 1000)
  }
}
</script>

<style>
@import "~bootstrap/dist/css/bootstrap.css";
</style>
