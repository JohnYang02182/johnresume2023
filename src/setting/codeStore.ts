export const layoutSamples = [{
  layoutBase: `
  <template>
    <Header />
      <main>
      <router-view />
    </main>
    <Footer />
  </template>`,
  layoutSideBar: `
  <template>
    <Header />
      <SideBar />
      <main>
      <router-view />
    </main>
    <Footer />
</template>`,
  layoutBlank: `
  <template>
    <router-view />
  </template>`
},{
  useLayout: `
  export function useLayout() {
    const route = useRoute();
    const layoutComponent = computed(() => {
      switch (route.meta.layout) {
        case 'sidebar':
          return SidebarLayout;
        case 'blank':
          return BlankLayout;
        default:
          return DefaultLayout;
      }
    });
    return { layoutComponent };
  }`
},{
  template: `
  <template>
    <component :is="layoutComponent">
      <router-view />
    </component>
  </template>`
},{
  vueRouter: `
  const routes = [
    { path: '/', component: HomePage, meta: { layout: 'default' } },
    { path: '/dashboard', component: DashboardPage, meta: { layout: 'sidebar' } },
    { path: '/login', component: LoginPage, meta: { layout: 'blank' } },
  ];`
}]

