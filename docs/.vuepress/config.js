const sidebars = require("./sidebars");
const navs = require("./navs");

module.exports = {
  title: "CSMM",
  description: "Documentation for the web based 7 days to die server manager",
  theme: 'yuu',
  locales: {
    "/": {
      lang: "en-US"
    }
    /*     "/nl/": {
      lang: "nl",
      description: "Documentatie voor de web based 7 days to die server manager"
    } */
  },
  plugins: [
    'seo',
    "@vuepress/back-to-top",
    ['sitemap', {
      hostname: 'https://docs.csmm.app'
    }],
    ['plausible', { domain: 'docs.csmm.app' }],
  ],
  themeConfig: {
    yuu: {
      defaultDarkTheme: true,
      defaultColorTheme: 'blue',
      disableThemeIgnore: true,
    },
    repo: "CatalysmsServerManager/docs",
    repoLabel: "Contribute",
    docsDir: "docs",
    editLinks: true,
    lastUpdated: "Last updated",
    algolia: {
      apiKey: "90a9d46357cd912e096d7e15022689ff",
      indexName: "csmm"
    },
    locales: {
      "/": {
        lang: "en",
        // text for the language dropdown
        selectText: "Languages",
        // label for this locale in the language dropdown
        label: "English",
        // text for the edit-on-github link
        editLinkText: "Help us improve this page!",
        sidebar: sidebars["en"],
        nav: navs["en"]
      }
      /*       '/nl/': {
        lang: 'nl',
        selectText: 'Taal',
        label: 'Nederlands',
        editLinkText: 'Help ons deze pagina te verbeteren!',
        sidebar: sidebars['nl'],
        nav: navs['nl']
      } */
    }
  }
};
