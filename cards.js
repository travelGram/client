Vue.component('cards-pics', {
    template: `
    <div class="container">
            <div class="row">
                <div class="card" style="width: 18rem;" v-for="photo in pictures">
                    <img v-bind:src="photo.imageUrl" class="card-img-top" >
                    <div class="card-body">
                        <div class="caption">
                            <p>{{photo.caption}}</p>
                            </div>
                        <div class="card-footer">
                            <div class="twitter-logo">
                            <img src="twitter-logo.png" style="width:30px; height:30px;">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `, 
    props:['pictures'],
})
