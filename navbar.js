Vue.component('Navbar', {
    template: `
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#"><i class="fab fa-ravelry"></i>TRAVELGRAM</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            
            <div class="collapse navbar-collapse" id="navbarSupportedContent" style="">
                <div class="d-flex flex-row justify-content-end">
                    <button type="button" class="btn btn-outline-dark my-3 my-sm-1" @click="logout"><i class="fas fa-sign-out-alt"></i>Logout</button>
                </div>                
            </div>
        </nav>
    `,
    methods: {
        logout(){
            localStorage.removeItem('token')
            window.location.href(login.html)
        }
    }
    
})
