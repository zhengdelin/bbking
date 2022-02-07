<template>
  <div class="login-register-form w-sm-80 w-lg-60">
    <alert-box
      v-if="status"
      :status="status"
      :status_object="status_object"
    ></alert-box>
    <user-profile-field
      title="帳號"
      :value="account"
      model="account"
      type="text"
      @dataChange="dataChange"
      placeholder="account"
      check="false"
      ref="account"
    ></user-profile-field>
    <user-profile-field
      title="密碼"
      model="password"
      :value="password"
      type="password"
      @dataChange="dataChange"
      placeholder="password"
      ref="password"
      check="false"
    ></user-profile-field>
    <div class="col px-sm-2 pb-2">
      <input type="checkbox" name="remember" v-model="remember" />
      <label class="ps-1" for="remember">保持登入</label>
    </div>
    <div class="col flex-jc">
      <input type="button" value="登入" @click="Submit()" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import UserProfileField from "../User/UserProfileField.vue";
import AlertBox from "../Objects/AlertBox.vue";
export default {
  components: {
    AlertBox,
    UserProfileField,
  },
  props: {},
  data() {
    return {
      account: "",
      password: "",
      remember: true,
      status: "",
      status_object: {},
    };
  },
  computed: {},
  methods: {
    InputAcc() {
      this.password = "";
    },
    Submit() {
      //如果沒有error執行
      axios
        .post("/userLogin", {
          account: this.account,
          password: this.password,
          remember: this.remember,
        })
        .then((res) => {
          console.log(res);
          if (res.data.status === "error") {
            this.status = res.data.status;
            this.status_object = res.data.status_object;
          } else {
            this.$router.push({ path: "/" });
          }
        });
    },
    dataChange(data) {
      // console.log(data)
      switch (data.model) {
        case "account":
          this.account = data.value;
          this.InputAcc();
          break;
        case "password":
          this.password = data.value;
          break;
        default:
          break;
      }
    },
  },
  mounted() {
    this.$refs.account.focusAccount();
  },
};
</script>

<style scoped>
</style>