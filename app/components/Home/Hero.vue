<template>
  <section class="pt-20 pb-12">
    <HomeIcons />
    <h1
      class="text-4xl sm:text-6xl lg:text-7xl tracking-tight text-gray-800 font-bold text-center font-display max-w-4xl mx-auto"
    >
      专业级
      <span
        class="inline-flex flex-col h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] sm:h-[calc(theme(fontSize.6xl)*theme(lineHeight.tight))] lg:h-[calc(theme(fontSize.7xl)*theme(lineHeight.tight))] overflow-hidden"
      >
        <ul
          class="block text-left leading-tight [&_li]:block animate-text-slide-5"
        >
          <li>商品管理</li>
          <li>订单处理</li>
          <li>库存同步</li>
          <li>数据分析</li>
          <li>多平台</li>
          <li aria-hidden="true">商品管理</li>
        </ul>
      </span>
      <span class="block"> 跨境电商解决方案</span>
    </h1>
    
    <!-- 客户端下载区域 -->
    <div class="mt-8 max-w-2xl mx-auto">
      <div class="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200">
        <div class="text-center mb-6">
          <h2 class="text-2xl font-bold text-gray-800 mb-2">客户端下载</h2>
          <p class="text-gray-600">最新版本 {{ appData?.appVersionCode || 'v25.1' }}</p>
        </div>
        
        <!-- 下载按钮 -->
        <div class="mb-6">
          <button
            @click="downloadApp"
            :disabled="!appData?.appUrl || isDownloading"
            class="w-full bg-gradient-to-r from-gray-800 to-black hover:from-gray-900 hover:to-gray-800 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl disabled:shadow-none"
          >
            <Icon 
              :name="isDownloading ? 'i-ph-spinner-duotone' : 'i-ph-download-duotone'" 
              :class="['h-6 w-6', { 'animate-spin': isDownloading }]" 
            />
            <span>{{ isDownloading ? '正在下载...' : '立即下载客户端' }}</span>
            <Icon 
              v-if="!isDownloading"
              name="i-ph-arrow-down-duotone" 
              class="h-5 w-5" 
            />
          </button>
        </div>
        
        <!-- 下载统计 -->
        <div class="flex items-center justify-between text-sm text-gray-600 mb-4">
          <div class="flex items-center gap-2">
            <Icon name="i-ph-download-duotone" class="h-4 w-4" />
            <span>{{ appData?.appDownloadQuantity || 540 }} 次下载</span>
          </div>
          <div class="flex items-center gap-2">
            <Icon name="i-ph-clock-duotone" class="h-4 w-4" />
            <span>最新更新</span>
          </div>
        </div>
        
        <!-- 更新日志 -->
        <div v-if="appData?.appUpdateContent" class="bg-white rounded-lg p-4 border border-gray-200">
          <h3 class="font-semibold text-gray-800 mb-2 flex items-center gap-2">
            <Icon name="i-ph-note-duotone" class="h-5 w-5" />
            更新日志
          </h3>
          <p class="text-gray-600 text-sm leading-relaxed">{{ appData.appUpdateContent }}</p>
        </div>
      </div>
    </div>
    
    <div class="mt-8">
      <div
        class="max-w-max mx-auto rounded-xl bg-gray-100 ring-4 ring-gray-500/10 border p-1 space-y-2"
      >
        <BuyButton
          label="立即购买 ¥999"
          class="flex items-center justify-center w-full"
          size="md"
          rounded="lg"
        />
        <div class="p-1">
          <div class="flex items-center gap-2">
            <Icon name="i-ph-sparkle-duotone" class="h-5 w-6" />
            <p class="text-gray-800">
              <span class="font-semibold">限时优惠</span> 前100名用户享受特价
            </p>
          </div>
          <div class="flex items-center gap-2 mt-2">
            <UProgress
              :value="count"
              size="md"
              class="flex-1"
              aria-label="Progress of the offer"
            />
            <span class="text-xs text-gray-500">{{ count }}/100 已售出</span>
          </div>
        </div>
      </div>
    </div>
    <HomeTestimonial />
  </section>
