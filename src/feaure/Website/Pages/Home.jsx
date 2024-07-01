import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Header from '../Component/Header'
import Footer from '../Component/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { user_delete, user_get, user_update } from '../Userslice'
import { toast } from 'react-toastify'


function Home() {

  const redirect=useNavigate(); 
  const dispatch=useDispatch();

  useEffect(()=>{
    dispatch(user_get());
  });
  const {demo,user}=useSelector((state)=>{return state.user});

  const [formvalue, setFormvalue] = useState({
    id: "",
    Cate_name: "",
    Cate_Img: "",
    Cate_Desc: "",
  });
  const editHandel=(id)=>{
    const edit_data=user.filter((value)=> {return value.id==id});
    console.log(edit_data[0]);
    setFormvalue(edit_data[0]);
}

const changeHandel = (e) => {
    setFormvalue({ ...formvalue,[e.target.name]: e.target.value });
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

const submitHandel=async(e)=>{
   e.preventDefault();
   if (validation()) {
    dispatch(user_update(formvalue));
    toast.success("user update success");
    setFormvalue({...formvalue,Cate_name: "", Cate_Img: "", Cate_Desc: ""});
    return redirect("/");
}
}
  return (
    <div>
      <Header />
      <h1>{demo}</h1>
     
      <div className='container mt-5'>
        <div className='row'>
          <div className='col-sm-12'>
            <h2 align="center" className='mb-5'>Manage user</h2>
            <Link to="/add_user" className='btn btn-primary float-end mb-5'>add data</Link>
            <div className='container'>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Cate_name</th>
                    <th>Cate_Img</th>
                    <th>Cate_Desc</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                {
                user && user.map((value, index, arr) => {
                  return (
                    <tr>
                      <td>{value.id}</td>
                      <td>{value.Cate_name}</td>
                      <td>
                        <img src={value.Cate_Img} alt="" width="50px" />
                      </td>
                      <td>
                        <p>{value.Cate_Desc}</p>
                      </td>
                      <td>
                        <button
                          className="btn btn-primary"
                          data-bs-toggle="modal"
                          data-bs-target="#myModal"
                          onClick={()=>editHandel(value.id)}
                        >
                          Edit
                        </button>
                        <button
                          className="btn  btn-danger"
                          onClick={()=>{ dispatch(user_delete(value.id)) }}

                        >
                          Delete
                        </button>
                        
                        <div className="modal" id="myModal">
                          <div className="modal-dialog">
                            <div className="modal-content">
                              {/* Modal Header */}
                              <div className="modal-header">
                                <h4 className="modal-title">Edit Profile</h4>
                                <button
                                  type="button"
                                  className="btn-close"
                                  data-bs-dismiss="modal"
                                />
                              </div>
                              {/* Modal body */}
                              <div className="modal-body">
                                <div className="container">
                                  <form action="" method="post" >
                                    <div className="row g-3">
                                      <div className="col-md-6">
                                        <div className="form-floating">
                                          <input
                                            type="text"
                                            className="form-control"
                                            name="Cate_name"
                                            value={formvalue.Cate_name}
                                            onChange={changeHandel}
                                            id="Cate_name"
                                            placeholder="Cate_name"
                                          />
                                          <label htmlFor="name">Cate_name</label>
                                        </div>
                                      </div>
                                      <div className="col-md-6">
                                        <div className="form-floating">
                                          <input
                                            type="url"
                                            className="form-control"
                                            id="Cate_Img"
                                            placeholder="Image url"
                                            accept="url"
                                            required
                                            name="Cate_Img"
                                            value={formvalue.Cate_Img}
                                            onChange={changeHandel}
                                          />
                                          <label htmlFor="Type">Cate_Img</label>
                                        </div>
                                      </div>
                                      <div className="col-md-6">
                                        <div className="form-floating">
                                          <input
                                            type="text"
                                            className="form-control"
                                            name="Cate_Desc"
                                            value={formvalue.Cate_Desc}
                                            onChange={changeHandel}
                                            id="Cate_Desc"
                                            placeholder="Cate_Desc"
                                          />
                                          <label htmlFor="name">Cate_Desc</label>
                                        </div>
                                      </div>

                                      <div className="col-12">
                                        <button
                                          data-bs-dismiss="modal"
                                          className="btn btn-primary w-100 py-3"
                                          type="submit"
                                          onClick={submitHandel}
                                        >
                                          Save
                                        </button>
                                      </div>
                                    </div>
                                  </form>
                                </div>
                              </div>
                              {/* Modal footer */}
                              <div className="modal-footer">
                                <button
                                  type="button"
                                  className="btn btn-danger"
                                  data-bs-dismiss="modal"
                                >
                                  Close
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  )
                })
              }
                </tbody>
              </table>

            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>

  )
}

export default Home
