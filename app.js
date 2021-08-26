const vm = Vue.createApp({
    data() {
        return {
            firstName: 'Jane',
            lastName: 'Doe',
            url: 'https://google.com', // use v-bind: or just :
            raw_url: '<a href="https://google.com" target="_blank">Google2</a>',
            age: 8
        }
    },
    methods: {
        fullName() {
            return `${this.firstName} L. ${this.lastName.toUpperCase()} `
        },
        increment() {
            this.age++
        }
    }
}).mount('#app')

// setTimeout(() => {
//     vm.firstName = 'Jane K. Doe'
// }, 2000)

// Vue.createApp({
//     data() {
//         return {
//             lastName: 'Doe',
//             firstName: 'John'
//         }
//     }
// }).mount('#app2')