import { Vote } from '@/types'
import { MockVote } from '@/mock'

const isMock = true

export function getVote(voteId: string): Vote | null {
  if (isMock) {
    return MockVote
  }
  return null
}
