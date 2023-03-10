import { createSlice } from '@reduxjs/toolkit'

const partnerSlice = createSlice({
  name: 'partner',
  initialState: {
    name: '',
    lastName: '',
    documentType: '',
    partnerId: null,
    phone: '',
    address: '',
    email: '',
    type: '',
    selectedPartner: {}
  },
  reducers: {
    setPartner: (state, { payload }) => {
      state._id = payload._id
      state.name = payload.name
      state.lastName = payload.lastName
      state.documentType = payload.documentType
      state.partnerId = payload.partnerId
      state.phone = payload.phone
      state.address = payload.address
      state.email = payload.email
      state.type = payload.type
    },
    setSelectedPartner: (state, { payload }) => {
      state.selectedPartner = payload
    },
    unSetPartner: (state) => {
      state._id = ''
      state.name = ''
      state.lastName = ''
      state.documentType = ''
      state.partnerId = null
      state.phone = ''
      state.address = ''
      state.email = ''
      state.type = ''
    }
  }
})

export const { setPartner, unSetPartner, setSelectedPartner } = partnerSlice.actions

export default partnerSlice.reducer
