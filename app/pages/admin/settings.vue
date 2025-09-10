<template>
  <AdminPageContainer title="系统设置">
    <div class="space-y-12 mt-8">
      <AdminFormSection
        title="Telegram 通知"
        description="当有新订单创建时，向您发送包含订单详情的Telegram通知"
      >
        <div class="sm:col-span-4">
          <div class="flex items-center gap-2">
            <UToggle
              :model-value="enabled"
              :loading="loading"
              :disabled="loading"
              @change="toggleTelegramNotifications"
            />
            <p>{{ enabled ? "已启用" : "已禁用" }}</p>
          </div>
        </div>
      </AdminFormSection>
      <AdminFormSection
        title="网站横幅"
        description="在页面顶部显示横幅。用于推广产品或发布公告。"
      >
        <UForm :schema="bannerSchema" :state="bannerState" class="space-y-4 col-span-4" @submit="onBannerSubmit">
          <div class="sm:col-span-4">
            <UToggle
              v-model="bannerState.enabled"
              :loading="bannerLoading"
              :disabled="bannerLoading"
            />
            <p>{{ bannerState.enabled ? "已启用" : "已禁用" }}</p>
          </div>
          <div class="sm:col-span-4">
            <UFormGroup
              label="标题"
              name="title"
              size="lg"
              help="以粗体显示，保持简短 1-2 个词"
            >
              <UInput v-model="bannerState.title" :disabled="!bannerState.enabled" />
            </UFormGroup>
          </div>
          <div class="sm:col-span-4">
            <UFormGroup label="副标题" name="subtitle" size="lg">
              <UInput v-model="bannerState.subtitle" :disabled="!bannerState.enabled" />
            </UFormGroup>
          </div>
          <div class="sm:col-span-4">
            <UButton type="submit" label="保存" size="lg" :loading="bannerLoading" />
          </div>
        </UForm>
      </AdminFormSection>
    </div>
  </AdminPageContainer>
</template>

<script setup>
import { z } from 'zod'
import { toast } from "vue-sonner";

const { data: enabled } = await useFetch("/api/admin/telegram-notifications");
const loading = ref(false);

const bannerSchema = z.object({
  enabled: z.boolean(),
  title: z.string().max(50, 'Title must be 50 characters or less'),
  subtitle: z.string().max(100, 'Subtitle must be 100 characters or less')
});

const { data: bannerData } = await useFetch("/api/website-banner");
const bannerState = reactive({
  enabled: bannerData.value?.enabled || false,
  title: bannerData.value?.title || '',
  subtitle: bannerData.value?.subtitle || ''
});

const bannerLoading = ref(false);

const toggleTelegramNotifications = async () => {
  loading.value = true;
  await $fetch("/api/admin/telegram-notifications", {
    method: "PATCH",
    body: {
      enabled: !enabled.value,
    },
  });
  loading.value = false;
  enabled.value = !enabled.value;
  toast.success(
    `Telegram 通知已${enabled.value ? "启用" : "禁用"}`
  );
};

const onBannerSubmit = async (event) => {
  bannerLoading.value = true;
  try {
    await $fetch("/api/admin/website-banner", {
      method: "PATCH",
      body: event.data,
    });
    toast.success("网站横幅设置已更新");
  } catch (error) {
    toast.error("更新网站横幅设置失败");
  } finally {
    bannerLoading.value = false;
  }
};
</script>
