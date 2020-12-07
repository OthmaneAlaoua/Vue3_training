<template>
    <section class="mt-5 text-center">
        <button @click="loginWithGoogle" class="border px-2 rounded">Login with google</button>
    </section>
</template>

<script>
    import firebase from "../../utilities/firebase";

    export default {
        name: "LoginGoogle",
        methods: {
            loginWithGoogle: function () {
                var provider = new firebase.auth.GoogleAuthProvider();
                firebase.auth().signInWithPopup(provider).then(() => {
                    this.$emit("close-login-from-google");
                });
            }
        }
    }
</script>

<style scoped>
</style>