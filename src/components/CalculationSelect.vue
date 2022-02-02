<template>
    <div>
        <h2>計算結果</h2>
        <table class="table table-striped">
            <tr v-for="result in resultList" :key="result.label">
                <td>{{ result.label }}</td>
                
                <td v-if="result.label == labelName">{{ calculationResult }}</td>
                <td v-else>{{ result.text }}</td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    props: ["resultList", "calculationResult", "labelName"],
}
</script>