<template>
    <div class="calculation">
        <ArticleText :title="title" :desc="desc" :article="health">
            <p>ボディマス指数とも呼ばれ、体重と身長から算出される肥満度を表す体格指数です。子供には別の指数である<router-link to='/health/laurel'>ローレル指数</router-link>が存在します。</p>
            <p>成人はBMIが国際的な指標として用いられます。健康を維持するには、日頃からBMIを把握することが大切です。</p>
        </ArticleText>

        <form>
            <Calculation v-for="list in formList" :key="list.label" :list="list" :step="list.step" :initialValue="list.value" v-model.number="$data[list.data]"></Calculation>
        </form>

        <CalculationSelect :resultList="resultList" :calculationResult="bmi" labelName="BMI">
            <p>あなたの適正体重は<span class="calculation-select__result">{{ weight }}kg</span>です。</p>
        </CalculationSelect>
    </div>
</template>

<script>
import Calculation from "@/components/Calculation.vue"
import CalculationSelect from "@/components/CalculationSelect.vue"
import getTitle from '@/getTitle'
import ArticleText from "@/components/ArticleText.vue"
import articles from '@/mixins/articles.js'

export default {
  components: {
    Calculation,
    ArticleText,
    CalculationSelect
  },
  mixins: [ getTitle, articles ],
  data () {
    return {
      num1: Number,
      num2: Number,
      formList: [
            { label: "体重kg", data: 'num1', step: '0.1' },
            { label: "身長cm", data: 'num2', step: '0.1' }
      ],
      resultList: [
          { label: "BMI" },
          { label: "18.5未満", text: "やせている" },
          { label: "18.5〜25未満", text: "普通" },
          { label: "25〜30未満", text: "肥満(1度)" },
          { label: "30〜35未満", text: "肥満(2度)" },
          { label: "35〜40未満", text: "肥満(3度)" },
          { label: "40以上	", text: "肥満(4度)" }
      ]
    }
  },
  computed: {
      bmi: function() {
          let bmi = this.num1 / Math.pow(this.num2 / 100, 2);

          if (isNaN(bmi) || bmi == "Infinity") {
              return 0
          } else {
              if (bmi <= 18.4) {
                  this.allWhite()
                  this.isActiveSelector(2)
              }
              else if(bmi >= 18.5 && bmi <= 24.9) {
                  console.log(989898);
                  this.allWhite()
                  this.isActiveSelector(3)
              }
              else if(bmi >= 25 && bmi <= 29.9) {
                  this.allWhite()
                  this.isActiveSelector(4)
              }
              else if(bmi >= 30 && bmi <= 34.9) {
                  this.allWhite()
                  this.isActiveSelector(5)
              }
              else if(bmi >= 35 && bmi <= 39.9) {
                  this.allWhite()
                  this.isActiveSelector(6)
              }
              else if(bmi >= 40) {
                  this.allWhite()
                  this.isActiveSelector(7)
              }
              
              return bmi.toFixed(1);
          }
      },
      weight: function() {
          return (Math.pow(this.num2 / 100, 2) * 22).toFixed(1);
      }
  }
}
</script>
