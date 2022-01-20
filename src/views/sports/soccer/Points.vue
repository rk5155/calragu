<template>
    <div class="calculation">
        <template v-for="el in sports">
            <template v-if="el.title == title">
                <ArticleText :key="el.title" :title="el.title" :img='el.img' :p="el.text" :desc="desc"></ArticleText>
            </template>
        </template>

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