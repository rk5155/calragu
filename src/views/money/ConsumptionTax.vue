<template>
    <div class="calculation">
        <ArticleText :title="title" :desc="desc" :article="money"></ArticleText>

        <form>
            <Calculation v-for="list in formList" :key="list.label" :list="list" :step="list.step" :initialValue="list.value" v-model.number="$data[list.data]"></Calculation>
        </form>

        <h2>計算結果</h2>
        <table class="table table-striped">
            <tr>
                <td>税</td>
                <td>{{ tax }}円</td>
            </tr>
            <tr>
                <td>税込</td>
                <td>{{ total }}円</td>
            </tr>
        </table>
    </div>
</template>

<script>
import Calculation from "@/components/Calculation.vue"
import getTitle from '@/getTitle'
import ArticleText from "@/components/ArticleText.vue"
import articles from '@/mixins/articles.js'


export default {
  components: {
    Calculation,
    ArticleText
  },
  mixins: [ getTitle, articles ],
  data () {
    return {
      num1: 1000,
      num2: 10,
      formList: [
            { label: "金額", data: 'num1' },
            { label: "税率", data: 'num2' }
        ]
    }
  },
  computed: {
      total: function() {
          let total = this.num1 * (this.num2 / 100 + 1)
          return Number(this.isNan(total, 0)).toLocaleString();
      },
      tax: function() {
          return (Number(this.total.replace(/,/g, '')) - this.num1).toLocaleString();
      }
  }
}
</script>
