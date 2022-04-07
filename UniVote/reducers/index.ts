import { combineReducers } from "redux"
import { reducer as searchReducer } from "./reducers.search"
import { reducer as trendingItemsReducer } from "./reducers.trendingItems"
import { reducer as loginReducer} from './reducers.login'
import { reducer as proposalDetailsReducer} from './reducers.proposalDetails'
import { reducer as newProposalReducer} from './reducers.createProposal'
import {reducer as myProposalsReducer} from './reducers.myProposals'

const rootReducer = combineReducers({
    search: searchReducer,
    trendingItems: trendingItemsReducer,
    login: loginReducer,
    proposalDetails: proposalDetailsReducer,
    newProposal: newProposalReducer,
    myProposals: myProposalsReducer
})

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>
