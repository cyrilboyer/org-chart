<script setup lang="ts">
import OrgNode from '@/components/OrgNode.vue'
import { useOrgChartStore } from '@/stores/orgChart'
import { ref, watchEffect } from 'vue'
const store = useOrgChartStore()

const mainRef = ref<HTMLElement | null>(null)

watchEffect(() => {
  if (!store.selectedNode) {
    store.selectNode(store.rootNode)
  }

  //if is mobile
  if (window.outerWidth <= 1024 && mainRef.value) {
    mainRef.value.scrollLeft = 0
  }
})
</script>

<template>
  <header>
    <div class="org-legend">
      <h1>Org Chart</h1>
      <p>
        Welcome to this page.<br />To interact with the chart, simply click on
        any node you wish to explore in more detail.<br />If you need to return
        to a previous view, use the arrow button located at the top of the
        chart.
      </p>
      <small class="department"> Department </small>
      <small class="prog-language"> Programming language </small>
    </div>
  </header>
  <main ref="mainRef">
    <OrgNode
      v-if="store.selectedNode"
      :node="store.selectedNode"
      :level="0"
    ></OrgNode>
  </main>
</template>
