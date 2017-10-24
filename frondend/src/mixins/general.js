export default {
  methods: {
    // generate a filepath for webpack
    getImageAssetFilePath (filename) {
      return require('@/assets/imgs/' + filename)
    },
    // generate a filepath for webpack
    getImageStaticFilePath (filename) {
      return '/static/imgs/' + filename
    },
    jumpTo (destination) {
      this.$router.push({name: destination})
    }
  }
}
