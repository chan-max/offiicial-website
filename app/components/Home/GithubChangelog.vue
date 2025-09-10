<template>
  <div class="py-24 px-4 relative">
    <div class="relative max-w-6xl mx-auto">
      <div class="">
        <h2
          class="max-w-2xl text-4xl sm:text-5xl font-semibold text-gray-900 font-display"
        >
          我们更新频繁且快速。以下是最新动态。
        </h2>
        <p class="mt-4 max-w-2xl text-gray-600 text-2xl">
          通过GitHub API实时获取的真实提交记录。👇 
        </p>
      </div>
      <ul
        v-if="commits"
        class="mt-6 space-y-4 overflow-hidden relative"
        :class="showMore ? 'h-auto' : 'h-64'"
      >
        <li
          v-for="commit in commits"
          :key="commit.sha"
          class="flex items-end gap-2"
        >
          <p class="text-xs sm:text-base text-gray-600">{{ commit.message }}</p>
          <div class="flex-1 border border-dashed" />
          <UBadge color="gray"> {{ useTimeAgo(commit.date) }}</UBadge>
        </li>
        <li
          class="absolute bottom-0 w-full h-24 bg-gradient-to-t from-white to-transparent pointer-events-none"
        />
      </ul>
      <ul
        v-if="status === 'pending'"
        class="mt-6 space-y-4 overflow-hidden relative"
      >
        <li
          v-for="n in 10"
          :key="n"
          class="h-8 w-full bg-gray-100 rounded-lg"
        />
      </ul>
      <div class="mt-4">
        <UButton
          :label="showMore ? '收起' : '展开'"
          color="gray"
          variant="soft"
          @click="showMore = !showMore"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useTimeAgo } from "@vueuse/core";
const showMore = ref(false);
const { data: commits, status } = await useFetch("/api/repo-commits", {
  server: false,
  lazy: true,
});
</script>
