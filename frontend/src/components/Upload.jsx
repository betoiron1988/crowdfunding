import React from "react";
import ReactDOM from "react-dom";
import axios from "axios"


class Upload extends React.Component {
  state = {
    
    imgs: []
  };
  imageUpload = e => {
    console.log("on upload");
    console.log(e.target.files)
    const data = new FormData();
    data.append("file", e.target.files[0]);
    const url = "https://api.cloudinary.com/v1_1/dtyvhejg9/image/upload";
    axios
      .post(url, data)
      .then(({ data: { eager } }) =>
        this.setState(prevState => {
          console.log(eager);
          return {
            imgs: [...prevState.imgs, eager[0].secure_url]
          };
        })
      )
      .catch(err => console.log(err));
  };
  render() {
    return (
      <div className="App">
        
        <form>
          <input
            type="file"
            name="foto"
            id="foto"
            onChange={this.imageUpload}
          />
          s
        </form>
      </div>
    );
  }
}

export default Upload;