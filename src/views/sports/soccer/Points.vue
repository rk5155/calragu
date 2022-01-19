<template>
    <div class="calculation">
        <h1>{{ title }}</h1>
        <p>サッカーワールドカップでは、予選はリーグ戦(総当り)で、予選上位による決勝トーナメントが行われます。</p>
        <p>リーグ戦では、勝ち、負けの他に、引き分けがあります。(決勝トーナメントでは、PK戦で決着を付けます。)順位は勝ち点で決まります。</p>
        <ul>
            <li>勝ち :  3 点</li>
            <li>引き分け : 1 点</li>
            <li>負け : 0 点</li>
        </ul>

        <form>
            <Calculation v-for="list in formList" :key="list.label" :list="list" v-model.number="$data[list.data]"></Calculation>
        </form>

        <h2>計算結果</h2>
        <p>{{ points }}</p>
    </div>
</template>

<script>
import Calculation from "../../../components/Calculation.vue"
import getTitle from '@/getTitle'

export default {
  components: {
    Calculation,
  },
  mixins: [ getTitle ],
  data () {
    return {
      num1: 0,
      num2: 0,
      num3: 0,
      formList: [
            { label: "勝ち数", data: 'num1' },
            { label: "引き分け数", data: 'num2' },
            { label: "負け", data: 'num3' }
        ]
    }
  },
  computed: {
      points: function() {
          return (this.num1 * 3) + this.num2;
      }
  },

}
</script>