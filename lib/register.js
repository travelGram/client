Vue.component('register-page',{
    template: `
    <div class="container" style="text-align:center">
        <h1>Travelgram</h1>
            <img src="./img/travel.png" alt="">
        <br><br>
        <h3>Register form</h3>
        <div class="container-form">
            <form action="">
                <input v-model="email" type="email" placeholder="email">
                <hr>
                <br><br>
                <input v-model="password" type="password" placeholder="password">
                <hr>
                <p>Already have an account ? <a href="./login.html">Login</a></p>
                <button v-on:click="registerChild" type="submit">Register</button>
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
        registerChild(){
            event.preventDefault()            
            this.$emit('register-click', {
                email: this.email,
                password: this.password
            })
        }
    }
})