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
    <canvas id="wordcloud" ref="wordcloud" width="1600" height="900"></canvas>
  </div>
</template>

<script>
import { ref } from "vue";
import LineChart from "../../charts/LineChart01.vue";
import EditMenu from "../../components/DropdownEditMenu.vue";
// Import utilities
import { tailwindConfig, hexToRGB } from "../../utils/Utils";
import axios from "axios";
import * as WordCloud from "wordcloud";

export default {
  name: "WordCloudObjects",
  components: {
    "WordCloudObjects": WordCloud
  },
  setup() {
  },
  async mounted() {
    const list = [];
    const url = `http://172.26.117.18:3001/api/v1/posts/labels/count`;
    const res = await axios.get(url);

    for (let index = 2; index < 50; index++) {
      const row = res.data[index];
      const word = [row.word, Number(row.count)];
      list.push(word);
      console.log(word);
    }
    console.log(list);
    WordCloud(this.$refs.wordcloud, {
      list: list,
    });
    WordCloud.stop;
  },
};
</script>