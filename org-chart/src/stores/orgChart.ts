import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { OrgNodeInterface } from '@/types'

export const useOrgChartStore = defineStore('org-chart', () => {
  const rootNode = ref<OrgNodeInterface>({
    id: 1,
    name: 'CEO',
    parent: null,
    height: 0,
    department: 'Executive',
    programmingLanguage: null,
    children: [
      {
        id: 2,
        name: 'Manager A',
        parent: 1,
        height: 1,
        department: 'Tech',
        programmingLanguage: null,
        children: [
          {
            id: 5,
            name: 'Developer A1',
            parent: 2,
            height: 2,
            department: 'Tech',
            programmingLanguage: 'JavaScript',
            children: [],
          },
          {
            id: 6,
            name: 'Developer A2',
            parent: 2,
            height: 2,
            department: 'Tech',
            programmingLanguage: 'PHP',
            children: [],
          },
        ],
      },
      {
        id: 3,
        name: 'Manager B',
        parent: 1,
        height: 1,
        department: 'Marketing',
        programmingLanguage: null,
        children: [
          {
            id: 7,
            name: 'Employee B1',
            parent: 3,
            height: 2,
            department: 'Marketing',
            programmingLanguage: null,
            children: [],
          },
          {
            id: 8,
            name: 'Employee B2',
            parent: 3,
            height: 2,
            department: 'Marketing',
            programmingLanguage: null,
            children: [],
          },
        ],
      },
    ],
  })
  const selectedNode = ref<OrgNodeInterface | null>(null)
  const maxLevels = 4

  function selectNode(node: OrgNodeInterface | null) {
    selectedNode.value = node
  }

  return { rootNode, selectedNode, maxLevels, selectNode }
})
