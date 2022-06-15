<template>
    <div
        class="z-10 bg-zinc-600 text-slate-100 px-5 py-10 grid grid-cols-1 md:grid-cols-3 gap-4 items-center justify-items-center"
    >
        <div class="">
            <span>© {{ headquarter.url }} | {{ headquarter.name }}</span>
        </div>
        <div>
            <div>
                地址：<a
                    :href="`https://www.google.com/maps/place/${headquarter.address}`"
                    class="hover:text-blue-500 hover:underline"
                    target="black"
                    >{{ headquarter.address }}</a
                >
            </div>
            <div>營業時間：{{ headquarter.business_hours }}</div>
        </div>
        <div>
            <div>
                電話：<a
                    :href="`tel:+${headquarter.phone}`"
                    class="hover:text-blue-500 hover:underline"
                    >{{ headquarter.phone }}</a
                >
            </div>
            <div>
                Email：<a
                    :href="`mailto:${headquarter.email}`"
                    class="hover:text-blue-500 hover:underline"
                    >{{ headquarter.email }}</a
                >
            </div>
        </div>
    </div>
</template>

<script>
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
export default {
    setup() {
        const { getters } = useStore();
        const headquarter = computed(
            () => getters["globalHandler/headquarter"]
        );
        // console.log(headquarter.value);
        return { headquarter };
    },
};
</script>

<style scoped></style>
