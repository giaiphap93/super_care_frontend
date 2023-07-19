<template>
  <a-layout class="t-h-screen">
    <a-layout-sider
      :class="{ 't-ant-layout-sider': !collapsed }"
      v-model:collapsed="collapsed"
      :trigger="null"
      collapsible
      theme="light"
    >
      <div class="logo"></div>

      <a-menu v-model:selectedKeys="selectedKeys" mode="inline" :items="items">
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
          margin: '16px',
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
  UserOutlined,
  CalendarOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons-vue";
import LinkComponent from "./components/LinkComponent.vue";
export default {
  name: "PrivateLayout",
  components: {
    //PieChartOutlined,
    // UserOutlined,
    //CalendarOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    //HelloWorld
  },
  data: () => {
    return {
      collapsed: true,
      selectedKeys: ["1"],
      selectedKeys2: ["1"],
      items: [
        {
          key: "1",
          icon: () => h(PieChartOutlined, { style: { fontSize: "24px" } }),
          label: h(LinkComponent, { to: "/dashboard", text: "Dashboard" }),
          title: "Dashboard",
        },
        {
          key: "2",
          icon: () => h(CalendarOutlined, { style: { fontSize: "24px" } }),
          label: h(LinkComponent, { to: "/calendar", text: "Calendar" }),
          title: "Calendar",
        },
        {
          key: "3",
          icon: () => h(UserOutlined, { style: { fontSize: "24px" } }),
          label: h(LinkComponent, { to: "/users", text: "Users" }),
          title: "Users",
        },
      ],
    };
  },
  mounted() {},
};
</script>
<style scoped>
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
  background: #ccc;
  margin: 16px;
}

.t-ant-layout-sider {
  flex: 0 0 250px !important ;
  max-width: 250px !important;
  min-width: 250px !important;
  width: 250px !important;
}
</style>