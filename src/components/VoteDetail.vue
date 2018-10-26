<template>
  <div class="row">
    <div class="col-xs-12">
      <div class="detail-head">
        <div class="row">
          <div class="col-xs-11 col-xs-offset-1">
            <h1 class="vote-title">{{ vote.title }}</h1>
            <div class="vote-description">{{ vote.description }}</div>
            <div class="vote-time">
              <span style="font-weight: 600;">FROM</span> :
              {{ new Date(vote.createdAt).toString() }}
            </div>
          </div>
        </div>
      </div>
      <div class="divider"></div>
      <div class="detail-body" style="margin-top: 32px;">
        <div class="row">
          <div class="col-xs-10 col-xs-offset-1 col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3">
            <div class="card">
              <div class="row">
                <div class="col-xs-12">
                  <h3 class="vote-body-head">Voting</h3>
                  <div class="divider"></div>
                  <div class="row">
                    <div class="col-xs-12">
                      <div class="vote-item row" v-for="(item, index) in vote.items" :key="index">
                        <div class="col-xs-12">
                          <div class="row">
                            <div class="col-xs-12 col-md-3">
                              {{ item.name }}
                            </div>
                            <div class="vote-item-description col-xs-12 col-md-9">
                              {{ item.description }}
                            </div>
                          </div>

                          <input class="vote-item-range range-slider" type="range" min="0" max="10" v-model="item.score">
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-xs-2 col-xs-offset-10">
                      <button class="uk-button uk-button-primary" @click="submit">Submit</button>
                    </div>
                  </div>
                </div>
              </div>
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

  created() {
    this.vote.items = this.vote.items.map(i => ({
      ...i,
      score: DEFAULT_SCORE,
    }))
    console.log(this.vote.items)
  }

  submit() {
    alert(this.vote.items[0].score)
  }
}
</script>

<style scoped>
.detail-head {
  padding: 12px;
}
.vote-description,
.vote-time {
  color: gray;
  margin: 6px 0;
}
.vote-description {
  font-size: 1.1em;
  margin-bottom: 32px;
}
.vote-time {
  font-size: 0.8em;
  margin-bottom: 12px;
}
.vote-body-head {
  color: gray;
}
.vote-item {
  margin-top: 25px;
  margin-bottom: 25px;
  padding: 32px;
  border: solid gainsboro 1px;
  border-radius: 5px;
}
.vote-item-range {
  margin-top: 32px;
  width: 100%;
}
.vote-item-description {
  color: gray;
}
</style>
