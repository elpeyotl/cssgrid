<template>
  <section class="container grid text-center">
    <div class="bg-primary header">HEADER</div>
      <div class="bg-primary sidebar">
        <div class="sidebar-inner  bg-secondary">Sidebar</div>
      </div>
      <div class="bg-primary content">
        <div class="content-inner bg-secondary content-inner">Content</div>
      </div>
    <footer class="bg-third">FOOTER</footer>
  </section>
</template>

<script>
</script>

<style lang="scss">
@import '~assets/css/main.scss';
.header {
  margin-bottom: 20px;
  height: 100px;
}

.sidebar,.content {
  height: 100%;
  padding: 20px;
}
.sidebar-inner, .content-inner {
  height: 400px;
}
</style>
