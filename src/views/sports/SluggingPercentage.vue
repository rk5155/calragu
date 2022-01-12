<template>
    <div class="calculation">
        <h1>長打率の計算</h1>
        <p>長打率 = 塁打数 ÷ 打数</p>
        <p>長打率とは、1打数あたりの塁打数の平均値を表します。塁打とは、「単打＝1、二塁打＝2、三塁打＝3、本塁打＝4」として計算します。1打数1安打1本塁打の選手は、塁打数の4を打数の1で割るので、長打率4.000となるわけです。</p>

        <form>
            <div class="form-group" v-for="list in formList" :key="list.label">
                <label for="formGroupExampleInput">{{ list.label }}</label>
                <input v-model.number="$data[list.data]" type="number" min="0" max="1000" step="1" class="form-control">
            </div>
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
export default {
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