<template>
  <div class="w-100" v-if="show">
    <div class="flex-ac pb-sm-2">
      <h1 class="fw-bold m-0 col-4">會員專區</h1>
      <div class="col-8 d-flex justify-content-end">
        <edit-button @click="toEdit()" v-if="read_only"></edit-button>
        <div class="d-flex" v-else>
          <cancel-button @click="Cancel()"></cancel-button>
          <save-button @click="Save()"></save-button>
        </div>
        <return-button class="ms-2 d-md-none" route_name="user"></return-button>
      </div>
    </div>

    <alert-box
      v-if="status"
      :status="status"
      :status_object="status_object"
    ></alert-box>
    <div class="flex-ac flex-column pt-2 p-sm-0">
      <div class="w-100 d-flex flex-wrap row-cols-1 row-cols-sm-2">
        <div class="pe-sm-2">
          <user-profile-field
            title="姓名"
            model="name"
            placeholder="姓名"
            :value="name"
            :readonly="read_only"
            :class="{ 'border-black': !read_only }"
            type="text"
            @dataChange="dataChange"
          ></user-profile-field>
        </div>
        <div class="pe-sm-2">
          <user-profile-field
            title="手機號碼"
            model="phone"
            :value="phone"
            :readonly="read_only"
            :class="{ 'border-black': !read_only }"
            type="text"
            @dataChange="dataChange"
          ></user-profile-field>
        </div>
      </div>
      <div class="w-100 d-flex flex-wrap row-cols-1 row-cols-sm-2">
        <div class="pe-sm-2">
          <user-profile-field
            title="帳號"
            model="account"
            :value="account"
            :readonly="read_only"
            :class="{ 'border-black': !read_only }"
            type="text"
            @dataChange="dataChange"
          ></user-profile-field>
        </div>
        <div class="pe-sm-2">
          <user-profile-field
            title="Email"
            model="email"
            :value="email"
            :readonly="read_only"
            :class="{ 'border-black': !read_only }"
            type="text"
            @dataChange="dataChange"
          ></user-profile-field>
        </div>
      </div>
      <div class="w-100">
        <div class="pe-sm-2">
          <user-profile-field
            title="地址"
            model="address"
            :value="address"
            :readonly="read_only"
            :class="{ 'border-black': !read_only }"
            type="textarea"
            @dataChange="dataChange"
            rows="4"
          ></user-profile-field>
        </div>
      </div>
    </div>

    <hr class="me-sm-2" />
    <change-pas></change-pas>
  </div>
</template>

<script>
import axios from "axios";
import UserProfileField from "../UserProfileField.vue";
import EditButton from "../../Objects/EditButton.vue";
import SaveButton from "../../Objects/SaveButton.vue";
import CancelButton from "../../Objects/CancelButton.vue";
import ReturnButton from "../../Objects/ReturnButton.vue";
import ChangePas from "../ChangePas.vue"
import AlertBox from "../../Objects/AlertBox.vue";
export default {
  components: {
    UserProfileField,
    EditButton,
    SaveButton,
    CancelButton,
    AlertBox,
    ReturnButton,ChangePas
  },
  data() {
    return {
      show: false,
      read_only: true,
      id: 0,
      name: "",
      account: "",
      email: "",
      phone: "",
      address: "",
      old_name: "",
      old_account: "",
      old_email: "",
      old_phone: "",
      old_address: "",
      status: "",
      status_object: {},
    };
  },
  methods: {
    getUserInfo() {
      axios.post("/getUserInfo").then((res) => {
        this.synkUserInfo(res.data.user_info);
        this.replaceOldUserInfo();
      });
    },
    synkUserInfo(data) {
      this.id = data.id;
      this.name = data.name;
      this.account = data.account;
      this.email = data.email;
      this.phone = data.phone;
      this.address = data.address;
    },
    replaceOldUserInfo() {
      this.old_name = this.name;
      this.old_account = this.account;
      this.old_email = this.email;
      this.old_phone = this.phone;
      this.old_address = this.address;
    },
    return2OldUserInfo() {
      this.name = this.old_name;
      this.account = this.old_account;
      this.email = this.old_email;
      this.phone = this.old_phone;
      this.address = this.old_address;
    },
    compare() {
      if (this.name != this.old_name) return true;
      if (this.account != this.old_account) return true;
      if (this.email != this.old_email) return true;
      if (this.phone != this.old_phone) return true;
      if (this.address != this.old_address) return true;
      return false;
    },
    toEdit() {
      this.read_only = false;
      this.clearStatus();
    },
    Save() {
      if (this.status !== "error") {
        if (this.compare()) {
          axios
            .post("/saveUserInfo", {
              id: this.id,
              name: this.name,
              account: this.account,
              email: this.email,
              phone: this.phone,
              address: this.address,
            })
            .then((res) => {
              this.status = res.data.status;
              this.status_object = res.data.status_object;
              if (res.data.status !== "error") {
                this.replaceOldUserInfo();
                this.read_only = true;
              }
            });
        } else {
          this.read_only = true;
        }
      } else {
      }
    },
    Cancel() {
      this.return2OldUserInfo();
      this.read_only = true;
      this.clearStatus();
    },
    dataChange(data) {
      switch (data.model) {
        case "name":
          this.name = data.value;
          break;
        case "phone":
          this.phone = data.value;
          break;
        case "account":
          this.account = data.value;
          break;
        case "email":
          this.email = data.value;
          break;
        case "address":
          this.address = data.value.replace("/n", "");
          break;
        default:
          break;
      }
      this.updateErrorStatus(data.model, data.error);
    },
    updateErrorStatus(model, error) {
      this.status = "";
      this.status_object[model] = error;
      Object.values(this.status_object).forEach((i) => {
        if (i.length) this.status = "error";
      });
    },
    clearStatus() {
      this.status = "";
      this.status_object = {};
    },
  },
  mounted() {
    this.getUserInfo();
    setTimeout(() => {
      this.show = true;
    }, 300);
  },
};
</script>

<style scoped>
::-webkit-scrollbar {
  display: none;
}

.border-black {
  border: 1.5px solid black !important;
}
</style>
