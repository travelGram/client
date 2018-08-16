

Vue.component('post-card', {
  template: `
    <div class="container">
      <div class="d-flex justify-content-center">
        <div class="card">
            <div class="input-group mb-3">
              <div class="custom-file">
                <input type="file" class="custom-file-input" id="inputGroupFile02" accept=".jpg, .jpeg, .png" v-on:change="uploadImage($event)">
                <label class="custom-file-label" for="inputGroupFile02" aria-describedby="inputGroupFileAddon02">{{file.name}}</label>
              </div>
            </div>
            <div class="form-group">
              <label for="exampleFormControlTextarea1">Caption:</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="caption"></textarea>
            </div>
            <button type="button" class="btn btn-outline-dark" @click="uploading">Submit</button>
        </div>
      </div>
    </div>
    `,
    data: function() {
      return {
        file: '',
        caption: '',
        result: ''
      }
    },
    methods: {
      uploadImage(e) {
        this.file = e.target.files[0]
        console.log(e)
      },
      uploading(){
        console.log("ini file", this.file)
        console.log("ini caption", this.caption);
        
        let formData = new FormData()
        formData.append('image', this.file)

        let token = localStorage.getItem('token')

        axios({
          method: 'post',
          url: 'https://travelgramserver.lockonmaram.com/upload',
          data: formData,
        })
        .then(result=>{
          console.log(result.data.link);
          axios.post('https://travelgramserver.lockonmaram.com/posts',{
            imageUrl: result.data.link,
            caption: this.caption,
            token: token
          })
          .then(done=>{
            swal("Yay!", "New photo has been posted!", "success")
            .then(ok=>{
              window.location.assign("https://travelgram.lockonmaram.com/dashboard.html")
            })
          })
          .catch(err=>{
            swal("Failed!", "Item failed to input", "error");
          })
        })
        .catch(function(){
          swal("Failed!", "Your file has not been uploaded", "error");
        });
      }, 
    }
})
