import Vue from 'vue'
import VCalendar from 'v-calendar'

Vue.use(VCalendar, {
  locales: {
    'de-CH': {
      firstDayOfWeek: 2,
      masks: {
        L: 'DD-MM-YYYYY'
      }
    }
  }
})
