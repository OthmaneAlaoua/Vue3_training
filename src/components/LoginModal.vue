<template>
    <section @click="close" class="z-20 h-screen w-screen bg-gray-500 fixed top-0 opacity-50"></section>
    <div class="absolute inset-0">
  <div class="flex h-full">
    <div class="z-30 m-auto bg-white p-2 rounded shadow w-1/3">
      <div class="p-2 border">
        <h1 class="text-2xl text-center">Login</h1>
        <LoginGoogle @close-login-from-google="close"></LoginGoogle>
        <p class="my-3 text-center">Or</p>
        <form class="p-2 my-2" @submit.prevent="submit">
          <div class="my-4">
            <label>Email or Username</label>
            <input ref="emailRef" v-model="form.email" class="rounded shadow p-2 w-full" placeholder="Entrez votre email ou votre pseudo">
          </div>
          <div class="my-4">
            <label>Password</label>
            <input v-model="form.password" class="rounded shadow p-2 w-full" type="password" placeholder="Entrez votre mot de passe   ">
          </div>
          <div class="my-4">
            <button type="submit" class="w-full rounded shadow-md bg-gradient-to-r from-red-800 to-pink-600 text-white p-2">
              <span v-if="!isLoading">Login</span>
              <span v-else>⏱</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
</template>

<script>
    import firebase from '../utilities/firebase'
    import LoginGoogle from "./Login/LoginGoogle";
    export default {
        name: "LoginModal",

        components:{
            LoginGoogle,
        },

        data : function() {
          return {
              form : {
                  email:'',
                  password:'',
              },
              isLoading : false,
          }
        },
        methods : {
            submit : function () {
                this.isLoading = true;

                firebase.auth().signInWithEmailAndPassword(this.form.email,this.form.password)
                    .then(() => {
                        this.isLoading = false;
                        this.form.email = '';
                        this.form.password = '';
                        this.close();
                    })
                    .catch(() => {
                        this.isLoading = false;
                        this.form.email = '';
                        this.form.password = '';
                    });
            },

            close : function () {
                this.$emit('close-login')
            },

        },
        mounted : function() {
            this.$refs.emailRef.focus();
        }
    }
</script>

<style scoped>

</style>