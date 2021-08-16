export const state = () => ({
  subject: ''
})


export const mutations = ({
  setSubject(state, subject) {
    state.subject = subject
  }
})

export const actions = {
  getSubject(state) {
    return state.subject
  }
}
