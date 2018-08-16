Vue.component('post-card', {
  template: `
    <div class="container">
      <div class="d-flex justify-content-center">
        <div class="card">
            <div class="input-group mb-3">
              <div class="custom-file">
                <input type="file" class="custom-file-input" id="inputGroupFile02" accept=".jpg, .jpeg, .png" v-on:change="uploadImage($event)">
                <label class="custom-file-label" for="inputGroupFile02" aria-describedby="inputGroupFileAddon02">Choose file</label>
              </div>
            </div>
            <div class="form-group">
              <label for="exampleFormControlTextarea1">Caption:</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="caption"></textarea>
            </div>
        </div>
      </div>
    </div>
    `,
    data: function() {
      return {
        file: '',
        caption: ''
      }
    },
    methods: {
      uploadImage(e) {
        this.file = e.target.files[0]
        console.log(e)
      },
      uploading(){
        this.$emit('postImage', {img: this.file, caption: this.caption})
      }
    }
})