import React, { Component } from 'react'



export default class About extends Component {
    render() {
        return (
         <div className="loop" style={{fontColor:"black"}}>




<div className="about pt-5">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="section_title_container text-center">
                <h2 className="section_title">Welcome To Edumoon</h2>
                <div className="section_subtitle">
                  <p>
                   "If you believe in yourself anything is possible" and that's how EduMoon is Started. Only with a little hope and the aim to help and make resources available to students. This is an initiative started by Vikas Kapuganti and Mahidhar Ponnada.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row about_row pt-3 mt-2">
            {/* <!-- About Item --> */}
            <div className="col text-center">
              <div className="about_item">
                <div className="about_item_image">
                  <img src="images/team.jpeg" width="500px" alt="" />
                </div>
                <div className="about_item_title"><a href="#">Our Mission</a></div>
                <div className="about_item_text">
                  <p>
                   Our mission is to create a platform for the students, which enables them to get access to all the resources with one simple click and also provide them proper guidance in shaping their career.
We want to provide the students a safe and secured platform on which they can rely, grow and help other students facing difficulties in their acedamics.
                  </p>
                </div>
              </div>
            </div>

          
          </div>
        </div>
      </div>

    

      <div className="feature " style={{backgroundColor:"whitesmoke"}}>
        <div
          className="feature_background"
          style={{backgroundImage: "url(images/courses_background.jpg)"}}
        ></div>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="section_title_container text-center">
                <h2 className="section_title">Why Choose Us</h2>
               
              </div>
            </div>
          </div>
          <div className="row feature_row">
            {/* <!-- Feature Content --> */}
            <div className="col-lg-6 feature_col">
              <div className="feature_content">
                {/* <!-- Accordions --> */}
                <div className="accordions">
                  <div className="elements_accordions">
                    <div className="accordion_container">
                      <div className="accordion d-flex flex-row align-items-center active">
                        <div>Learn from the best  <p style={{fontSize: "12px",
    fontWeight: "bold"}}>
                         Our team members are experts in their fields.
                        </p></div>
                        
                      </div>
                      <div className="accordion_panel">
                     
                      </div>
                    </div>

                    <div className="accordion_container">
                      <div
                        className="
                          accordion
                          d-flex
                          flex-row
                          align-items-center
                          
                        "
                      >
                        <div>Quality learning  <p style={{fontSize: "12px",
    fontWeight: "bold"}}>
                         We don't compromise when it comes to the quality of the content.
                        </p></div>
                      </div>
                      <div className="accordion_panel">
                       
                      </div>
                    </div>

                    <div className="accordion_container">
                      <div className="accordion d-flex flex-row align-items-center">
                        <div>Internships <p style={{fontSize: "12px",
    fontWeight: "bold"}}>
                         We offer internships with our partnered companies .
                        </p></div>
                      </div>
                      <div className="accordion_panel">
                        
                      </div>
                    </div>

                    <div className="accordion_container">
                      <div className="accordion d-flex flex-row align-items-center">
                        <div>Free Access to all the materials  <p style={{fontSize: "12px",
    fontWeight: "bold"}}>
                         Our materials and previous papers are freely accessible 24/7.
                        </p></div>
                      </div>
                      <div className="accordion_panel">
                       
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- Accordions End --> */}
              </div>
            </div>

            {/* <!-- Feature Video --> */}
            <div className="col-lg-6 feature_col">
              <div
                className="
                  feature_video
                  d-flex
                  flex-column
                  align-items-center
                  justify-content-center
                "
              >
                <div
                  className="feature_video_background"
                  style={{backgroundImage: "url(images/preview.jpeg)"}}
                ></div>
                <a
                  className="vimeo feature_video_button"
                  href="https://www.youtube.com/embed/nCowhmOtpZw"
                  title="EduMoon Intro Video"
                >
                  <img src="images/play.png" width="50px" alt="" style={{position: "relative",
    top:" -240px",
    left: "20px"}} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

     

          

           
      
            <div className="team">
              <div className="container"  >
                <div className="row">
                  <div className="col">
                    <div className="section_title_container text-center">
                      <h2 className="section_title" style={{fontSize:"3.5rem"}}>Our Team</h2>
                      <div className="section_subtitle">
                        <p>
                          A team that promotes an atmosphere which fosters friendship and loyalty.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                 <div className="quick-links">
                  <ul>
                    <li>
                      <a href="#initiators">
                        <i className="fa fa-flag" aria-hidden="true"></i> Initiators
                      </a>
                    </li>
                    <li  id="initiators">
                      <a href="#core-team">
                        <i className="fa fa-star-o" aria-hidden="true"></i> Core Team
                      </a>
                    </li>
                    <li>
                      <a href="#technical">
                        <i className="fa fa-code" aria-hidden="true"></i> Technical
                      </a>
                    </li>
                    <li>
                      <a href="#design-team">
                        <i className="fa fa-pencil-square-o" aria-hidden="true"></i> Design
                      </a>
                    </li>
                    <li>
                      <a href="#support">
                        <i className="fa fa-heart" aria-hidden="true"></i> Support
                      </a>
                    </li>
                    <li>
                      <a href="#instructors">
                        <i className="fa fa-graduation-cap" aria-hidden="true"></i> Instructors
                      </a>
                    </li>
                  </ul>
                </div>
                <h2 className="section_title text-center pt-5">Initiators</h2>
                <div className="row team_row" id="initiators">
                  {/* <!-- Team Item --> */}
                  <div className="col-md-4 team_col">
                    <div className="team_item">
                      <div className="team_image">
                        <img src="images/vikas.jpeg" alt="" />
                      </div>
                      <div className="team_body">
                        <div className="team_title"><a href="#">Kapuganti Vikas</a></div>
                        <div className="team_subtitle">Founder | B.Tech CSE | AUCE(A)</div>
                        <div className="social_list">
                          <ul>
                            <li>
                              <a href="https://www.linkedin.com/in/kapuganti-prabhu-vikas-ba45831b2/"
                                ><i className="fa fa-linkedin" aria-hidden="true"></i
                              ></a>
                            </li>
                            <li>
                              <a href="https://www.instagram.com/prabhu_vikas/"
                                ><i className="fa fa-instagram" aria-hidden="true"></i
                              ></a>
                            </li>
                           
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
      
                  {/* <!-- Team Item --> */}
                  <div className="col-md-4 team_col">
                    <div className="team_item">
                      <div className="team_image">
                        <img src="images/mahidhar.jpeg" alt="" />
                      </div>
                      <div className="team_body">
                        <div className="team_title"><a href="#">Mahidar Ponnada</a></div>
                        <div className="team_subtitle" id="core-team">Founder | B.Tech CSE | AUCE(A)</div>
                        <div className="social_list">
                          <ul>
                            <li>
                              <a href="https://www.linkedin.com/in/mahidhar-ponnada-629443199/"
                                ><i className="fa fa-linkedin" aria-hidden="true"></i
                              ></a>
                            </li>
                            <li>
                              <a href="https://www.instagram.com/mahidhar_p/"
                                ><i className="fa fa-instagram" aria-hidden="true"></i
                              ></a>
                            </li>
                            
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <h2 className="section_title text-center">Core Team</h2>
                <div className="row team_row">
                  {/* <!-- Team Item --> */}
                  <div className="col-md-3 team_col">
                    <div className="team_item">
                      <div className="team_image">
                        <img src="images/team/jothi.jpg" alt="" />
                      </div>
                      <div className="team_body">
                        <div className="team_title"><a href="#">Jothi Barukula</a></div>
                        <div className="team_subtitle">5th year B.A.LLB Dr.B.R.Ambedkar college of Law,Andhra university</div>
                        <div className="social_list">
                          <ul>
                            <li>
                              <a href="https://www.linkedin.com/in/jothi-barukula-b252541aa"
                                ><i className="fa fa-linkedin" aria-hidden="true"></i
                              ></a>
                            </li>
                            <li>
                              <a href="https://www.instagram.com/jothibarukula/"
                                ><i className="fa fa-instagram" aria-hidden="true"></i
                              ></a>
                            </li>
                           
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                
                  <div className="col-md-3 team_col">
                    <div className="team_item">
                      <div className="team_image">
                        <img src="images/team/renuka.jpg" alt="" />
                      </div>
                      <div className="team_body">
                        <div className="team_title"><a href="#">Guru Renuka</a></div>
                        <div className="team_subtitle">CSE 3rd Year | AUCEW</div>
                        <div className="social_list">
                          <ul>
                            <li>
                              <a href="https://www.linkedin.com/in/guru-renuka-95a1b0178"
                                ><i className="fa fa-linkedin" aria-hidden="true"></i
                              ></a>
                            </li>
                            <li>
                              <a href="https://www.instagram.com/renuka_guru_"
                                ><i className="fa fa-instagram" aria-hidden="true"></i
                              ></a>
                            </li>
                           
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
               
                  <div className="col-lg-3 col-md-6 team_col">
                    <div className="team_item">
                      <div className="team_image">
                        <img src="images/team/sharat.jpg" alt="" />
                      </div>
                      <div className="team_body">
                        <div className="team_title"><a href="#">Sharat Patnaik</a></div>
                        <div className="team_subtitle">CSE 3rd Year | AUCE </div>
                        <div className="social_list">
                          <ul>
                            <li>
                              <a href="https://www.linkedin.com/in/sharat-patnayakuni-3882141ab/"
                                ><i className="fa fa-linkedin" aria-hidden="true"></i
                              ></a>
                            </li>
                            <li>
                              <a href="https://www.instagram.com/sharat__patnaik/"
                                ><i className="fa fa-instagram" aria-hidden="true"></i
                              ></a>
                            </li>
                            <li>
                              <a href="#"
                                ><i className="fa fa-github" aria-hidden="true"></i
                              ></a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
          
                  <div className="col-lg-3 col-md-6 team_col">
                    <div className="team_item">
                      <div className="team_image">
                        <img src="images/team/rohit.jpeg" alt="" />
                      </div>
                      <div className="team_body">
                        <div className="team_title"><a href="#">Rohit Jayaraju</a></div>
                        <div className="team_subtitle">CSE 3rd Year | AUCE </div>
                        <div className="social_list">
                          <ul>
                            <li>
                              <a href="https://www.linkedin.com/in/rohit-jayaraju-0749191a8/"
                                ><i className="fa fa-linkedin" aria-hidden="true"></i
                              ></a>
                            </li>
                            <li>
                              <a href="https://www.instagram.com/rohit_jayaraju/"
                                ><i className="fa fa-instagram" aria-hidden="true"></i
                              ></a>
                            </li>
                            <li>
                              <a href="https://github.com/rohitrj22"
                                ><i className="fa fa-github" aria-hidden="true"></i
                              ></a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
              
                  <div className="col-md-3 team_col">
                    <div className="team_item">
                      <div className="team_image">
                        <img src="images/team/vidya.jpg" alt="" />
                      </div>
                      <div className="team_body">
                        <div className="team_title"><a href="#">Palisetty Vidya Lakshmi</a></div>
                        <div className="team_subtitle">CSE 4th Year | AUCEW</div>
                        <div className="social_list">
                          <ul>
                            <li>
                              <a href="https://www.linkedin.com/in/vidya-lakshmi-palisetty-61b49917a"
                                ><i className="fa fa-linkedin" aria-hidden="true"></i
                              ></a>
                            </li>
                            <li>
                              <a href="https://www.instagram.com/vidyalakshmi266"
                                ><i className="fa fa-instagram" aria-hidden="true"></i
                              ></a>
                            </li>
                            
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
            
                  <div className="col-md-3 team_col">
                    <div className="team_item">
                      <div className="team_image">
                        <img src="images/team/sohana.jpg" alt="" />
                      </div>
                      <div className="team_body">
                        <div className="team_title"><a href="#">Sohana Domathoty</a></div>
                        <div className="team_subtitle">CSE 3rd Year | AUCE | CA Head</div>
                        <div className="social_list">
                          <ul>
                            <li>
                              <a href="https://www.linkedin.com/in/sohana-domathoty-8042041a9"
                                ><i className="fa fa-linkedin" aria-hidden="true"></i
                              ></a>
                            </li>
                            <li>
                              <a href="https://www.instagram.com/sohana_0304"
                                ><i className="fa fa-instagram" aria-hidden="true"></i
                              ></a>
                            </li>
                           
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                 
                  <div className="col-lg-3 col-md-6 team_col">
                    <div className="team_item">
                      <div className="team_image">
                        <img src="images/team/karun.jpg" alt="" />
                      </div>
                      <div className="team_body">
                        <div className="team_title"><a href="#">Karun Karthik</a></div>
                        <div className="team_subtitle">IT 3rd Year | AUCE </div>
                        <div className="social_list">
                          <ul>
                            <li>
                              <a href="https://www.linkedin.com/in/karun-karthik-5a0794187/"
                                ><i className="fa fa-linkedin" aria-hidden="true"></i
                              ></a>
                            </li>
                            <li>
                              <a href="https://www.instagram.com/_.karun._/"
                                ><i className="fa fa-instagram" aria-hidden="true"></i
                              ></a>
                            </li>
                           
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                 
                  <div className="col-lg-3 col-md-6 team_col">
                    <div className="team_item">
                      <div className="team_image">
                        <img src="images/team/niveditha.png" alt="" />
                      </div>
                      <div className="team_body">
                        <div className="team_title"><a href="#">Niveditha Palli</a></div>
                        <div className="team_subtitle">IT 3rd Year | AUCE </div>
                        <div className="social_list">
                          <ul>
                            <li>
                              <a href="https://www.linkedin.com/in/niveditha-palli-9493171b7"
                                ><i className="fa fa-linkedin" aria-hidden="true"></i
                              ></a>
                            </li>
                            <li>
                              <a href="https://www.instagram.com/niveditha_palli"
                                ><i className="fa fa-instagram" aria-hidden="true"></i
                              ></a>
                            </li>
                           
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                 
                  <div className="col-lg-3 col-md-6 team_col">
                    <div className="team_item">
                      <div className="team_image">
                        <img src="images/team/ratan-dheeraj.jpg" alt="" />
                      </div>
                      <div className="team_body">
                        <div className="team_title"><a href="#">Ratan Dheeraj K.</a></div>
                        <div className="team_subtitle">CSE 3rd Year | AUCE </div>
                        <div className="social_list">
                          <ul>
                            <li>
                              <a href="https://www.linkedin.com/in/ratan-dheeraj-kadirikota-76b005193/"
                                ><i className="fa fa-linkedin" aria-hidden="true"></i
                              ></a>
                            </li>
                            <li>
                              <a href="https://www.instagram.com//ratan_dheeraj/"
                                ><i className="fa fa-instagram" aria-hidden="true"></i
                              ></a>
                            </li>
                            <li>
                              <a href="https://github.com/ratandheeraj"
                                ><i className="fa fa-github" aria-hidden="true"></i
                              ></a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                 
                  <div className="col-md-3 team_col">
                    <div className="team_item">
                      <div className="team_image">
                        <img src="images/team/shameem.JPG" alt="" />
                      </div>
                      <div className="team_body">
                        <div className="team_title"><a href="#">Mohammad Shameem</a></div>
                        <div className="team_subtitle"></div>
                        <div className="social_list">
                          <ul>
                            <li>
                              <a href="https://www.linkedin.com/in/mohammad-shameem-344883206"
                                ><i className="fa fa-linkedin" aria-hidden="true"></i
                              ></a>
                            </li>
                            <li>
                              <a href="https://www.instagram.com/_._s.h.a.m.e.e.m_._"
                                ><i className="fa fa-instagram" aria-hidden="true"></i
                              ></a>
                            </li>
                           
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
      
               
                  <div className="col-md-3 team_col">
                    <div className="team_item">
                      <div className="team_image">
                        <img src="images/team/pradeep.jpeg" alt="" />
                      </div>
                      <div className="team_body">
                        <div className="team_title"><a href="#">K. Pradeep Kumar</a></div>
                        <div className="team_subtitle" id="technical">Mechanical 2nd Year | AUCE</div>
                        <div className="social_list">
                          <ul>
                            <li>
                              <a href="#"
                                ><i className="fa fa-linkedin" aria-hidden="true"></i
                              ></a>
                            </li>
                            <li>
                              <a href="https://www.instagram.com/Pradeep_kp_257"
                                ><i className="fa fa-instagram" aria-hidden="true"></i
                              ></a>
                            </li>
                            
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <h2 className="section_title text-center">Technical Team</h2>
                <div className="row team_row">
                  
                   <div className="col-lg-3 col-md-6 team_col">
                    <div className="team_item">
                      <div className="team_image">
                        <img src="images/team/sharat.jpg" alt="" />
                      </div>
                      <div className="team_body">
                        <div className="team_title"><a href="#">Sharat Patnaik</a></div>
                        <div className="team_subtitle">CSE 3rd Year | AUCE | Back-end Web Dev</div>
                        <div className="social_list">
                          <ul>
                            <li>
                              <a href="https://www.linkedin.com/in/sharat-patnayakuni-3882141ab/"
                                ><i className="fa fa-linkedin" aria-hidden="true"></i
                              ></a>
                            </li>
                            <li>
                              <a href="https://www.instagram.com/sharat__patnaik/"
                                ><i className="fa fa-instagram" aria-hidden="true"></i
                              ></a>
                            </li>
                           
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
              
                  <div className="col-lg-3 col-md-6 team_col">
                    <div className="team_item">
                      <div className="team_image">
                        <img src="images/team/ratan-dheeraj.jpg" alt="" />
                      </div>
                      <div className="team_body">
                        <div className="team_title"><a href="#">Ratan Dheeraj K.</a></div>
                        <div className="team_subtitle">CSE 3rd Year | AUCE | Full-stack Web Dev</div>
                        <div className="social_list">
                          <ul>
                            <li>
                              <a href="https://www.linkedin.com/in/ratan-dheeraj-kadirikota-76b005193/"
                                ><i className="fa fa-linkedin" aria-hidden="true"></i
                              ></a>
                            </li>
                            <li>
                              <a href="https://www.instagram.com//ratan_dheeraj/"
                                ><i className="fa fa-instagram" aria-hidden="true"></i
                              ></a>
                            </li>
                            <li>
                              <a href="https://github.com/ratandheeraj"
                                ><i className="fa fa-github" aria-hidden="true"></i
                              ></a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                 
                   <div className="col-lg-3 col-md-6 team_col">
                    <div className="team_item">
                      <div className="team_image">
                        <img src="images/team/karun.jpg" alt="" />
                      </div>
                      <div className="team_body">
                        <div className="team_title"><a href="#">Karun Karthik</a></div>
                        <div className="team_subtitle">IT 3rd Year | AUCE | Full-stack Web Dev</div>
                        <div className="social_list">
                          <ul>
                            <li>
                              <a href="https://www.linkedin.com/in/karun-karthik-5a0794187/"
                                ><i className="fa fa-linkedin" aria-hidden="true"></i
                              ></a>
                            </li>
                            <li>
                              <a href="https://www.instagram.com/_.karun._/"
                                ><i className="fa fa-instagram" aria-hidden="true"></i
                              ></a>
                            </li>
                           
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
      
              
                  <div className="col-lg-3 col-md-6 team_col">
                    <div className="team_item">
                      <div className="team_image">
                        <img src="images/team/rohit.jpeg" alt="" />
                      </div>
                      <div className="team_body">
                        <div className="team_title"><a href="#">Rohit Jayaraju</a></div>
                        <div className="team_subtitle">CSE 3rd Year | AUCE | App Dev</div>
                        <div className="social_list">
                          <ul>
                            <li>
                              <a href="https://www.linkedin.com/in/rohit-jayaraju-0749191a8/"
                                ><i className="fa fa-linkedin" aria-hidden="true"></i
                              ></a>
                            </li>
                            <li>
                              <a href="https://www.instagram.com/rohit_jayaraju/"
                                ><i className="fa fa-instagram" aria-hidden="true"></i
                              ></a>
                            </li>
                            <li>
                              <a href="https://github.com/rohitrj22"
                                ><i className="fa fa-github" aria-hidden="true"></i
                              ></a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                 
                  <div className="col-lg-3 col-md-6 team_col">
                    <div className="team_item">
                      <div className="team_image">
                        <img src="images/team/niveditha.png" alt="" />
                      </div>
                      <div className="team_body">
                        <div className="team_title"><a href="#">Niveditha Palli</a></div>
                        <div className="team_subtitle" id="design-team">IT 3rd Year | AUCE | Front-end Web Dev</div>
                        <div className="social_list">
                          <ul>
                            <li>
                              <a href="https://www.linkedin.com/in/niveditha-palli-9493171b7"
                                ><i className="fa fa-linkedin" aria-hidden="true"></i
                              ></a>
                            </li>
                            <li>
                              <a href="https://www.instagram.com/niveditha_palli"
                                ><i className="fa fa-instagram" aria-hidden="true"></i
                              ></a>
                            </li>
                            
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
      
                  
                </div>
                <h2 className="section_title text-center">Design Team</h2>
                <div className="row team_row">
                
                  <div className="col-md-3 team_col">
                    <div className="team_item">
                      <div className="team_image">
                        <img src="images/team/phaneendra.jpg" alt="" />
                      </div>
                      <div className="team_body">
                        <div className="team_title"><a href="#">E Phaneendra Kumar</a></div>
                        <div className="team_subtitle">Metallurgy 2nd Year | AUCE</div>
                        <div className="social_list">
                          <ul>
                            
                            <li>
                              <a href="https://www.instagram.com/phani_17kumar"
                                ><i className="fa fa-instagram" aria-hidden="true"></i
                              ></a>
                            </li>
                           
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                
                  <div className="col-md-3 team_col">
                    <div className="team_item">
                      <div className="team_image">
                        <img src="images/team/ravi.jpg" alt="" />
                      </div>
                      <div className="team_body">
                        <div className="team_title"><a href="#">R.Ravi Kiran</a></div>
                        <div className="team_subtitle">Mechanical 1st Year | AUCE</div>
                        <div className="social_list">
                          <ul>
                          
                            <li>
                              <a href="https://www.instagram.com/Ravi110903"
                                ><i className="fa fa-instagram" aria-hidden="true"></i
                              ></a>
                            </li>
                           
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
               
                  <div className="col-md-3 team_col">
                    <div className="team_item">
                      <div className="team_image">
                        <img src="images/team/srija.jfif" alt="" />
                      </div>
                      <div className="team_body">
                        <div className="team_title"><a href="#">K. Lalitha Srija</a></div>
                        <div className="team_subtitle">BBA 1st year | AUSIB</div>
                        <div className="social_list">
                          <ul>
                            <li>
                              <a href="https://www.linkedin.com/in/Klsrija"
                                ><i className="fa fa-linkedin" aria-hidden="true"></i
                              ></a>
                            </li>
                           
                           
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
      
                
                  <div className="col-md-3 team_col">
                    <div className="team_item">
                      <div className="team_image">
                        <img src="images/team/" alt="" />
                      </div>
                      <div className="team_body">
                        <div className="team_title"><a href="#">Thanmai</a></div>
                        <div className="team_subtitle" id="support"></div>
                        <div className="social_list">
                          <ul>
                            <li>
                              <a href="#"
                                ><i className="fa fa-linkedin" aria-hidden="true"></i
                              ></a>
                            </li>
                            <li>
                              <a href="#"
                                ><i className="fa fa-instagram" aria-hidden="true"></i
                              ></a>
                            </li>
                            
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <h2 className="section_title text-center">Support Team</h2>
                <div className="row team_row">
                 

                  <div className="col-md-3 team_col">
                    <div className="team_item">
                      <div className="team_image">
                        <img src="images/team/nikhila.jpeg" alt="" />
                      </div>
                      <div className="team_body">
                        <div className="team_title"><a href="#">Nikhila Duvvuri</a></div>
                        <div className="team_subtitle">IT 2nd Year | AUCE</div>
                        <div className="social_list">
                          <ul>
                            
                            <li>
                              <a href="https://www.instagram.com/_couldbenikhila_"
                                ><i className="fa fa-instagram" aria-hidden="true"></i
                              ></a>
                            </li>
                           
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                 

                   <div className="col-md-3 team_col">
                    <div className="team_item">
                      <div className="team_image">
                        <img src="images/team/harshini.jpeg" alt="" />
                      </div>
                      <div className="team_body">
                        <div className="team_title"><a href="#">Harshini Sai Donepudi</a></div>
                        <div className="team_subtitle">CSE 2nd Year | AUCE</div>
                        <div className="social_list">
                          <ul>
                            <li>
                              <a href="https://www.linkedin.com/in/harshini-sai-donepudi-361764b8/"
                                ><i className="fa fa-linkedin" aria-hidden="true"></i
                              ></a>
                            </li>
                            <li>
                              <a href="https://www.instagram.com/harshini.donepudi"
                                ><i className="fa fa-instagram" aria-hidden="true"></i
                              ></a>
                            </li>
                           
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                   <div className="col-md-3 team_col">
                    <div className="team_item">
                      <div className="team_image">
                        <img src="images/team/gita.jpg" alt="" />
                      </div>
                      <div className="team_body">
                        <div className="team_title"><a href="#">Vipparthi Gita Daiva Sri</a></div>
                        <div className="team_subtitle">ECE 3rd Year | AUCEW</div>
                        <div className="social_list">
                          <ul>
                          
                            <li>
                              <a href="https://www.instagram.com/gita_vipparthi"
                                ><i className="fa fa-instagram" aria-hidden="true"></i
                              ></a>
                            </li>
                           
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                

                   <div className="col-md-3 team_col">
                    <div className="team_item">
                      <div className="team_image">
                        <img src="images/team/harshitha.jpg" alt="" />
                      </div>
                      <div className="team_body">
                        <div className="team_title"><a href="#">Harshitha Deva </a></div>
                        <div className="team_subtitle">CSE 3rd Year | AUCE</div>
                        <div className="social_list">
                          <ul>
                            <li>
                              <a href="https://www.linkedin.com/in/harshitha-deva-a07212210"
                                ><i className="fa fa-linkedin" aria-hidden="true"></i
                              ></a>
                            </li>
                            <li>
                              <a href="https://www.instagram.com/harshithadeva"
                                ><i className="fa fa-instagram" aria-hidden="true"></i
                              ></a>
                            </li>
                           
                          </ul> 
                        </div>
                      </div>
                    </div>
                  </div>
                  

                   <div className="col-md-3 team_col">
                    <div className="team_item">
                      <div className="team_image">
                        <img src="images/team/deepika.jpg" alt="" />
                      </div>
                      <div className="team_body">
                        <div className="team_title"><a href="#">Deepika</a></div>
                        <div className="team_subtitle"></div>
                        <div className="social_list">
                        
                        </div>
                      </div>
                    </div>
                  </div>
                

                   <div className="col-md-3 team_col">
                    <div className="team_item">
                      <div className="team_image">
                        <img src="images/team/musheera.jpg" alt="" />
                      </div>
                      <div className="team_body">
                        <div className="team_title"><a href="#">Musheera</a></div>
                        <div className="team_subtitle">IT 3rd Year | AUCE</div>
                        <div className="social_list">
                         
                        </div>
                      </div>
                    </div>
                  </div>
                

                   <div className="col-md-3 team_col">
                    <div className="team_item">
                      <div className="team_image">
                        <img src="images/team/pavan.jpg" alt="" />
                      </div>
                      <div className="team_body">
                        <div className="team_title"><a href="#">Tenneti Rama Joga Pavan</a></div>
                        <div className="team_subtitle">2nd Year | AUCE</div>
                        <div className="social_list">
                          <ul>
                           
                            <li>
                              <a href="https://www.instagram.com/pavan_tenneti__"
                                ><i className="fa fa-instagram" aria-hidden="true"></i
                              ></a>
                            </li>
                           
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                   <div className="col-md-3 team_col">
                    <div className="team_item">
                      <div className="team_image">
                        <img src="images/team/pragathi.jpg" alt="" />
                      </div>
                      <div className="team_body">
                        <div className="team_title"><a href="#">Pragathi Ippili</a></div>
                        <div className="team_subtitle">Metallurgy 2nd Year | AUCE</div>
                        <div className="social_list">
                          <ul>
                           
                            <li>
                              <a href="https://www.instagram.com/Pragathi mahi"
                                ><i className="fa fa-instagram" aria-hidden="true"></i
                              ></a>
                            </li>
                           
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  

                   <div className="col-md-3 team_col">
                    <div className="team_item">
                      <div className="team_image">
                        <img src="images/team/saranya.jpg" alt="" />
                      </div>
                      <div className="team_body">
                        <div className="team_title"><a href="#">Saranya Josyula</a></div>
                        <div className="team_subtitle">EEE 3rd Year | AUCE</div>
                        <div className="social_list">
                          <ul>
                            <li>
                              <a href="https://www.linkedin.com/in/saranya-josyula-a09366215"
                                ><i className="fa fa-linkedin" aria-hidden="true"></i
                              ></a>
                            </li>
                            <li>
                              <a href="https://www.instagram.com/Saranya_josyula1609 "
                                ><i className="fa fa-instagram" aria-hidden="true"></i
                              ></a>
                            </li>
                           
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  

                   <div className="col-md-3 team_col">
                    <div className="team_item">
                      <div className="team_image">
                        <img src="images/team/sindhuja.jpg" alt="" />
                      </div>
                      <div className="team_body">
                        <div className="team_title"><a href="#">Sindhuja Maddi</a></div>
                        <div className="team_subtitle">CSE 4th Year </div>
                        <div className="social_list">
                          <ul>
                            <li>
                              <a href="https://www.linkedin.com/in/sindhuja-maddi-11b783216"
                                ><i className="fa fa-linkedin" aria-hidden="true"></i
                              ></a>
                            </li>
                            <li>
                              <a href="https://www.instagram.com/Sindhuja_maddi"
                                ><i className="fa fa-instagram" aria-hidden="true"></i
                              ></a>
                            </li>
                           
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                 

                   <div className="col-md-3 team_col">
                    <div className="team_item">
                      <div className="team_image">
                        <img src="images/team/" alt="" />
                      </div>
                      <div className="team_body">
                        <div className="team_title"><a href="#">Sowgandhi </a></div>
                        <div className="team_subtitle"></div>
                        <div className="social_list">
                         
                        </div>
                      </div>
                    </div>
                  </div>
                  
                   <div className="col-md-3 team_col">
                    <div className="team_item">
                      <div className="team_image">
                        <img src="images/team/" alt="" />
                      </div>
                      <div className="team_body">
                        <div className="team_title"><a href="#">Sujana </a></div>
                        <div className="team_subtitle"></div>
                        <div className="social_list">
                         
                        </div>
                      </div>
                    </div>
                  </div>
                   
                   <div className="col-md-3 team_col">
                    <div className="team_item">
                      <div className="team_image">
                        <img src="images/team/naresh" alt="" />
                      </div>
                      <div className="team_body">
                        <div className="team_title"><a href="#">Naresh</a></div>
                        <div className="team_subtitle"  id="instructors"></div>
                        <div className="social_list">
                        
                        </div>
                      </div>
                    </div>
                  </div>
      
                  
                </div>
                <h2 className="section_title text-center">Instructors</h2>
                <div className="row team_row">
               
                  <div className="col-md-3 team_col">
                    <div className="team_item">
                      <div className="team_image">
                        <img src="images/team/sohana.jpg" alt="" />
                      </div>
                      <div className="team_body">
                        <div className="team_title"><a href="#">Sohana</a></div>
                        <div className="team_subtitle">Digital Logic Design</div>
                        <div className="social_list">
                          <ul>
                            <li>
                              <a href="lms/video%20tutorials/java/display_video_list.php?course_name=DLD"
                                ><i className="fa fa-play-circle" aria-hidden="true"></i
                              ></a>
                            </li>
                           
                           
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
      
                 
                  <div className="col-md-3 team_col">
                    <div className="team_item">
                      <div className="team_image">
                        <img src="images/team/vidya.jpg" alt="" />
                      </div>
                      <div className="team_body">
                        <div className="team_title"><a href="#">Vidya Lakshmi</a></div>
                        <div className="team_subtitle">Database Management Systems, Javascript</div>
                        <div className="social_list">
                          <ul>
                            <li>
                              <a href="lms/video%20tutorials/java/display_video_list.php?course_name=Data%20Base%20Management%20System"
                                ><i className="fa fa-play-circle" aria-hidden="true"></i
                              ></a>
                            </li>
                            
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                 
                   <div className="col-md-3 team_col">
                    <div className="team_item">
                      <div className="team_image">
                        <img src="images/team/nazeera.jpg" alt="" />
                      </div>
                      <div className="team_body">
                        <div className="team_title"><a href="#">Nazeera </a></div>
                        <div className="team_subtitle">Python</div>
                        <div className="social_list">
                          <ul>
                            <li>
                              <a href="lms/video%20tutorials/java/display_video_list.php?course_name=Python"
                                ><i className="fa fa-play-circle" aria-hidden="true"></i
                              ></a>
                            </li>
                           
                           
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                   
                   <div className="col-md-3 team_col">
                    <div className="team_item">
                      <div className="team_image">
                        <img src="images/team/shravya" alt="" />
                      </div>
                      <div className="team_body">
                        <div className="team_title"><a href="#">Shravya</a></div>
                        <div className="team_subtitle">Mathematics-2</div>
                        <div className="social_list">
                          <ul>
                            <li>
                              <a href="lms/video%20tutorials/java/display_video_list.php?course_name=Mathematics-2"
                                ><i className="fa fa-play-circle" aria-hidden="true"></i
                              ></a>
                            </li>
                           
                           
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                   <div className="col-md-3 team_col">
                    <div className="team_item">
                      <div className="team_image">
                        <img src="images/team/sikhi" alt="" />
                      </div>
                      <div className="team_body">
                        <div className="team_title"><a href="#">Sikhi</a></div>
                        <div className="team_subtitle">Mathematics-1</div>
                        <div className="social_list">
                          <ul>
                            <li>
                              <a href="lms/video%20tutorials/java/display_video_list.php?course_name=Mathematics-1"
                                ><i className="fa fa-play-circle" aria-hidden="true"></i
                              ></a>
                            </li>
                           
                           
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                   <div className="col-md-3 team_col">
                    <div className="team_item">
                      <div className="team_image">
                        <img src="images/team/divya" alt="" />
                      </div>
                      <div className="team_body">
                        <div className="team_title"><a href="#">Divya</a></div>
                        <div className="team_subtitle">Web Technologies</div>
                        <div className="social_list">
                          <ul>
                            <li>
                              <a href="lms/video%20tutorials/java/display_video_list.php?course_name=Web%20Technologies(WT)"
                                ><i className="fa fa-play-circle" aria-hidden="true"></i
                              ></a>
                            </li>
                           
                           
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                 
                   <div className="col-md-3 team_col">
                    <div className="team_item">
                      <div className="team_image">
                        <img src="images/team/divyaObbina.jpg" alt="" />
                      </div>
                      <div className="team_body">
                        <div className="team_title"><a href="#">Divya</a></div>
                        <div className="team_subtitle">Mathematics-3</div>
                        <div className="social_list">
                          <ul>
                            <li>
                              <a href="/lms/video%20tutorials/java/display_video_list.php?course_name=Mathematics-3"
                                ><i className="fa fa-play-circle" aria-hidden="true"></i
                              ></a>
                            </li>
                           
                           
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                   <div className="col-md-3 team_col">
                    <div className="team_item">
                      <div className="team_image">
                        <img src="images/team/riya.jpeg" alt="" />
                      </div>
                      <div className="team_body">
                        <div className="team_title"><a href="#">Riya</a></div>
                        <div className="team_subtitle">Discrete Mathematics</div>
                        <div className="social_list">
                          <ul>
                            <li>
                              <a href="lms/video%20tutorials/java/display_video_list.php?course_name=Discrete%20Mathematics"
                                ><i className="fa fa-play-circle" aria-hidden="true"></i
                              ></a>
                            </li>
                           
                           
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                   <div className="col-md-3 team_col">
                    <div className="team_item">
                      <div className="team_image">
                        <img src="images/team/keethana.jpg" alt="" />
                      </div>
                      <div className="team_body">
                        <div className="team_title"><a href="#">Keerthana</a></div>
                        <div className="team_subtitle">Computer Networks, Java </div>
                        <div className="social_list">
                          <ul>
                            <li>
                              <a href="lms/video%20tutorials/java/display_video_list.php?course_name=Computer%20Networks(CN)"
                                ><i className="fa fa-play-circle" aria-hidden="true"></i
                              ></a>
                            </li>
                            <li>
                              <a href="lms/video%20tutorials/java/display_video_list.php?course_name=JAVA"
                                ><i className="fa fa-play-circle" aria-hidden="true"></i
                              ></a>
                            </li>
                           
                           
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                   
                   <div className="col-md-3 team_col">
                    <div className="team_item">
                      <div className="team_image">
                        <img src="images/team/karun.jpg" alt="" />
                      </div>
                      <div className="team_body">
                        <div className="team_title"><a href="#">Karthik</a></div>
                        <div className="team_subtitle">Object Oriented Programming</div>
                        <div className="social_list">
                          <ul>
                            <li>
                              <a href="lms/video%20tutorials/java/display_video_list.php?course_name=Object%20Oriented%20Programming(OOPS)"
                                ><i className="fa fa-play-circle" aria-hidden="true"></i
                              ></a>
                            </li>
                           
                           
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                 
                   <div className="col-md-3 team_col">
                    <div className="team_item">
                      <div className="team_image">
                        <img src="images/team/niveditha.png" alt="" />
                      </div>
                      <div className="team_body">
                        <div className="team_title"><a href="#">Nivedita</a></div>
                        <div className="team_subtitle">Computer Programming and Numerical Methods</div>
                        <div className="social_list">
                          <ul>
                            <li>
                              <a href="lms/video%20tutorials/java/display_video_list.php?course_name=Computer%20Programming%20and%20Numerical%20Methods(CPNM)"
                                ><i className="fa fa-play-circle" aria-hidden="true"></i
                              ></a>
                            </li>
                           
                           
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                   <div className="col-md-3 team_col">
                    <div className="team_item">
                      <div className="team_image">
                        <img src="images/team/samuel.jpeg" alt="" />
                      </div>
                      <div className="team_body">
                        <div className="team_title"><a href="#">Samuel </a></div>
                        <div className="team_subtitle">Formal Language and Automata Theory</div>
                        <div className="social_list">
                          <ul>
                            <li>
                              <a href="lms/video%20tutorials/java/display_video_list.php?course_name=FLAT"
                                ><i className="fa fa-play-circle" aria-hidden="true"></i
                              ></a>
                            </li>
                           
                           
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                 
                   <div className="col-md-3 team_col">
                    <div className="team_item">
                      <div className="team_image">
                        <img src="images/team/sowjanya.jpeg" alt="" />
                      </div>
                      <div className="team_body">
                        <div className="team_title"><a href="#">Sowjanya</a></div>
                        <div className="team_subtitle">Big Data</div>
                        <div className="social_list">
                          <ul>
                            <li>
                              <a href="lms/video%20tutorials/java/display_video_list.php?course_name=Big%20Data%20Analytics"
                                ><i className="fa fa-play-circle" aria-hidden="true"></i
                              ></a>
                            </li>
                           
                           
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                 
                   <div className="col-md-3 team_col">
                    <div className="team_item">
                      <div className="team_image">
                        <img src="images/team/sharat.jpg" alt="" />
                      </div>
                      <div className="team_body">
                        <div className="team_title"><a href="#">Sharat Patnaik</a></div>
                        <div className="team_subtitle">Data Structures</div>
                        <div className="social_list">
                          <ul>
                            <li>
                              <a href="lms/video%20tutorials/java/display_video_list.php?course_name=Data%20Structures"
                                ><i className="fa fa-play-circle" aria-hidden="true"></i
                              ></a>
                            </li>
                           
                           
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                   <div className="col-md-3 team_col">
                    <div className="team_item">
                      <div className="team_image">
                        <img src="images/team/abhishek.jpeg" alt="" />
                      </div>
                      <div className="team_body">
                        <div className="team_title"><a href="#">Abhisek</a></div>
                        <div className="team_subtitle">Embedded Systems </div>
                        <div className="social_list">
                          <ul>
                            <li>
                              <a href="lms/video%20tutorials/java/display_video_list.php?course_name=Embedded%20Systems"
                                ><i className="fa fa-play-circle" aria-hidden="true"></i
                              ></a>
                            </li>
                           
                           
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                
                   <div className="col-md-3 team_col">
                    <div className="team_item">
                      <div className="team_image">
                        <img src="images/team/anusha" alt="" />
                      </div>
                      <div className="team_body">
                        <div className="team_title"><a href="#">Anusha</a></div>
                        <div className="team_subtitle">Cyber Security </div>
                        <div className="social_list">
                          <ul>
                            <li>
                              <a href="lms/video%20tutorials/java/display_video_list.php?course_name=Cyber%20Security%20and%20Data%20Forensics"
                                ><i className="fa fa-play-circle" aria-hidden="true"></i
                              ></a>
                            </li>
                           
                           
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                
                   <div className="col-md-3 team_col">
                    <div className="team_item">
                      <div className="team_image">
                        <img src="images/team/sushmitha.jpg" alt="" />
                      </div>
                      <div className="team_body">
                        <div className="team_title"><a href="#">Sushmita</a></div>
                        <div className="team_subtitle">Switching Theory and Logic Design </div>
                        <div className="social_list">
                          <ul>
                            <li>
                              <a href="lms/video%20tutorials/java/display_video_list.php?course_name=Switching%20Theory%20and%20Logic%20Design"
                                ><i className="fa fa-play-circle" aria-hidden="true"></i
                              ></a>
                            </li>
                           
                           
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
             
                   <div className="col-md-3 team_col">
                    <div className="team_item">
                      <div className="team_image">
                        <img src="images/team/prathyusha.png" alt="" />
                      </div>
                      <div className="team_body">
                        <div className="team_title"><a href="#">Pratyusha</a></div>
                        <div className="team_subtitle">Object Oriented Software Engineering</div>
                        <div className="social_list">
                          <ul>
                            <li>
                              <a href="lms/video%20tutorials/java/display_video_list.php?course_name=Object%20Oriented%20Software%20Engineering(OOSE)"
                                ><i className="fa fa-play-circle" aria-hidden="true"></i
                              ></a>
                            </li>
                           
                           
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                   <div className="col-md-3 team_col">
                    <div className="team_item">
                      <div className="team_image">
                        <img src="images/team/geethika.jpg" alt="" />
                      </div>
                      <div className="team_body">
                        <div className="team_title"><a href="#">Geethika</a></div>
                        <div className="team_subtitle">Computer Organization</div>
                        <div className="social_list">
                          <ul>
                            <li>
                              <a href="lms/video%20tutorials/java/display_video_list.php?course_name=Computer%20Organization"
                                ><i className="fa fa-play-circle" aria-hidden="true"></i
                              ></a>
                            </li>
                           
                           
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
               
                   <div className="col-md-3 team_col">
                    <div className="team_item">
                      <div className="team_image">
                        <img src="images/team/gowtham.jpeg" alt="" />
                      </div>
                      <div className="team_body">
                        <div className="team_title"><a href="#">Gowtham</a></div>
                        <div className="team_subtitle">Control Systems </div>
                        <div className="social_list">
                          <ul>
                            <li>
                              <a href="lms/video%20tutorials/java/display_video_list.php?course_name=Control%20Systems"
                                ><i className="fa fa-play-circle" aria-hidden="true"></i
                              ></a>
                            </li>
                           
                           
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
              
                   <div className="col-md-3 team_col">
                    <div className="team_item">
                      <div className="team_image">
                        <img src="images/team/srinitya1.jpg" alt="" />
                      </div>
                      <div className="team_body">
                        <div className="team_title"><a href="#">Srinitya</a></div>
                        <div className="team_subtitle">Engineering Drawing </div>
                        <div className="social_list">
                          <ul>
                            <li>
                              <a href="lms/video%20tutorials/java/display_video_list.php?course_name=Engineering%20Drawing(ED)"
                                ><i className="fa fa-play-circle" aria-hidden="true"></i
                              ></a>
                            </li>
                           
                           
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                 
                   <div className="col-md-3 team_col">
                    <div className="team_item">
                      <div className="team_image">
                        <img src="images/team/deepthi" alt="" />
                      </div>
                      <div className="team_body">
                        <div className="team_title"><a href="#">Deepti</a></div>
                        <div className="team_subtitle">Analog Communications </div>
                        <div className="social_list">
                          <ul>
                            <li>
                              <a href="lms/video%20tutorials/java/display_video_list.php?course_name=Analog%20Communications"
                                ><i className="fa fa-play-circle" aria-hidden="true"></i
                              ></a>
                            </li>
                           
                           
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                   <div className="col-md-3 team_col">
                    <div className="team_item">
                      <div className="team_image">
                        <img src="images/team/renuka.jpg" alt="" />
                      </div>
                      <div className="team_body">
                        <div className="team_title"><a href="#">Renuka</a></div>
                        <div className="team_subtitle">Elements of Electrical Engineering</div>
                        <div className="social_list">
                          <ul>
                            <li>
                              <a href="lms/video%20tutorials/java/display_video_list.php?course_name=Elements%20Of%20Electrical%20Engineering(EEE)"
                                ><i className="fa fa-play-circle" aria-hidden="true"></i
                              ></a>
                            </li>
                           
                           
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                   <div className="col-md-3 team_col">
                    <div className="team_item">
                      <div className="team_image">
                        <img src="images/team/gowthami.jpg" alt="" />
                      </div>
                      <div className="team_body">
                        <div className="team_title"><a href="#">Gowthami</a></div>
                        <div className="team_subtitle">Data Warehouse and Data Mining</div>
                        <div className="social_list">
                          <ul>
                            <li>
                              <a href="lms/video%20tutorials/java/display_video_list.php?course_name=Data%20Warehouse%20and%20Data%20Mining%20(DWDM)"
                                ><i className="fa fa-play-circle" aria-hidden="true"></i
                              ></a>
                            </li>
                           
                           
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

         </div>

           
        );
    }
}
