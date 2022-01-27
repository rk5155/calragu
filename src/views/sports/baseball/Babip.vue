<template>
    <div class="calculation">
        <ArticleText :title="title" :desc="desc" :article="sports"></ArticleText>

        <form>
            <Calculation v-for="list in formList" :key="list.label" :list="list" v-model.number="$data[list.data]"></Calculation>
        </form>

        <h2>計算結果</h2>
        <table class="table table-striped">
            <tr>
                <td>BABIP</td>
                <td>{{ babip }}</td>
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
      num3: 0,
      num4: 0,
      num5: 0,
      formList: [
            { label: "安打", data: 'num1' },
            { label: "本塁打", data: 'num2' },
            { label: "打数", data: 'num3' },
            { label: "三振", data: 'num4' },
            { label: "犠飛", data: 'num5' },
        ]
    }
  },
  computed: {
      babip: function() {
          let babip = (this.num1 - this.num2) / (this.num3 - this.num4 - this.num2 + this.num5);
          return this.isNan(babip, 3)
      }
  }
}
</script>
