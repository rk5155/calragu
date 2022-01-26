<template>
    <div class="form-group">
        <label for="formGroupExampleInput">{{ list.label }}</label>
        <input type="number" min="0" max="1000" :step="step" class="form-control" v-model="inputedValue">
    </div>
</template>
<script>
import inputedValue from '@/mixins/inputedValue.js'

export default {
    mixins: [ inputedValue ],
    props:{
        list: { type: Object },
        value: { type: [Number] },
        step: { type: String, default: "1" }
  }
}
</script>