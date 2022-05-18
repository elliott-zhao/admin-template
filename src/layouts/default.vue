<script setup lang="ts">
import { routerMenu } from '~/composables'
const collapsed = ref(true)
</script>

<template>
  <n-layout position="absolute" class="!top-16 !bottom-16" has-sider>
    <n-layout-sider
      bordered
      collapse-mode="width"
      :collapsed-width="64"
      :width="240"
      :collapsed="collapsed"
      show-trigger
      @collapse="collapsed = true"
      @expand="collapsed = false"
    >
      <n-menu
        :collapsed="collapsed"
        :collapsed-width="64"
        :collapsed-icon-size="22"
        :options="routerMenu"
      />
    </n-layout-sider>
    <n-layout class="p-4">
      <RouterView />
    </n-layout>
  </n-layout>
</template>
