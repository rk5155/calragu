export default {
    methods: {
        isNan: function(result, fixed = 3) {
            if (isNaN(result) || result == "Infinity") {
                return 0;
            } else {
                return result.toFixed(fixed);
            }
        }
    }
  }