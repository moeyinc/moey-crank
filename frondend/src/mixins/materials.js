export default {
  mounted () {
    this.applyShadow()
  },
  methods: {
    // apply a shadow based on the material's elevation
    applyShadow () {
      if (this.elev !== undefined) {
        // remove existing shadow classes
        for (let i = 0; i <= 24; i++) {
          this.$el.classList.remove('md-' + i + 'dp')
        }
        // apply shadow
        this.$el.classList.add('md-' + this.elev + 'dp')
      }
    },
    // resize the entire page
    resizePage (size) {
      this.$el.style.transformOrigin = '0 0'
      this.$el.style.transform       = 'scale(' + size.zoom + ')'
    }
  }
}
