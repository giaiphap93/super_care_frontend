<template>
  <a-layout class="t-h-screen">
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
      <div class="logo" />
      <a-menu
        v-model:selectedKeys="selectedKeys"
        mode="inline"
        :inline-collapsed="collapsed"
        :items="items"
      >
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <menu-unfold-outlined
          v-if="collapsed"
          class="trigger"
          @click="() => (collapsed = !collapsed)"
        />
        <menu-fold-outlined
          v-else
          class="trigger"
          @click="() => (collapsed = !collapsed)"
        />
      </a-layout-header>
      <a-layout-content
        :style="{
          margin: '24px 16px',
          padding: '24px',
          background: '#fff',
          minHeight: '280px',
        }"
      >
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
import { h } from "vue";
import {
  PieChartOutlined,
  //UserOutlined,
  CalendarOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons-vue";
export default {
  name: "PrivateLayout",
  components: {
    //PieChartOutlined,
    // UserOutlined,
    //CalendarOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
  },
  data: () => {
    return {
      collapsed: true,
      selectedKeys: ["1"],
      items: [
        {
          key: "1",
          icon: () => h(PieChartOutlined),
          label: "Option 1",
          title: "Option 1",
        },
        {
          key: "2",
          icon: () => h(CalendarOutlined),
          label: "Option 2",
          title: "Option 2",
        },
        {
          key: "3",
          icon: () => h(CalendarOutlined),
          label: h(
            "a",
            {
              href: "https://antdv.com",
              target: "_blank",
            },
            "Navigation Four - Link"
          ),
          title: "Option 3",
        },
      ],
    };
  },
  mounted() {
    console.log(this.$route.name);
  },
};
</script>
<style scoped>
.left__column {
  width: 3% !important;
}

.right__column {
  width: 99% !important;
  padding-left: 3% !important;
}

.left__column__expand {
  width: 15% !important;
}

.right__column__expand {
  width: 99% !important;
  padding-left: 15% !important;
}

.header__top {
  width: 96% !important;
}

.header__top__expand {
  width: 84% !important;
}

li.router-link-active:hover {
  background: #ccc;
}
.nav__link:hover {
  background: #ccc;
}
.router-link-active {
  background: #ccc;
}
.list__nav {
  margin-bottom: 5px;
}

.siderbar {
  border-right: 1px solid #ccc;
}
.right__header__top {
  border-bottom: 1px solid #ccc;
}

#app .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#app .trigger:hover {
  color: #1890ff;
}

#app .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.3);
  margin: 16px;
}

.site-layout .site-layout-background {
  background: #fff;
}
</style>