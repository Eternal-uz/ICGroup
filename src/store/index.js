import { createStore } from 'vuex';
import { auth, usersCollection  } from "@/includes/firebase";
// import { router } from '@/router/index.js';

export default createStore({
    state: {
        regModalShow: false,
        logModalShow: false,
        userLoggedIn: false,
        togglePages: false,
        toggleAuthModal: false,
    },
    mutations: {
        toggleRegModal: (state) => {
            state.regModalShow = !state.regModalShow;
        }, 
        toggleLogModal: (state) => {
            state.logModalShow = !state.logModalShow;
        },
        toggleAuth(state) {
            state.userLoggedIn = !state.userLoggedIn;
        },
        togglePagesFn(state){
            state.togglePages = !state.togglePages
            console.log('togglePages');
          }
    },

    actions: {
        async register({commit}, payload) {
            const userCred = await auth.createUserWithEmailAndPassword(
                payload.email,
                payload.password
            );
            await usersCollection.doc(userCred.user.uid).set({
                name: payload.name,
                email: payload.email,
                age: payload.age,
                country: payload.country,

            });

            await userCred.user.updateProfile({
                displayName: payload.name,
            })

            commit('toggleAuth');
        },
        init_login({commit}){
            const user = auth.currentUser;
            if(user){
                commit('toggleAuth');
            }
        },
        async login({commit}, payload){
           await auth.signInWithEmailAndPassword(payload.email, payload.password);

           commit('toggleAuth','togglePagesFn');
        },
        async signout({commit}){
            await auth.signOut();
            this.$router.push('/')

            commit('toggleAuth');
        }

    },
    modules: {},
});

