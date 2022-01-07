module.exports = {
  pages: {
    index: {
      entry: "src/main.js",
      title: "【自動でいろいろ計算できるサイト】天才マンボウ",
      description: "aaaaaaaaaaaaaa"
    }
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "./src/assets/scss/variables.scss";'
      }
    }
  }
}