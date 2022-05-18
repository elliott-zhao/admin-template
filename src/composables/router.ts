import type { MenuOption } from 'naive-ui'
import { RouterLink } from 'vue-router'

export const routerMenu = computed(() => {
  const router = useRouter()
  const routes = router.getRoutes()
  return routes
    .filter((routeRecord): boolean => !!routeRecord.name && !!routeRecord.meta.title)
    .sort((a, b) => (a.meta.order as number || 0) - (b.meta.order as number || 0))
    .map((routeRecord): MenuOption => {
      return {
        key: routeRecord.name as string,
        label: () => h(RouterLink, { to: { name: routeRecord.name } }, { default: () => routeRecord.meta.title }),
        icon: () => h('div', { class: `i-${routeRecord.meta.icon}` }),
      }
    })
})
