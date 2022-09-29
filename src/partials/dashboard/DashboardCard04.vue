<template>
  <div class="flex flex-col col-span-full sm:col-span-6 bg-white shadow-lg rounded-sm border border-gray-200">
    <header class="px-5 py-4 border-b border-gray-100 flex justify-between">
      <h2 class="text-xl font-semibold text-gray-800 mb-2">Top Locations</h2>
        <EditMenu align="right" class="relative inline-flex">
          <li>
            <a class="font-medium text-sm text-gray-600 hover:text-blue-800 flex py-1 px-3" href="#0">August 2022</a>
          </li>
          <li>
            <a class="font-medium text-sm text-gray-600 hover:text-blue-800 flex py-1 px-3" href="#0">September 2022</a>
          </li>
          <li>
            <a class="font-medium text-sm text-gray-500 hover:text-blue-600 flex py-1 px-3" href="#0">October 2022</a>
          </li>
        </EditMenu>
    </header>
    <!-- Chart built with Chart.js 3 -->
    <!-- Change the height attribute to adjust the chart height -->
    <BarChart :data="chartData" width="595" height="248" />
  </div>
</template>

<script>
import { ref } from 'vue'
import BarChart from '../../charts/BarChart01.vue'
import EditMenu from '../../components/DropdownEditMenu.vue'


// Import utilities
import { tailwindConfig } from '../../utils/Utils'

export default {
  name: 'DashboardCard03',
  components: {
    BarChart,
    EditMenu,
  },
  setup() {
    const chartData = ref({
      labels: [
        'Big Buddha', 'Wat Chalong', 'Kata Beach',
        'Monkey Hill', 'Phuket Town', 'Rawai Village',
      ],
      datasets: [
        // Light blue bars
        // {
        //   label: 'Direct',
        //   data: [
        //     800, 1600, 900, 1300, 1950, 1700,
        //   ],
        //   backgroundColor: tailwindConfig().theme.colors.blue[400],
        //   hoverBackgroundColor: tailwindConfig().theme.colors.blue[500],
        //   barPercentage: 0.66,
        //   categoryPercentage: 0.66,
        // },
        // Blue bars
        {
          label: 'Posts',
          data: [
            4900, 2600, 5350, 4800, 5200, 4800,
          ],
          backgroundColor: tailwindConfig().theme.colors.indigo[500],
          hoverBackgroundColor: tailwindConfig().theme.colors.indigo[600],
          barPercentage: 0.66,
          categoryPercentage: 0.66,
        },
      ],
    })

    return {
      chartData,
    }    
  }
}
</script>