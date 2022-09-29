<template>
  <div class="flex flex-col col-span-full sm:col-span-6 xl:col-span-12 bg-white shadow-lg rounded-sm border border-gray-200">
    <div class="grid grid-cols-3 gap-4">
      <div class="px-5 pt-5">
        <header class="flex justify-between items-start mb-2">
          <!-- Icon -->
          <fa :icon="['fab', 'instagram']" size="3x" />
        </header>
          <h2 class="text-xl font-semibold text-gray-800 mb-2">Total Posts</h2>
            <div class="text-s font-semibold text-gray-400 uppercase mb-1">Posts</div>
              <div class="flex items-start">
                <div class="text-4xl font-bold text-gray-800 mr-2">24,780</div>
              </div>
      </div>
      <div class="px-5 pt-5">
        <header class="flex justify-between items-start mb-2">
          <!-- Icon -->
          <fa :icon="['fab', 'instagram']" size="3x" />
        </header>
          <h2 class="text-xl font-semibold text-gray-800 mb-2">Posts this Month</h2>
            <div class="text-s font-semibold text-gray-400 uppercase mb-1">Posts</div>
              <div class="flex items-start">
                <div class="text-4xl font-bold text-gray-800 mr-2">17,489</div>
              </div>
      </div>
      <div class="px-5 pt-5">
        <header class="flex justify-between items-start mb-2">
          <!-- Icon -->
          <fa :icon="['fab', 'instagram']" size="3x" />
        </header>
          <h2 class="text-xl font-semibold text-gray-800 mb-2">New Posts Today</h2>
            <div class="text-s font-semibold text-gray-400 uppercase mb-1">Posts</div>
              <div class="flex items-start">
                <div class="text-4xl font-bold text-gray-800 mr-2">1,567</div>
              </div>
      </div>
    </div>
    <!-- Chart built with Chart.js 3 -->
    <div class="grow">
       <!--Change the height attribute to adjust the chart height -->
      <LineChart :data="chartData" width="389" height="128" />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import LineChart from '../../charts/LineChart01.vue'
import EditMenu from '../../components/DropdownEditMenu.vue'

// Import utilities
import { tailwindConfig, hexToRGB } from '../../utils/Utils'

export default {
  name: 'DashboardCard01',
  components: {
    LineChart,
    EditMenu,
  },
  setup() {
    const chartData = ref({
      labels: [
        '01-01-2021', '02-01-2021',
        '03-01-2021', '04-01-2021', '05-01-2021',
        '06-01-2021', '07-01-2021', '08-01-2021',
        '09-01-2021', '10-01-2021', '11-01-2021',
        '12-01-2021', '01-01-2022', '02-01-2022',
        '03-01-2022', '04-01-2022', '05-01-2022',
        '06-01-2022', '07-01-2022', '08-01-2022',
        '09-01-2022', '10-01-2022', '11-01-2022',
        '12-01-2022',
      ],
      datasets: [
        // Indigo line
        {
          data: [
            610, 610, 504, 504, 504, 349,
            349, 504, 342, 504, 610, 391, 192,
            154, 273, 191, 191, 126, 263, 349,
            252, 423, 622, 470,
          ],
          fill: true,
          backgroundColor: `rgba(${hexToRGB(tailwindConfig().theme.colors.blue[500])}, 0.08)`,
          borderColor: tailwindConfig().theme.colors.indigo[500],
          borderWidth: 2,
          tension: 0,
          pointRadius: 0,
          pointHoverRadius: 3,
          pointBackgroundColor: tailwindConfig().theme.colors.indigo[500],
          clip: 20,
        },
    
      ],
        // plugins: {
        //     tooltip: {
        //       callbacks: {
        //         // title: () => false, // Disable tooltip title
        //         datasets: (context) => formatThousands(context.parsed.y),
        //       },
        //     },
        //     legend: {
        //       display: false,
        //     },
        //   },
        //   interaction: {
        //     intersect: false, 
        //     mode: 'nearest',
        //   },
    })

    return {
      chartData,
    } 
  }
}
</script>