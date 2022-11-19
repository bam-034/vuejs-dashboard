<template>
  <div
    class="
      flex flex-col
      col-span-full
      sm:col-span-6
      bg-white
      shadow-lg
      rounded-sm
      border border-gray-200
    "
  >
    <header class="px-5 py-4 border-b border-gray-100 flex justify-between">
      <h2 class="text-xl font-semibold text-gray-800 mb-2">Top Landmarks</h2>
      <!-- <EditMenu align="right" class="relative inline-flex">
        <li>
          <a
            class="
              font-medium
              text-sm text-gray-600
              hover:text-blue-800
              flex
              py-1
              px-3
            "
            href="#0"
            >August 2022</a
          >
        </li>
        <li>
          <a
            class="
              font-medium
              text-sm text-gray-600
              hover:text-blue-800
              flex
              py-1
              px-3
            "
            href="#0"
            >September 2022</a
          >
        </li>
        <li>
          <a
            class="
              font-medium
              text-sm text-gray-500
              hover:text-blue-600
              flex
              py-1
              px-3
            "
            href="#0"
            >October 2022</a
          >
        </li>
      </EditMenu> -->
    </header>
    <!-- Chart built with Chart.js 3 -->
    <!-- Change the height attribute to adjust the chart height -->
    <BarChart v-if="chartData.labels.length > 0" :data="chartData" width="595" height="248" />
  </div>
</template>

<script>
import { ref } from "vue";
import BarChart from "../../charts/BarChart01.vue";
import EditMenu from "../../components/DropdownEditMenu.vue";

// Import utilities
import { tailwindConfig } from "../../utils/Utils";
import axios from "axios";

export default {
  name: "DashboardCard03",
  components: {
    BarChart,
    EditMenu,
  },
  setup() {
    const count = ref(0);
    const chartData = ref({
      labels: [],
      datasets: [
        {
          label: "Posts",
          data: [],
          backgroundColor: tailwindConfig().theme.colors.indigo[500],
          hoverBackgroundColor: tailwindConfig().theme.colors.indigo[600],
          barPercentage: 0.66,
          categoryPercentage: 0.66,
        },
      ],
    });

    return {
      chartData,
      count,
    };
  },
  async mounted() {
    console.log("AAA", this.count);
    //const url = `http://172.26.201.159:3300/posts/landmarks`;
    const url = `http://localhost:3300/posts/landmarks`;
    const res = await axios.get(url);
    console.log("", res.data);
    const labels = [];
    const total = [];
    for (let index = 0; index < 10; index++) {
      labels.push(res.data.rows[index].landmark);
      total.push(Number(res.data.rows[index].total_post));
      // this.chartData.labels.push(res.data.rows[index].landmark);
      // this.chartData.datasets[0].data.push(res.data.rows[index].total_post)
    }
    this.chartData.labels = labels;
    this.chartData.datasets[0].data = total;
  },
};
</script>