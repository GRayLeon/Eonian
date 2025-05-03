<script setup>
  import { usePagesStore } from '@/stores/pages'
  import { useLoadStore } from '@/stores/load'
  import { storeToRefs } from 'pinia'
  import { onMounted } from 'vue'

  const pagesStore = usePagesStore()
  const { pagesInfo, getPages } = storeToRefs(pagesStore)

  const loadStore = useLoadStore()
	const { isMenuOpen } = storeToRefs(loadStore)

  const textFormat = rawText => {
    return rawText.replace(/\n/g, '<br>')
  }

  onMounted( () => {
    isMenuOpen.value = false
    getPages.value()
  })
</script>
<template>
  
  <div class="aboutContent">
    <div class="aboutContent__section">
      <div class="title">
        <h2>Vision</h2>
      </div>
      <div class="detail detail--vision">
        <img :src="pagesInfo.vision.imageURL">
        <div class="text">
          <p v-html="textFormat(pagesInfo.vision.description.en)"></p>
        </div>
      </div>
    </div>
    <div class="aboutContent__section">
      <div class="title">
        <h2>Partners</h2>
      </div>
      <div class="detail detail--partners">
        <img
          v-for="image in pagesInfo.partners" 
          :src="image.imageURL">
      </div>
    </div>
  </div>
</template>