export default {
    methods: {
        allWhite: function() {
            document.querySelectorAll("table tr").forEach((el) => {
                el.style.backgroundColor = 'white';
            })
         },
         isActiveSelector: function(num) {
             document.querySelectorAll(`table tr:nth-child(${num})`).forEach((el) => {
                el.style.backgroundColor = '#F6CEF5';
            })
         }
    }
}