<template>
    <div class="calculation">
        <ArticleText :title="title" :desc="desc" :article="sports"></ArticleText>

        <form>
            <Calculation v-for="list in formList" :key="list.label" :list="list" v-model.number="$data[list.data]"></Calculation>
        </form>

        <h2>計算結果</h2>
        <table class="table table-striped">
            <tr>
                <td>防御率</td>
                <td>{{ defense }}</td>
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
            { label: "自責点", data: 'num1' },
            { label: "投球回数", data: 'num2' },
        ]
    }
  },
  computed: {
      defense: function() {
          let defense = (this.num1 * 9) / this.num2;
          return this.isNan(defense, 2)
      }
  }
}
</script>
