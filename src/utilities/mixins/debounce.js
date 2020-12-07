export default {
    data : function() {
      return {
          timeout: ""
      };
    },
    methods:{
        debounce: function (func, wait = 1000) {
            clearTimeout(this.timeout);
            this.timeout = setTimeout(func, wait);
        }
    }
}