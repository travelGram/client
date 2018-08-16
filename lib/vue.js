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
                    swal("Register Success", "You clicked the button!", "success");
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
                    swal("Login success", "You clicked the button!", "success");
                }
            }).catch((err) => {
                swal("username/password wrong")
                console.log(err.message);
            });
        }
    }
})