Vue.component('login-page', {
    template: `
    <div class="container" style="text-align:center">
        <h1>Travelgram</h1>
            <img src="./img/travel.png" alt="">
        <br><br>
        <h3>Login form</h3>
        <div class="container-form">
        <form action="">
            <input v-model="email" type="email" placeholder="email">
            <hr>
            <br><br>
            <input v-model="password" type="password" placeholder="password">
            <hr>
            <p>Don't have an account ? <a href="./register.html">Register here</a></p>
            <button v-on:click="loginChild" type="submit">Login</button>
        </form>
        </div>
    </div>`,

    data: function(){
        return {
            email: '',
            password: ''
        }
    },

    methods: {
        loginChild(){
            event.preventDefault()
            this.$emit('login-click', {
                email: this.email,
                password: this.password
            })
        }
    }

})