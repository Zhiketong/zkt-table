# 直客通表格组件

> 直客通表格组件,用于简单表格

## Usage

```html
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
      data: [
        {"name":"赵伟","tel":"156*****1987","hobby":"钢琴、书法、唱歌","address":"上海市黄浦区金陵东路569号17楼"},
        {"name":"李伟","tel":"182*****1538","hobby":"钢琴、书法、唱歌","address":"上海市奉贤区南桥镇立新路12号2楼"},
        {"name":"孙伟","tel":"161*****0097","hobby":"钢琴、书法、唱歌","address":"上海市崇明县城桥镇八一路739号"},
        {"name":"周伟","tel":"197*****1123","hobby":"钢琴、书法、唱歌","address":"上海市青浦区青浦镇章浜路24号"},
        {"name":"吴伟","tel":"183*****6678","hobby":"钢琴、书法、唱歌","address":"上海市松江区乐都西路867-871号"}
      ],
      columns: [{
        "name": "name",
        "header": "姓名",
        "sortable": true
      }, {
        "name": "tel",
        "header": "电话",
        "searchable": true,
        "style": {
          "color": "#0f0"
        }
      }, {
        "name": "hobby",
        "header": "爱好",
        "filterable": true,
        "style": {
          "width": "150px"
        },
        "options": [
          {
            "label": "钢琴、书法、唱歌",
            "value": "钢琴、书法、唱歌"
          }
        ]
      }, {
        "name": "actions",
        "header": "操作",
        "component": "Buttons",
        "buttons": {
          "edit": "编辑",
          "delete": "删除"
        }
      }]
  },
  methods: {
    _onSort (data) {
      console.log('onsort', data)
    },
    _onSearch (data) {
      console.log('onSearch', data)
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

```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
