import Vue from 'vue'
import VTooltip from 'v-tooltip'

Vue.use(VTooltip, {
  popover: {
    defaultPlacement: 'top',
    defaultTrigger: 'hover',
  },
})
