<template lang="">
  <div>
    <h2>UserData</h2>
    <form @submit.prevent="submitData">
      <div>
        <label>Name</label>
        <input type="name" v-model="enteredName" />
      </div>
      <div>
        <label>Age</label>
        <input type="age" v-model="enteredAge" />
      </div>
    </form>
  </div>
</template>
<script>
export default {};
</script>
<style lang=""></style>
