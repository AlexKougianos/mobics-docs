export default {
  title: "Mobics Docs",
  themeConfig: {
    nav: [
      { text: "Οδηγός Web", link: "/guide/", activeMatch: "/guide/" },
      { text: "Πόροι", link: "/resources/" },
      { text: "Εκπαίδευση", link: "/training/" },
    ],
    sidebar: {
      "/guide/": [
        {
          text: "Εισαγωγή",
          collapsed: false,
          items: [
            { text: "Πρώτα Βήματα", link: "/guide/" },
            { text: "Νέα Εφαρμογή", link: "/guide/newApp" },
          ],
        },
        {
          text: "Μοτίβα",
          collapsed: false,
          items: [
            { text: "Layout", link: "/guide/patterns/layout" },
            { text: "Navigation", link: "/guide/patterns/navigation" },
            { text: "Loading State", link: "/guide/patterns/assets" },
            { text: "Typography", link: "/guide/patterns/typography" },
            { text: "Colors", link: "/guide/patterns/colors" },
            { text: "Form", link: "/guide/patterns/form" },
            { text: "Table", link: "/guide/patterns/table" },
            { text: "Info Card", link: "/guide/patterns/infoCard" },
            { text: "Assets", link: "/guide/patterns/assets" },
            { text: "Authentication", link: "/guide/patterns/authentication" },
          ],
        },
        {
          text: "Πρακτικές Συνέπειας",
          collapsed: false,
          items: [
            { text: "Βουέ Βουέ", link: "/guide/bestPractices/" },
            { text: "Conventional Commits", link: "/guide/bestPractices/" },
            { text: "UX", link: "/guide/bestPractices/" },
          ],
        },
      ],
      "/resources/": [
        { text: "Εισαγωγή", link: "/resources/" },
        {
          text: "Εργαλεία",
          collapsed: false,
          items: [
            { text: "VSCode", link: "/guide/utilities/vscode" },
            { text: "Vue Dev Tools", link: "/guide/utilities/vueDevTools" },
            { text: "Loom", link: "/guide/utilities/loom" },
            { text: "Notion", link: "/guide/utilities/notion" },
            { text: "Click Up", link: "/guide/utilities/clickUp" },
          ],
        },
        {
          text: "Βιβλιοθήκες",
          collapsed: false,
          items: [
            { text: "Vue Use", link: "/guide/utilities/vueUse" },
            { text: "Vitepress", link: "/guide/utilities/vitepress" },
          ],
        },
      ],
      "/training/": [
        { text: "Εισαγωγή", link: "/training/" },
        {
          text: "Νέα Εφαρμογή",
          collapsed: false,
          items: [
            { text: "Εισαγωγή", link: "" },
            { text: "Chapter 1", link: "" },
            { text: "Chapter 2", link: "" },
          ],
        },
      ],
    },
    search: {
      provider: "local",
    },
  },
  ignoreDeadLinks: true
};
