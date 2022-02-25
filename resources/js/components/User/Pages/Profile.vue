<template>
  <div class="w-100" v-if="show">
    <div class="flex-ac pb-sm-2">
      <h1 class="fw-bold m-0 col-4">會員專區</h1>
      <div class="col-8 d-flex justify-content-end">
        <edit-button @click="toEdit" v-if="read_only"></edit-button>
        <div class="d-flex" v-else>
          <cancel-button @click="cancel"></cancel-button>
          <save-button @click="save"></save-button>
        </div>
        <return-button class="ms-2 d-md-none" route_name="user"></return-button>
      </div>
    </div>

    <alert-box class="mb-1"></alert-box>
    <div class="flex-ac flex-column pt-2 p-sm-0">
      <div class="w-100 d-flex flex-wrap row-cols-1 row-cols-sm-2">
        <div class="pe-sm-2">
          <input-text
            title="姓名"
            v-model.trim="name"
            placeholder="姓名"
            :readonly="read_only"
            :valueChange="handleCheckName"
          ></input-text>
        </div>
        <div class="pe-sm-2">
          <input-text
            title="手機號碼"
            v-model.trim="phone"
            :readonly="read_only"
            placeholder="手機號碼"
            :valueChange="handleCheckPhone"
          ></input-text>
        </div>
      </div>
      <div class="w-100 d-flex flex-wrap row-cols-1 row-cols-sm-2">
        <div class="pe-sm-2">
          <input-text
            title="帳號"
            v-model.trim="account"
            :readonly="read_only"
            :valueChange="handleCheckAccount"
          ></input-text>
        </div>
        <div class="pe-sm-2">
          <input-text
            title="Email"
            v-model.trim="email"
            :readonly="read_only"
            :valueChange="handleCheckEmail"
          ></input-text>
        </div>
      </div>
      <div class="w-100">
        <div class="pe-sm-2">
          <input-textarea
            title="地址"
            v-model.trim="address"
            :readonly="read_only"
            :valueChange="handleCheckAddress"
            rows="4"
          ></input-textarea>
        </div>
      </div>
    </div>
    <hr class="me-sm-2" />
    <change-pas></change-pas>
  </div>
</template>

<script>
import axios from "axios";
import InputTextarea from "../../Objects/InputTextarea.vue";
import InputText from "../../Objects/InputText.vue";
import EditButton from "../../Objects/EditButton.vue";
import SaveButton from "../../Objects/SaveButton.vue";
import CancelButton from "../../Objects/CancelButton.vue";
import ReturnButton from "../../Objects/ReturnButton.vue";
import ChangePas from "../ChangePas.vue";
import AlertBox from "../../Objects/AlertBox.vue";
import { reactive, ref, toRef, toRefs } from "@vue/reactivity";
import { inject, onMounted } from "@vue/runtime-core";
import {
  checkName,
  checkPhone,
  getUserInfo,
  checkAccount,
  checkEmail,
  checkAddress,
} from "../../../composition/userHandler";
export default {
  components: {
    InputTextarea,
    InputText,
    EditButton,
    SaveButton,
    CancelButton,
    AlertBox,
    ReturnButton,
    ChangePas,
  },
  setup() {
    const { setStatus } = inject("store");
    //data
    const show = ref(false);
    const read_only = ref(true);
    const id = ref(0);
    const user_data = reactive({
      account: "",
      name: "",
      email: "",
      phone: "",
      address: "",
    });
    const old_user_data = {
      account: "",
      name: "",
      email: "",
      phone: "",
      address: "",
    };
    //取得資料
    const handleGetUserInfo = async () => {
      const data = await getUserInfo();
      // console.log(data);
      synkUserInfo(data);
      replaceOldUserInfo();
      // console.log(user_data, old_user_data);
    };
    //同步
    const synkUserInfo = (data) => {
      // console.log("synk", data, data.account);
      id.value = data.id;
      Object.keys(user_data).forEach(i => {
        user_data[i]=data[i]
      });
    };
    const replaceOldUserInfo = () => {
      Object.keys(old_user_data).forEach((i) => {
        old_user_data[i] = user_data[i];
      });
    };
    const return2OldUserInfo = () => {
      Object.keys(user_data).forEach((i) => {
        user_data[i] = old_user_data[i]
      });
    };
    const compare = () => {
      // if (this.name != this.old_name) return true;
      // if (this.account != this.old_account) return true;
      // if (this.email != this.old_email) return true;
      // if (this.phone != this.old_phone) return true;
      // if (this.address != this.old_address) return true;
      // return false;
      if (user_data === old_user_data) {
        return false;
      }
      return true;
    };
    const toEdit = () => {
      read_only.value = false;
    };
    const save = () => {
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
    };
    const cancel = () => {
      return2OldUserInfo();
      read_only.value = true;
    };
    const handleCheckAccount = async () => {
      const error = await checkAccount(user_data.account);
      setStatus("error", error, "account");
      // console.log(user_data, old_user_data);
    };
    const handleCheckEmail = async () => {
      const error = await checkEmail(user_data.email);
      setStatus("error", error, "email");
    };
    const handleCheckName = async () => {
      const error = await checkName(user_data.name);
      setStatus("error", error, "name");
    };
    const handleCheckPhone = async () => {
      // console.log("handleCheckPhone");
      const error = await checkPhone(user_data.phone);
      setStatus("error", error, "phone");
    };
    const handleCheckAddress = async () => {
      const error = await checkAddress(user_data.address);
      setStatus("error", error, "address");
    };
    onMounted(() => {
      handleGetUserInfo();
      setTimeout(() => {
        show.value = true;
      }, 300);
    });
    return {
      show,
      read_only,
      ...toRefs(user_data),
      toEdit,
      save,
      cancel,
      handleCheckAccount,
      handleCheckEmail,
      handleCheckEmail,
      handleCheckName,
      handleCheckPhone,
      handleCheckAddress,
    };
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
