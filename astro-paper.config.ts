import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://saiiijchan.github.io/",
    title: "Sai's Blog",
    description: "醉后不知天在水，满船清梦压星河",
    author: "Sai",
    profile: "https://github.com/Saiiijchan",
    ogImage: "default-og.jpg",
    lang: "zh-cn",
    timezone: "Asia/Shanghai",
    dir: "ltr",
  },
  posts: {
    perPage: 6,
    perIndex: 6,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: false,
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: true,
      url: "https://github.com/Saiiijchan/Saiiijchan.github.io/edit/master/",
    },
    search: "pagefind",
  },
  socials: [
    {
      name: "github",
      url: "https://github.com/Saiiijchan",
      linkTitle: "Sai 的 GitHub",
    },
    {
      name: "mail",
      url: "mailto:saisssss@163.com",
      linkTitle: "给 Sai 发邮件",
    },
  ],
});