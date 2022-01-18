export default {
    computed: {
        inputedValue: {
            get() {
                return this.value;
            },
            set(newValue) {
                this.$emit("input", newValue);
            }
        }
    }
}