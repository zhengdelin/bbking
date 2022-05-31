import { computed, ref, watch } from "vue";

export default function usePageController(
    modelData = ref([]),
    init_options = { page, per, dataChangeTo }
) {
    // console.log("init", init_page);

    const {
        per: init_per = 10,
        page: init_page = 0,
        dataChangeTo = null,
    } = init_options;
    const per = ref(init_per);
    const cur = ref(init_page);

    // const data_type = computed(()=>Object.prototype.toString.call(data))

    const data = computed(() =>
        Object.prototype.toString.call(modelData.value) === "[object Object]"
            ? Object.values(modelData.value)
            : modelData.value
    );
    const total = computed(() => Math.ceil(data.value.length / per.value));

    //下一頁
    const toNextPage = () => cur.value + 1 < total.value && cur.value++;
    // 上一頁
    const toPreviousPage = () => cur.value - 1 >= 0 && cur.value--;
    // 前往第一頁
    const toFirstPage = () => (cur.value = 0);
    // 前往最後一頁
    const toLastPage = () => (cur.value = total.value - 1);
    //設置每頁顯示數量
    const setPerPage = (val) => (per.value = val);
    //取到指定頁面
    const toPage = (val) => (cur.value = val);
    //目前資料
    const start = computed(() => 0 + cur.value * per.value);
    const end = computed(() => start.value + per.value);
    const cur_data = computed(() => data.value.slice(start.value, end.value));

    //如果資料變動，去到某一頁
    if (dataChangeTo !== null) watch(modelData, () => toPage(dataChangeTo));
    return {
        per,
        cur,
        total,
        cur_data,
        toNextPage,
        toPreviousPage,
        toFirstPage,
        toLastPage,
        setPerPage,
        toPage,
    };
}
