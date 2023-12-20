<script setup lang="ts">
import { useOrgChartStore } from '@/stores/orgChart'
import type { OrgNodeInterface } from '@/types'
import IconGoUp from '@/components/icons/IconGoUp.vue'

import { computed } from 'vue'
const store = useOrgChartStore()

const props = defineProps({
  node: {
    type: Object as () => OrgNodeInterface,
    required: true,
  },
  level: {
    type: Number,
    required: true,
  },
})

const selectNodeIsRoot = computed(() => store.selectedNode === store.rootNode)
const selectNodeIsCurrent = computed(() => store.selectedNode === props.node)
const hasChildren = computed(
  () => props.node.children.length && props.level <= store.maxLevels,
)
</script>

<template>
  <Transition name="fade">
    <div class="org-node" :key="node.id">
      <button
        class="org-node-go-up"
        v-if="level === 0"
        :disabled="selectNodeIsRoot"
        @click="store.selectNode(store.rootNode)"
      >
        <IconGoUp></IconGoUp>
      </button>
      <div
        class="org-node-content"
        @click="store.selectNode(node)"
        :class="{
          'pointer-none': selectNodeIsCurrent,
          'has-children': hasChildren,
        }"
      >
        <div class="org-node-content-department">
          <small>{{ node.department }}</small>
        </div>
        <div class="org-node-content-name">
          {{ node.name }}
        </div>
        <div class="org-node-content-lang" v-if="node.programmingLanguage">
          <small>{{ node.programmingLanguage }}</small>
        </div>
      </div>
      <div class="org-children" v-if="hasChildren">
        <OrgNode
          v-for="childNode in node.children"
          :key="childNode.id"
          :node="childNode"
          :level="level + 1"
        >
        </OrgNode>
      </div>
    </div>
  </Transition>
</template>
