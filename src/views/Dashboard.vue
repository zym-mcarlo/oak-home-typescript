<template>
  <div class="dashboard">
    <Unripe />
  </div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'
import Unripe from '@/components/Manage/Unripe.vue'

@Component({
  components: {
    Unripe
  }
})
export default class Dashboard extends Vue {
}
</script>

<style lang="stylus" scoped>
.dashboard
  background var(--highlight-color)
</style>