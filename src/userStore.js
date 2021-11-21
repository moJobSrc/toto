import Vue from 'vue' 
import Vuex from 'vuex' 

Vue.use(Vuex)

const userStore = new Vuex.Store({
    state: {
        host: 'https://quixotic-market-331915.an.r.appspot.com',
        token: '',
        role: '',
    },
    mutations: {
        loginToken: function(state, payload) {
            state.token = payload;
        },
        logout: function(state) {
            if(state.token) {
                state.token = '';
                alert('로그아웃 되었습니다.');
            }
        },
        loginCheck: function(state) {
            state.role = 'admin';
        }
    }
});

export default userStore