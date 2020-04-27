<template>
  <section id="rent" class="pt-16 lg:pt-20 xl:pt-32">
    <div class="container">
      <h2 class="text-4xl lg:text-6xl font-bold mb-6">Jetzt Reservieren</h2>

      <form class="flex flex-wrap -mx-4 xl:-mx-8" @submit.prevent="send">
        <div class="w-full lg:w-1/2 px-4 xl:px-8">
          <div class="flex flex-wrap -m-2">
            <div class="w-full sm:w-1/2 p-2">
              <div class="flex items-center mb-4">
                <input
                  id="radio1"
                  v-model="user.duration"
                  type="radio"
                  name="date"
                  value="hour"
                  class="hidden"
                />
                <label for="radio1" class="checkbox-label">
                  <span class="checkbox-circle"></span>
                  1 Stunde</label
                >
              </div>
              <div class="flex items-center">
                <input
                  id="radio2"
                  v-model="user.duration"
                  type="radio"
                  name="date"
                  value="half"
                  class="hidden"
                />
                <label for="radio2" class="checkbox-label">
                  <span class="checkbox-circle"></span>
                  1 Halber Tag</label
                >
              </div>
            </div>
            <div class="w-full sm:w-1/2 p-2">
              <div class="flex items-center mb-4">
                <input
                  id="radio3"
                  v-model="user.duration"
                  type="radio"
                  name="date"
                  value="day"
                  class="hidden"
                />
                <label for="radio3" class="checkbox-label">
                  <span class="checkbox-circle"></span>
                  1 Tag</label
                >
              </div>
              <div class="flex items-center">
                <input
                  id="radio4"
                  v-model="user.duration"
                  type="radio"
                  name="date"
                  value="multiple"
                  class="hidden"
                />
                <label for="radio4" class="checkbox-label">
                  <span class="checkbox-circle"></span>
                  Mehrere Tage</label
                >
              </div>
            </div>
            <div class="w-full p-2">
              <!-- Date Picker -->
              <div class="mt-4">
                <client-only>
                  <v-date-picker
                    v-model="user.date"
                    :min-date="new Date()"
                    :mode="dateMode"
                    :attributes="attrs"
                    :theme="calendarTheme"
                    :select-attribute="selectAttribute"
                    is-inline
                    is-expanded
                    title-position="left"
                    locale="de-CH"
                  />
                </client-only>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full lg:w-1/2 px-4 xl:px-8">
          <div class="flex flex-wrap mt-8 lg:mt-0">
            <div class="w-full xl:w-2/3">
              <FormInput
                v-model="user.name"
                v-validate="'required'"
                name="Name"
                required
                :error="errors.first('Name')"
                placeholder="Vollständiger Name"
                class="mb-5"
              />
              <FormInput
                v-model="user.company"
                v-validate="'required'"
                name="Firma"
                required
                :error="errors.first('Firma')"
                placeholder="Firma (optional)"
                class="mb-5"
              />
              <FormInput
                v-model="user.email"
                v-validate="'required|email'"
                name="E-Mail"
                required
                :error="errors.first('E-Mail')"
                placeholder="E-Mail"
                class="mb-5"
              />
              <FormInput
                v-model="user.phone"
                v-validate="'required'"
                name="Telefon"
                required
                :error="errors.first('Telefon')"
                placeholder="Telefon"
                class="mb-5"
              />
              <textarea
                v-model="user.remark"
                class="w-full remark-field"
                placeholder="Bemerkung (optional)"
              ></textarea>

              <label class="label mb-4"
                ><input v-model="user.isNPO" type="checkbox" name="npo" />
                <span class="checkmark"></span>
                <span class="text-2xl leading-tight ml-3">NPO</span></label
              >
              <label class="label"
                ><input
                  v-model="user.catering"
                  type="checkbox"
                  name="catering"
                />
                <span class="checkmark"></span>
                <span class="text-2xl leading-tight ml-3"
                  >Mit Catering</span
                ></label
              >

              <div
                class="border-t-2 border-black flex justify-between mt-10 pt-1 font-bold"
              >
                <p class="text-2xl">Total</p>
                <div class="text-2xl">
                  <transition name="slide-in">
                    <span v-if="user.catering">
                      ab
                    </span>
                  </transition>
                  <span> {{ total }}.- </span>
                </div>
              </div>

              <div class="text-right">
                <button
                  type="submit"
                  class="bg-green-400 text-2xl w-full text-white font-bold px-10 py-3 mt-4 rounded-xl flex items-center justify-center"
                >
                  Anfrage senden
                  <svg fill="currentColor" viewBox="0 0 20 20" class="ml-3 h-8">
                    <path
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import FormInput from '~/components/FormInput'

export default {
  components: {
    FormInput
  },

  data() {
    return {
      user: {
        name: '',
        company: '',
        email: '',
        phone: '',
        remark: '',
        duration: 'day',
        date: new Date(),
        catering: false,
        isNPO: false
      },
      selectAttribute: {
        highlight: {
          color: 'purple'
        }
      },
      attrs: [
        {
          key: 'today',
          highlight: {
            color: 'red'
          },
          dates: new Date()
        }
      ],
      calendarTheme: {
        container: {
          light: 'max-w-full border-2 border-gray-100 vc-rounded-lg vc-bg-white'
        },
        title: {
          light: 'text-3xl font-body hover:text-indigo-600 mb-4'
        },
        dayCell: 'bg-indigo-600',
        dayContent: 'text-2xl font-body rounded-full p-6 hover:bg-indigo-600',
        dayContentDisabled: {
          light:
            'text-2xl font-body rounded-full p-6 vc-text-gray-400 vc-pointer-events-none'
        },
        weekdays: {
          light: 'text-xl font-body vc-font-bold vc-text-gray-500'
        },
        arrows: {
          light:
            'vc-text-gray-600 vc-rounded vc-border-transparent hover:text-indigo-600 focus:vc-border-gray-300 h-10'
        }
      }
    }
  },

  computed: {
    dateMode() {
      if (this.user.duration === 'multiple') {
        return 'range'
      }

      return 'single'
    },

    total() {
      if (this.user.duration === 'hour') {
        return this.user.isNPO ? 78 : 120
      }

      if (this.user.duration === 'half') {
        return this.user.isNPO ? 182 : 280
      }

      return this.user.isNPO ? 299 : 460
    }
  },

  methods: {
    decrement() {},
    increment() {},
    send() {
      console.log(this.user)
    }
  }
}
</script>

<style lang="scss" scoped>
.remark-field {
  min-height: 142px;
  max-height: 300px;

  @apply transition duration-200 border-2 border-transparent bg-gray-100 rounded-xl text-2xl py-3 px-5 mb-5;
}

.remark-field:focus {
  @apply outline-none border-indigo-500;
}

.remark-field::placeholder {
  @apply text-gray-500;
}

.checkbox-label {
  @apply flex items-center cursor-pointer text-2xl border-2 border-gray-100 w-full rounded-lg py-3 px-4;
}

@screen xl {
  @apply text-3xl;
}

.checkbox-circle {
  @apply w-8 h-8 inline-block rounded-full border-2 border-gray-100 mr-4;
}

.slide-in-enter-active {
  transition: opacity 0.3s ease, transform 0.2s ease;
}
.slide-in-leave-active {
  transition: opacity 0.5s ease, transform 0.2s ease;
}
.slide-in-enter,
.slide-in-leave-to {
  transform: translateX(-10px);
  opacity: 0;
}
</style>
