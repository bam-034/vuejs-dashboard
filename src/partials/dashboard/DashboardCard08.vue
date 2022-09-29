<template>
  <div class="flex flex-col col-span-full sm:col-span-6 bg-white shadow-lg rounded-sm border border-gray-200">
    <header class="px-5 py-4 border-b border-gray-100 flex justify-between">
      <h2 class="font-semibold text-gray-800">Most Frequent Labels</h2>
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
    <LineChart :data="chartData" width="595" height="248" />
  </div>  
</template>

<script>
import { ref } from 'vue'
import LineChart from '../../charts/LineChart02.vue'
import EditMenu from '../../components/DropdownEditMenu.vue'

// Import utilities
import { tailwindConfig } from '../../utils/Utils'

export default {
  name: 'DashboardCard08',
  components: {
    LineChart,
    EditMenu,
  },
  setup() {
    const chartData = ref({
      labels: [
        'Boat', 'Beach', 'Vehicle',
        'Glasses', 'Hat', 'Elephant',
        'Motor vehicle', 'T-shirt', 'Aircraft',
        'Cap',
      ],
      datasets: [
        // Green line
        {
          label: 'Average',
          data: [
            122, 170, 192, 86, 102, 124, 115,
            115, 56, 104,
          ],
          borderColor: tailwindConfig().theme.colors.green[500],
          fill: false,
          borderWidth: 2,
          tension: 0,
          pointRadius: 0,
          pointHoverRadius: 3,
          pointBackgroundColor: tailwindConfig().theme.colors.green[500],
        },
      ],
    })

    return {
      chartData,
    } 
  }
}
</script>