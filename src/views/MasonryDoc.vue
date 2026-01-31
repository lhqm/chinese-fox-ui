<script setup lang="ts">
import CDoc from '../components/CDoc/CDoc.vue';
import CMasonry from '../components/CMasonry/CMasonry.vue';
import CCard from '../components/CCard/CCard.vue';

const propsData = [
  { name: 'columns', desc: '列数', type: 'number', default: '3' },
  { name: 'gap', desc: '列间距(px)', type: 'number', default: '16' },
];

const code = `
<CMasonry :columns="3" :gap="16">
  <div class="c-masonry__item"><CCard title="一">内容高度不同</CCard></div>
  <div class="c-masonry__item"><CCard title="二"><div style="height:120px"></div></CCard></div>
  <div class="c-masonry__item"><CCard title="三"><div style="height:60px"></div></CCard></div>
  <div class="c-masonry__item"><CCard title="四"><div style="height:180px"></div></CCard></div>
</CMasonry>
`;
</script>

<template>
  <CDoc 
    title="Masonry 瀑布流布局" 
    description="用于不同高度卡片的瀑布式排列。基于 CSS columns 实现。"
    :props-data="propsData"
    :code="code"
  >
    <CMasonry :columns="3" :gap="16">
      <div class="c-masonry__item"><CCard title="诗句"><p>桃李春风一杯酒，江湖夜雨十年灯。</p></CCard></div>
      <div class="c-masonry__item"><CCard title="图文"><div style="height:120px"></div></CCard></div>
      <div class="c-masonry__item"><CCard title="短文"><p>浮生若梦，为欢几何。</p></CCard></div>
      <div class="c-masonry__item"><CCard title="长文"><div style="height:180px"></div></CCard></div>
      <div class="c-masonry__item"><CCard title="图文"><div style="height:80px"></div></CCard></div>
      <div class="c-masonry__item"><CCard title="诗句"><p>此情可待成追忆，只是当时已惘然。</p></CCard></div>
    </CMasonry>
  </CDoc>
</template>

<style scoped>
</style>
