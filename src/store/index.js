import { createStore } from 'vuex'
import { supabase } from '@/lib/supabaseClient'

const state = {
  games: [],
  dark_theme: false,
}

const getters = {
  getGames: state => state.games,
  getTheme: state => state.dark_theme,
}

const mutations = {
  newGames: (state, games) => state.games = games,
  newDeleteGame: (state, game_id) => state.games = state.games.filter(games => games.id !== game_id),
  newTheme: (state, theme) => state.dark_theme = theme,
}

const actions = {
  fetchGames: async ({ commit }) => {
    try {
      const { data } = await supabase.from('games').select()

      commit('newGames', data);
    } catch (err) {
      console.log(err);
    }
  },

  createGame: async (vuex, { name, link }) => {
    try {
      const { status } = await supabase.from('games').insert([{
        name,
        link,
      }]);

      return status
    } catch (err) {
      console.log(err);
    }
  },

  deleteGame: async ({ commit }, { id }) => {
    try {
      await supabase.from('games').delete().match({ id })

      commit('newDeleteGame', id)
    } catch (err) {
      console.log(err);
    }
  },

  setTheme: async ({ commit }, theme) => {
    commit('newTheme', theme);
  },
}

export default createStore({
  state,
  getters,
  mutations,
  actions,
})
