<template>
  <div class="home row">
    <div class="col-xs-10 col-xs-offset-1 col-md-8 col-md-offset-2">
      <img class="babel-image" src="../assets/babel.jpg" style="margin-top: 32px;">
      <h1>Voting !</h1>

      <div>
        <router-link to="/edit">
          <button class="uk-button uk-button-primary uk-button-large">Create New Vote</button>
        </router-link>
      </div>

      <div class="faq row" style="margin-top: 50px;">
        <div class="col-xs-4">
          <h3>Why I need it ?</h3>
          <div class="faq-text">
            Hi, I'm faq.Hi, I'm faq.Hi, I'm faq.Hi, I'm faq.Hi, I'm faq.Hi, I'm faq.Hi, I'm faq.Hi, I'm faq.Hi, I'm faq.Hi, I'm faq.
          </div>
        </div>
        <div class="col-xs-4">
          <h3>Does it secure ?</h3>
          <div class="faq-text">
            Hi, I'm faq.Hi, I'm faq.Hi, I'm faq.Hi, I'm faq.Hi, I'm faq.Hi, I'm faq.Hi, I'm faq.Hi, I'm faq.Hi, I'm faq.Hi, I'm faq.
          </div>
        </div>
        <div class="col-xs-4">
          <h3>Does it secure ?</h3>
          <div class="faq-text">
            Hi, I'm faq.Hi, I'm faq.Hi, I'm faq.Hi, I'm faq.Hi, I'm faq.Hi, I'm faq.Hi, I'm faq.Hi, I'm faq.Hi, I'm faq.Hi, I'm faq.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {},
})
export default class Home extends Vue {}
</script>

<style scoped>
.home {
  text-align: center;
}
.babel-image {
  height: 30%;
}
.faq {
  text-align: left;
}
.faq-text {
}

</style>
