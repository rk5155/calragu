<template>
    <div class="calculation">
        <h2>WHIPの計算</h2>
        <p>WHIP = 与四球数 + 被安打数 ÷ 投球回数</p>
        <p>1イニングあたりに何人の走者を出しているかを算出しています。</p>

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
                
                <td v-if="result == 'WHIP'">{{ whip }}</td>
                <td v-else-if="result == 1">素晴らしい</td>
                <td v-else-if="result == 1.1">非常に良い</td>
                <td v-else-if="result == 1.25">平均以上</td>
                <td v-else-if="result == 1.32">平均</td>
                <td v-else-if="result == 1.4">平均以下</td>
                <td v-else-if="result == 1.5">悪い</td>
                <td v-else-if="result == 1.6">非常に悪い</td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
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
      resultList: ["WHIP", 1, 1.1, 1.25, 1.32, 1.4, 1.5, 1.6]
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
  },
  methods: {
      allWhite: function() {
          document.querySelectorAll(".table-striped tr td").forEach((el) => {
              el.style.backgroundColor = 'white';
          })
       },
       isActiveSelector: function(num) {
           document.querySelectorAll(`.table-striped tr:nth-child(${num}) td`).forEach((el) => {
              el.style.backgroundColor = '#F2F5A9';
          })
       
       }
  },
}
</script>

<style>
.active {
    background-color: rebeccapurple;
}
</style>