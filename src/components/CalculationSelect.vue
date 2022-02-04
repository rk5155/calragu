<template>
    <div class="calculation-select">
        <h2>計算結果</h2>
        <table class="table table-striped">
            <tr v-for="(result, index) in resultList" :key="result.label">
                <td v-if="index == 0" class="calculation-select__result">{{ result.label }}</td>
                <td v-else>{{ result.label }}</td>
                
                <td v-if="result.label == labelName" class="calculation-select__result">{{ calculationResult }}</td>
                <td v-else>{{ result.text }}</td>
            </tr>
        </table>
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: ["resultList", "calculationResult", "labelName"],
}
</script>