<template>
  <!-- component -->
  <div>
    <div class="t-flex t-flex-wrap t-w-full t-h-screen">
      <div :class="[expand ? 'left__column__expand' : 'left__column']"
        class="t-bg-white t-rounded t-shadow-lg t-transition-all t-duration-500 t-ease-in-out t-h-screen t-fixed siderbar">
        <div class="t-p-3">
          <div class="t-flex t-items-center t-justify-center" style="height: 40px !important">
            <a-button type="text" size="large" class="t-text-grey"
              style="padding: 8px !important; font-size: 18px !important" @click="expand = !expand">
              <menu-fold-outlined v-if="expand" :style="{ fontSize: '24px' }" />
              <menu-unfold-outlined v-else :style="{ fontSize: '24px' }" />

            </a-button>
            <div class="t-flex t-items-center t-justify-center t-w-full">
              <img v-show="expand" class="t-h-10 t-w-auto"
                src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" />
            </div>
          </div>
        </div>
        <ul class="t-space-y-2 t-text-sm t-p-3">
          <li v-for="(nav, i) in navs" :key="`nav-item-${i}`" class="list__nav">
            <router-link :to="nav.to"
              class="t-flex t-items-center t-space-x-3 t-text-gray-700 t-p-2 t-rounded-md nav__link">
              <span class="t-text-gray-600" v-if="nav.key == 'dashboard'">
                <pie-chart-outlined :style="{ fontSize: '24px' }" />
              </span>
              <span class="t-text-gray-600" v-if="nav.key == 'calendar'">
                <calendar-outlined :style="{ fontSize: '24px' }" />
              </span>
              <span class="t-text-gray-600" v-if="nav.key == 'users'">
                <user-outlined :style="{ fontSize: '24px' }" />
              </span>
              <span style="margin-left:10px" v-if="expand">{{ nav.text }}</span>
            </router-link>
          </li>
        </ul>
      </div>

      <div :class="[expand ? 'right__column__expand' : 'right__column']"
        class="t-transition-all t-duration-500 t-ease-in-out right__column_expand">
        <div class="t-text-gray-600">
          <div :class="[expand ? 'header__top__expand' : 'header__top']"
            class="t-flex t-justify-between t-fixed t-bg-white t-border-b t-border-l right__header__top"
            style="padding: 8px !important; height: 65px !important">
            <h1 class="text-2xl t-flex t-items-center t-justify-center">Users</h1>
            <div>
              <span>
                <img class="t-h-10 t-w-10 t-flex-none t-rounded-full t-bg-gray-50"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="" />
              </span>
            </div>
          </div>
          <div style="padding-top: 65px">
            <router-view />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {
  PieChartOutlined,
  UserOutlined,
  CalendarOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined
} from "@ant-design/icons-vue";
export default {
  name: "PrivateLayout",
  components: { PieChartOutlined, UserOutlined, CalendarOutlined, MenuFoldOutlined, MenuUnfoldOutlined },
  data: () => {
    return {
      expand: true,
      navs: [
        {
          text: "Dashboard",
          to: "/dashboard",
          key: "dashboard",
        },
        {
          text: "Calendar",
          to: "/calendar",
          key: "calendar",
        },
        {
          text: "Users",
          to: "/users",
          key: "users",
        },
      ],
    };
  },
  mounted() {
    console.log(process.env.VUE_APP_TITLE);
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
.nav__link:hover{
  background: #ccc;
}
.router-link-active {
  background: #ccc;
}
.list__nav{
  margin-bottom: 10px;
}

.siderbar{
border-right: 1px solid #ccc;
}
.right__header__top{
  border-bottom: 1px solid #ccc;
}
</style>