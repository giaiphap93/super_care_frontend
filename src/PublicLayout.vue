<template>
  <div class="form__container">
    <a-row>
      <a-col :span="8" style="background-image: url(https://picsum.photos/1000);">

      </a-col>
      <a-col :span="16">
        <div class="form__component">
          <router-view />
        </div>
      </a-col>
    </a-row>

  </div>
</template>
<script>
export default {
  name: 'PublicLayout',
};
</script>
<style scoped>
.form__container {
  border: 1px solid #ccc;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
}

.form__component {
  padding: 2rem;
}

body {
  background: grey !important;
}
</style>