import {createSlice} from '@reduxjs/toolkit'
import data from '../../Data/data.json'

const nftSlice = createSlice({
      name : 'NFT',
      initialState : {
         itemsNavLink : data.itemsNavLink
      },
      reducers : {
        clickey : ()=>{
            console.log(data)
        }
      }
})

export const actions = nftSlice.actions
export default nftSlice