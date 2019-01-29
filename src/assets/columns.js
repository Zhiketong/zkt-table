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
