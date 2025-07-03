import TakaroBanner from './components/TakaroBanner.vue'

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  // Register the TakaroBanner component globally
  Vue.component('TakaroBanner', TakaroBanner)
  
  // Inject the banner into every page
  if (typeof window !== 'undefined') {
    Vue.mixin({
      mounted() {
        // Only add banner to the root component
        if (this.$parent === null) {
          // Create a container for the banner
          const bannerContainer = document.createElement('div')
          bannerContainer.id = 'takaro-banner-container'
          
          // Insert it at the beginning of the body
          document.body.insertBefore(bannerContainer, document.body.firstChild)
          
          // Mount the banner component
          const BannerConstructor = Vue.extend(TakaroBanner)
          new BannerConstructor().$mount('#takaro-banner-container')
        }
      }
    })
  }
}