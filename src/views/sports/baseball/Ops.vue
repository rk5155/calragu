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
                
                <td v-if="result == 'ヒット数'">{{ hitNum }}</td>
                <td v-else-if="result == '打率'">{{ average }}</td>
                <td v-else-if="result == '出塁率'">{{ onBasePercentage }}</td>
                <td v-else-if="result == '長打率'">{{ sluggingPercentage }}</td>
                <td v-else-if="result == 'OPS'">{{ ops }}</td>
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
      fourDeadBalls: 0,
      sacrificeFly: 0,
      formList: [
            { label: "打数", data: 'bat' },
            { label: "単打数", data: 'hit1' },
            { label: "二塁打数", data: 'hit2' },
            { label: "三塁打数", data: 'hit3' },
            { label: "本塁打数", data: 'hit4' },
            { label: "四死球数", data: 'fourDeadBalls' },
            { label: "犠飛数", data: 'sacrificeFly' },
        ],
      resultList: ["ヒット数", "打率", "出塁率", "長打率", "OPS"]
    }
  },
  computed: {
      hitNum: function() {
          return this.hit1 + this.hit2 + this.hit3 + this.hit4;
      },
      average: function() {
          let average = this.hitNum / this.bat;
          return this.isNan(average)
      },
      onBasePercentage: function() {
          let onBasePercentage = (this.hitNum + this.fourDeadBalls + this.sacrificeFly) / (this.bat + this.fourDeadBalls + this.sacrificeFly);
          return this.isNan(onBasePercentage)
      },
      sluggingPercentage: function() {
          let baseHit = this.hit1 + (this.hit2 * 2) + (this.hit3 * 3) + (this.hit4 * 4)
          let sluggingPercentage = baseHit / this.bat;
          return this.isNan(sluggingPercentage)
      },
      ops: function() {
          let ops = Number(this.onBasePercentage) + Number(this.sluggingPercentage);
          return ops.toFixed(3);
      }
  }
}
</script>