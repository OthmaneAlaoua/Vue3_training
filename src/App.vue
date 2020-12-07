<template>
    <AppHeader @open-login-modal="isLoginOpen = true" />
    <div class="flex w-full">
        <router-view></router-view>
    </div>
    <LoginModal v-if="isLoginOpen" @close-login="isLoginOpen = false"></LoginModal>
</template>

<script>
    import AppHeader from "./components/AppHeader";
    import LoginModal from "./components/LoginModal";
    import firebase from './utilities/firebase'

    export default {
        components: {
            AppHeader,
            LoginModal,
        },
        data : function () {
            return {
                isLoginOpen : false,
            }
        },

        mounted() {
            firebase.auth().onAuthStateChanged((user) => {
                if (user) {
                    /**on envoie la donnée au store**/
                    this.$store.commit('setIsLoggedIn',true)
                    this.$store.commit('setAuthUser', user)

                } else {
                  this.$store.commit('setIsLoggedIn',false)
                  this.$store.commit('setAuthUser', {})
                }
            });
        }
    }
</script>

<style></style>