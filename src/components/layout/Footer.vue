<script setup>
  import { RouterLink } from 'vue-router'
</script>
<template>
  <div class="footer">
    <div class="topArea">
      <div class="topArea__logo">
        <img src="@/assets/images/logo--footer.svg">
      </div>
      <div class="topArea__info">
        <div class="company">
          <div class="title">
            Eonian Acumen Co., LTD.
          </div>
          <ul>
            <li>6F, No 215, Heping East Rd Section 3, Taipei, Taiwan</li>
            <li>service@eonian.space</li>
            <li>02 2735 3598</li>
          </ul>
        </div>
        <ul class="message">
          <li>
            <img src="@/assets/images/message--fb.png">
          </li>
          <li>
            <img src="@/assets/images/message--line.png">
          </li>
        </ul>
      </div>
    </div>
    <div class="bottomArea">
      <div class="bottomArea__copyright">
        <span>&copy; Eonian Acumen Corporation</span>
      </div>
      <div class="bottomArea__link">
        <ul class="social">
          <li>
            <a href="">Facebook</a>
          </li>
          <li>
            <a href="">Instagram</a>
          </li>
        </ul>
        <ul class="subPages">
          <li>Privacy Policy</li>
          <li>Legal Notice</li>
          <li>Terms of Use</li>
        </ul>
      </div>
    </div>
  </div>
</template>