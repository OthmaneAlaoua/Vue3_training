<template>
    <div class="flex flex-wrap w-full">
        <h1 class="w-full text-center text-3xl my-4">Markdown Application</h1>
        <section class="flex m-auto w-10/12 h-screen">
            <article class="w-1/2 border">
                <textarea ref="markdownTextArea" class="w-full h-full" :value="text" v-on:input="update"></textarea>
            </article>
            <article class="w-1/2 bg-gray-100" v-html="markedText"></article>
        </section>
    </div>
</template>

<script>
    import marked from 'marked';
    /**Importation de Mixins**/
    import debounce from '../utilities/mixins/debounce'

    export default {
        mixins:[debounce],

        data: function () {
            return {
                text: "",
            }
        },
        computed: {
            markedText: function () {
                return marked(this.text);
            }
        },
        methods: {
            update: function (e) {
                const task = () => {this.text = e.target.value}
                this.debounce(task,500)
            },
        },

        mounted: function() {
            this.$refs.markdownTextArea.focus();
        }

    }
</script>

<style scoped>

</style>