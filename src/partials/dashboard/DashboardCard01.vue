<template>
  <div
    class="
      flex flex-col
      col-span-full
      sm:col-span-6
      xl:col-span-12
      bg-white
      shadow-lg
      rounded-sm
      border border-gray-200
    "
  >
    <div class="grid grid-cols-3 gap-4">
      <div class="px-5 pt-5">
        <header class="flex justify-between items-start mb-2">
          <!-- Icon -->
          <fa :icon="['fab', 'instagram']" size="3x" />
        </header>
        <h2 class="text-xl font-semibold text-gray-800 mb-2">Total Posts</h2>
        <div class="text-s font-semibold text-gray-400 uppercase mb-1">
          Posts
        </div>
        <div class="flex items-start">
          <div class="text-4xl font-bold text-gray-800 mr-2">{{ posts }}</div>
        </div>
      </div>
      <div class="px-5 pt-5">
        <header class="flex justify-between items-start mb-2">
          <!-- Icon -->
          <fa :icon="['fab', 'instagram']" size="3x" />
        </header>
        <h2 class="text-xl font-semibold text-gray-800 mb-2">
          Posts this Year
        </h2>
        <div class="text-s font-semibold text-gray-400 uppercase mb-1">
          Posts
        </div>
        <div class="flex items-start">
          <div class="text-4xl font-bold text-gray-800 mr-2">
            {{ yearlyPosts }}
          </div>
        </div>
      </div>
      <div class="px-5 pt-5">
        <header class="flex justify-between items-start mb-2">
          <!-- Icon -->
          <fa :icon="['fab', 'instagram']" size="3x" />
        </header>
        <h2 class="text-xl font-semibold text-gray-800 mb-2">
          Posts this Month
        </h2>
        <div class="text-s font-semibold text-gray-400 uppercase mb-1">
          Posts
        </div>
        <div class="flex items-start">
          <div class="text-4xl font-bold text-gray-800 mr-2">
            {{ currentMonthPosts }}
          </div>
        </div>
      </div>
    </div>
    <!-- Chart built with Chart.js 3 -->
    <div class="grow">
      <!--Change the height attribute to adjust the chart height -->
      <LineChart
        v-if="chartData.datasets[0].data.length > 0"
        :data="chartData"
        width="389"
        height="128"
      />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import LineChart from "../../charts/LineChart01.vue";
import EditMenu from "../../components/DropdownEditMenu.vue";
// Import utilities
import { tailwindConfig, hexToRGB } from "../../utils/Utils";
import axios from "axios";
import { io } from "socket.io-client";

export default {
  name: "DashboardCard01",
  components: {
    LineChart,
    EditMenu,
  },
  setup() {
    const posts = ref(0);
    const yearlyPosts = ref(0);
    const currentMonthPosts = ref(0);
    const chartData = ref({
      labels: [
        "01-2021",
        "02-2021",
        "03-2021",
        "04-2021",
        "05-2021",
        "06-2021",
        "07-2021",
        "08-2021",
        "09-2021",
        "10-2021",
        "11-2021",
        "12-2021",
        "01-2022",
        "02-2022",
        "03-2022",
        "04-2022",
      ],
      datasets: [
        // Indigo line
        {
          data: [],
          fill: true,
          backgroundColor: `rgba(${hexToRGB(
            tailwindConfig().theme.colors.blue[500]
          )}, 0.08)`,
          borderColor: tailwindConfig().theme.colors.indigo[500],
          borderWidth: 2,
          tension: 0.4,
          pointRadius: 0,
          pointHoverRadius: 5,
          pointBackgroundColor: tailwindConfig().theme.colors.indigo[500],
          clip: 20,
        },
      ],
    });

    return {
      chartData,
      posts,
      yearlyPosts,
      currentMonthPosts
    };
  },

  async mounted() {
    const socket = io("192.168.11.7:3003");
    socket.on("updated", async (graph1) => {
      //console.log(graph1);
      const res_posts = await axios.get(
        "http://172.26.117.18:3001/api/v1/posts/total"
      );
      this.posts = res_posts.data[0].count;

      const yearly_posts = await axios.get(
        "http://172.26.117.18:3001/api/v1/posts/year/2022"
      );
      this.yearlyPosts = yearly_posts.data[0].count;

      const currnet_month_posts = await axios.get(
        "http://172.26.117.18:3001/api/v1/posts/thismonth"
      );
      if(currnet_month_posts.data.length == 0) 
        this.currentMonthPosts = 0
      else 
        this.currentMonthPosts = currnet_month_posts.data[0].count;
    });
    //api caling

    const res_posts = await axios.get(
      "http://172.26.117.18:3001/api/v1/posts/total"
    );
    //const total_posts = await axios.get("http://localhost:3300/posts/total");
    this.posts = res_posts.data[0].count;

    const yearly_posts = await axios.get(
      "http://172.26.117.18:3001/api/v1/posts/year/2022"
    );
    this.yearlyPosts = yearly_posts.data[0].count;

    const currnet_month_posts = await axios.get(
      "http://172.26.117.18:3001/api/v1/posts/thismonth"
    );
    if(currnet_month_posts.data.length == 0) 
        this.currentMonthPosts = 0
      else 
        this.currentMonthPosts = currnet_month_posts.data[0].count;

    const graphURL = `http://172.26.117.18:3001/api/v1/posts/monthly`;
    //const graphURL = `http://localhost:3300/posts/monthly`;
    const resp = await axios.get(graphURL);

    console.log(resp.data);
    const monthlyPosts = [];

    for (let index = 0; index <= 15; index++) {
      console.log(resp.data[index]);
      monthlyPosts.push(Number(resp.data[index].count));
    }
    this.chartData.datasets[0].data = monthlyPosts;
  },
};
</script>