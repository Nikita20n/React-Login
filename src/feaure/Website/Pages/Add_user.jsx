import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { user_insert } from '../Userslice';
import { Link } from 'react-router-dom';


function Add_user() {
 {
    const [formvalue, setFormvalue] = useState({
      id: "",
      Cate_name: "",
      Cate_Img: "",
      Cate_Desc: "",
    });
    const changeHandel=(e)=>{
      setFormvalue({...formvalue,id:new Date().getTime().toString(),status:"Unblock",[e.target.name]:e.target.value});
      console.log(formvalue);
  }
  
  const validation = () => {
    var result = true;
    if (formvalue.Cate_name === "") {
      toast.error("Name Field is required");
      result = false;
      return false;
    }
    if (formvalue.Cate_Img === "") {
      toast.error("Img Field is required");
      result = false;
      return false;
    }
    if (formvalue.Cate_Desc === "") {
      toast.error("Description Field is required");
      result = false;
      return false;
    }
    return result;
  };
  
  const dispatch=useDispatch();
  const submitHandel=async(e)=>{
     e.preventDefault();
     if (validation()) {
      dispatch(user_insert(formvalue));
      toast.success("user add success");
      setFormvalue({...formvalue,Cate_name: "", Cate_Img: "", Cate_Desc: ""});
    
  }
  }
    return (
      <div>
        <div>
        <Link to="/" className='btn btn-primary float-end mb-2'>Back</Link>
          <div className="container mt-5">
            <h2>Add Category</h2>
            <form action="" method="post" onSubmit={submitHandel}>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter category name"
                  required
                  name="Cate_name"
                  value={formvalue.Cate_name}
                  onChange={changeHandel}
                />
              </div>
              <div className="form-group">
                <label htmlFor="image">Image:</label>
                <input
                  type="url"
                  className="form-control"
                  id="image"
                  placeholder="Image url"
                  accept="url"
                  required
                  name="Cate_Img"
                  value={formvalue.Cate_Img}
                  onChange={changeHandel}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Description:</label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  placeholder="Description"
                  required
                  name="Cate_Desc"
                  value={formvalue.Cate_Desc}
                  onChange={changeHandel} 
                />
              </div>
              <button type="submit" className="btn btn-primary mt-2">
                Submit.
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
  
}

export default Add_user
