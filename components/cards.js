Vue.component('cards-pics', {
    template: `
    <div class="container">
    <div class="row">
        <div class="card" style="width: 18rem;" v-for="photo in pictures">
            <img v-bind:src="photo.imageUrl" :key="photo._id" class="card-img-top">
            <div class="card-body">
                <div class="caption">
                    <p>{{photo.caption}}</p>
                </div>
                <div class="card-footer">
                    <div class="fb-share-button" :data-href="photo.imageUrl" data-layout="button" data-size="large"
                        data-mobile-iframe="true">
                        <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse"
                            class="fb-xfbml-parse-ignore">Share</a>
                    </div>
                    <a :href="photo.imageUrl" data-toggle="tooltip" data-placement="right" title="Download: alt + click" download><i class="fas fa-download"></i></a>
                </div>
            </div>
        </div>
    </div>
</div>
    `,
    props: ['pictures'],
})
