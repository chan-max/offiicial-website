<template>
  <div
    ref="stickySectionsContainer"
    class="max-w-6xl mx-auto lg:min-h-[var(--stick-items)] px-5 relative"
  >
    <div
      class="text-center static lg:absolute top-8 left-1/2 translate-x-0 lg:-translate-x-1/2 mb-8 lg:mb-0"
    >
      <h2
        class="mx-auto max-w-xl text-4xl sm:text-5xl font-semibold tracking-tight text-gray-900 font-display"
      >
        Temu 全能宗师拥有构建跨境电商系统所需的一切功能
      </h2>
      <p class="mx-auto mt-4 max-w-xl text-gray-600 text-2xl">
        专为轻松启动而设计。
      </p>
    </div>
    <div class="lg:sticky lg:top-0 lg:h-screen space-y-12 lg:space-y-0">
      <HomeStickyFeaturesSection
        title="用户认证"
        heading="简单的登录和用户管理"
        description="我们都熟悉编写认证逻辑的痛苦以及随之而来的各种用例。我想让它变得非常简单易用。"
      >
        <HomeStickyFeaturesVideo
          src="https://essentials.supersaas.dev/essentials_passkeys.mp4"
        />
      </HomeStickyFeaturesSection>
      <HomeStickyFeaturesSection
        title="支付管理"
        heading="简单的计费管理"
        description="支持Stripe和Lemonsqueezy，提供简单易用的统一组合式接口。"
      >
        <HomeStickyFeaturesVideo
          src="https://essentials.supersaas.dev/essentials_posts-subs.mp4"
        />
      </HomeStickyFeaturesSection>
      <HomeStickyFeaturesSection
        title="个人设置"
        heading="让用户更新个人信息"
        description="用户管理和更新个人设置的简单方式。不仅仅是功能，看起来也很美观。"
      >
        <HomeStickyFeaturesVideo
          src="https://essentials.supersaas.dev/essentials_settings.mp4"
        />
      </HomeStickyFeaturesSection>
      <HomeStickyFeaturesSection
        title="文件存储"
        heading="支持S3、本地文件存储和NuxtHub"
        description="统一的文件存储组合式接口，包含客户端上传、服务器上传等演示。"
      >
        <HomeStickyFeaturesVideo
          src="https://essentials.supersaas.dev/essentials_file-storage.mp4"
        />
      </HomeStickyFeaturesSection>
      <HomeStickyFeaturesSection
        title="管理后台"
        heading="美观的管理面板"
        description="管理用户、封禁用户、管理订阅。查看候补名单提交。查看所有来自Stripe或Lemonsqueezy的交易。一站式管理"
      >
        <HomeStickyFeaturesVideo
          src="https://essentials.supersaas.dev/essentials_admin.mp4"
        />
      </HomeStickyFeaturesSection>
    </div>
  </div>
</template>

<script setup>
const stickySectionsContainer = ref(null);

onMounted(() => {
  const stickySectionsInstance = new StickySections(
    stickySectionsContainer.value
  );
  window.addEventListener("scroll", stickySectionsInstance.onScroll);

  onBeforeUnmount(() => {
    window.removeEventListener("scroll", stickySectionsInstance.onScroll);
  });
});

class StickySections {
  constructor(containerElement) {
    this.container = {
      el: containerElement,
      height: 0,
      top: 0,
      bottom: 0,
    };
    this.sections = Array.from(this.container.el.querySelectorAll("section"));
    this.viewportTop = 0;
    this.activeIndex = 0;
    this.scrollValue = 0; // Scroll value of the sticky container
    this.onScroll = this.onScroll.bind(this);
    this.initContainer = this.initContainer.bind(this);
    this.handleSections = this.handleSections.bind(this);
    this.remapValue = this.remapValue.bind(this);
    this.init();
  }

  onScroll() {
    this.handleSections();
  }

  initContainer() {
    this.container.el.style.setProperty(
      "--stick-items",
      `${this.sections.length + 1}00vh`
    );
    this.container.el.classList.add("[&_*]:!transition-none");
    setTimeout(() => {
      this.container.el.classList.remove("[&_*]:!transition-none");
    }, 1);
  }

  handleSections() {
    this.viewportTop = window.scrollY;
    this.container.height = this.container.el.clientHeight;
    this.container.top = this.container.el.offsetTop;
    this.container.bottom = this.container.top + this.container.height;

    if (this.container.bottom <= this.viewportTop) {
      // The bottom edge of the stickContainer is above the viewport
      this.scrollValue = this.sections.length + 1;
    } else if (this.container.top >= this.viewportTop) {
      // The top edge of the stickContainer is below the viewport
      this.scrollValue = 0;
    } else {
      // The stickContainer intersects with the viewport
      this.scrollValue = this.remapValue(
        this.viewportTop,
        this.container.top,
        this.container.bottom,
        0,
        this.sections.length + 1
      );
    }
    this.activeIndex =
      Math.floor(this.scrollValue) >= this.sections.length
        ? this.sections.length - 1
        : Math.floor(this.scrollValue);

    this.sections.forEach((section, i) => {
      if (i === this.activeIndex) {
        section.style.setProperty("--stick-visibility", "1");
        section.style.setProperty("--stick-scale", "1");
      } else {
        section.style.setProperty("--stick-visibility", "0");
        section.style.setProperty("--stick-scale", ".8");
      }
    });
  }

  // This function remaps a value from one range to another range
  remapValue(value, start1, end1, start2, end2) {
    const remapped =
      ((value - start1) * (end2 - start2)) / (end1 - start1) + start2;
    return remapped > 0 ? remapped : 0;
  }

  init() {
    this.initContainer();
    this.handleSections();
  }
}
</script>
