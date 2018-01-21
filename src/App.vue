<template>
  <div id="app" class="container">
    <div class="panel panel-default">
      <Table
        :data="data"
        :columns="columns"
        ref="table"
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
      columns: require('./assets/columns.json')
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
