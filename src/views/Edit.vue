<template>
  <div id='section-detail' class="row">
    <div class="col-xs-12">
      <VoteEdit :vote="vote" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import VoteEdit from '@/components/VoteEdit.vue'
import { Vote } from '@/types'
import { getVote } from '@/service'

@Component({
  components: {
    VoteEdit,
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
