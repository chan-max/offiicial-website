<template>
  <div class="max-w-xl mx-auto">
    <UContainer class="max-w-4xl py-12 space-y-6">
      <h1
        class="font-display text-4xl sm:text-5xl font-bold tracking-tight text-black"
      >
        激活许可证
      </h1>
      <p class="max-w-xl text-gray-600 text-xl">
        您需要激活许可证才能使用跨境商城大师。请输入您要激活许可证的GitHub用户名。
      </p>
      <UForm
        class="space-y-6"
        :schema="schema"
        :state="state"
        @submit="onSubmit"
      >
        <UFormGroup label="GitHub 用户名" name="username" required size="lg">
          <UInput placeholder="您的GitHub用户名" v-model="state.username" />
        </UFormGroup>
        <UFormGroup label="许可证密钥" name="licenseKey" required size="lg">
          <UInput placeholder="您的许可证密钥" v-model="state.licenseKey" />
        </UFormGroup>
        <UButton
          :loading="loading"
          :disabled="loading"
          type="submit"
          label="激活许可证"
          size="lg"
          color="black"
          block
        />
      </UForm>
    </UContainer>
    <UModal
      v-model="licenseActivated"
      :ui="{ rounded: 'rounded-2xl overflow-hidden' }"
    >
      <div class="p-2 bg-white">
        <div class="p-8 bg-gray-50 rounded-xl border border-gray-100 space-y-4">
          <Icon
            name="i-ph-check-circle-duotone"
            class="h-20 w-20 mx-auto block text-green-500 my-6"
          />
          <p class="text-lg font-bold text-center">
            许可证激活成功
          </p>
          <div
            class="p-2 border border-gray-200 text-center rounded-lg text-gray-600 font-semibold text-sm"
          >
            {{ state.licenseKey }}
          </div>
          <p
            class="text-gray-500 text-left md:text-center text-xs sm:text-sm flex items-center gap-2"
          >
            <UAvatar
              :src="`https://github.com/${state.username}.png`"
              size="xs"
            />
            {{ state.username }}
            已被授予访问我们GitHub仓库的权限。
          </p>
        </div>
        <div class="grid grid-cols-2 relative mt-1">
          <UButton
            variant="ghost"
            color="gray"
            block
            @click="copy('support@crossborder-master.com')"
            class="text-gray-400 font-normal"
          >
            {{ copied ? "已复制到剪贴板" : "support@crossborder-master.com" }}
          </UButton>
          <UDivider
            orientation="vertical"
            class="absolute left-1/2 -translate-x-1/2 h-5 top-1/2 -translate-y-1/2"
          />
          <UButton
            variant="ghost"
            color="gray"
            block
            to="https://github.com/crossborder-master/essentials"
            target="_blank"
            class="text-gray-400 font-normal"
          >
            打开GitHub
          </UButton>
        </div>
      </div>
    </UModal>
  </div>
</template>

<script setup>
import confetti from "canvas-confetti";
import { useClipboard } from "@vueuse/core";
import { toast } from "vue-sonner";
import { z } from "zod";
const route = useRoute();
const key = route.query.key;
const { lemonSqueezyUrl } = useRuntimeConfig().public;
const { copy, copied } = useClipboard();
const loading = ref(false);
const schema = z.object({
  username: z.string().min(1).max(39, "无效的用户名"),
  licenseKey: z.string().length(36, "无效的许可证密钥"),
});
const licenseActivated = ref(false);
const state = reactive({
  username: undefined,
  licenseKey: undefined,
});

async function onSubmit(event) {
  try {
    loading.value = true;
    await $fetch("/api/activate-license", {
      method: "POST",
      body: event.data,
    });
    licenseActivated.value = true;
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  } catch (error) {
    toast.error(error.data.message);
  } finally {
    loading.value = false;
  }
}

onMounted(() => {
  if (key) {
    state.licenseKey = key;
  }
});
</script>
