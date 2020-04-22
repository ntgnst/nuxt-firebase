export const state = () => ({
  list: []
})

export const mutations = {
  add(state, { Ad, Soyad }) {
    state.list.push({
      Ad,
      Soyad
    })
  }
}
