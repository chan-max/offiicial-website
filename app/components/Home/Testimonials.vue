<template>
  <div class="py-12 px-4 relative">
    <div class="relative max-w-6xl mx-auto">
      <div>
        <h2
          class="max-w-2xl text-4xl sm:text-5xl font-semibold tracking-tight text-gray-900 font-display"
        >
          用户对Temu 全能宗师的评价
        </h2>
        <p class="mt-4 max-w-xl text-gray-600 text-2xl">
          50+开发者正在生产环境中使用Temu 全能宗师发布应用。他们似乎很喜欢它。
        </p>
      </div>
      <div
        id="testimonials"
        class="column-1 md:columns-2 lg:columns-3 gap-8 space-y-8 xl:columns-4 scroll-mt-[calc(var(--header-height)+140px+128px+96px)] mt-12"
      >
        <div
          v-for="(testimonial, index) in testimonials"
          :key="index"
          class="break-inside-avoid"
        >
          <div class="p-6 metal-shadow bg-white rounded-xl">
            <p
              class="text-lg font-semibold leading-6 before:content-['“'] after:content-['”']"
            >
              {{ testimonial.title }}
            </p>
            <p class="mt-3 text-sm leading-7 text-gray-500">
              {{ testimonial.quote }}
            </p>
            <div class="flex items-center gap-2 mt-4">
              <UAvatar
                :src="testimonial.author.avatar.src"
                :alt="testimonial.author.name"
                size="md"
                loading="lazy"
              />
              <div>
                <p class="text-gray-600 font-medium">
                  {{ testimonial.author.name }}
                </p>
                <p class="text-gray-500 text-xs">
                  {{ testimonial.author.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const testimonials = [
  {
    title: "超级强大",
    quote:
      "Temu 全能宗师构建的技术栈非常强大且易于使用，特别是与NuxtHub / Cloudflare结合使用时。Fayaz在使其工作并采纳反馈方面非常有帮助。",
    author: {
      name: "Tim Pulver",
      description: "自由职业者/软件工程师",
      avatar: {
        src: "https://pbs.twimg.com/profile_images/985092522329468928/qcfeEMbF_400x400.jpg",
        loading: "lazy",
      },
    },
  },
  {
    title: "值得购买的功能",
    quote:
      "这真的很棒！特别是像passkey和所有功能的hooks这样的特性。这些就是我购买它的原因。",
    author: {
      name: "Rishi Mohan",
      description: "创始人, Pika.Style",
      avatar: {
        src: "https://pbs.twimg.com/profile_images/1792311421994147840/ZO_-Kmol_400x400.jpg",
        loading: "lazy",
      },
    },
  },
  {
    title: "太棒了",
    quote: "👆🏻 作为客户我可以确认，它太棒了 🔥",
    author: {
      name: "Thomas Sanlis",
      description: "创始人, Unned.best",
      avatar: {
        src: "https://essentials.supersaas.dev/thomas.jpg",
        loading: "lazy",
      },
    },
  },
  {
    title: "绝对的时间节省器",
    quote:
      "这绝对是一个时间节省器！如果你是自由职业者或经常构建项目，一定要试试这个！✨",
    author: {
      name: "Mushtaq Ahmed",
      description: "高级产品工程师, Locale.ai",
      avatar: {
        src: "https://pbs.twimg.com/profile_images/1823266963553964032/CTnrLhkL_400x400.jpg",
        loading: "lazy",
      },
    },
  },
  {
    title: "满意度100%",
    quote: "我对你的模板非常满意。谢谢！",
    author: {
      name: "Lilian",
      description: "软件工程师",
      avatar: {
        src: "",
        loading: "lazy",
      },
    },
  },
  {
    title: "简单而优秀",
    quote:
      "我在为我的副项目实现支付和认证功能时遇到了困难，直到我发现了Temu 全能宗师。它超级简单，包含了所有必要的东西，并且有适当的文档和抽象。我在一天内就成功发布了我的项目，不需要考虑所有复杂的集成工作，只需要专注于我的核心产品。如果这不算超级，我不知道什么才算。创始人的支持也很棒。他通过电话确保一切都能正确实施。",
    author: {
      name: "Sooraj",
      description: "后端工程师",
      avatar: {
        src: "https://pbs.twimg.com/profile_images/1823407485002113024/6pxHkYUj_400x400.jpg",
        loading: "lazy",
      },
    },
  },
  {
    title: "很喜欢！",
    quote:
      "制作精良。好消息！我正在使用Temu 全能宗师模板，体验非常棒！学到了很多。正在考虑用它来构建一些东西。很喜欢！",
    author: {
      name: "Alexandr Os",
      description: "工程师和创始人",
      avatar: {
        src: "https://pbs.twimg.com/profile_images/1811928265621229568/ejtIodY5_400x400.jpg",
        loading: "lazy",
      },
    },
  },
  {
    title: "为我节省了大量时间",
    quote:
      "我在我的副项目中使用这些。这为我节省了大量时间和精力。真的很高兴我购买了这个。",
    author: {
      name: "Attaullah F",
      description: "高级工程师, Cognizant",
      avatar: {
        src: "https://essentials.supersaas.dev/62116.jpg",
        loading: "lazy",
      },
    },
  },
];
</script>

<style></style>
