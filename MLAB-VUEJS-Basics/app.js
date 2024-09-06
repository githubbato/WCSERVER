const app = Vue.createApp( {
    //Create functions, data
    data(){
        return {
            title: 'The Ledger',
            author: 'Jeseph Esquivel',
            age: 34
        }
    }   
});

app.mount('#app')