<script setup>
  import { useBrandStore } from '@/stores/brand'
	import { storeToRefs } from 'pinia'
  import { useRoute } from 'vue-router'
  import { ref, watch } from 'vue'

  const brandStore = useBrandStore()
	const { brands } = storeToRefs(brandStore)

  const route = useRoute()
  
  const brandInfo = ref({
    name: '',
    imageURL: '',
    imagePublicId: '',
    description: {
      en: '',
      zh: ''
    },
    content: [{
      layout: {
        direction: 'single-vertical',
        position: 'image-top'
      },
      article: [{
        text: {
          en: '',
          zh: ''
        },
        imageURL: '',
        imagePublicId: ''
      }]
    }]
  })

  const initBrandInfo = () => {
    brands.value.data.forEach( brand => {
      if (brand._id == route.params.id) {
        brandInfo.value = { ...brand }
      }
    })
  }

  watch(
    () => brands.value.data,
    (newData) => {
      if (newData.length > 0) {
        initBrandInfo()
      }
    },
    { immediate: true }
  )
</script>
<template>
  <div class="brandInsideContent">
    <div class="brandInsideContent__info">
      <h2>{{ brandInfo.name }}</h2>
    </div>
    <div class="brandInsideContent__detail">
      <div class="section">
        <img :src="brandInfo.imageURL">
      </div>
      <div
        v-for="section in brandInfo.content"
        class="section">
        <div
          v-for="article in section.article"
          class="articleLayout"
          :class="section.layout.position">
          <img
            v-if="article.imageURL"
            :src="article.imageURL">
          <div
            v-if="article.text.en"
            class="article">
            <div class="title">{{ article.title.en }}</div>
            <p>{{ article.text.en }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="brandInsideContent__description">
      <div class="stickyCard">
        <p>{{ brandInfo.description.en }}</p>
      </div>
    </div>
  </div>
</template>