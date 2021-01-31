import React from 'react';
import axios from "axios";
import Button from '@material-ui/core/Button';

class GetFile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          file: '',
          results: [],
          setImage:[]
        };
    }

  handleFile(e) {
      console.log("Uploading....");
      // this.setState({ file:e.target.files[0] });
      this.state.file = e.target.files[0];
      this.handleUpload();
  }

  async handleUpload() {
    let formData = new FormData();
    formData.append('file', this.state.file);
    formData.append('name', 'skin pic');
    axios({
        url: "http://localhost:3005/image-uploads",
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data",
         },
        data:formData,
        withCredentials: false,
    })
    .then((res) => {
        if (res.status === 200) {
            console.log(res);
            this.state.results[0]=res.data.path;
            console.log(this.state.results[0]);
            this.setImage(this.state.results[0]);
        }
        else {
          console.log("Error occurred")
        }
    })
    .catch((err) => { });
  }
  async setImage(data){
    this.state.setImage[0]="";
    this.state.setImage[0]=data;
    document.getElementById("results").src = "http://localhost:3005/"+this.state.setImage[0].replace("\\","/");
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
                  formEncType={'multipart/form-data'}
                  onInput={(e) => this.handleFile(e)}
                />
                <div>
                    <label htmlFor="get-file">
                        <div>
                            <Button variant="outlined" component="span" color="primary" className="btn1">
                                Select Image
                            </Button>
                        </div>
                    </label>
                    <img id="results" alt="Results" src=""/>
                    {/* <div>
                        <Button type="submit" variant="outlined" component="span" color="primary"
                            onClick={()=>this.handleUpload()}>Upload</Button>
                    </div> */}
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
