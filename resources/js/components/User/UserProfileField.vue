<template>
  <div class="col user-profile-field">
    <div class="col fw-bold">
      {{ title }}
    </div>
    <div class="col-12 py-1">
      <textarea
        v-if="type == 'textarea'"
        class="w-100"
        v-bind="$attrs"
        v-model.trim="value"
        @change="dataChange()"
        ref="textarea"
      ></textarea>
      <input
        v-else
        class="w-100"
        :type="type"
        v-bind="$attrs"
        v-model.trim="value"
        @change="dataChange()"
        ref="field"
      />
    </div>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: ["title", "model", "value", "compare_same_value", "type", "height","check"],
  data() {
    return {};
  },
  methods: {
    dataChange() {
      let error = [];
      if(this.check!='false'){

        switch (this.model) {
          case "name":
            if (this.value.length > 10) error.push("姓名最多10字元");
  
            break;
          case "phone":
            if (this.value.length > 15) error.push("手機號碼最多15字元");
            let phoneformat = /^\d+([-]?\d+)?([-]?\d+)?$/;
            if (!this.value.match(phoneformat)) error.push("手機號碼格式錯誤");
            break;
          case "account":
            if (!this.value) {
              error.push("帳號欄位不能為空");
            } else {
              let accountformat = /^\w+([\.-]?\w+)*/;
              if (!this.value.match(accountformat)) error.push("帳號格式錯誤");
  
              if (this.value.length > 20) error.push("帳號不能大於20位數");
            }
            break;
          case "password":
            if (!this.value) {
              error.push("密碼欄位不能為空");
            } else {
              if (this.value.length > 30) {
                error.push("密碼不能大於30位數");
              }
            }
            break;
          case "check_password":
            console.log(this.compare_same_value);
            // if (this.compare_same_value) {
            if (!this.value) {
              error.push("請確認密碼");
            } else {
              if (!this.comparePassword()) error.push("密碼不相同");
            }
            // }
            break;
          case "email":
            if (!this.value) {
              error.push("請填寫Email欄位");
            } else {
              let mailformat = /^\w+([\.-]?\w+)*@gmail.com$/;
              if (!this.value.match(mailformat)) error.push("Email格式錯誤");
  
              if (this.value.length > 30) error.push("Email不能大於30位數");
            }
            break;
          case "address":
            if (this.value.length > 50) error.push("地址最多50字元");
            break;
          default:
            break;
        }
      }
      this.pushData(error);
    },
    pushData(error) {
      this.$emit("dataChange", {
        model: this.model,
        value: this.value,
        error: error,
      });
    },
    focusAccount() {
      this.$refs.field.focus();
    },
    comparePassword() {
      if (this.value !== this.compare_same_value) {
        return false;
      }
      return true;
    },
  },
  mounted() {
    if (this.type === "text") this.$refs.field.style = `height:${this.height}`;
  },
};
</script>

<style>
.user-profile-field textarea {
  white-space: nowrap;
}
.user-profile-field input {
  height: 40px;
  border: rgb(128, 128, 128, 0.5) solid 1px;
  border-radius: 10px;
  padding-left: 1rem;
}
.user-profile-field textarea {
  border: rgb(128, 128, 128, 0.5) solid 1px;
  border-radius: 10px;
  padding-left: 1rem;
}
</style>