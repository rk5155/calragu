<template>
    <div class="calculation">
        <ArticleText :title="title" :desc="desc" :article="sports"></ArticleText>

        <form>
            <Calculation v-for="list in formList" :key="list.label" :list="list" v-model.number="$data[list.data]"></Calculation>
        </form>

        <h2>計算結果</h2>
        <table class="table table-striped">
            <tr v-for="result in resultList" :key="result.label">
                <td>{{ result.label }}</td>
                
                <td v-if="result.label == 'WHIP'">{{ whip }}</td>
                <td v-else>{{ result.text }}</td>
            </tr>
        </table>
    </div>
</template>

<script>
import Calculation from "../../../components/Calculation.vue"
import getTitle from '@/getTitle'
import ArticleText from "../../../components/ArticleText.vue"
import articles from '@/mixins/articles.js'

export default {
  components: {
    Calculation,
    ArticleText
  },
  mixins: [ getTitle, articles ],
  data () {
    return {
      num1: 0,
      num2: 0,
      num3: 0,
      formList: [
            { label: "与四球数", data: 'num1' },
            { label: "被安打数", data: 'num2' },
            { label: "投球回数", data: 'num3' }
        ],
      resultList: [
          { label: "WHIP" },
          { label: 1, text: "素晴らしい" },
          { label: 1.1, text: "非常に良い" },
          { label: 1.25, text: "平均以上" },
          { label: 1.32, text: "平均" },
          { label: 1.4, text: "平均以下" },
          { label: 1.5, text: "悪い" },
          { label: 1.6, text: "非常に悪い" }
        ]
    }
  },
  computed: {
      whip: function() {
          let whip = (this.num1 + this.num2) / this.num3;

          if (isNaN(whip) || whip == "Infinity") {
              return 0
          } else {
              if (whip <= 1) {
                  this.allWhite()
                  this.isActiveSelector(2)
              }
              else if(whip >= 1 && whip <= 1.1) {
                  this.allWhite()
                  this.isActiveSelector(3)
              }
              else if(whip >= 1.1 && whip <= 1.25) {
                  this.allWhite()
                  this.isActiveSelector(4)
              }
              else if(whip >= 1.25 && whip <= 1.32) {
                  this.allWhite()
                  this.isActiveSelector(5)
              }
              else if(whip >= 1.32 && whip <= 1.4) {
                  this.allWhite()
                  this.isActiveSelector(6)
              }
              else if(whip >= 1.4 && whip <= 1.5) {
                  this.allWhite()
                  this.isActiveSelector(7)
              }
              else {
                  this.allWhite()
                  this.isActiveSelector(8)
              }
              
              return whip.toFixed(2);
          }
      }
  }
}
</script>

<style>
.active {
    background-color: rebeccapurple;
}
</style>