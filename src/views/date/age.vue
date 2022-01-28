<template>
    <div class="calculation">
        <ArticleText :title="title" :desc="desc" :article="date"></ArticleText>

        <input type="date" v-model="num1">

        <h2>計算結果</h2>
        <table class="table table-striped">
            <tr>
                <td>年齢</td>
                <td>{{ age }}歳</td>
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
          let birthdayStr = this.num1.replace("-", "").replace("-", "");
          
          if(isNaN(birthdayStr) || birthdayStr.length !== 8) {
              return "";
          }
          let d = new Date();
          let dStr = '' + d.getFullYear() + ('0'+ (d.getMonth() + 1)).slice(-2) + ('0' + d.getDate()).slice(-2);
          return Math.floor((parseInt(dStr)-parseInt(birthdayStr)) / 10000);
      }
  }
}
</script>
