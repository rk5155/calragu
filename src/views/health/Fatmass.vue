<template>
    <div class="calculation">
        <ArticleText :title="title" :desc="desc" :article="health">
            <p>体脂肪量を少なくして、スマートで筋肉質なかっこいい体になりたいですね。</p>
        </ArticleText>

        <form>
            <Calculation v-for="list in formList" :key="list.label" :list="list" :step="list.step" :initialValue="list.value" v-model.number="$data[list.data]"></Calculation>
        </form>

        <h2>計算結果</h2>
        <table class="table table-striped">
            <tr>
                <td>体脂肪量</td>
                <td>{{ fatmas }}</td>
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
      num1: 0,
      num2: 0,
      formList: [
            { label: "体重kg", data: 'num1', step: '0.1' },
            { label: "体脂肪率", data: 'num2', step: '0.1' },
      ]
    }
  },
  computed: {
      fatmas: function() {
          let fatmas = this.num1 * (this.num2 / 100)
          return this.isNan(fatmas, 1)
      }
  }
}
</script>
