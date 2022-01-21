<template>
    <div class="calculation">
        <ArticleText :title="title" :desc="desc" :article="sports"></ArticleText>

        <form>
            <Calculation v-for="list in formList" :key="list.label" :list="list" v-model.number="$data[list.data]"></Calculation>
        </form>

        <h2>計算結果</h2>
        <table class="table table-striped">
            <tr>
                <td>守備率</td>
                <td>{{ defensive }}</td>
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
      num1: 0,
      num2: 0,
      num3: 0,
      formList: [
            { label: "刺殺", data: 'num1' },
            { label: "補殺", data: 'num2' },
            { label: "失策", data: 'num3' },
        ]
    }
  },
  computed: {
      defensive: function() {
          let defensive = (this.num1 + this.num2) / (this.num1 + this.num2 + this.num3)
          
          if (isNaN(defensive) || defensive == "Infinity") {
              return 0;
          } else {
              return defensive.toFixed(2);
          }
      }
  }
}
</script>
