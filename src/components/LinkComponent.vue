<template>
  <router-link :to="to">{{ text }}</router-link>
</template>

<script>
export default {
  name: 'LinkComponent',
  props: {
    to: String,
    text: String
  }
}
</script>
