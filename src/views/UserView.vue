<template>
  <div>
    <div class="flex flex-col">
      <div class="overflow-x-auto">
        <div class="inline-block min-w-full">
          <div class="">
            <div
              :class="[expand ? 'left__col__expand' : 'left__col']"
              class="transition-all duration-500 ease-in-out fixed"
            >
              <div v-show="expand">
                <h1>
                  All Users transition-all duration-500 ease-in-out fixed
                  transition-all duration-500 ease-in-out fixed transition-all
                  duration-500 ease-in-out fixed
                </h1>
              </div>
            </div>
            <div
              class="overflow-hidden transition-all duration-500 ease-in-out bg-gray-100"
              :class="[expand ? 'right__col__expand' : 'right__col']"
            >
              <button class="text-gray-400 p-4" @click="expand = !expand">
                <left-circle-outlined
                  v-if="expand"
                  :style="{ fontSize: '24px' }"
                />
                <right-circle-outlined v-else :style="{ fontSize: '24px' }" />
              </button>
              <a-table
                :columns="columns"
                :data-source="users"
                :pagination="{ pageSize: 50 }"
                :scroll="{ y: 700 }"
              >
                <template #bodyCell="{ column, record }">
                  <template v-if="column.key === 'action'">
                    <span>
                      <a>Invite 一 {{ record.name }}</a>
                      <a-divider type="vertical" />
                      <a>Delete</a>
                      <a-divider type="vertical" />
                      <a class="ant-dropdown-link">
                        More actions
                        <down-outlined />
                      </a>
                    </span> </template
                ></template>
              </a-table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div>
    <a-float-button-group
      size="large"
      trigger="click"
      type="primary"
      :style="{ right: '50px', bottom: '100px' }"
    >
      <template #icon>
        <PlusOutlined/>
      </template>
      <a-float-button tooltip="Add New User">
        <template #icon>
          <UserAddOutlined/>
        </template>
      </a-float-button>
      <a-float-button tooltip="Add New User Group">
        <template #icon>
         <FolderAddOutlined/>
        </template>
      </a-float-button>
    </a-float-button-group>
  </div>
</template>
<script>
import {
  DownOutlined,
  LeftCircleOutlined,
  RightCircleOutlined,
  PlusOutlined,
  UserAddOutlined,
  FolderAddOutlined
} from "@ant-design/icons-vue";

export default {
  components: {
    DownOutlined,
    LeftCircleOutlined,
    RightCircleOutlined,
    PlusOutlined,
    UserAddOutlined,
    FolderAddOutlined
  },
  data() {
    return {
      expand: true,
      users: [],
      columns: [
        {
          title: "Id",
          dataIndex: "id",
          key: "id",
          width: 150,
        },
        {
          title: "Name",
          dataIndex: "name",
          key: "name",
          width: 150,
        },
        {
          title: "Email",
          dataIndex: "email",
          key: "email",
        },
        {
          title: "Phone",
          dataIndex: "phone",
          key: "phone",
        },
        {
          title: "Status",
          dataIndex: "status",
          key: "status",
        },
        {
          title: "Actions",
          key: "action",
        },
      ],
    };
  },
  mounted() {
    this.users = [...Array(100)].map((_, i) => ({
      key: i,
      id: i,
      name: `Edward King ${i}`,
      email: `email${i}@email.com`,
      phone: `03655455${i}`,
      status: "Active",
    }));
  },
};
</script>
<style scoped>
.left__col {
  width: 0% !important;
}

.left__col__expand {
  width: 13% !important;
}

.right__col {
  width: 100% !important;
}

.right__col__expand {
  width: 85% !important;

  margin-left: 15% !important;
}
</style>