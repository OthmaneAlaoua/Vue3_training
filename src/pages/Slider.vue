<template>
    <div class="flex flex-wrap w-full">
        <div class=" absolute w-full" v-for="(color,index) in sliders" :key="color">
            <transition name="fade">
                <div v-if="currentSlide == index" :class="color" style="height: 350px"></div>
            </transition>
        </div>
        <div class="absolute w-full" style="height: 340px">
            <div class="absolute bottom-0 flex w-full justify-center">
                <div @click="makeActive(index)" v-for="(slider,index) in sliders" :key="slider" class="w-4 mx-2 h-4 rounded-full cursor-pointer" :class="currentSlide == index ? 'bg-gray-700' : 'bg-gray-300'"></div>
            </div>
        </div>
<!--        <div class="my-10 flex w-full">-->
<!--            <div class="m-auto">-->
<!--                <transition name="fade">-->
<!--                    <h1 v-if="isTitleShowing">Slider Carousel</h1>-->
<!--                </transition>-->
<!--                <button v-on:click="isTitleShowing =  !isTitleShowing" class="px-2 rounded border">Toggle</button>-->
<!--            </div>-->
<!--        </div>-->
    </div>
</template>

<script>
    export default {
        name: "Slider",

        data: function () {
            return {
                currentSlide: 0,
                interval: "",
                isTitleShowing: true,
                sliders: [
                    'bg-teal-600',
                    'bg-blue-600',
                    'bg-yellow-600',
                ],
            }
        },
        methods : {
            makeActive : function (index) {
                this.currentSlide = index;
            }
        },

        mounted() {
            this.interval = setInterval(() => {
                this.currentSlide = this.currentSlide == 2 ? 0 : this.currentSlide + 1;
            }, 2200)
        },
        /**Il faut supprimer les intervalles et tout autre choses crée sinon elle continuerons d'exister apres un changement de page**/
        beforeUnmount() {
            clearInterval(this.interval);
        }
    }
</script>

<style scoped>
    .fade-enter-active,
    .fade-leave-active {
        transition: all 1s ease;
    }

    .fade-enter-from{
        opacity: 0;
        transform: translatex(-100%);
    }
    .fade-leave-to {
        opacity: 0;
        transform: translatex(100%);
    }
</style>