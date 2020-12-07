<template>
    <div class="m-auto">
        <h1 class="text-2xl text-center">Le nombre de heros est de : {{ countHero }} </h1>
        <ul>
            <li class="flex justify-between" v-for="(hero,index) in heros" v-bind:key="hero.name">
                <div>
                    {{hero.name}}
                </div>
                <button @click="remove(index)">X</button>
            </li>
        </ul>
        <form class="mt-10" @submit.prevent="addHero">
            <input ref="newHeroRef" class="border rounded " placeholder="Entre le nom" v-model="newHero" type="text">
            <button class="border rounded bg-gradient-to-r from-red-700 to-pink-500 text-sm text-white" type="submit">
                Add hero
            </button>
        </form>
    </div>
</template>

<script>
    import {ref, computed, onMounted} from 'vue';

    export default {
        name: "DcHeros",

        setup() {
            const newHeroRef = ref('');
            const newHero = ref('');
            const heros = ref([
                {name: 'Aquaman'},
                {name: 'Othmane'},
                {name: 'Superman'},
                {name: 'Batman'}
            ]);

            function remove(index) {
                heros.value = heros.value.filter((hero, i) => i != index);
            }

            function addHero() {
                if (newHero.value != '') {
                    heros.value.push({name: newHero.value});
                    newHero.value = "";
                }
            }

            onMounted(() => {
                newHeroRef.value.focus();
            });

            const countHero = computed({
                get : () => heros.value.length
            })


            return {heros, newHero, remove, addHero, newHeroRef, countHero}
        },

        computed: {},
        mounted() {
            this.$refs.newHeroRef.focus();
        }
    }
</script>

<style scoped>

</style>