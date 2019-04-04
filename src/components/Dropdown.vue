<template>
  <div class="dropdown-menu th-search well well-sm">
      <form class="popover-form"  @submit.prevent="submit">
        <div class="form-group" v-if="filterable">
          <select class="form-control" v-model="value" @change="submit">
            <option value="">请选择</option>
            <option v-for="(option, key) in options" :value="key">{{option.label||option}}</option>
          </select>
        </div>
        <div class="form-group" v-if="searchable">
          <div class="input-group">
            <input type="text" class="form-control input-sm" v-focus v-model="value">
            <span class="input-group-btn">
              <button class="btn btn-default btn-sm">
                <i class="glyphicon glyphicon-search"></i>
              </button>
            </span>
          </div>
        </div>
      </form>
  </div>
</template>
<script>
  export default {
    name: 'Dropdown',
    directives: {
      focus: {
        // 自动获取焦点
        inserted (el) {
          el.focus()
        }
      }
    },
    props: {
      filterable: {
        type: Boolean,
        default: false
      },
      searchable: {
        type: Boolean,
        default: false
      },
      options: {
        default () {
          return []
        }
      }
    },
    data () {
      return {
        value: ''
      }
    },
    methods: {
      submit () {
        this.$emit('submit', this.value)
      }
    }
  }
</script>
<style>
.th-search {
  display: block;
  margin-top: -1px;
}
</style>
