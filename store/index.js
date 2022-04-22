export const state = () => ({
  user: 12345,
})

export const mutations = {
  increment(state) {
    state.counter++
  },
}

export const getter = {
  user: ({ user }) => user,
}
