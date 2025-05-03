<script setup>
  import { useLoadStore } from '@/stores/load'
  import { useInquiryStore } from '@/stores/inquiry'
  import { storeToRefs } from 'pinia'
  import { ref } from 'vue'

  const loadStore = useLoadStore()
	const { isInquiryOpen, isInquiryShow, closeInquiry } = storeToRefs(loadStore)

  const inquiryStore = useInquiryStore()
	const { unit, amount, sendInquiry } = storeToRefs(inquiryStore)

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
    printData: {
      unit: unit.value,
      amount: amount.value
    },
    category: 'calculate',
    status: 'pending'
  })

</script>
<template>
  <div
    class="inquiryArea"
    :class="[
      { open: isInquiryOpen },
      { show: isInquiryShow }
    ]">
    <div class="inquiryArea__box">
      <div class="inquiryTitle">
        <h2>Send Inquiry to Eonian Sales TeamTotal</h2>
        <div
          @click="closeInquiry()"
          class="closeButton">close</div>
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
  </div>
</template>