import React, { useState } from 'react';
import axios from 'axios';

const SecondScreen = () => {

  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Phone, setPhone] = useState('');
  const [files,setFiles] = useState([]);
  const [uploadedFiles,setUploadedFiles] = useState([]);

  const imageFieldRender = () => {

    let selectValues = document.getElementById('imagesValue').value;
    let target = document.getElementById('imageField');
    
    target.innerHTML = "";
    for (let i = 1; i <= selectValues; i++) {
      let field = document.createElement('input');
      field.type = "file";
      field.name = "files";
      field.classList.add('form-control');
      field.classList.add('w-100');
      field.classList.add('mb-3');
      field.addEventListener('change', async (event) => {
        console.log(selectValues)
        let file = event.target.files[0];
        let newFile = files;
        newFile.push(file);
        setFiles(newFile);
        if(files.length == selectValues){
          let form_data = new FormData();
          files.forEach((file) => {
          form_data.append("files",file);
          })
          let res = await axios.post('http://localhost:8000/users/pictures',form_data);
          let images = res.data.data;
          let newImages = [];
          images.forEach((img) => {
            let newImage = `http://localhost:8000/uploads/${img}`;
            newImages.push(newImage);
          })
          setUploadedFiles(newImages);
        }
      })
      target.appendChild(field);
    }
  }
  
  
  const submitForm = async (e) => {
    e.preventDefault();
    
    
    let body = {
      name: Name,
      email: Email,
      phonerNumber: Phone,
      maxNumberOfPics: uploadedFiles.length,
      picturesURLs: uploadedFiles
    }

    
    const data = await axios.post('https://hook.us1.make.com/vbv61km18q7d3k7fps1psrg3qyr3643p',
      body);

      if(data){
        console.log(data);
      }

  }



  return (
    <section className='container'>
      <div className='row'>
        <div className='col text-center my-5'>
          <h2>Car Selling Service</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-6 mx-auto">
          <form onSubmit={submitForm}>
            <div className="form-floating mb-3">
              <label className="form-label" htmlFor="name">Name</label>
              <input type="text"
                placeholder="Enter your Name" id="name"
                minLength={3}
                className="form-control" onChange={(e) => { setName(e.target.value) }} />
            </div>
            <div className="form-floating mb-3">
              <label className="form-label" htmlFor="email">Email</label>
              <input type="email"
                placeholder="Enter your Email" id="email"
                className="form-control" onChange={(e) => { setEmail(e.target.value) }} />
            </div>
            <div className="form-floating mb-3">
              <label className="form-label" htmlFor="phone">Phone</label>
              <input type="number"
                min={11}
                placeholder="Enter your phone" id="phone"
                className="form-control" onChange={(e) => { setPhone(e.target.value) }} />
            </div>
            <div className="form-group">
              <label>Upload No of Images</label>
              <select className='form-control form-control-md'
                onChange={imageFieldRender}
                id="imagesValue">
                <option defaultValue>No Of Images.</option>
                <option value={'1'}>1</option>
                <option value={'2'}>2</option>
                <option value={'3'}>3</option>
                <option value={'4'}>4</option>
                <option value={'5'}>5</option>
                <option value={'6'}>6</option>
                <option value={'7'}>7</option>
                <option value={'8'}>8</option>
                <option value={'9'}>9</option>
                <option value={'10'}>10</option>
              </select>
            </div>
            <div id='imageField'></div>

            <button type="submit" className='btn btn-danger'>Submit</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default SecondScreen;