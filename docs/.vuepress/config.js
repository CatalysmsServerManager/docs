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
  themeConfig: {
    lastUpdated: 'true',
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
        editLinks: true,
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