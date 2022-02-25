<template>
  <div class="change-pas-container w-100">
    <div class="flex-ac change-pas-title" @click="toChangePas()">
      <div class="col-2">更改密碼</div>
      <div class="col d-flex justify-content-start">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
        >
          <path
            d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"
          />
        </svg>
      </div>
    </div>
    <transition name="slide-down">
      <div
        class="change-pas-box w-100 d-flex flex-column flex-md-row"
        v-if="change_pas"
      >
        <user-profile-field title="舊密碼"></user-profile-field>
        <user-profile-field title="新密碼"></user-profile-field>
        <user-profile-field title="再次確認密碼"></user-profile-field>
      </div>
    </transition>
  </div>
</template>

<script>
import UserProfileField from "../Objects/InputText.vue";
export default {
  components: {
    UserProfileField,
  },
  data() {
    return {
      change_pas: false,
    };
  },
  methods: {
    toChangePas() {
      this.change_pas = !this.change_pas;
    },
  },
  mounted() {},
};
</script>

<style scoped>
.change-pas-title:hover {
  background-color: rgb(219, 204, 235);
  cursor: pointer;
}
.change-pas-box > * {
  padding-right: 0.5rem;
}
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.5s ease;
}
.slide-down-enter-from, .slide-down-leave-to {
  transform: translateY(-50%);
  opacity: 0;
}
</style>
