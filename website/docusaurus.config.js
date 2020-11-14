module.exports = {
  title: 'GopherEmon',
  tagline: 'ゴファえもん',
  url: 'https://zztkm.github.io',
  baseUrl: '/gopher-emon/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'zztkm', // Usually your GitHub org/user name.
  projectName: 'gopher-emon', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'GopherEmon',
      logo: {
        alt: 'Gopher Emon log',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        { to: 'blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/zztkm/gopher-emon',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'GopherEmon',
              to: 'docs/',
            },
            {
              label: 'CLI installation',
              to: 'docs/installation',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/tsurutaaaaaa_',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/zztkm/gopher-emon',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} zztkm. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          path: 'docs',
          editUrl:
            'https://github.com/zztkm/gopher-emon/edit/master/website/',
          remarkPlugins: [],
          rehypePlugins: [],
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,

        },
        blog: {
          showReadingTime: true,
          path: 'blog',
          editUrl:
            'https://github.com/zztkm/gopher-emon/edit/master/website/blog/',
          routeBasePath: 'blog',
          remarkPlugins: [],
          rehypePlugins: [],
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
