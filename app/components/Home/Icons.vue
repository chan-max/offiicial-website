<template>
  <div class="flex items-center justify-center gap-2 sm:gap-3 mb-12">
    <IconCard
      v-for="item in items"
      :key="item.label"
      :icon="item.icon"
      :color="item.color"
      :label="item.label"
      :rotate="item.rotate"
      :class="item.class"
    />
  </div>
</template>

<script setup>
const items = [
  {
    icon: "ph:chat-teardrop-duotone",
    color: "bg-red-500",
    label: "商品管理",
    rotate: "-rotate-6",
    class: "-rotate-12 translate-y-5",
  },
  {
    icon: "ph:image-square-duotone",
    color: "bg-indigo-500",
    label: "订单处理",
    rotate: "-rotate-3",
    class: "-rotate-6 translate-y-1",
  },
  {
    icon: "ph:smiley-sticker-duotone",
    color: "bg-green-500",
    label: "库存同步",
    rotate: "rotate-0",
    class: "",
  },
  {
    icon: "ph:microphone-duotone",
    color: "bg-teal-500",
    label: "数据分析",
    rotate: "rotate-3",
    class: "rotate-6 translate-y-1",
  },
  {
    icon: "ph:google-photos-logo-duotone",
    color: "bg-purple-500",
    label: "多平台",
    rotate: "rotate-6",
    class: "rotate-12 translate-y-5",
  },
];
</script>
