<script setup lang="ts">
</script>

<template>
  <section class="c-responsive-demo">
    <div class="demo-tip">不同端适配示例：PC 显示手机+平板；平板仅显示手机；手机不显示。</div>
    <div class="demo-grid">
      <div class="demo-card demo-mobile">
        <h4>手机端示例</h4>
        <div class="device device-phone">
          <div class="bar"></div>
          <div class="screen">
            <p>标题</p>
            <div class="line"></div>
            <div class="line short"></div>
            <div class="btn"></div>
          </div>
        </div>
      </div>

      <div class="demo-card demo-tablet">
        <h4>平板端示例</h4>
        <div class="device device-tablet">
          <div class="bar"></div>
          <div class="screen grid">
            <div class="tile"></div>
            <div class="tile tall"></div>
            <div class="tile"></div>
            <div class="tile"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.c-responsive-demo {
  margin-top: 40px;
}
.demo-tip {
  color: var(--cf-color-text-secondary);
  margin-bottom: 12px;
}
.demo-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}
.demo-card {
  border: 1px solid var(--cf-color-border);
  border-radius: 8px;
  padding: 12px;
  background: var(--cf-color-surface);
}
.device {
  border: 1px solid var(--cf-color-border);
  border-radius: 16px;
  background: var(--cf-color-bg);
  overflow: hidden;
}
.device-phone {
  width: 240px;
  height: 420px;
  margin: 0 auto;
}
.device-tablet {
  width: 420px;
  height: 320px;
  margin: 0 auto;
}
.bar {
  height: 20px;
  background: var(--cf-color-surface);
  border-bottom: 1px solid var(--cf-color-border);
}
.screen {
  padding: 12px;
}
.screen .line {
  height: 12px;
  border-radius: 6px;
  background: var(--cf-color-border);
  margin-top: 10px;
}
.screen .line.short {
  width: 60%;
}
.screen .btn {
  width: 80px;
  height: 28px;
  border-radius: 8px;
  background: var(--cf-color-primary);
  margin-top: 16px;
  opacity: 0.15;
}
.screen.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
}
.tile {
  height: 70px;
  background: var(--cf-color-border);
  border-radius: 8px;
}
.tile.tall {
  grid-row: span 2;
  height: 148px;
}

/* Breakpoints */
@media (max-width: 767px) {
  .c-responsive-demo { display: none; }
}
@media (min-width: 768px) and (max-width: 1199px) {
  .demo-grid {
    grid-template-columns: 1fr;
  }
  .demo-tablet { display: none; }
}
@media (min-width: 1200px) {
  .demo-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

[data-theme="huali"] .tile {
  background: #ffd1d1;
}
</style>
