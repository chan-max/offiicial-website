<script setup>
import { z } from "zod";
import { toast } from "vue-sonner";

const loading = ref(false);
const { fetch: refreshSession } = useUserSession();

const schema = z.object({
  password: z.string().min(1, "密码是必需的"),
});

const state = reactive({
  password: undefined,
});

async function login(event) {
  try {
    loading.value = true;
    await $fetch("/api/login", {
      method: "POST",
      body: { password: event.data.password },
    });
    await refreshSession();
    return navigateTo("/admin");
  } catch (error) {
    loading.value = false;
    toast.error(error.data.message || "出现错误");
  }
}
</script>

<template>
  <main class="h-screen flex items-center justify-center">
    <UForm :schema="schema" :state="state" class="space-y-4" @submit="login">
      <UFormGroup name="password" size="lg">
        <UInput
          v-model="state.password"
          type="password"
          placeholder="密码"
        />
      </UFormGroup>

      <UButton
        :loading="loading"
        :disabled="loading"
        type="submit"
        block
        size="lg"
      >
        登录
      </UButton>
    </UForm>
  </main>
</template>
