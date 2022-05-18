<script setup lang="ts">
import { useUserStore } from '~/stores/user'

const user = useUserStore()
const name = $ref(user.savedName)

const router = useRouter()
const go = () => {
  if (name)
    router.push(`/hi/${encodeURIComponent(name)}`)
}

const { t } = useI18n()
</script>

<template>
  <div>
    <n-time-picker />

    <div py-4 />

    <n-input v-model:value="name" :placeholder="t('intro.whats-your-name')" :aria-label="t('intro.whats-your-name')" />

    <div>
      <n-button :disabled="!name" @click="go">
        {{ t('button.go') }}
      </n-button>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  title: 首页
  icon: carbon-campsite
  order: 1
</route>
