import { createSlice, configureStore } from '@reduxjs/toolkit'

const initialState = { counter: 0, showCounter: true }
const authInitialState = { isAuthenticated: false }

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state) {
            state.counter = state.counter++
        },
        increase(state, action) {
            state.counter = state.counter + action.payload
        },
        decrease(state, action) {
            state.counter = state.counter + action.payload
        },
        toggle(state) {
            state.showCounter = !state.showCounter
        }
    }
})

const authSlice = createSlice({
    name: 'auth',
    initialState: authInitialState,
    reducers: {
        login(state) {
            state.isAuthenticated = true
        },
        logout(state) {
            state.isAuthenticated = false
        }
    }
})


const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        counter: counterSlice.reducer
    }
    //for multiple reducers
    //reducer: { anykey: couterSLice.reducer }
})

export const counterActions = counterSlice.actions
export const authActions = authSlice.actions


export default store