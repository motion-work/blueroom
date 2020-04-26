<template>
  <div class="flex flex-col">
    <input
      ref="input"
      :type="type"
      :name="fieldName"
      v-bind="$attrs"
      class="input"
      @input="update($event)"
    />
    <span v-if="error" class="text-sm mt-2 tracking-wide">{{ error }} </span>
  </div>
</template>

<script>
export default {
  $_veeValidate: {
    value() {
      return this.$refs.input.value
    },

    name() {
      return this.fieldName
    }
  },

  props: {
    value: {
      type: null,
      required: false,
      default: null
    },
    name: {
      type: String,
      default: null
    },
    label: {
      type: String,
      required: false,
      default: null
    },
    error: {
      type: String,
      default: null
    },
    type: {
      type: String,
      default: 'text'
    },
    reversed: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {}
  },

  computed: {
    fieldName() {
      if (this.name) {
        return this.name
      }

      return this.label.toLowerCase()
    }
  },

  mounted() {
    this.$refs.input.value = this.value
  },

  methods: {
    update($event) {
      this.$emit('input', $event.target.value)
    }
  }
}
</script>

<style>
.input {
  @apply bg-gray-100 rounded-xl text-2xl font-medium px-5 py-3;
}
.input:focus {
  @apply outline-none;
}

.input::placeholder {
  @apply text-gray-200;
}
</style>
