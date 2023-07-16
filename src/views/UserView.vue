<template>
  <div>
    <div class="t-flex t-flex-col">
      <div class="t-overflow-x-auto">
        <div class="t-inline-block t-min-w-full">
          <div class="">
            <div
              :class="[expand ? 'left__col__expand' : 'left__col']"
              class="t-transition-all t-duration-500 t-ease-in-out t-fixed"
            >
              <div v-show="expand">
                <p>
                  All Users transition-all duration-500 ease-in-out fixed
                  transition-all duration-500 ease-in-out fixed transition-all
                  duration-500 ease-in-out fixed
                </p>
              </div>
            </div>
            <div
              class="t-overflow-hidden t-transition-all t-duration-500 t-ease-in-out t-bg-gray-100"
              :class="[expand ? 'right__col__expand' : 'right__col']"
            >
              <a-button class="t-text-gray-400 t-p-4" @click="expand = !expand" type="text">
                <left-circle-outlined
                  v-if="expand"
                  :style="{ fontSize: '24px' }"
                />
                <right-circle-outlined v-else :style="{ fontSize: '24px' }" />
              </a-button>
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
        <PlusOutlined />
      </template>
      <a-float-button tooltip="Add New User">
        <template #icon>
          <UserAddOutlined />
        </template>
      </a-float-button>
      <a-float-button tooltip="Add New User Group" @click="modal2Visible = true">
        <template #icon>
          <FolderAddOutlined />
        </template>
      </a-float-button>
    </a-float-button-group>
  </div>
  <div>
    <a-modal
      v-model:open="modal2Visible"
      title="Vertically centered modal dialog"
      centered
      @ok="modal2Visible = false"
    >
      <a-form>
        <a-form-item
          label="Name"
          :rules="[{ required: true, message: 'Please input Category Name!' }]"
        >
          <a-input v-model:value="formCategory.name" />
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>
<script>
import {
  DownOutlined,
  LeftCircleOutlined,
  RightCircleOutlined,
  PlusOutlined,
  UserAddOutlined,
  FolderAddOutlined,
} from "@ant-design/icons-vue";

export default {
  components: {
    DownOutlined,
    LeftCircleOutlined,
    RightCircleOutlined,
    PlusOutlined,
    UserAddOutlined,
    FolderAddOutlined,
  },
  data() {
    return {
      expand: true,
      modal2Visible: false,
      users: [],
      formCategory:{
        name:''
      },
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