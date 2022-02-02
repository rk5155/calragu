<template>
    <div class="calculation">
        <ArticleText :title="title" :desc="desc" :article="health">
            <p>子供の場合は<router-link to='/health/bmi'>BMI</router-link>で計算してもあまり参考にならないので、ローレル指数を用いて肥満度を計ります。</p>
        </ArticleText>

        <form>
            <Calculation v-for="list in formList" :key="list.label" :list="list" v-model.number="$data[list.data]"></Calculation>
        </form>

        <CalculationSelect :resultList="resultList" :calculationResult="laurel" labelName="ローレル指数"></CalculationSelect>
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
      num1: 0,
      num2: 0,
      num3: 0,
      formList: [
            { label: "体重kg", data: 'num1' },
            { label: "身長cm", data: 'num2' }
        ],
      resultList: [
          { label: "ローレル指数" },
          { label: "100未満", text: "やせている" },
          { label: "100以上 115未満", text: "やせぎみ" },
          { label: "115以上 145未満", text: "普通" },
          { label: "145以上 160未満", text: "肥満ぎみ" },
          { label: "160以上	", text: "肥満" }
        ]
    }
  },
  computed: {
      laurel: function() {
          let laurel = this.num1 / Math.pow(this.num2, 3) * 10000000

          if (isNaN(laurel) || laurel == "Infinity") {
              return 0
          } else {
              if (laurel <= 99) {
                  this.allWhite()
                  this.isActiveSelector(2)
              }
              else if(laurel >= 100 && laurel <= 114) {
                  this.allWhite()
                  this.isActiveSelector(3)
              }
              else if(laurel >= 115 && laurel <= 144) {
                  this.allWhite()
                  this.isActiveSelector(4)
              }
              else if(laurel >= 145 && laurel <= 159) {
                  this.allWhite()
                  this.isActiveSelector(5)
              }
              else if(laurel >= 160) {
                  this.allWhite()
                  this.isActiveSelector(6)
              }
              
              return laurel.toFixed(1);
          }
      }
  }
}
</script>