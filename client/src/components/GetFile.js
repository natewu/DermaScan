import React from 'react';
import axios from "axios";
import Button from '@material-ui/core/Button';

class GetFile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          file: '',
          results: ''
        };
        this.fileInput = React.createRef();
    }

  handleFile(e) {
      console.log("Uploading....");
      this.state.file = e.target.files[0];
      let fileName = this.fileInput.current.files[0].name;
      console.log(fileName);
      this.handleUpload(fileName);
  }

  async handleUpload(fileName) {
    let formData = new FormData();
    formData.append('file', this.state.file);
    formData.append('name', 'skin pic');
    let url = 'http://localhost:3005/image-uploads';
    axios({
        url: url,
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data",
         },
        data:formData,
        withCredentials: false,
    })
    .then((res) => {
        if (res.status === 200) {
            let filePath = url + '/' + fileName;
            this.setImage(filePath);
        }
        else {
          console.log("Error occurred")
        }
    })
    .catch((err) => { });
  }
  async setImage(path){
    axios.get(path, {responseType: 'arraybuffer'})
        .then((data) => {
            let base64Flag = 'data:image/jpeg;base64,';
            let imageStr = this.arrayBufferToBase64(data.data);
            this.setState({ results: base64Flag + imageStr});
        })
   }
   arrayBufferToBase64(buffer) {
    let binary = '';
    let bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b) => binary += String.fromCharCode(b));
    return window.btoa(binary);
}

    render() {
        return (
            <div className="getfile" style={this.props.passStyle}>
                <input
                  accept="image/*"
                  style={{ display: 'none' }}
                  id="get-file"
                  type="file"
                  name="file"
                  ref={this.fileInput}
                  formEncType={'multipart/form-data'}
                  onInput={(e) => this.handleFile(e)}
                />
                <div>
                    <label htmlFor="get-file">
                        <div>
                            <img src={this.state.results} alt='result' style={{maxWidth:"100%", height:"auto", marginTop:"10px", marginLeft:"auto", marginRight:"auto"}} />
                            <Button variant="outlined" component="span" color="primary" className="btn1" >
                                Select Image
                            </Button>
                        </div>
                    </label>
                </div>
            </div>
        );
    }
}

export default GetFile;

export function uploadSuccess({ data }) {
  return {
    type: 'UPLOAD_DOCUMENT_SUCCESS',
    data,
  };
}

export function uploadFail(error) {
  return {
    type: 'UPLOAD_DOCUMENT_FAIL',
    error,
  };
}
