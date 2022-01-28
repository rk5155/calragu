<template>
    <div class="calculation">
        <ArticleText :title="title" :desc="desc" :article="date"></ArticleText>

        <input type="date" v-model="num1">

        <h2>計算結果</h2>
        <table class="table table-striped">
            <tr>
                <td>小学校入学</td>
                <td>{{ age[0] }}年4月</td>
            </tr>
            <tr>
                <td>中学校入学</td>
                <td>{{ age[1] }}年4月</td>
            </tr>
            <tr>
                <td>高校入学</td>
                <td>{{ age[2] }}年4月</td>
            </tr>
            <tr>
                <td>大学入学</td>
                <td>{{ age[3] }}年4月</td>
            </tr>
        </table>
    </div>
</template>

<script>
import getTitle from '@/getTitle'
import ArticleText from "@/components/ArticleText.vue"
import articles from '@/mixins/articles.js'

export default {
  components: {
    ArticleText
  },
  mixins: [ getTitle, articles ],
  data () {
    return {
      num1: "",
      formList: [
            { label: "誕生日", data: 'num1' },
        ]
    }
  },
  computed: {
      age: function() {
          let date = new Date(this.num1);
          let month = date.getMonth() + 1
          let primarySchool = date.getFullYear() + 7
          let juniorHighSchool = date.getFullYear() + 13
          let highSchool = date.getFullYear() + 16
          let University = date.getFullYear() + 19

          if (month == 1 || month == 2 || month == 3) {
              primarySchool -= 1
              juniorHighSchool -= 1
              highSchool -= 1
              University -= 1
          }

          console.log(date);

          if (isNaN(primarySchool)) {
              return ""
          } else {
              return [primarySchool, juniorHighSchool, highSchool, University]
          }
      }
  }
}
</script>
