module.exports = {
  title: 'Momentum Codex',
  tagline: 'Resources for your learning journey',
  url: 'https://momentum-codex.netlify.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'momentumlearn', // Usually your GitHub org/user name.
  projectName: 'codex', // Usually your repo name.
  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true
    },
    navbar: {
      title: 'Momentum Codex',
      logo: {
        alt: 'Momentum Logo',
        src: 'img/momentum__mark-digital-royal.png'
      },
      items: [
        // {
        //   to: 'docs/',
        //   activeBasePath: 'docs',
        //   label: 'Docs',
        //   position: 'left'
        // },
        // {
        //   href: 'https://github.com/momentumlearn/foundations',
        //   label: 'GitHub',
        //   position: 'right'
        // }
      ]
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            // {
            //   label: 'HTML',
            //   to: 'docs/html/intro'
            // }
          ]
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/himomentum'
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/school/momentum-learn/'
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/himomentum'
            },
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/himomentum/'
            }
          ]
        },
        {
          title: 'More',
          items: [
            {
              label: 'Momentum Homepage',
              href: 'https://www.momentumlearn.com/'
            }
          ]
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Momentum.`
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/momentumlearn/codex/edit/main/'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      }
    ]
  ]
}
