<template>
  <div class="row">
    <div class="col-xs-10 col-xs-offset-1 col-md-6 col-md-offset-3">
      <div class="row">
        <div class="col-xs-2">
          <div class="vote-edit-head">Edit</div>
        </div>
        <div class="col-xs-1 col-xs-offset-9">
          <div style="margin-top: 2.5em;">
            <router-link to="/">
              <i class="material-icons" style="font-size: 2.5em;">
                reply
              </i>
            </router-link>
          </div>
        </div>
      </div>
      <div class="divider"></div>

      <div class="row" style="margin-top: 32px;">
        <div class="col-xs-12">
          <form>
            <div class="row">
              <div class="col-xs-3">
                <h3>Title</h3>
              </div>
              <div class="col-xs-9">
                <input class="uk-input" type="text" v-model="vote.title">
              </div>
            </div>

            <div class="row">
              <div class="col-xs-3">
                <h3>Description</h3>
              </div>
              <div class="col-xs-9">
                <textarea class="uk-textarea" v-model="vote.description"></textarea>
              </div>
            </div>

            <div class="row" style="margin-top: 64px;">
              <div class="col-xs-3" style="text-align: center;">
                <i class="material-icons" style="font-size: 36px;color: black;">
                  add_circle_outline
                </i>
              </div>
              <div class="col-xs-9">
                <div v-for="(item, index) in vote.items" :key="index">
                  <form class="vote-item">
                    <div class="row">
                      <div class="col-xs-3">
                        Item Name:
                      </div>
                      <div class="col-xs-9">
                        <input class="uk-input" type="text" v-model="item.name">
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-xs-3">
                        Item Description:
                      </div>
                      <div class="col-xs-9">
                        <textarea class="uk-textarea" v-model="item.description"></textarea>
                      </div>
                    </div>
                  </form>
                  <div class="divider" style="margin-bottom: 32px;"></div>
                </div>
              </div>
            </div>
          </form>

          <div class="row">
            <div class="col-xs-2 col-xs-offset-10">
              <button class="uk-button uk-button-primary">Submit</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { Vote } from '@/types'

const DEFAULT_SCORE = 6

@Component
export default class VoteDetail extends Vue {
  @Prop({ default: null })
  vote!: Vote

  created() {}

  submit() {
    alert()
  }
}
</script>

<style scoped>
.vote-edit-head {
  font-size: 5em;
  color: #000;
}
.vote-item {
  margin-bottom: 12px;
}
.vote-item > .row {
  margin-bottom: 5px;
}
</style>
