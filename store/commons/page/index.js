export const state = () => ({
  name: '',
  navi: false,
  useCancel: false,
})


export const mutations = ({
  setName(state, payload) {
    state.name = payload ?? ''
  },
  toggleNavi(state, payload) {
    state.navi = payload ?? !state.navi

  },
  setCancel(state, payload) {
    state.useCancel = payload ?? !state.useCancel;
    state.callbackCancel = payload ? payload : () => {};
  }
})

export const actions = {
  getNavi(state) {
    return state.navi
  }
}
