<template>
  <div
    class="
      flex flex-col
      col-span-full
      sm:col-span-6
      xl:col-span-4
      bg-white
      shadow-lg
      rounded-sm
      border border-gray-200
    "
  >
    <header class="px-5 py-4 border-b border-gray-100">
      <h2 class="font-semibold text-gray-800">Top Objects</h2>
    </header>
    <!-- Chart built with Chart.js 3 -->
    <!-- Change the height attribute to adjust the chart height -->
    <DoughnutChart v-if="chartData.labels.length > 0" :data="chartData" width="389" height="260" />
  </div>
</template>

<script>
import { ref } from "vue";
import DoughnutChart from "../../charts/DoughnutChart.vue";
import EditMenu from "../../components/DropdownEditMenu.vue";

// Import utilities
import { tailwindConfig } from "../../utils/Utils";
import axios from "axios";

export default {
  name: "DashboardCard06",
  components: {
    DoughnutChart,
    EditMenu,
  },
  setup() {
    const chartData = ref({
      labels: [],
      datasets: [
        {
          label: "Labels",
          data: [],
          backgroundColor: [
            tailwindConfig().theme.colors.rose[500],
            tailwindConfig().theme.colors.fuchsia[500],
            tailwindConfig().theme.colors.yellow[400],
            tailwindConfig().theme.colors.blue[600],
            tailwindConfig().theme.colors.emerald[600],
            tailwindConfig().theme.colors.red[600],
          ],
          hoverBackgroundColor: [
            tailwindConfig().theme.colors.pink[400],
            tailwindConfig().theme.colors.purple[400],
            tailwindConfig().theme.colors.yellow[100],
            tailwindConfig().theme.colors.indigo[400],
            tailwindConfig().theme.colors.green[400],
            tailwindConfig().theme.colors.orange[500],
          ],
          hoverBorderColor: tailwindConfig().theme.colors.white,
        },
      ],
    });

    return {
      chartData,
    };
  },
  async mounted() {
    const url = `http://172.26.117.18:3001/api/v1/posts/labels/count`;
    const res = await axios.get(url);
    const activities = [];
    const total_word = [];
    for (let index = 0; index < 10; index++) {
      //const row = res.data[index];
      //const word = [row.word, Number(row.count)];
      activities.push(res.data[index].word);
      total_word.push(res.data[index].count);
    }
    this.chartData.labels = activities;
    this.chartData.datasets[0].data = total_word;
  },
};
</script>