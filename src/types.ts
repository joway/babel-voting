export type VoteId = string
export type VoteItemId = number
export type VoteRecordItemId = number

export enum VoteKind {
  Rating = 'rating',
  Select = 'select',
}

export interface Vote {
  title: string
  kind: string
  description: string
  createdAt: number
  items: VoteItem[]
}

export interface VoteItem {
  id: VoteItemId // from 0,...
  name: string
  description?: string
  score?: number
}

export interface VoteRecord {
  user: string
  voteId: string
  votes: VoteRecordItem[]
}

export interface VoteRecordItem {
  voteId: string
  itemId: VoteRecordItemId
}
