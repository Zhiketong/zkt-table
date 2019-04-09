export default [{
  "name": "name",
  "header": "姓名",
  "sortable": true,
  "filters": "replace|hello"
}, {
  "name": "tel",
  "header": "电话",
  "sortable": true,
  "searchable": true,
  "style": {
    "color": "#0f0"
  },
  filter (value, row) {
    return value.replace(/\*/g, '$')
  }
}, {
  "name": "hobby",
  "header": "爱好",
  "filterable": true,
  "style": {
    "width": "150px"
  },
  // "options":{
  //   "key1": "钢琴",
  //   "key2": "二胡",
  // }
  "options":[
    '123', '345'
  ]
  // "options":[
  //   {
  //     label: 'lable1',
  //     value: '1'
  //   },
  //   {
  //     label: 'lable2',
  //     value: '2'
  //   }
  // ]
}, {
  "name": "actions",
  "header": "操作",
  "component": "Buttons",
  "buttons": [
      {
        name: '编辑',
        value: 'edit',
        class: 'btn-primary',
        visible (row) {
          return row.tel === '183*****6678'
        }
      },
      {
        name: '编辑2',
        value: 'edit2',
        class: 'btn-primary',
        visible (row) {
          return row.tel === '183*****6678'
        }
      },
      {
        name: ' ',
        class: 'btn-link glyphicon glyphicon-plus',
        value: 'delete'
      },
      {
        name: '更新',
        value: 'update'
      }
  ]
}]
