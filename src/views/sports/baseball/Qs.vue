<template>
    <div class="calculation">
        <ArticleText :title="title" :desc="desc" :article="sports"></ArticleText>

        <form>
            <Calculation v-for="list in formList" :key="list.label" :list="list" v-model.number="$data[list.data]"></Calculation>
        </form>

        <h2>計算結果</h2>
        <table class="table table-striped">
            <tr>
                <td>QS率</td>
                <td>{{ qs }}%</td>
            </tr>
            <tr>
                <td>HQS率</td>
                <td>{{ hqs }}%</td>
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
      formList: [
            { label: "QS数", data: 'num1' },
            { label: "先発登板数", data: 'num2' },
        ]
    }
  },
  computed: {
      qs: function() {
          let qs = (this.num1 / this.num2) * 100;
          
          if (isNaN(qs) || qs == "Infinity") {
              return 0;
          } else {
              return qs.toFixed(1);
          }
      }
  }
}
</script>
