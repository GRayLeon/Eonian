<script setup>
  import { useLoadStore } from '@/stores/load'
	import { storeToRefs } from 'pinia'

  const loadStore = useLoadStore()
	const { isLoadingOpen, isLoadingShow } = storeToRefs(loadStore)


</script>

<template>
  <div
    class="adminLoading"
    :class="[
      { open: isLoadingOpen },
      { show: isLoadingShow }
    ]">
    <div class="loadingText">
      LOADING
    </div>
  </div>
</template>

<style scoped>
</style>
