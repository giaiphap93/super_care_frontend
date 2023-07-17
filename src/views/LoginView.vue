<template>
  <a-row>
    <a-col :span="12" >
      <div class="t-flex t-items-center t-justify-center t-w-full">
        <img
          class="t-h-10 t-w-auto"
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
        />
      </div>
      <h1 class="t-text-center">Login to account</h1>
      <p class="t-text-center">New to [Abcxyz]? <router-link to="/users/register">Create your business</router-link></p>
      <div class="t-flex t-items-center t-justify-center t-w-full">
        <a-form
          :model="loginForm"
          name="basic"
          :label-col="{ span: 8 }"
          :wrapper-col="{ span: 16 }"
          autocomplete="off"
          @finish="onFinish"
          @finishFailed="onFinishFailed"
          class="login__form"
        >
          <a-form-item
            label="Username"
            name="username"
            :rules="[
              { required: true, message: 'Please input your username!' },
            ]"
          >
            <a-input v-model:value="loginForm.username" />
          </a-form-item>

          <a-form-item
            label="Password"
            name="password"
            :rules="[
              { required: true, message: 'Please input your password!' },
            ]"
          >
            <a-input-password v-model:value="loginForm.password" />
          </a-form-item>

          <a-form-item name="remember" :wrapper-col="{ offset: 8, span: 16 }">
            <a-checkbox v-model:checked="loginForm.remember"
              >Remember me</a-checkbox
            >
          </a-form-item>

          <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
            <a-button type="primary" html-type="submit">Login</a-button>
          </a-form-item>
        </a-form>
      </div>
    </a-col>
    <a-col :span="12">12</a-col>
  </a-row>
</template>
<script>
export default {
  name: "LoginView",
  components: {},
  data: () => {
    return {
      loginForm: {
        username: "",
        password: "",
        remember: true,
      },
    };
  },
  methods: {
    login() {
      alert(this.loginForm.username);
    },
    onFinish: (values) => {
      console.log("Success:", values);
    },
    onFinishFailed: (errorInfo) => {
      console.log("Failed:", errorInfo);
    },
  },
};
</script>
<style scoped>
.login__form {
  max-width: 600px;
}
</style>