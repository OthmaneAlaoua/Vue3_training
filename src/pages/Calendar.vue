<template>
    <div class="m-auto">
        <h1 class="text-3xl my-2 text-center">Vue Calendar</h1>
        <section class="mx-2 flex justify-between">
            <h2 class="font-bold">{{currentMonthName}}</h2>
            <h2 class="font-bold">{{currentYear}}</h2>
        </section>
        <section class="flex">
            <p class="text-center" style="width:14.28% " v-for="day in days" :key="day">{{day}}</p>
        </section>
        <section class="flex flex-wrap">
            <p class="text-center my-2" style="width:14.28% " v-for="num in startDay()" :key="num"></p>
            <p class="text-center my-2" style="width:14.28% " v-for="num in daysInMonth()"
               :key="num" :class="currentDateClass(num)">{{num}}</p>
        </section>
        <section class="flex justify-between my-4">
            <button class="px-2 border rounded" @click="previous()">Previous</button>
            <button class="px-2 border rounded" @click="next()">Next</button>
        </section>
    </div>
</template>

<script>
    export default {
        name: "Calender",
        data: function () {
            return {
                days         : ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                currentDate  : new Date().getUTCDate(),
                currentMonth : new Date().getMonth(),
                currentYear  : new Date().getFullYear()
            }
        },
        methods: {
            daysInMonth: function () {
                return new Date(this.currentYear, this.currentMonth + 1, 0).getDate();
            },

            startDay: function () {
                return new Date(this.currentYear, this.currentMonth, 1).getDay();
            },

            next: function () {
                if(this.currentMonth == 11){
                    this.currentMonth =  0;
                    this.currentYear++;
                } else{
                    this.currentMonth++;
                }
            },

            previous: function () {
                if(this.currentMonth == 0){
                    this.currentMonth = 11;
                    this.currentYear--;
                } else {
                    this.currentMonth--;
                }
            },

            currentDateClass : function (num) {
                const calendarFullDate =  new Date(this.currentYear, this.currentMonth, num) == new Date().toDateString();
                const currentFullDate  =  new Date().toDateString();
                return (calendarFullDate === currentFullDate) ? 'text-yellow-600' : '' ;
            }
        },

        computed: {
            currentMonthName: function () {
                return new Date(this.currentYear, this.currentMonth).toLocaleString('default', {month: "long"})
            },
        }


    }
</script>

<style scoped>

</style>