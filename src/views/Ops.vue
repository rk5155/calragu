<template>
    <div class="calculation">
        <h2>【現代野球の評価】OPSの計算</h2>
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
export default {
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

          if (isNaN(average)) {
            return 0
          } else {
              return average.toFixed(3);
          }
      },
      onBasePercentage: function() {
          let onBasePercentage = (this.hitNum + this.fourDeadBalls + this.sacrificeFly) / (this.bat + this.fourDeadBalls + this.sacrificeFly);

          if (isNaN(onBasePercentage)) {
            return 0
          } else {
              return onBasePercentage.toFixed(3);
          }
      },
      sluggingPercentage: function() {
          let baseHit = this.hit1 + (this.hit2 * 2) + (this.hit3 * 3) + (this.hit4 * 4)
          let sluggingPercentage = baseHit / this.bat;

          if (isNaN(sluggingPercentage)) {
            return 0
          } else {
            return sluggingPercentage.toFixed(3);
          }
      },
      ops: function() {
          let ops = Number(this.onBasePercentage) + Number(this.sluggingPercentage);
          return ops.toFixed(3);
      }
  }
}
</script>