<template>
    <div class="form-group">
        <label for="formGroupExampleInput">{{ list.label }}</label>
        <input type="number" min="0" max="max" :step="step" class="form-control" v-model="inputedValue">
    </div>
</template>
<script>
import inputedValue from '@/mixins/inputedValue.js'

export default {
    mixins: [ inputedValue ],
    props:{
        list: { type: Object },
        value: { type: [Number, String] },
        step: { type: String, default: "1" },
        max: { type: Number, default: 1000 }
  }
}
</script>