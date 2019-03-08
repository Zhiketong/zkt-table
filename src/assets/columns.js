export default [{
  "name": "name",
  "header": "姓名",
  "sortable": true,
  "filters": "replace|hello"
}, {
  "name": "tel",
  "header": "电话",
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
  "options":{
    "key1": "钢琴"
  }
}, {
  "name": "actions",
  "header": "操作",
  "component": "Buttons",
  "buttons": [
      {
        name: '编辑',
        value: 'edit',
        visible (row) {
          return row.tel === '183*****6678'
        }
      },
      {
        name: ' ',
        class: 'glyphicon glyphicon-plus',
        value: 'delete'
      }
  ]
}]
