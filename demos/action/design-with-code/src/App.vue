<template>
  <div class="app">
    <Header class="header"></Header>

    <transition name="fade" mode="out-in">
      <RouterView class="page" />
    </transition>

    <BottomNav class="bottom-nav"></BottomNav>
  </div>
</template>

<script>
export default {}
</script>

<style src="./assets/styles.css"></style>

<style>
.app {
  /* Header & BottomNav bedecken oben und unten den Bildschirm, also darf hier kein Content hin  */
  padding-top: 60px;
  padding-bottom: 60px;
}

.app,
.page {
  /* Sorgt dafür, dass die Seite immer mindestens so hoch ist wie der Bildschirm */
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.header,
.page {
  padding-left: 16px;
  padding-right: 16px;
}

.fade-enter-active {
  transition: opacity 100ms ease-in;
}
.fade-leave-active {
  transition: opacity 100ms ease-out;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
