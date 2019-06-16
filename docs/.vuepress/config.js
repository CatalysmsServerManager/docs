const sidebars = require('./sidebars');
const navs = require('./navs');

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
  plugins: ['@vuepress/back-to-top', 'vuepress-plugin-smooth-scroll', ['migrate', {
    targetDir: '_posts',
    downloadDir: '.vuepress/downloads',
    maxConcurrentTasks: 10,
    parseHTML($, render) {
      const article = $('#main')
      let title = article.find('#title-text').text().trim()
      let content = article.find('#main-content')[0];
      content = render(content).trim();

      return {
        frontmatter: {
          title,
        },
        filename: title.replace(/\\|\//g, ' ').replace(/!/g, '！'),
        content: `${content}`,
      }
    },
  }], ],
  themeConfig: {
    repo: 'CatalysmsServerManager/docs',
    repoLabel: 'Contribute',
    docsDir: 'docs',
    editLinks: true,
    lastUpdated: 'Last updated',
    locales: {
      '/': {
        lang: 'en',
        // text for the language dropdown
        selectText: 'Languages',
        // label for this locale in the language dropdown
        label: 'English',
        // text for the edit-on-github link
        editLinkText: 'Edit this page on GitHub',
        sidebar: sidebars['en'],
        nav: navs['en']
      },
      '/nl/': {
        lang: 'nl',
        selectText: 'Taal',
        label: 'Nederlands',
        editLinkText: 'Bewerk deze pagina op Github',
        sidebar: sidebars['nl'],
        nav: navs['nl']
      }
    }
  }
}