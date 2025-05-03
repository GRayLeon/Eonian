<script setup>
  import { useLoadStore } from '@/stores/load'
  import { storeToRefs } from 'pinia'
  import { RouterLink } from 'vue-router'

  const loadStore = useLoadStore()
	const { isMenuOpen, toggleMenu } = storeToRefs(loadStore)

</script>
<template>
  <div class="header" :class="{ open: isMenuOpen }">
      <RouterLink to="/"><img class="logo" src="@/assets/images/logo.svg"></RouterLink>
      <ul class="mainNav">
        <li><RouterLink :to="{ name: 'productList' }">Product</RouterLink> </li>
        <li><RouterLink to="/project">Project</RouterLink> </li>
        <li><RouterLink to="/brand">Brand</RouterLink> </li>
        <li><RouterLink to="/news">News</RouterLink> </li>
        <li><RouterLink to="/about">About us</RouterLink> </li>
        <li><RouterLink to="/contact">Contact</RouterLink> </li>
      </ul>
      <ul class="lanSwitch">
        <li class="active">EN</li>
        <li>中文</li>
      </ul>
      <div
        @click="toggleMenu()"
        class="switchButton"></div>
  </div>
</template>