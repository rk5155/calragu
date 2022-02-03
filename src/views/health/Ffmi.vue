<template>
    <div class="calculation">
        <ArticleText :title="title" :desc="desc" :article="health">
            FFMIの指数が大きいほどしっかり、がっちりした筋肉質な見た目ということです。
        </ArticleText>

        <form>
            <Calculation v-for="list in formList" :key="list.label" :list="list" :step="list.step" :initialValue="list.value" v-model.number="$data[list.data]"></Calculation>
        </form>

        <CalculationSelect :resultList="resultList" :calculationResult="ffmi" labelName="FFMI"></CalculationSelect>
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
            { label: "体重kg", data: 'num1', step: '0.1' },
            { label: "身長cm", data: 'num2', step: '0.1' },
            { label: "体脂肪率", data: 'num3', step: '0.1' },
      ],
      resultList: [
          { label: "FFMI" },
          { label: "18未満", text: "平均以下" },
          { label: "18〜19.5", text: "平均" },
          { label: "19.5〜21.0", text: "平均よりも多い" },
          { label: "21.0〜22.5", text: "とても多い" },
          { label: "22.5〜26", text: "アスリート並" },
          { label: "26以上", text: "あなたはドーピングを使用しています。" },
      ]
    }
  },
  computed: {
      ffmi: function() {
          let ffmi = this.num1 * (1 - (this.num3 / 100)) / Math.pow((this.num2 / 100), 2)
          let 体脂肪量 = this.num1 * (this.num3 / 100)
          let 除脂肪体重 = this.num1 - 体脂肪量
          ffmi = 除脂肪体重 / Math.pow((this.num2 / 100), 2)

          if (isNaN(ffmi) || ffmi == "Infinity") {
              return 0
          } else {
              if (ffmi <= 18) {
                  this.allWhite()
                  this.isActiveSelector(2)
              }
              else if(ffmi >= 18.1 && ffmi <= 19.4) {
                  this.allWhite()
                  this.isActiveSelector(3)
              }
              else if(ffmi >= 19.5 && ffmi <= 20.9) {
                  this.allWhite()
                  this.isActiveSelector(4)
              }
              else if(ffmi >= 21 && ffmi <= 22.4) {
                  this.allWhite()
                  this.isActiveSelector(5)
              }
              else if(ffmi >= 22.5 && ffmi <= 25.9) {
                  this.allWhite()
                  this.isActiveSelector(6)
              }
              else if(ffmi >= 26) {
                  this.allWhite()
                  this.isActiveSelector(7)
              }
              return ffmi.toFixed(1);
          }
      }
  }
}
</script>
