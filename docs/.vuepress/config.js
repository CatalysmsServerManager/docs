module.exports = {
  title: 'CSMM',
  description: 'Documentation for the web based 7 days to die server manager',
  locales: {
    '/': {
      lang: 'en-US'
    },
    '/nl/': {
      lang: 'nl',
      description: 'Documentatie voor de web based 7 days to die server manager',
    }
  },
  ga: 'UA-104087733-8',
  plugins: ['@vuepress/back-to-top'],
  themeConfig: {
    repo: 'CatalysmsServerManager/docs',
    repoLabel: 'Contribute!',
    docsDir: 'docs',
    editLinks: true,
    lastUpdated: 'Last updated',
    nav: [{
        text: 'Home',
        link: '/'
      },
      {
        text: 'Discord',
        link: 'https://catalysm.net/discord/'
      },
    ],

    locales: {
      '/': {
        // text for the language dropdown
        selectText: 'Languages',
        // label for this locale in the language dropdown
        label: 'English',
        // text for the edit-on-github link
        editLinkText: 'Edit this page on GitHub',
        sidebar: [
          '/',
          {
            title: 'Installation',
            children: [
              '/installation',
              '/allocs',
            ]
          },
        ],
      },
      '/nl/': {
        selectText: 'Taal',
        label: 'Nederlands',
        editLinkText: 'Bewerk deze pagina op Github',
        sidebar: [
          '/nl/',
          '/nl/installation',
        ],
      }
    }
  }
}