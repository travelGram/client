var app = new Vue ({
    el: '#app',
    data: {
        email: '',
        password: ''
    },
    methods: {
        registerParent(value){
            axios.post('https://travelgramserver.lockonmaram.com/signup', value)
            .then((response) => {
                if (response.status == 200) {
                    localStorage.setItem('token', response.data.data.token)
                    swal("Registration Successful!", "success");
                    window.location.href="dashboard.html"
                }
            }).catch((err) => {
                console.log(err.message);
            });
        },

        loginParent(value){
            axios.post('https://travelgramserver.lockonmaram.com/login', value)
            .then((response) => {
                if (response.status == 200) {
                    localStorage.setItem('token', response.data.token)
                    swal("Login success", "success");
                    window.location.href="dashboard.html"
                }
            }).catch((err) => {
                swal("Username/Password incorrect.")
                console.log(err.message);
            });
        }
    },
    created() {
        let token = localStorage.getItem('token')
        if (token) {
            window.location.href = 'dashboard.html'
        } 
    }
})