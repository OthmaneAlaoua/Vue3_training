<template>
   <section class="flex w-full">
        <div class="m-auto">
            <h1 class="text-center text-2xl">Caclulator</h1>
            <p class="text-3xl text-right mt-10 mb-2 w-64 overflow-x-scroll">{{currentNumber}}</p>
            <small v-if="selectedOperation">{{prevNum}} {{selectedOperation}} {{currentNumber}}</small>
            <div class="grid grid-cols-5 gap-1">
                <button v-for="number in numbers"  :key="number" @click="pressed(number)" class="p-2 w-10 h-10 border rounded shadow">{{number}}</button>
                <button @click="pressed('+')" class="p-2 w-10 h-10 border rounded shadow">+</button>
                <button @click="pressed('-')" class="p-2 w-10 h-10 border rounded shadow">-</button>
                <button @click="pressed('*')" class="p-2 w-10 h-10 border rounded shadow">*</button>
                <button @click="pressed('/')" class="p-2 w-10 h-10 border rounded shadow">/</button>
                <button @click="pressed('=')" class="p-2 w-10 h-10 border rounded shadow">=</button>
                <button @click="pressed('c')" class="p-2  h-10 border rounded shadow col-span-5">clear</button>
            </div>
        </div>
   </section>
</template>

<script>
    import {ref,onMounted} from 'vue';
    export default {
        name: "Calculator",
        setup(){
            /**Partie Données**/
            const operation         = ['+','-','*','/'];
            const numbers           = ref([1,2,3,4,5,6,7,8,9,0]);
            const currentNumber     = ref('');
            const prevNum           = ref('');
            const selectedOperation = ref('');

            /** Partie fonction **/
            function pressed(value) {
                if(value === '=') calculate();
                else if (value === 'c') clear();
                else if (operation.includes(value)) applyOperation(value);
                else if (numbers.value.includes(parseInt(value))) appendNumber(parseInt(value));
                else if (value === 'Enter') calculate();
            }

            function appendNumber(value) {
                currentNumber.value = currentNumber.value + value;
            }

            function applyOperation(value) {
                prevNum.value = currentNumber.value;
                clear();
                selectedOperation.value = value;
            }
            function calculate() {
                if(selectedOperation.value === "*") multiply();
                else if(selectedOperation.value === "/") devide();
                else if(selectedOperation.value === "-") subtract();
                else if(selectedOperation.value === "+") sum();

                prevNum.value = '';
                selectedOperation.value = '';
            }

            function multiply() {
                currentNumber.value = prevNum.value * currentNumber.value;
            }
            function devide() {
                currentNumber.value = prevNum.value / currentNumber.value;
            }
            function subtract() {
                currentNumber.value = prevNum.value - currentNumber.value;
            }
            function sum() {
                currentNumber.value = parseInt(prevNum.value) + parseInt(currentNumber.value);
            }

            function clear() {
                currentNumber.value = "";
            }

            /** Partie Lifecycle**/
            onMounted(() => {
                window.addEventListener('keydown',(e) => {
                    pressed(e.key);
                })
            });
            return {currentNumber,selectedOperation,prevNum, numbers, pressed}
        }
    }
</script>

<style scoped>

</style>