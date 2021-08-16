export const state = () => ({
    navi: false,
})


export const mutations = ({
  toggleNavi(state) {
    state.navi = !state.navi
  }
})

export const actions = {
  getNavi(state) {
    return state.navi
  }
}
