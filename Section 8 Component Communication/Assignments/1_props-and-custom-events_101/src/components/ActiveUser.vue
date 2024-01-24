<template lang="">
  <div>
    <h2>
      {{ name }}
    </h2>
    <h3>
      {{ age }}
    </h3>
  </div>
</template>
<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    age: {
      type: String,
      required: true,
    },
  },
};
</script>
<style lang=""></style>
