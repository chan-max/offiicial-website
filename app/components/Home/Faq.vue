<template>
  <div id="faq" class="py-24 px-4 relative">
    <div class="relative max-w-6xl mx-auto">
      <div class="mb-16">
        <h2
          class="max-w-2xl text-4xl sm:text-5xl font-semibold tracking-tight text-gray-900 font-display"
        >
          有问题？我们有答案！
        </h2>
        <p class="mt-12 max-w-2xl text-gray-600 text-2xl">
          如果您还有其他问题，请随时联系我：
          <button
            variant="link"
            class="underline"
            :padded="false"
            color="gray"
            @click="copy('fayaz@supersaas.dev')"
          >
            {{ copied ? "已复制到剪贴板" : "fayaz@supersaas.dev" }}
          </button>
          我很乐意为您提供帮助！
        </p>
      </div>
      <UAccordion
        :items="items"
        multiple
        color="gray"
        variant="soft"
        size="xl"
        :ui="{ item: { size: 'text-base leading-relaxed', padding: 'py-4 pl-4', base: 'max-w-3xl' } }"
      />
    </div>
  </div>
</template>

<script setup>
import { useClipboard } from "@vueuse/core";
const { copy, copied } = useClipboard();

const items = [
  {
    label: "我可以免费试用这个产品吗？",
    content:
      "您可以试用演示版本，也可以查看文档中的视频和教程，我会详细解释产品的每个功能。",
  },
  {
    label: "终身访问是什么意思？",
    content:
      "您将获得我推送到项目的所有更新和版本的访问权限。您也可以在GitHub上提出问题和功能请求。",
  },
  {
    label: "JavaScript还是TypeScript？",
    content:
      "Temu 全能宗师使用JavaScript构建，但一些工具是用TypeScript编写的。",
  },
  {
    label: "技术栈是什么？",
    content:
      "Temu 全能宗师使用Nuxt 3全栈框架、Tailwind CSS样式、Nuxt Auth Utils认证、Drizzle ORM数据库、AWS S3、Nuxthub Blob和本地存储文件存储、Stripe和Lemonsqueezy支付、Resend、Sendgrid、Postmark、Plunk邮件服务等。",
  },
  {
    label: "购买模板后会发生什么？",
    content:
      "购买模板后，您将被邀请到相应的GitHub仓库。然后您可以fork仓库并开始构建您的项目。",
  },
  {
    label: "你们提供退款吗？",
    content:
      "不幸的是，由于产品的性质，您将获得代码库的完全访问权限，我无法验证您是否使用过，因此无法提供退款。",
  },
  {
    label: "我不喜欢这个产品，而且没有使用过。可以退款吗？",
    content:
      "我强烈建议如果您对Temu 全能宗师有疑问，请联系我。我很乐意为您提供完整的产品介绍和使用方法。我也可以帮助您解决任何问题。这样您就可以决定是否要购买产品。",
  },
  {
    label: "我可以将Temu 全能宗师用于开源项目吗？",
    content: "不可以，这会违反许可证，希望您能理解。",
  },
  {
    label: "我可以将Temu 全能宗师用于客户项目吗？",
    content: "是的，您可以将其用于任意数量的项目。",
  },
  {
    label: "我可以将Temu 全能宗师用于商业项目吗？",
    content: "是的，Temu 全能宗师就是为此目的而制作的。",
  },
  {
    label: "我可以转售这个产品吗？",
    content: "绝对不可以，请阅读许可证了解详细信息。",
  },
  {
    label: "你们提供技术支持吗？",
    content:
      "是的，只要是与模板代码库相关的问题。我无法帮助您的业务逻辑或您可能进行的自定义修改。",
  },
];
</script>
