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
    title: "真管用",
    quote:
      "核价、报名这些常用事儿都能一站搞定，来回折腾少了，用着顺手。",
    author: {
      name: "邹良栋",
      description: "跨境商家店主",
      avatar: {
        src: "https://randomuser.me/api/portraits/men/12.jpg",
        loading: "lazy",
      },
    },
  },
  {
    title: "两分钟上手",
    quote:
      "页面清爽，批量功能一键就走，新人看两分钟就能上手。",
    author: {
      name: "金厚达",
      description: "电商运营",
      avatar: {
        src: "https://randomuser.me/api/portraits/men/15.jpg",
        loading: "lazy",
      },
    },
  },
  {
    title: "该有的都有",
    quote:
      "JIT、库存维护、限流查询都在，日常该用的功能基本齐了。",
    author: {
      name: "王旭辉",
      description: "前端工程师",
      avatar: {
        src: "https://randomuser.me/api/portraits/men/5.jpg",
        loading: "lazy",
      },
    },
  },
  {
    title: "不绕弯",
    quote:
      "批量传实拍、报活动都不绕圈子，步骤清楚，配图配文也不耽误。",
    author: {
      name: "王丽华",
      description: "视觉设计师",
      avatar: {
        src: "https://randomuser.me/api/portraits/women/48.jpg",
        loading: "lazy",
      },
    },
  },
  {
    title: "数据一清二楚",
    quote:
      "SKC、多站点、动销、流量都能导，周报直接套模板，复盘一目了然。",
    author: {
      name: "武东宇",
      description: "数据分析师",
      avatar: {
        src: "https://randomuser.me/api/portraits/men/23.jpg",
        loading: "lazy",
      },
    },
  },
  {
    title: "稳稳的",
    quote:
      "定时任务一直按点跑，自动备货、批量下架都稳，我们就不用盯着了。",
    author: {
      name: "张昭",
      description: "跨境小团队负责人",
      avatar: {
        src: "https://randomuser.me/api/portraits/men/31.jpg",
        loading: "lazy",
      },
    },
  },
  {
    title: "时间直接砍半",
    quote:
      "每天上新、核价、导表一条线走下来二十来分钟，之前最少要一小时。",
    author: {
      name: "李明哲",
      description: "运营助理",
      avatar: {
        src: "https://randomuser.me/api/portraits/men/27.jpg",
        loading: "lazy",
      },
    },
  },
  {
    title: "对起来不费劲",
    quote:
      "导出的字段够全，和我们现成的表头能直接对上，沟通成本低。",
    author: {
      name: "陈晓雨",
      description: "客服专员",
      avatar: {
        src: "https://randomuser.me/api/portraits/women/10.jpg",
        loading: "lazy",
      },
    },
  },
  {
    title: "库存心里有数",
    quote:
      "缺货预警、库存维护放一起，看一眼就知道哪里要补，出错少多了。",
    author: {
      name: "周婷婷",
      description: "仓库管理员",
      avatar: {
        src: "https://randomuser.me/api/portraits/women/37.jpg",
        loading: "lazy",
      },
    },
  },
  {
    title: "报名不折腾",
    quote:
      "批量报活动配合拒绝调价，用起来节奏稳，跟得上平台节奏，不用加班赶。",
    author: {
      name: "刘志强",
      description: "跨境采购",
      avatar: {
        src: "https://randomuser.me/api/portraits/men/18.jpg",
        loading: "lazy",
      },
    },
  },
];
</script>

<style></style>
