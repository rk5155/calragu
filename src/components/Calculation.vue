<template>
    <div class="form-group">
        <label for="formGroupExampleInput">{{ list.label }}</label>
        <input type="number" min="0" max="1000" step="1" class="form-control" v-model="inputedValue">
    </div>
</template>
<script>
// import { calculatedValue } from '@/calculatedValue.js'

export default {
    // mixins: [ calculatedValue ],
    props: ["list", "value"],
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
</script>