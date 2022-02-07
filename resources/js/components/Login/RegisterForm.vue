<template>
  <div class="login-register-form w-sm-80 w-lg-60">
    <alert-box
      v-if="status"
      :status="status"
      :status_object="status_object"
    ></alert-box>
    <user-profile-field
      title="帳號"
      model="account"
      :value="account"
      type="text"
      @dataChange="dataChange"
      placeholder="account"
      ref="account"
    ></user-profile-field>
    <user-profile-field
      title="電子郵件"
      model="email"
      :value="email"
      type="text"
      @dataChange="dataChange"
      placeholder="aaa@gmail.com"
      ref="email"
    ></user-profile-field>
    <user-profile-field
      title="密碼"
      model="password"
      :value="password"
      type="password"
      @dataChange="dataChange"
      placeholder="password"
      ref="password"
    ></user-profile-field>
    <user-profile-field
      title="再次輸入密碼"
      model="check_password"
      :value="check_password"
      :compare_same_value="password"
      type="password"
      @dataChange="dataChange"
      placeholder="check password"
      ref="check_password"
    ></user-profile-field>
    <div class="col px-sm-2 pb-2">
      <input type="checkbox" name="remember" v-model="remember" />
      <label class="ps-1" for="remember">保持登入</label>
    </div>
    <div class="col flex-jc">
      <input type="button" value="註冊" @click="Submit()" />
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
      check_password: "",
      email: "",
      remember: true,
      status: "",
      status_object: {},
    };
  },
  computed: {},
  methods: {
    InputAcc() {
      this.password = "";
      this.check_password = "";
    },
    InputPas() {
      this.check_password = "";
    },
    Submit() {
      Object.keys(this.$refs).forEach((i) => {
        this.$refs[i].dataChange();
      });
      if (this.status !== "error") {
        //如果沒有error執行
        axios
          .post("/userRegister", {
            account: this.account,
            password: this.password,
            email: this.email,
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
      }
    },
    dataChange(data) {
      switch (data.model) {
        case "account":
          this.account = data.value;
          this.InputAcc();
          break;
        case "email":
          this.email = data.value;
          break;
        case "password":
          this.password = data.value;
          this.InputPas();
          break;
        case "check_password":
          this.check_password = data.value;
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
  },
  mounted() {
    this.$refs.account.focusAccount();
  },
};
</script>

<style scoped>
</style>