<template>
  <table class="table">
    <thead>
      <tr>
        <Th
          v-for="(column, index) in columns"
          v-on="$listeners"
          v-bind="column"
          :key="index"
          />
          <th v-if="actions">
            操作
          </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(row,index) in data"
        :key="index"
        :ref="'row'+index">
        <td v-for="(column,index) in columns" :key="index">
          <span v-bind="column" v-html="row[column.name]" v-if="!column.component"></span>
          <component
            v-bind="column"
            v-if="column.component"
            :is="column.component"
            :value="row"
            :ref="'cell'+column.name" />
        </td>
        <td v-if="actions">
            <button
            type="button"
            class="btn btn-xs btn-link"
            v-for="(action, key) in actions"
            @click="$emit(action.value||key, row)">
            {{action.name||action}}
          </button>
        </td>
      </tr>
    </tbody>
    <tfoot>
    </tfoot>
  </table>
</template>

<script>
  import Th from './Th.vue'
  export default {
    name: 'Table',
    components: {
      Th
    },
    props: {
      data: {
        type: Array,
        default () {
          return []
        }
      },
      columns: {
        type: Array,
        default () {
          return []
        }
      },
      actions: {
        default () {
          return []
        }
      }
    }
  }
</script>
