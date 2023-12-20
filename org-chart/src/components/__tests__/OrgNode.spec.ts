import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import OrgNode from '@/components/OrgNode.vue'
import { createPinia, setActivePinia } from 'pinia'

describe('OrgNode', () => {
  beforeEach(() => {
    const pinia = createPinia()
    setActivePinia(pinia)
  })

  it('renders properly', () => {
    const node = {
      id: 1,
      name: 'CEO',
      parent: null,
      height: 0,
      department: 'Executive',
      programmingLanguage: null,
      children: [],
    }
    const wrapper = mount(OrgNode, { props: { node, level: 0 } })
    expect(wrapper.text()).toContain('CEO')
  })
})
