<template>
    <div>
        <h2>OPS計算</h2>
        <form>
            <div class="form-group">
                <label for="formGroupExampleInput">打数</label>
                <input v-model.number="bat" type="number" min="0" max="1000" step="1" class="form-control">
            </div>
            <div class="form-group">
                <label for="formGroupExampleInput2">単打数</label>
                <input v-model.number="hit1" type="number" min="0" max="1000" step="1" class="form-control">
            </div>
            <div class="form-group">
                <label for="formGroupExampleInput2">二塁打数</label>
                <input v-model.number="hit2" type="number" min="0" max="1000" step="1" class="form-control">
            </div>
            <div class="form-group">
                <label for="formGroupExampleInput2">三塁打数</label>
                <input v-model.number="hit3" type="number" min="0" max="1000" step="1" class="form-control">
            </div>
            <div class="form-group">
                <label for="formGroupExampleInput2">本塁打数</label>
                <input v-model.number="hit4" type="number" min="0" max="1000" step="1" class="form-control">
            </div>
            <div class="form-group">
                <label for="formGroupExampleInput2">四死球数</label>
                <input v-model.number="fourDeadBalls" type="number" min="0" max="1000" step="1" class="form-control">
            </div>
            <div class="form-group">
                <label for="formGroupExampleInput2">犠飛数</label>
                <input v-model.number="sacrificeFly" type="number" min="0" max="1000" step="1" class="form-control">
            </div>

            <h2>計算結果</h2>

            <table class="table table-striped">
                <tr>
                    <td>ヒット数</td><td>{{ hitNum }}</td>
                </tr>
                <tr>
                    <td>打率</td><td>{{ average }}</td>
                </tr>
                <tr>
                    <td>出塁率</td><td>{{ onBasePercentage }}</td>
                </tr>
                <tr>
                    <td>長打率</td><td>{{ sluggingPercentage }}</td>
                </tr>
                <tr>
                    <td>OPS</td><td>{{ ops }}</td>
                </tr>
            </table>

        </form>
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
      sacrificeFly: 0
    }
  },
  computed: {
      hitNum: function() {
          return this.hit1 + this.hit2 + this.hit3 + this.hit4;
      },
      average: function() {
          let average = this.hitNum / this.bat;
          return average.toFixed(3);
      },
      onBasePercentage: function() {
          let onBasePercentage = (this.hitNum + this.fourDeadBalls + this.sacrificeFly) / (this.bat + this.fourDeadBalls + this.sacrificeFly);
          return onBasePercentage.toFixed(3);
      },
      sluggingPercentage: function() {
          let baseHit = this.hit1 + (this.hit2 * 2) + (this.hit3 * 3) + (this.hit4 * 4)
          let sluggingPercentage = baseHit / this.bat;
          return sluggingPercentage.toFixed(3);
      },
      ops: function() {
            console.log(typeof(this.sluggingPercentage));
            let ops = Number(this.onBasePercentage) + Number(this.sluggingPercentage);
            return ops.toFixed(3);
      }
  }
}
</script>