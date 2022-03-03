<template>
  <div class="return-button flex items-center" @click="returnToRouteName()">
    <div class="flex-ac">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
      >
        <path
          d="M17.026 22.957c10.957-11.421-2.326-20.865-10.384-13.309l2.464 2.352h-9.106v-8.947l2.232 2.229c14.794-13.203 31.51 7.051 14.794 17.675z"
        />
      </svg>
      <div class="flex-cc">
        <span class="return-text">返回</span>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  props: {
    route_name: {
      type: String,
      default: "home",
    },
  },
  setup(props) {
    const router = useRouter();
    const returnToRouteName = () => {
      router.push({ name: props.route_name });
    };

    return { returnToRouteName };
  },
};
</script>

<style>
.return-button svg {
  fill: white;
}
.return-button {
  height: 36px;
  padding: 0 10px;
  color: white;
  border-radius: 8px;
  background: rgb(76, 165, 255);
}
.return-button:hover {
  background: rgb(22, 139, 255);
  cursor: pointer;
}
.return-text {
  margin-left: 5px;
  font-size: 1rem;
}
</style>