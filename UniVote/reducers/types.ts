export interface comment {
    user: string
    comment: string
}

export enum ITEM_TYPE {
    PROPOSAL = "PROPOSAL",
    REFERENDUM = "REFERENDUM"
}
export enum PROPOSAL_TYPE {
    PRIVATE = "Private proposal",
    PUBLIC = "Public proposal"
}

export enum REFERENDUM_TYPE {
    PRIVATE = "Private referendum",
    PUBLIC = "Public referendum"
}

export interface ReferendumChoices {
    label: string
    selected: boolean
}

export interface SelectedReferendumChoice {
    index: number
    selected: boolean
}

export interface ProposalDetails {
    title: string
    description: string
    id: string
    numberOfVotes: number
    comments?: comment[]
    type: ITEM_TYPE
    choices?: ReferendumChoices[],
    image: string
}

export interface NewProposal {
    name: string
    details: string
    type: PROPOSAL_TYPE
    group: string
    image: string,
    seeVoters: string,
    allowComments: string
}

export interface NewReferendum{
    name: string,
    details:string,
    type: REFERENDUM_TYPE,
    group: string,
    choices: string[],
    seeVoters: string,
    allowComments: string,
    image: string
}
