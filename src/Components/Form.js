import React,{useState} from 'react'
import  {useForm}  from 'react-hook-form';
import  {yupResolver} from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import './Form.css'
import VisitingCard from './VisitingCard'

function Form() {
     
     const validationSchema = Yup.object().shape({
          company:Yup.string().required("company name is required !"),
          name:Yup.string().required("name is required !"),
          desigination:Yup.string().required("desigination is required !"),
          address:Yup.string().required("address is required !"),
          email:Yup.string().required("email is required !"),
          phone:Yup.string().required("phone number is required !"),
          logo:Yup.string().required("logo url is required !"),
          website:Yup.string().required("website is required !")
     })
     const { register,handleSubmit,formState:{ errors } } = useForm ({

          resolver:yupResolver(validationSchema)

     });
     
     const [data, setdata] = useState({
          company:"",
          name:"",
          desigination:"",
          address:"",
          email:"",
          phone:"",
          logo:"",
          website:"" 
     })
     
     const onSubmit = data =>
     {
          setdata({
               company:data.company,
               name:data.name,
               desigination:data.desigination,
               address:data.address,
               email:data.email,
               phone:data.phone,
               logo:data.logo,
               website:data.website
          })
     }

     return (
          <div className="container">
               <div className="row">
                    <div className =" card col-md-6 form_layout">
                    
                    <div className="container">
                         <h3>Contact Details</h3>
                         <form onSubmit={handleSubmit(onSubmit)} >
                         <div className="form-row">
                         
                         <div className ="col-md-12">   
                         <label for ="Company" className="form-label">Company Name</label>
                         <input type="text" className={`form-control ${errors.company ?"is-invalid":""}`} 
                         name="company" {...register('company')}
                         />
                         <div class="invalid-feedback">
                         {errors.company?.message}
                         </div>
                         </div>
     
                         <div className ="col-md-12">   
                         <label for ="Name" className="form-label">Name</label>
                         <input type="text" className={`form-control ${errors.name ? "is-invalid":""}`}
                         name="name"  {...register('name')}
                         />
                         <div class="invalid-feedback">
                          {errors.name?.message}
                         </div>
                         </div>
                         
                         <div className ="col-md-12">   
                         <label for ="Desigination" className="form-label">Desigination</label>
                         <input type="text" className={`form-control ${errors.name ? "is-invalid":""}`}
                         name="desigination"  {...register('desigination')}
                         />
                         <div class="invalid-feedback">
                         {errors.desigination?.message}   
                         </div>
                         </div>
                         
                         <div className ="col-md-12">   
                         <label for ="Address" className="form-label">Address</label>
                         <input type="text" className={`form-control ${errors.address ? "is-invalid":""}`}
                         name="address"  {...register('address')}
                         />
                         <div class="invalid-feedback">
                         {errors.address?.message}
                          </div>
                         </div>
                         </div>

                         <div className="form-row d-flex">
                         <div className =" form-group col-md-6">   
                         <label for ="email" className="form-label">Email</label>
                         <input type="email" className={`form-control ${errors.email ? "is-invalid":""}`}
                         name="email"  {...register('email')}
                         />
                          <div class="invalid-feedback">
                         {errors.email?.message}
                          </div>
                         </div>

                         <div style={{marginLeft:40}} className ="form-group col-md-5">   
                         <label for ="phone" className="form-label">Phone</label>
                         <input type="text" className={`form-control ${errors.email ? "is-invalid":""}`}
                         name="phone"  {...register('phone')}
                         />
                          <div class="invalid-feedback">
                         {errors.phone?.message}
                          </div>
                         </div>
                         </div>
                    
                         <div className="row">

                         <div className ="col-md-12">   
                         <label for ="Logo" className="form-label">Logo</label>
                         <input type="text" className={`form-control ${errors.logo ? "is-invalid":""}`}
                         name="logo"  {...register('logo')}
                         />
                          <div class="invalid-feedback">
                           {errors.logo?.message}
                          </div>
                         </div>

                         <div className ="col-md-12">   
                         <label for ="Website" className="form-label">Website</label>
                         <input type="text" className={`form-control ${errors.website ? "is-invalid":""}`}
                         name="website"  {...register('website')}
                         />
                          <div class="invalid-feedback">
                         {errors.website?.message}
                          </div>
                         </div>
                         <button type="submit" class="btn btn-primary">Submit</button>
                         </div>
                         </form>
                    </div>

                    </div>
                    <div className="col-md-6">
                    <VisitingCard datas={data}/>
                    </div>

               </div>
          </div>
     )
}

export default Form
