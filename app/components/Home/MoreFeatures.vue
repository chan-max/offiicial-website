<template>
  <div class="max-w-5xl mx-auto">
    <h2
      class="text-4xl text-slate-900 font-extrabold font-display text-center mb-4 my-24 lg:my-4 px-4 lg:px-0"
    >
      您还在犹豫吗？
      <span class="md:block">需要更多功能？</span>
    </h2>
    <ClientOnly>
      <Vue3Marquee :duration="180" class="marquee-container">
        <div
          v-for="item in items"
          :key="item"
          class="flex-shrink-0 metal-shadow bg-white rounded-lg px-3 py-2 mx-2 my-2 text-gray-600 font-medium"
        >
          {{ item }}
        </div>
      </Vue3Marquee>
      <Vue3Marquee
        :duration="180"
        direction="reverse"
        class="marquee-container"
      >
        <div
          v-for="item in items"
          :key="item"
          class="flex-shrink-0 metal-shadow bg-white rounded-lg px-3 py-2 mx-2 my-2 text-gray-600 font-medium"
        >
          {{ item }}
        </div>
      </Vue3Marquee>
    </ClientOnly>
  </div>

  <div
    class="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12 px-4 lg:px-0"
    ref="target"
  >
    <div
      v-for="experience in experiences"
      :key="experience.title"
      class="rounded-2xl p-8 flex flex-col border-4 border-white metal-shadow text-white"
      :class="getExperienceClasses(experience)"
    >
      <h3 class="text-4xl font-bold tracking-tight font-display mb-8">
        {{ experience.title }}
      </h3>
      <p class="mt-auto text-lg">{{ experience.description }}</p>
    </div>
  </div>
</template>

<script setup>
import { useElementVisibility } from "@vueuse/core";

const target = ref(null);
const targetIsVisible = useElementVisibility(target, {
  threshold: 0.75,
});

const experiences = [
  {
    title: "持续更新",
    description:
      "我们的代码库始终保持最新状态。我亲自确保每段代码在发布前都经过审查。",
    color: "bg-rose-500",
    initialPosition: "translate-x-0 lg:translate-x-[80px]",
    initialRotate: "rotate-0 lg:rotate-2",
  },
  {
    title: "最佳实践",
    description:
      "我遵循最佳实践和标准，确保代码库保持可维护性和可扩展性。",
    color: "bg-emerald-500",
    initialPosition: "translate-x-0 lg:translate-x-[40px]",
    initialRotate: "rotate-0 lg:-rotate-2",
  },
  {
    title: "详细文档",
    description:
      "提供详细的文档和视频说明功能，让开发者轻松理解和使用。",
    color: "bg-cyan-500",
    initialPosition: "translate-x-0 lg:translate-x-[-40px]",
    initialRotate: "rotate-0 lg:rotate-2",
  },
  {
    title: "易于定制",
    description:
      "Temu 全能宗师提供易于定制的功能，通过合理的抽象设计，让开发者能够根据特定需求进行定制。",
    color: "bg-indigo-500",
    initialPosition: "translate-x-0 lg:translate-x-[-80px]",
    initialRotate: "rotate-0 lg:-rotate-2",
  },
];
const items = [
  "商品管理",
  "订单处理",
  "库存同步",
  "数据分析",
  "多平台管理",
  "跨境物流",
  "支付结算",
  "客户管理",
  "营销推广",
  "供应商管理",
  "商品分类",
  "价格策略",
  "库存预警",
  "销售统计",
  "客户分析",
  "竞品监控",
  "自动补货",
  "多语言支持",
  "移动端适配",
  "API集成",
  "数据安全",
  "实时同步",
  "批量操作",
  "自定义报表",
  "邮件通知",
  "短信提醒",
  "多店铺管理",
  "权限管理",
  "操作日志",
];

const getExperienceClasses = computed(() => (experience) => [
  experience.color,
  !targetIsVisible.value
    ? [experience.initialPosition, experience.initialRotate]
    : null,
  "transition-all duration-500 ease-spring",
]);
</script>

<style scoped>
.marquee-container {
  --mask: linear-gradient(
      to right,
      rgba(0, 0, 0, 0) 0,
      rgba(0, 0, 0, 0) 5%,
      rgba(0, 0, 0, 1) 20%,
      rgba(0, 0, 0, 1) 80%,
      rgba(0, 0, 0, 0) 95%,
      rgba(0, 0, 0, 0) 0
    )
    100% 50% / 100% 100%;

  -webkit-mask: var(--mask);
  mask: var(--mask);
}

.ease-spring {
  transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1.75);
}
</style>
