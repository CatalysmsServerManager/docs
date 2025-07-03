const sidebars = require("./sidebars");
const navs = require("./navs");

module.exports = {
  title: "CSMM",
  description: "Documentation for the web based 7 days to die server manager",
  theme: 'yuu',
  head: [
    ['script', {}, `
      if (typeof window !== 'undefined') {
        window.addEventListener('DOMContentLoaded', function() {
          if (!localStorage.getItem('takaro-banner-dismissed')) {
            const banner = document.createElement('div');
            banner.id = 'takaro-banner';
            banner.style.cssText = 'position: fixed; top: 3.6rem; left: 0; right: 0; z-index: 50; background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%); color: #fff; box-shadow: 0 2px 8px rgba(0,0,0,0.15); font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;';
            
            banner.innerHTML = \`
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 0.75rem 1.5rem; max-width: 1200px; margin: 0 auto;">
                <div style="flex: 1; font-size: 0.95rem; line-height: 1.5;">
                  <strong>🚀 Upgrade to Takaro!</strong> CSMM will be replaced by Takaro - a powerful, modern game server manager with enhanced features and better performance.
                </div>
                <div style="display: flex; align-items: center; gap: 1rem;">
                  <a href="https://takaro.io?utm_source=csmm-docs&utm_medium=banner&utm_campaign=sunset-notice&ref=csmm-docs" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; padding: 0.5rem 1rem; background: rgba(255, 255, 255, 0.2); color: #fff; text-decoration: none; border-radius: 4px; font-weight: 500; transition: all 0.2s ease;">
                    Learn More →
                  </a>
                  <button onclick="document.getElementById('takaro-banner').style.display='none'; localStorage.setItem('takaro-banner-dismissed', 'true'); document.body.style.paddingTop = '';" style="display: inline-flex; align-items: center; justify-content: center; width: 32px; height: 32px; padding: 0; background: transparent; border: none; color: #fff; font-size: 1.2rem; cursor: pointer; border-radius: 4px;">
                    ✕
                  </button>
                </div>
              </div>
            \`;
            
            document.body.insertBefore(banner, document.body.firstChild);
            // Add padding to push content below both navbar (3.6rem) and banner (~3.6rem)
            const navbar = document.querySelector('.navbar');
            if (navbar) {
              const navbarHeight = navbar.offsetHeight;
              const bannerHeight = 60; // approximate banner height
              document.body.style.paddingTop = (navbarHeight + bannerHeight) + 'px';
            } else {
              document.body.style.paddingTop = '110px'; // fallback: ~3.6rem + ~3.6rem
            }
          }
        });
      }
    `]
  ],
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
