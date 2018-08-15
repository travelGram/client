Vue.component('Navbar', {
    data() {
      return {
          searchText: ''
      }  
    },
    methods: {
        searchButton(event) {
            this.$emit('search', this.searchText)
        }
    },
    template: `
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#"><i class="fab fa-ravelry"></i>TRAVELGRAM</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            
            <div class="collapse navbar-collapse" id="navbarSupportedContent" style="">
                <div class="d-flex flex-row justify-content-between">
                    <form class="form-inline">
                        <input v-model="searchText" class="form-control mr-sm-1" type="search" placeholder="Search" aria-label="Search">
                        <button v-on:click="searchButton" class="btn btn-outline-info my-2 my-sm-0" type="submit">Search</button>
                    </form>
                    <button type="button" class="btn btn-outline-dark my-3 my-sm-1"><i class="fas fa-sign-out-alt"></i>Logout</button>
                </div>                
            </div>
        </nav>
    `,
    
})
