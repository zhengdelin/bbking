w<template>
  <div class="w-full" v-if="show">
    <div class="flex-ac sm:pb-2">
      <h1 class="font-bold m-0 w-1/3">會員專區</h1>
      <div class="w-2/3 flex justify-end">
        <edit-button @click="toEdit" v-if="read_only"></edit-button>
        <div class="flex" v-else>
          <cancel-button @click="cancel"></cancel-button>
          <save-button @click="save"></save-button>
        </div>
        <return-button class="ml-2 md:hidden" route_name="user"></return-button>
      </div>
    </div>

    <alert-box class="mb-1"></alert-box>
    <div class="grid grid-cols-2 gap-4 pt-2 sm:p-0">
      <div>
        <input-text
          title="姓名"
          v-model.trim="user_info.name"
          placeholder="姓名"
          :readonly="read_only"
        ></input-text>
      </div>
      <div>
        <input-text
          title="手機號碼"
          v-model.trim="user_info.phone"
          :readonly="read_only"
          placeholder="手機號碼"
        ></input-text>
      </div>
      <div>
        <input-text
          title="帳號"
          v-model.trim="user_info.account"
          :readonly="read_only"
        ></input-text>
      </div>
      <div>
        <input-text
          title="Email"
          v-model.trim="user_info.email"
          :readonly="read_only"
        ></input-text>
      </div>
      <div class="col-span-2">
        <input-textarea
          title="地址"
          v-model.trim="user_info.address"
          :readonly="read_only"
          rows="4"
        ></input-textarea>
      </div>
    </div>
    <hr class="sm:me-2" />
    <change-pas></change-pas>
  </div>
</template>

<script>
import axios from "axios";
import InputTextarea from "../../components/Objects/Input/InputTextarea.vue";
import InputText from "../../components/Objects/Input/InputText.vue";
import EditButton from "../../components/Objects/Button/EditButton.vue";
import SaveButton from "../../components/Objects/Button/SaveButton.vue";
import CancelButton from "../../components/Objects/Button/CancelButton.vue";
import ReturnButton from "../../components/Objects/Button/ReturnButton.vue";
import ChangePas from "../../components/User/ChangePas.vue";
import AlertBox from "../../components/Objects/AlertBox.vue";
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import { useStore } from "vuex";
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
    const { state, dispatch } = useStore();
    //data
    const show = ref(false);
    const read_only = ref(true);
    const user_info = ref({ ...state.user_info });

    const compare = () => {
      // if (this.name != this.old_name) return true;
      // if (this.account != this.old_account) return true;
      // if (this.email != this.old_email) return true;
      // if (this.phone != this.old_phone) return true;
      // if (this.address != this.old_address) return true;
      // return false;
      console.log(
        JSON.stringify(user_info.value) === JSON.stringify(state.user_info)
      );
      if (user_info === old_user_info) {
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
      // console.log(user_info,state.user_info);
      user_info.value = state.user_info;
      read_only.value = true;
    };
    onMounted(() => {
      setTimeout(() => {
        show.value = true;
      }, 300);
    });
    return {
      show,
      read_only,
      user_info,
      toEdit,
      save,
      cancel,
      dispatch,
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
