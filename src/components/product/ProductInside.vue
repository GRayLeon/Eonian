<script setup>
  import { useProductStore } from '@/stores/product'
  import { useLoadStore } from '@/stores/load'
  import { useInquiryStore } from '@/stores/inquiry'
	import { storeToRefs } from 'pinia'
  import { useRoute } from 'vue-router'
  import { ref, watch, computed } from 'vue'
  import { useI18n } from 'vue-i18n'

  const { t, locale } = useI18n()

  const productStore = useProductStore()
	const { products } = storeToRefs(productStore)

  const loadStore = useLoadStore()
	const { openInquiry } = storeToRefs(loadStore)

  const inquiryStore = useInquiryStore()
	const { unit, amount } = storeToRefs(inquiryStore)

  const route = useRoute()

  const productInfo = ref({
    name: {
      en: '',
      zh: ''
    },
    description: {
      en: '',
      zh: ''
    },
    subImages: [],
    shapes: [],
    colors: [],
    tags: [],
    origin: {},
    appearance: {},
    functionality: {},
    support: {},
    brand: {},
    status: 'draft',
    imageURL: '',
    basePrice: 0
  })

  const selectedColor = ref(null)

  const selectColor = ref( color => {
    selectedColor.value = color.title
  })

  const selectedShape = ref(null)

  const selectShape = ref( shape => {
    selectedShape.value = shape.title
  })

  const sumPrice = computed( () => {
    return (amount.value * productInfo.value.basePrice).toLocaleString()
  })

  const showLanText = input => {
    return input[locale.value]
  }

  const initProductInfo = () => {
    products.value.data.forEach(product => {
      if (product._id == route.params.id) {
        productInfo.value = { ...product }
      }
    })
    selectedColor.value = productInfo.value.colors[0].title
    selectedShape.value = productInfo.value.shapes[0].title
  }

  watch(
    () => products.value.data,
    (newData) => {
      if (newData.length > 0) {
        initProductInfo()
      }
    },
    { immediate: true }
  )

</script>
<template>
  <div class="productInsideContent">
    <div class="productInsideContent__option">
      <div class="optionSection">
        <div class="head">{{ $t('spec.shapes') }}</div>
        <ul>
          <li
            :class="{ active: selectedShape == shape.title }"
            v-for="shape in productInfo.shapes"
            @click="selectShape(shape)">
            <img :src="shape.imageURL">
          </li>
        </ul>
      </div>
      <div class="optionSection">
          <div class="head">{{ $t('spec.colors') }}</div>
          <ul>
          <li
            :class="{ active: selectedColor == color.title }"
            v-for="color in productInfo.colors"
            @click="selectColor(color)">
            <img :src="color.imageURL">
          </li>
        </ul>
      </div>
    </div>
    <div class="productInsideContent__images">
      <img :src="productInfo.imageURL" />
      <img v-for="img in productInfo.subImages" :src="img.imageURL" />
    </div>
    <div class="productInsideContent__info">
        <div class="stickyCard">
            <div class="productTitle">
                <h2>{{ showLanText(productInfo.name) }}</h2>
                <span class="model">{{ productInfo.model }}</span>
            </div>
            <div class="description">
                <p>
                   {{ showLanText(productInfo.description) }}
                </p>
            </div>
            <div class="spec">
                <div class="spec__item">
                  {{ $t('spec.dimension') }}:&nbsp;&nbsp;
                  {{ productInfo.dimension }}
                </div>
                <div class="spec__item">
                  {{ $t('spec.origin') }}:&nbsp;&nbsp;
                  {{ showLanText(productInfo.origin) }}
                </div>
                <div class="spec__item">
                  {{ $t('spec.colour') }}:&nbsp;&nbsp;
                  {{ selectedColor }}
                </div>
                <div class="spec__item">
                  {{ $t('spec.slipResistance') }}:&nbsp;&nbsp;
                  {{ productInfo.slipResistance }}
                </div>
                <div class="spec__item">
                  {{ $t('spec.application') }}:&nbsp;&nbsp;
                  {{ productInfo.application }}
                </div>
            </div>
            <div class="optional">
                <div class="productInsideContent__option">
                  <div class="optionSection">
                    <div class="head">{{ $t('spec.shapes') }}</div>
                    <ul>
                      <li
                        :class="{ active: selectedShape == shape.title }"
                        v-for="shape in productInfo.shapes"
                        @click="selectShape(shape)">
                        <img :src="shape.imageURL">
                      </li>
                    </ul>
                  </div>
                  <div class="optionSection">
                      <div class="head">{{ $t('spec.colors') }}</div>
                      <ul>
                      <li
                        :class="{ active: selectedColor == color.title }"
                        v-for="color in productInfo.colors"
                        @click="selectColor(color)">
                        <img :src="color.imageURL">
                      </li>
                    </ul>
                  </div>
                </div>
            </div>
            <div class="inquiry">
                <div class="inquirySection">
                    <div class="head">{{ $t('spec.unit') }}</div>
                    <div class="option">
                        <select v-model="unit">
                            <option value="m2">m2</option>
                            <option value="kg">kg</option>
                        </select>
                    </div>
                </div>
                <div class="inquirySection">
                    <div class="head">{{ $t('spec.amount') }}</div>
                    <div class="option">
                        <input
                          v-model="amount"
                          type="number">
                    </div>
                </div>
                <div class="inquirySection">
                    <div class="head">{{ $t('spec.total') }}</div>
                    <div class="option">
                        <div class="sum">
                            $ <span>{{ sumPrice }}</span>
                        </div>
                    </div>
                </div>
                <div class="inquirySection">
                    <div
                      class="linkButton"
                      @click="openInquiry">{{ $t('button.download') }}</div>
                </div>
                <div class="inquirySection">
                    <div
                      class="linkButton"
                      @click="openInquiry">{{ $t('button.send') }}</div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>