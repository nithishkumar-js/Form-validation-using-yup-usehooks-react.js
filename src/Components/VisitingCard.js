import React from 'react'
import './card.css'
export default function VisitingCard(props) {
     console.log(props.datas.company)
     return (
          <div className="container">
               <div className="row containers">
                    {props.datas.company === "" ?(
                          <div className="card card1 col-md-12 card_layout">
                          <img src="https://img.freepik.com/free-vector/letter-n-arrow-logo-template_23987-64.jpg?size=338&ext=jpg" alt=""
                           width="100" height="100"/>
                          <h2 className="card1_text">Company Name</h2>
                          <h5 className="card_text3">Tag line goes here</h5>
                          </div>
                    ):(
                         <div className="card card1 col-md-12">
                         <img src={props.datas.logo} alt=""
                          width="100" height="100"/>
                         <h2 className="card1_text">{props.datas.company}</h2>
                         <h5 className="card_text3">Tag line goes here</h5>
                         </div>
                    )}
                   
                    <div className=" card card2 col-md-12 card_layout">
                    <div className="container">
                         <div className="row">
                             
                              <div className="col-md-4">
                              {props.datas.company === "" ?(<div>
                                   <h3 className="card1_text1">Name</h3>
                                   <h6 className="card1_text2">Desigination</h6>
                              </div>
                              ):(
                                   <div>
                                   <h3 className="card1_text1">{props.datas.name}</h3>
                                   <h6 className="card1_text2">{props.datas.desigination}</h6>
                                   </div>
                              )}
                              </div>
                                   
                              {props.datas.company === "" ?(
                                      <div style={{marginLeft:0,paddingLeft:56,paddingTop:10}} className="col-md-8">
                                      <div className="d-flex">
                                      <img src="https://img.freepik.com/free-vector/letter-n-arrow-logo-template_23987-64.jpg?size=338&ext=jpg"
                                       alt="" width="50" height="50"/>
                                       <h5 className="card2_text1" >Company Name</h5>
                                      </div> 
        
                                      <div style={{marginTop:5}} className="col-md-12 d-flex" >
                                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCxl1HB3reh3fpekwWEtVTksYodHO5JDYgdQ&usqp=CAU" 
                                      alt="" width="40" height="40"/>
                                      <h6 className="card2_text">Coimbatore</h6>
                                      </div>
        
                                      <div style={{marginTop:5}} className="col-md-12 d-flex" >
                                      <img src="https://i.pinimg.com/originals/cb/2c/bd/cb2cbd5b92eb23c9eea3da118c144da9.png" 
                                      alt="" width="40" height="40"/>
                                      <h6 className="card2_text">example@gmail.com</h6>
                                      </div>
        
                                      <div style={{marginTop:5}} className="col-md-12 d-flex" >
                                      <img src="https://www.seekpng.com/png/detail/1-11469_download-blue-phone-icon-png.png" 
                                      alt="" width="40" height="40"/>
                                      <h6 className="card2_text">91xxxxxx</h6>
                                      </div>
        
                                      <div style={{marginTop:5}} className="col-md-12 d-flex" >
                                      <img src="https://findicons.com/files/icons/98/nx11/256/internet_blue.png" 
                                      alt="" width="40" height="40"/>
                                      <h6 className="card2_text">www.example@123.com</h6>
                                      </div>
        
                                      
        
                                      </div>
                              ):(
                                   <div style={{marginLeft:0,paddingLeft:56,paddingTop:10}} className="col-md-8">
                                   <div className="d-flex">
                                   <img src={props.datas.logo}
                                    alt="" width="50" height="50"/>
                                    <h5 className="card2_text1" >{props.datas.company}</h5>
                                   </div> 
     
                                   <div style={{marginTop:5}} className="col-md-12 d-flex" >
                                   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCxl1HB3reh3fpekwWEtVTksYodHO5JDYgdQ&usqp=CAU" 
                                   alt="" width="40" height="40"/>
                                   <h6 className="card2_text">{props.datas.address}</h6>
                                   </div>
     
                                   <div style={{marginTop:5}} className="col-md-12 d-flex" >
                                   <img src="https://i.pinimg.com/originals/cb/2c/bd/cb2cbd5b92eb23c9eea3da118c144da9.png" 
                                   alt="" width="40" height="40"/>
                                   <h6 className="card2_text">{props.datas.email}</h6>
                                   </div>
     
                                   <div style={{marginTop:5}} className="col-md-12 d-flex" >
                                   <img src="https://www.seekpng.com/png/detail/1-11469_download-blue-phone-icon-png.png" 
                                   alt="" width="40" height="40"/>
                                   <h6 className="card2_text">{props.datas.phone}</h6>
                                   </div>
     
                                   <div style={{marginTop:5}} className="col-md-12 d-flex" >
                                   <img src="https://findicons.com/files/icons/98/nx11/256/internet_blue.png" 
                                   alt="" width="40" height="40"/>
                                   <h6 className="card2_text">{props.datas.website}</h6>
                                   </div>
                                   </div>
                              )}
                         
                         </div>
                    </div>
                    </div>
               </div>
          </div>
     )
}
