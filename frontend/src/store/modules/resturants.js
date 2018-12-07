import axios from 'axios';

const REQUEST_SUCCESS = 'REQUEST_SUCCESS';
const ADD_LIKES = 'ADD_LIKES';
const REQUEST_RESTURANT_SUCCESS = 'REQUEST_RESTURANT_SUCCESS';

const state = {
  data: [],
  likes: 0,
  resturant: {}
};

const mutations = {
  [REQUEST_SUCCESS](state, data) {
    state.data = data;
  },
  [ADD_LIKES](state) {
    state.likes++;
  },
  [REQUEST_RESTURANT_SUCCESS](state, data) {
    state.resturant = data;
  }
};

const actions = {
  async fetchResturants({ commit }) {
    const res = await axios.get('http://localhost:3000/resturant/all');
    commit(REQUEST_SUCCESS, res.data);
  },
  async fetchResturant({ commit }, id) {
    const res = await axios.get(`http://localhost:3000/${id}/json`);
    commit(REQUEST_RESTURANT_SUCCESS, res.data)
  },
  addLikes({ commit }) {
    commit(ADD_LIKES);
  }
};

export default {
  state,
  mutations,
  actions,
};
