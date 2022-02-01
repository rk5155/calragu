<template>
    <div class="calculation">
        <ArticleText :title="title" :desc="desc" :article="money"></ArticleText>

        <form>
            <Calculation v-for="list in formList" :key="list.label" :list="list" v-model.number="$data[list.data]" :max="10000000000000000"></Calculation>
        </form>
        
        <table class="table table-bordered datatable width100">
            <caption>
            所得税の速算表
            </caption>
            <tbody>
                <tr>
                    <th class="calculation--bold" scope="col" style="width: 62%;"> 課税される所得金額</th>
                    <th class="calculation--bold" scope="col" style="width: 13%;"> 税率</th>
                    <th class="calculation--bold" scope="col" style="width: 25%;"> 控除額</th>
                </tr>
                <tr>
                    <th style="text-align: left;" scope="row"> 1,000円 から 1,949,000円まで</th>
                    <td style="text-align: center;"> 5％</td>
                    <td style="text-align: right;"> 0円</td>
                </tr>
                <tr>
                    <th style="text-align: left;" scope="row">1,950,000円 から 3,299,000円まで</th>
                    <td style="text-align: center;"> 10％</td>
                    <td style="text-align: right;"> 97,500円</td>
                </tr>
                <tr>
                    <th style="text-align: left;" scope="row">3,300,000円 から 6,949,000円まで</th>
                    <td style="text-align: center;">20％</td>
                    <td style="text-align: right;">427,500円</td>
                </tr>
                <tr>
                    <th style="text-align: left;" scope="row">6,950,000円 から 8,999,000円まで</th>
                    <td style="text-align: center;">23％</td>
                    <td style="text-align: right;">636,000円</td>
                </tr>
                <tr>
                    <th style="text-align: left;" scope="row">9,000,000円 から 17,999,000円まで</th>
                    <td style="text-align: center;"> 33％</td>
                    <td style="text-align: right;"> 1,536,000円</td>
                </tr>
                <tr>
                    <th style="text-align: left;" scope="row">18,000,000円 から 39,999,000円まで</th>
                    <td style="text-align: center;"> 40％</td>
                    <td style="text-align: right;"> 2,796,000円</td>
                </tr>
                <tr>
                    <th style="text-align: left;" scope="row">40,000,000円 以上</th>
                    <td style="text-align: center;"> 45％</td>
                    <td style="text-align: right;"> 4,796,000円</td>
                </tr>
            </tbody>
        </table>

        <h2>計算結果</h2>
        <table class="table table-striped">
            <tr>
                <td>所得税</td>
                <td>{{ tax }}円</td>
            </tr>
        </table>
    </div>
</template>

<script>
import Calculation from "../../components/Calculation.vue"
import getTitle from '@/getTitle'
import ArticleText from "../../components/ArticleText.vue"
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
      formList: [
            { label: "所得（円）", data: 'num1' }
        ]
    }
  },
  computed: {
      tax: function() {
          let tax = 0;

          if (this.num1 < 1000) {
              return tax;
          }
          else if (this.num1 >= 1000 && this.num1 <= 1949000) {
              tax = this.num1 * 0.05
              this.allWhite()
              this.isActiveSelector(2)
          }
          else if(this.num1 >= 1950000 && this.num1 <= 3299000) {
              tax = this.num1 * 0.1 - 97500
              this.allWhite()
              this.isActiveSelector(3)
          }
          else if(this.num1 >= 3300000 && this.num1 <= 6949000) {
              tax = this.num1 * 0.2 - 427500
              this.allWhite()
              this.isActiveSelector(4)
          }
          else if(this.num1 >= 6950000 && this.num1 <= 8999000) {
              tax = this.num1 * 0.23 - 636000
              this.allWhite()
              this.isActiveSelector(5)
          }
          else if(this.num1 >= 9000000 && this.num1 <= 17999000) {
              tax = this.num1 * 0.33 - 1536000
              this.allWhite()
              this.isActiveSelector(6)
          }
          else if(this.num1 >= 18000000 && this.num1 <= 39999000) {
              tax = this.num1 * 0.4 - 2796000
              this.allWhite()
              this.isActiveSelector(7)
          }
          else if(this.num1 >= 40000000) {
              tax = this.num1 * 0.45 - 4796000
              this.allWhite()
              this.isActiveSelector(8)
          }
          tax = Math.floor(tax)
          return tax.toLocaleString();
      }
  }
}
</script>

<style>
.active {
    background-color: rebeccapurple;
}
</style>