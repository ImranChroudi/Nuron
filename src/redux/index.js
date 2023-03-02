import {configureStore} from '@reduxjs/toolkit'
import nftSlice from './store/CreateSlice'

const store = configureStore ({
    reducer : {
        NFT :  nftSlice.reducer
    }
})

export default store