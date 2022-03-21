export interface comment {
  user: string;
  comment: string;
}

export interface proposalDetails {
  title: string;
  description: string;
  proposalId: string;
  numberOfVotes: number;
  comments: comment[];
}
