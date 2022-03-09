<template>
  <transition name="slidedown">
    <div
      class="flex flex-col items-center fixed left-1/2 top-[10px] -ml-[150px] z-50"
      v-if="status && msgs.length"
    >
      <transition-group name="slidedown">
        <div
          class="alert-box border-x"
          :class="getAlertBoxClass(index)"
          v-for="(msg, index) in msgs"
          :key="index"
        >
          <ul class="font-semibold py-1 pl-10 list-disc">
            <li>{{ `${status === "error" ? "錯誤 : " : ""}${msg}` }}</li>
          </ul>
        </div>
      </transition-group>
    </div>
  </transition>
</template>

<script>
import { computed, watch } from "@vue/runtime-core";
import { useStore } from "vuex";
export default {
  setup() {
    const { state,commit } = useStore();
    const errors = {
      // account
      account1: "帳號欄位不能為空",
      account2: "帳號格式錯誤",
      account3: "帳號不能大於20位數",
      //password
      password1: "密碼欄位不能為空",
      password2: "密碼不能大於30位數",
      //check password
      check_password1: "請再次確認密碼",
      check_password2: "密碼不相同",
      //email
      email1: "請填寫Email欄位",
      email2: "Email不能大於30位數",
      email3: "Email格式錯誤",
      //name
      name1: "姓名最多10字元",
      //phone
      phone1: "請輸入10位或9位數字",
      phone2: "請輸入正確的手機號",
      //address
      address1: "地址最多50字元",
    };
    const status = computed(() => state.status);
    const msgs = computed(() => {
      // console.log(state);
      return Object.values(state.status_msgs).filter((val) => val);
    });
    const getBorder = (index) => {
      return index === 0 && index === msgs.value.length - 1
        ? "border-y"
        : index === 0
        ? "border-t"
        : index === msgs.value.length - 1
        ? "border-b"
        : "";
    };
    const getBorderRadius = (index) => {
      return index === 0 && index === msgs.value.length - 1
        ? "rounded-[0.25rem]"
        : index === 0
        ? "rounded-t-[0.25rem]"
        : index === msgs.value.length - 1
        ? "rounded-b-[0.25rem]"
        : "rounded-none";
    };
    const getPadding = (index) => {
      return index === 0 && index === msgs.value.length - 1
        ? "pt-1"
        : index === 0
        ? "pb-[0.994px] pt-1"
        : index === msgs.value.length - 1
        ? "pt-[0.994px] pb-1"
        : "py-[0.994px]";
    };
    const getAlertBoxClass = (index) => {
      return `${status.value} ${getBorder(index)} ${getBorderRadius(
        index
      )} ${getPadding(index)}`;
    };
    watch(status,(val)=>{
      if(val==='success'){
        setTimeout(() => {
          commit('clearStatus');
        }, 2000);
      }
    })
    return { msgs, status, getAlertBoxClass };
  },
};
</script>

<style scoped>
.alert-box {
  width: 300px;
  /* padding: 0.5rem 0; */
  /* margin: 0.25rem 0; */
  border-color: transparent;
  border-style: solid;
  border-left: 1px;
  border-right: 1px;
}
.alert-box.success {
  color: #155724;
  background-color: #d4edda;
  border-color: #c3e6cb;
}
.alert-box.error {
  color: #721c24;
  background-color: #f8d7da;
  border-color: #f5c6cb;
}
.slidedown-enter-active,
.slidedown-leave-active {
  transition: all 0.5s linear;
}
.slidedown-enter-to,
.slidedown-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.slidedown-enter-from,
.slidedown-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
.slidedown-move {
  transition: all 1s;
}
</style>