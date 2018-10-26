<template>
  <div id='section-detail' class="row">
    <div class="col-xs-12">
      <VoteDetail :vote="vote" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import VoteDetail from '@/components/VoteDetail.vue'
import { Vote } from '@/types'
import { getVote } from '@/service'

@Component({
  components: {
    VoteDetail,
  },
})
export default class Home extends Vue {
  private vote!: Vote | null

  created() {
    const { voteId } = this.$route.query
    this.vote = getVote(voteId)
  }
}
</script>