</template>

<script setup>
defineProps({
  count: {
    type: Number,
    default: 0,
  },
});

// 响应式数据
const appData = ref(null);
const isLoading = ref(true);
const isDownloading = ref(false);

// 获取网站统计信息
const getWebsiteStats = async () => {
  const isDev = process.env.NODE_ENV === 'development';
  const baseUrl = isDev ? 'http://192.168.1.117:48080' : 'https://www.erp.iuufu.com/api';
  const url = `${baseUrl}/app-api/client/open/website/stats/info`;
  
  try {
    const response = await $fetch(url, {
      method: 'GET',
      headers: {
        'tenant-id': '1',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization, tenant-id'
      }
    });
    
    console.log('网站统计信息:', response);
    
    // 检查响应格式并提取data
    if (response && response.code === 0 && response.data) {
      appData.value = response.data;
    } else {
      console.warn('API响应格式异常:', response);
    }
  } catch (error) {
    console.error('获取网站统计信息失败:', error);
    // 设置默认值
    appData.value = {
      appUrl: '',
      appUpdateContent: 'Mr.陈',
      appVersionCode: 'v25.1',
      appDownloadQuantity: 540
    };
  } finally {
    isLoading.value = false;
  }
};

// 记录下载次数
const recordDownload = async () => {
  const isDev = process.env.NODE_ENV === 'development';
  const baseUrl = isDev ? 'http://192.168.1.117:48080' : 'https://www.erp.iuufu.com/api';
  const url = `${baseUrl}/app-api/client/open/website/stats/incr-download`;
  
  try {
    const response = await $fetch(url, {
      method: 'POST',
      headers: {
        'tenant-id': '1',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization, tenant-id'
      }
    });
    
    console.log('下载次数记录成功:', response);
    return true;
  } catch (error) {
    console.error('记录下载次数失败:', error);
    return false;
  }
};

// 下载应用
const downloadApp = async () => {
  if (!appData.value?.appUrl) {
    console.error('下载链接不可用');
    return;
  }
  
  // 设置下载状态
  isDownloading.value = true;
  
  try {
    // 先记录下载次数
    const recordSuccess = await recordDownload();
    
    if (recordSuccess) {
      // 创建下载链接（移除target="_blank"避免页面跳转）
      const link = document.createElement('a');
      link.href = appData.value.appUrl;
      link.download = `iuufu-client-${appData.value.appVersionCode}.apk`;
      // 移除 target="_blank" 避免页面跳转
      
      // 触发下载
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      console.log('开始下载:', appData.value.appUrl);
      
      // 更新本地下载数量
      if (appData.value.appDownloadQuantity) {
        appData.value.appDownloadQuantity += 1;
      }
    } else {
      console.warn('下载次数记录失败，但继续执行下载');
      // 即使记录失败也继续下载
      const link = document.createElement('a');
      link.href = appData.value.appUrl;
      link.download = `iuufu-client-${appData.value.appVersionCode}.apk`;
      // 移除 target="_blank" 避免页面跳转
      
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  } catch (error) {
    console.error('下载过程中出错:', error);
  } finally {
    // 延迟重置下载状态，让用户看到反馈
    setTimeout(() => {
      isDownloading.value = false;
    }, 1000);
  }
};

// 组件挂载时获取数据
onMounted(() => {
  getWebsiteStats();
});
</script>

<style>
.animate-text-slide-5 {
  animation: text-slide 12.5s cubic-bezier(0.83, 0, 0.17, 1) infinite;
}

@keyframes text-slide {
  0%,
  16% {
    transform: translateY(0%);
  }
  20%,
  36% {
    transform: translateY(-16.66%);
  }
  40%,
  56% {
    transform: translateY(-33.33%);
  }
  60%,
  76% {
    transform: translateY(-50%);
  }
  80%,
  96% {
    transform: translateY(-66.66%);
  }
  100% {
    transform: translateY(-83.33%);
  }
}
</style>
