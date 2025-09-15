<template>
  <div class="p-4">
    <footer class="bg-gray-900 rounded-3xl" aria-labelledby="footer-heading">
      <h2 id="footer-heading" class="sr-only">Footer</h2>
      <div class="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 lg:py-32">
        <div class="xl:grid xl:grid-cols-3 xl:gap-12">
          <div>
            <div class="flex items-center gap-2 text-white">
              <!-- <Logo class="h-7 w-auto" /> -->
              <p>Temu 全能宗师</p>
            </div>
            <p class="text-white text-sm mt-4">
              专业级跨境电商解决方案。
            </p>
          </div>
          <div class="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div class="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 class="text-sm font-semibold leading-6 text-white">
                  功能特色
                </h3>
                <ul role="list" class="mt-6 space-y-4">
                  <li v-for="item in navigation.features" :key="item.name">
                    <NuxtLink
                      :href="item.href"
                      class="text-sm leading-6 text-gray-300 hover:text-white"
                      >{{ item.name }}</NuxtLink
                    >
                  </li>
                </ul>
              </div>
              <div class="mt-10 md:mt-0">
                <h3 class="text-sm font-semibold leading-6 text-white">
                  技术支持
                </h3>
                <ul role="list" class="mt-6 space-y-4">
                  <li v-for="item in navigation.support" :key="item.name">
                    <NuxtLink
                      :href="item.href"
                      class="text-sm leading-6 text-gray-300 hover:text-white"
                      >{{ item.name }}</NuxtLink
                    >
                  </li>
                </ul>
              </div>
            </div>
            <div class="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 class="text-sm font-semibold leading-6 text-white">
                  资源中心
                </h3>
                <ul role="list" class="mt-6 space-y-4">
                  <li v-for="item in navigation.resources" :key="item.name">
                    <NuxtLink
                      :href="item.href"
                      class="text-sm leading-6 text-gray-300 hover:text-white"
                      >{{ item.name }}</NuxtLink
                    >
                  </li>
                </ul>
              </div>
              <div class="mt-10 md:mt-0">
                <h3 class="text-sm font-semibold leading-6 text-white">
                  法律条款
                </h3>
                <ul role="list" class="mt-6 space-y-4">
                  <li v-for="item in navigation.legal" :key="item.name">
                    <NuxtLink
                      :href="item.href"
                      class="text-sm leading-6 text-gray-300 hover:text-white"
                      >{{ item.name }}</NuxtLink
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
const navigation = {
  features: [
    { name: "商品管理", href: "#" },
    { name: "订单处理", href: "#" },
    { name: "库存同步", href: "#" },
    { name: "数据分析", href: "#" },
    { name: "多平台", href: "#" },
  ],
  support: [
    { name: "激活许可证", href: "/activate-license" },
    { name: "Discord", href: "#" },
    { name: "使用文档", href: "#" },
    { name: "联系我们", href: "#" },
    { name: "Telegram", href: "#" },
  ],
  resources: [
    { name: "关于我们", href: "#" },
    { name: "博客", href: "#" },
    { name: "开发工具", href: "#" },
    { name: "自托管", href: "#" },
  ],
  legal: [
    { name: "许可证", href: "#" },
    { name: "隐私政策", href: "#" },
    { name: "服务条款", href: "#" },
  ],
};
</script>
