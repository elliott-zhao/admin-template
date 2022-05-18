<script setup lang="ts">
// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
import { darkTheme } from 'naive-ui'
import { dateZhCN, zhCN } from 'naive-ui'
import { isDark, preferredDark, toggleDark } from '~/composables'

const { t, availableLocales, locale } = useI18n()

const localeMap = {
  'en': {
    locale: null,
    dateLocale: null,
  },
  'zh-CN': {
    locale: zhCN,
    dateLocale: dateZhCN,
  },
}

const nLocale = ref({
  locale: zhCN,
  dateLocale: dateZhCN,
})

const toggleLocales = () => {
  const locales = availableLocales
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
  nLocale.value = localeMap[locale.value]
}

useHead({
  title: 'Admin Template',
  meta: [
    { name: 'description', content: 'An Admin Template' },
    {
      name: 'theme-color',
      content: computed(() => isDark.value ? '#00aba9' : '#ffffff'),
    },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: computed(() => preferredDark.value ? '/favicon-dark.svg' : '/favicon.svg'),
    },
  ],
})

const theme = computed(() => isDark.value ? darkTheme : null)
</script>

<template>
  <n-config-provider :theme="theme" :locale="nLocale.locale" :date-locale="nLocale.dateLocale" class="h-full flex flex-col">
    <n-layout-header class="h-16 p-4 flex justify-between content-center" bordered>
      <div>
        管理平台模板
      </div>
      <div class="flex justify-end content-center">
        <button class="icon-btn mx-2 !outline-none" :title="t('button.toggle_dark')" @click="toggleDark()">
          <div i="carbon-sun dark:carbon-moon" />
        </button>

        <button class="icon-btn mx-2" :title="t('button.toggle_langs')" @click="toggleLocales">
          <div i-carbon-language />
        </button>
      </div>
    </n-layout-header>
    <RouterView />
    <n-layout-footer position="absolute" class="h-16 p-4 text-center" bordered>
      Copyright (c) 2022-2021 Elliott Zhao
    </n-layout-footer>
  </n-config-provider>
</template>
