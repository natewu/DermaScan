import React from 'react';
import axios from "axios";
import Button from '@material-ui/core/Button';

class getFile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {file: '' };
        this.handleFile = this.handleFile.bind(this);
    }

    handleFile(e) {
    this.setState({ file:e.target.files[0] });
  }

  handleUpload(e) {
    let formData = new FormData();
    formData.append('file', this.state.file);
    formData.append('name', 'skin pic');
    console.warn(this.state.file);
    axios({
         url: "http://localhost:3005/image-uploads",
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data",
          "access-control-allow-origin": "*"
         },
        data:formData,
        withCredentials: true,
    })
      .then((res) => {
          if (res.status === 200) {
                    console.log("Success!")
                }else {
                    console.log("Error occurred")
                }
      })
      .catch((err) => { });
  }


    render() {
        return (
            <div>
                <h1>Send Image</h1>
                <input
                  accept="image/*"
                  style={{ display: 'none' }}
                  id="get-file"
                  type="file"
                  name="file"
                  formEncType={'multipart/form-data'}
                  onChange={(e) => this.handleFile(e)}
                />
                <label htmlFor="get-file">
                  <Button variant="outlined" component="span" color="primary">
                    Select Image
                  </Button>
                </label>
                <Button type="submit" variant="outlined" component="span" color="primary" onClick={()=>this.handleUpload()}>Upload</Button>
            </div>
        );
    }
}

export default getFile;

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
