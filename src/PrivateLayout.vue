<template>
  <!-- component -->
  <div>
    <div class="flex flex-wrap w-full h-screen">
      <div
        :class="[expand ? 'left__column__expand' : 'left__column']"
        class="bg-white rounded shadow-lg transition-all duration-500 ease-in-out h-screen fixed"
      >
        <div class="p-3 border-b border-solid border-gray-200">
          <div
            class="flex items-center justify-center"
            style="height: 40px !important"
          >
            <button
              class="text-gray-400"
              style="padding: 8px !important; font-size: 20px !important"
              @click="expand = !expand"
            >
            <menu-fold-outlined v-if="expand" :style="{fontSize: '24px'}"/>
            <menu-unfold-outlined v-else :style="{fontSize: '24px'}"/>
              
            </button>
            <div class="flex items-center justify-center w-full">
              <img
                v-show="expand"
                class="h-10 w-auto"
                src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
              />
            </div>
          </div>
        </div>
        <ul class="space-y-2 text-sm p-3">
          <li v-for="(nav, i) in navs" :key="`nav-item-${i}`">
            <router-link
              :to="nav.to"
              class="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
            >
              <span class="text-gray-600" v-if="nav.key == 'dashboard'">
                <pie-chart-outlined  :style="{fontSize: '24px'}"/>
              </span>
              <span class="text-gray-600" v-if="nav.key == 'calendar'">
                <calendar-outlined :style="{fontSize: '24px'}"/>
              </span>
              <span class="text-gray-600" v-if="nav.key == 'users'">
                <user-outlined :style="{fontSize: '24px'}"/>
              </span>
              <span v-if="expand">{{ nav.text }}</span>
            </router-link>
          </li>
        </ul>
      </div>

      <div
        :class="[expand ? 'right__column__expand' : 'right__column']"
        class="transition-all duration-500 ease-in-out right__column_expand"
      >
        <div class="text-gray-600">
          <div
            :class="[expand ? 'header__top__expand' : 'header__top']"
            class="flex justify-between fixed bg-white border-b border-l"
            style="padding: 8px !important; height: 65px !important"
          >
            <h1 class="text-2xl flex items-center justify-center">Users</h1>
            <div>
              <span>
                <img
                  class="h-10 w-10 flex-none rounded-full bg-gray-50"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
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
  components: { PieChartOutlined, UserOutlined, CalendarOutlined , MenuFoldOutlined, MenuUnfoldOutlined},
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
</style>