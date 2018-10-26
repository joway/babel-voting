import { Vote, VoteItem, VoteKind } from './types'

export const MockVoteItem0: VoteItem = {
  id: 0,
  name: 'Pho 35',
  description: 'Vietnam',
}

export const MockVoteItem1: VoteItem = {
  id: 0,
  name: 'Tang Restaurant',
  description: 'Chinese Food',
}

export const MockVote: Vote = {
  title: 'Vote for restaurant',
  kind: VoteKind.Rating,
  description: 'Hi, please vote with me !!!',
  createdAt: new Date().getTime(),
  items: [MockVoteItem0, MockVoteItem1],
}
