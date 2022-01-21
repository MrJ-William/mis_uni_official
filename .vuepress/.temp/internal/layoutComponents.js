import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import("/Users/yujiwilliam/Desktop/development/ミスユニ/mr_university_app_new/VuePress/node_modules/@vuepress/theme-default/lib/client/layouts/404.vue")),
  "Layout": defineAsyncComponent(() => import("/Users/yujiwilliam/Desktop/development/ミスユニ/mr_university_app_new/VuePress/node_modules/@vuepress/theme-default/lib/client/layouts/Layout.vue")),
}
