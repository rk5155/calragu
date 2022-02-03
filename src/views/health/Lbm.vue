<template>
    <div class="calculation">
        <ArticleText :title="title" :desc="desc" :article="health">
            <p>体脂肪量の自動計算ツールは<router-link to='/health/fat-mass'>こちら</router-link></p>
        </ArticleText>

        <form>
            <Calculation v-for="list in formList" :key="list.label" :list="list" :step="list.step" :initialValue="list.value" v-model.number="$data[list.data]"></Calculation>
        </form>

        <h2>計算結果</h2>
        <table class="table table-striped">
            <tr>
                <td>体脂肪量</td>
                <td>{{ lbm }}</td>
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
    ArticleText,
  },
  mixins: [ getTitle, articles ],
  data () {
    return {
      num1: 60,
      num2: 12,
      formList: [
            { label: "体重kg", data: 'num1', step: '0.1' },
            { label: "体脂肪量kg", data: 'num2', step: '0.1' },
      ]
    }
  },
  computed: {
      lbm: function() {
          let lbm = this.num1 - this.num2
          return this.isNan(lbm, 1)
      }
  }
}
</script>
