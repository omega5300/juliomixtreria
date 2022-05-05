// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

require('dotenv').config();

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const currentYear = new Date().getFullYear();

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Juliomixtreria',
  tagline: 'desarrollador multimedia',
  url: 'https://julio-mixtreria.web.app',
  customFields: {
    emailID: process.env.EMAIL_ID,
    templateID: process.env.TEMPLATE_ID,
    publicKey: process.env.PUBLIC_KEY,
  },
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'omega5300', // Usually your GitHub org/user name.
  projectName: 'juliomixtreria-web', // Usually your repo name.
  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
    localeConfigs: {
      es: {
        htmlLang: 'es-CO',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        blog: {
          showReadingTime: true,
          blogSidebarTitle: 'Todas la publicaciónes',
          blogSidebarCount: 'ALL',
          feedOptions: {
            type: 'all',
            copyright: `Copyright © ${currentYear}`,
          },
        },
        docs: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-sitemap',
      {
        id: 'sitemap-juliomixtreria',
        changefreq: 'weekly',
        priority: 0.5,
      },
    ],
    [
      '@docusaurus/plugin-pwa',
      {
        id: 'pwa-juliomixtreria',
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'queryString',
        ],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/logo.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json',
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: '#000000',
          },
        ],
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        {name: 'robots', content: 'index, follow'}
      ],
      navbar: {
        title: 'Juliomixtreria',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {to: '/photos', label: 'Fotos', position: 'left'},
          {to: '/tech-projects', label: 'projectos tecnologia', position: 'left'},
          {to: '/sublimacion', label: 'sublimación', position: 'left'},
          {to: '/blog', label: 'Blog', position: 'left'},
          {to: '/about', label: 'Sobre mi', position: 'left'},
          {to: '/contact', label: 'Contacto', position: 'left'},
          {
            href: 'https://github.com/omega5300/juliomixtreria',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Comunidad',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/kTsGGa4535',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/omega5300',
              },
              {
                label: 'instagram principal',
                href: 'https://instagram.com/juliomixtreria',
              },
              {
                label: 'instagram sublimacion',
                href: 'https://instagram.com/vasos_jc',
              },
            ],
          },
          {
            title: 'contacto',
            items: [
              {
                label: 'whatsapp',
                href: 'whatsapp://send?phone=+573107230981',
              },
              {
                label: 'email',
                href: 'mailto:omegamatrix5351@gmail.com',
              },
            ],
          },
          {
            title: 'Extras',
            items: [
              {
                label: 'mixtreria-radio',
                href: 'https://zeno.fm/radio/mixtreria-radio'
              },
              {
                label: 'bandcamp personal',
                href: 'https://bandcamp.com/omega5300'
              }
            ],
          },
        ],
        copyright: `Copyright julian "julio" cordoba© ${currentYear}.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
