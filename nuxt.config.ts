// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-07-30",
  future: { compatibilityVersion: 4 },
  modules: [
    "@nuxthub/core",
    "@nuxt/ui",
    "@nuxt/scripts",
    "@nuxt/fonts",
    "nuxt-auth-utils",
    "@nuxt/image",
    "@nuxt/icon",
  ],
  app: {
    head: {
      htmlAttrs: {
        lang: "zh-CN",
      },
      title: "Temu 全能宗师 - 专业级跨境电商解决方案",
      meta: [
        { name: "description", content: "Temu 全能宗师是专业的跨境电商管理系统，提供商品管理、订单处理、库存同步、数据分析、多平台管理等全套解决方案，助力跨境电商业务快速发展。" },
        { name: "keywords", content: "跨境电商,商品管理,订单处理,库存同步,数据分析,多平台管理,跨境物流,支付结算,客户管理,营销推广,SaaS工具包" },
        { property: "og:title", content: "Temu 全能宗师 - 专业级跨境电商解决方案" },
        { property: "og:description", content: "专业的跨境电商管理系统，提供商品管理、订单处理、库存同步、数据分析、多平台管理等全套解决方案。" },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "Temu 全能宗师 - 专业级跨境电商解决方案" },
        { name: "twitter:description", content: "专业的跨境电商管理系统，提供商品管理、订单处理、库存同步、数据分析、多平台管理等全套解决方案。" }
      ],
      link: [
        {
          rel: "icon",
          type: "image/svg+xml",
          href: "/favicon.svg",
        },
      ],
    },
  },
  hub: {
    kv: true,
  },
  colorMode: {
    preference: "light",
  },
  fonts: {
    families: [
      {
        name: "Recoleta",
        provider: "local",
        weights: ["700"],
      },
    ],
  },
  runtimeConfig: {
    session: {
      maxAge: 60 * 60 * 24 * 7,
    },
    LEMONSQUEEZY_API_KEY: process.env.LEMONSQUEEZY_API_KEY,
    LEMONSQUEEZY_STORE_ID: process.env.LEMONSQUEEZY_STORE_ID,
    lemonSqueezyWebhookSecret: process.env.LEMONSQUEEZY_WEBHOOK_SECRET,
    githubOwner: process.env.GITHUB_OWNER,
    githubToken: process.env.GITHUB_TOKEN,
    githubRepo: process.env.GITHUB_REPO,
    telegramBotToken: process.env.TELEGRAM_BOT_TOKEN,
    telegramChatId: process.env.TELEGRAM_CHAT_ID,
    public: {
      productUrl: process.env.LEMONSQUEEZY_PRODUCT_URL,
    },
  },
  devtools: { enabled: true },
});