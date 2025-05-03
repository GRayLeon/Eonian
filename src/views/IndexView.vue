<script setup>
  import { RouterLink, onBeforeRouteLeave, useRouter } from 'vue-router'
  import { ref, onMounted, onBeforeUnmount } from 'vue'

  const isTransitionActive = ref(false)
  const triggered = ref(false)
  const scrollThreshold = 50
  const router = useRouter()

  let touchStartY = 0

  function transitionAnimate() {
    triggered.value = true
    isTransitionActive.value = true
  }

  function triggerTransition() {
    transitionAnimate()

    setTimeout(() => {
      router.push('/product') // Vue Router 導頁
    }, 300)
  }

  function onWheel(event) {
    if (!triggered.value && event.deltaY > scrollThreshold) {
      triggerTransition()
    }
  }

  function onTouchStart(event) {
    touchStartY = event.touches[0].clientY
  }

  function onTouchMove(event) {
    const touchEndY = event.touches[0].clientY
    const deltaY = touchStartY - touchEndY

    if (!triggered.value && deltaY > scrollThreshold) {
      triggerTransition()
    }
  }

  onMounted(() => {
    window.addEventListener('wheel', onWheel)
    window.addEventListener('touchstart', onTouchStart)
    window.addEventListener('touchmove', onTouchMove)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('wheel', onWheel)
    window.removeEventListener('touchstart', onTouchStart)
    window.removeEventListener('touchmove', onTouchMove)
  })

  onBeforeRouteLeave((to, from, next) => {
    transitionAnimate()
    setTimeout(() => {
      next()
    }, 300)
  })
</script>

<template>
  <div class="indexPage">
    <div class="indexPage__images">
      <img src="@/assets/images/indexDemo.jpg">
    </div>
    <div class="indexPage__content">
      <div class="indexPage__header">
        <ul class="indexPage__mainNav">
          <li><RouterLink to="/product">Product</RouterLink></li>
          <li><RouterLink to="/project">Project</RouterLink></li>
          <li><RouterLink to="/brand">Brand</RouterLink></li>
          <li><img src="@/assets/images/indexPage__logoIcon.svg"></li>
          <li><RouterLink to="/news">News</RouterLink></li>
          <li class="active"><RouterLink to="/about">About us</RouterLink></li>
          <li><RouterLink to="/contact">Contact</RouterLink></li>
        </ul>
        <ul class="indexPage__lanSwitch">
          <li class="active">EN</li>
          <li>中文</li>
        </ul>
      </div>
      <div class="indexPage__title">
        <div class="slogan">Crafting beauty,</div>
        <img src="@/assets/images/indexPage__logo.svg">
        <div class="slogan">defining harmony.</div>
      </div>
      <div class="indexPage__footer">
        <p>
          With over 30 years of expertise in the building materials industry, Eonian is dedicated to crafting spaces that stand the test of time. Inspired by the ancient Greek word aiōn, meaning “eternity” or “infinity,” Eonian embodies a core philosophy prioritising sustainability that meets the demands of the changing times. We seamlessly blend form and function to transform spaces that are both environmentally considerate and people-centric.
        </p>
        <img src="@/assets/images/arrowDown.svg">
      </div>
    </div>
  </div>
  <div
    class="fullscreen-transition"
    :class="{ active: isTransitionActive }"></div>
</template>
