<template>
    <div class="calculation">
        <ArticleText :title="title" :desc="desc" :article="sports"></ArticleText>

        <form>
            <Calculation v-for="list in formList" :key="list.label" :list="list" v-model.number="$data[list.data]"></Calculation>
        </form>

        <h2>計算結果</h2>
        <table class="table table-striped">
            <tr v-for="result in resultList" :key="result">
                <td>{{ result }}</td>
                
                <td v-if="result == '塁打数'">{{ baseHit }}</td>
                <td v-else-if="result == '打数'">{{ bat }}</td>
                <td v-else-if="result == '長打率'">{{ sluggingPercentage }}</td>
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
      bat: 0,
      hit1: 0,
      hit2: 0,
      hit3: 0,
      hit4: 0,
      formList: [
            { label: "打数", data: 'bat' },
            { label: "単打数", data: 'hit1' },
            { label: "二塁打数", data: 'hit2' },
            { label: "三塁打数", data: 'hit3' },
            { label: "本塁打数", data: 'hit4' }
        ],
      resultList: ["塁打数", "打数", "長打率" ]
    }
  },
  computed: {
      baseHit: function() {
          let baseHit = this.hit1 + (this.hit2 * 2) + (this.hit3 * 3) + (this.hit4 * 4)
          return baseHit
      },
      sluggingPercentage: function() {
          let baseHit = this.baseHit
          let sluggingPercentage = baseHit / this.bat;

          if (isNaN(sluggingPercentage)) {
            return 0
          } else {
            return sluggingPercentage.toFixed(3);
          }
      }
  }
}
</script>