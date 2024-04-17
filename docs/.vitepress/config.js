export default {
  title: "Mobics Docs",
  themeConfig: {
    nav: [
      { text: "Οδηγός Web", link: "/guide/", activeMatch: "/guide/" },
      { text: "Εκπαίδευση", link: "/training/", activeMatch: "/training/" },
      { text: "Πόροι Αναφοράς", link: "/resources/", activeMatch: "/resources/" },
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
      "/training/": [
        { text: "Εισαγωγή", link: "/training/" },
        { text: "Εφαρμογή Node", link: "/training/nodeApp" },
        {
          text: "Βασικές Έννοιες",
          collapsed: false,
          items: [
            { text: "Αντιδραστικότητα - Reactivity", link: "/training/createApp" },
            // { text: "Chapter 1", link: "" },
            // { text: "Chapter 2", link: "" },
          ],
        },
      ],
      "/resources/": [
        { text: "Εισαγωγή", link: "/resources/" },
        {
          text: "Εργαλεία",
          collapsed: false,
          items: [
            { text: "VSCode", link: "/resources/vscode" },
            { text: "Vue Dev Tools", link: "/resources/vueDevTools" },
            { text: "Loom", link: "/resources/loom" },
            { text: "Notion", link: "/resources/notion" },
            { text: "Click Up", link: "/resources/clickUp" },
          ],
        },
        {
          text: "Βιβλιοθήκες",
          collapsed: false,
          items: [
            { text: "Vue Use", link: "/resources/vueUse" },
            { text: "Leaflet", link: "/resources/leaflet" },
            { text: "Vitepress", link: "/resources/vitepress" },
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
