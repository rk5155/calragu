export default {
    methods: {
        isNan: function(result) {
            if (isNaN(result) || result == "Infinity") {
                return 0;
            } else {
                return result.toFixed(2);
            }
        }
    }
  }