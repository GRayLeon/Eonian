<script setup>
  import { useInquiryStore } from '@/stores/inquiry'
  import { useLoadStore } from '@/stores/load'
  import { storeToRefs } from 'pinia'
  import { ref, onMounted } from 'vue'

  const inquiryStore = useInquiryStore()
	const { unit, amount, sendInquiry } = storeToRefs(inquiryStore)

  const loadStore = useLoadStore()
	const { isMenuOpen } = storeToRefs(loadStore)

  const inquiryInfo = ref({
    data: {
      userType: '',
      topic: '',
      question: '',
      firstName: '',
      lastName: '',
      email: '',
      number: '',
      subscribe: false
    },
    category: 'form',
    status: 'pending'
  })

  onMounted( () => {
    isMenuOpen.value = false
  })
</script>
<template>
  <div class="contactContent">
      <div class="contactContent__title">
        <h2>Contact</h2>
        <p>
            Our national customer service help desk can be reached at 800-449-3591, or complete the form below and one of our team specialists will contact you as soon as possible. To speak with a National Account Specialist, please call us at 877-556-5728.
        </p>
      </div>
      <div class="contactContent__table">
        <div class="section">
          <div class="head">I'm A</div>
          <div class="inputArea">
            <input
              v-model="inquiryInfo.data.userType"
              type="text"
              placeholder="Your Job">
          </div>
        </div>
        <div class="section">
          <div class="head">I need help with?</div>
          <div class="inputArea">
            <input
              v-model="inquiryInfo.data.topic"
              type="text"
              placeholder="Your Message">
          </div>
        </div>
        <div class="section">
          <div class="head">Question</div>
          <div class="inputArea">
            <textarea
              v-model="inquiryInfo.data.question"
              placeholder="Your Message"></textarea>
          </div>
        </div>
        <div class="section">
          <div class="head">First Name</div>
          <div class="inputArea">
            <input
              v-model="inquiryInfo.data.firstName"
              type="text"
              placeholder="First Name">
          </div>
        </div>
        <div class="section">
          <div class="head">Last Name</div>
          <div class="inputArea">
            <input
              v-model="inquiryInfo.data.lastName"
              type="text"
              placeholder="Last Name">
          </div>
        </div>
        <div class="section">
          <div class="head">Email</div>
          <div class="inputArea">
            <input
              v-model="inquiryInfo.data.email"
              type="text"
              placeholder="Your Message">
          </div>
        </div>
        <div class="section">
          <div class="head">Phone Number</div>
          <div class="inputArea">
            <input
              v-model="inquiryInfo.data.number"
              type="text"
              placeholder="Your Message">
            <div class="checkboxArea">
              <input 
                v-model="inquiryInfo.data.subscribe"
                type="checkbox"
                id="checkInfo"
                checked>
              <label for="checkInfo">
                <p>
                  I would like to receive information and inspiration from us.
                </p>
              </label>
              <span></span>
            </div>
          </div>
        </div>
        <div class="section">
          <div class="head"></div>
          <div class="inputArea">
            <div class="buttonArea">
              <div class="reCaptcha"></div>
              <div
                @click="sendInquiry(inquiryInfo)"
                class="button">send</div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>