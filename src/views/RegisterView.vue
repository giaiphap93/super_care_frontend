
<template>
    <div>
        <a-form :label-col="{ span: 8 }" :wrapper-col="{ span: 16 }" class="register__form">
            <a-form-item label="Username" name="username"
                :rules="[{ required: true, message: 'Please input your username!' }]">
                <a-input v-model:value="form.username" />
            </a-form-item>

            <a-form-item label="Password" name="password"
                :rules="[{ required: true, message: 'Please input your password!' }]">
                <a-input-password v-model:value="form.password" />
            </a-form-item>

            <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
                <a-button type="primary" html-type="submit">Register</a-button>
            </a-form-item>
        </a-form>
    </div>
</template>
  
<script >

export default {

    components: {

    },
    data() {
        return {
            agreed: false,
            form: {

            }
        }
    }
}

</script>
<style scoped>
.register__form {
  max-width: 600px;
}
</style>