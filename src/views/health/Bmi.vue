<template>
    <div class="calculation">
        <ArticleText :title="title" :desc="desc" :article="health"></ArticleText>

        <form>
            <Calculation v-for="list in formList" :key="list.label" :list="list" :step="list.step" :initialValue="list.value" v-model.number="$data[list.data]"></Calculation>
        </form>

        <h2>計算結果</h2>
        <table class="table table-striped">
            <tr>
                <td>BMI</td>
                <td>{{ bmi }}</td>
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
      num1: 60,
      num2: 1.6,
      formList: [
            { label: "体重kg", data: 'num1', step: '0.1' },
            { label: "身長m", data: 'num2', step: '0.01' }
        ]
    }
  },
  computed: {
      bmi: function() {
          let bmi = this.num1 / Math.pow(this.num2, 2);

          if (isNaN(bmi) || bmi == "Infinity") {
              return 0;
          } else {
              return bmi.toFixed(2);
          }
      }
  }
}
</script>
