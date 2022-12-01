import style from './index.module.css';

const About = () =>{

  return (
    <>
        <div class="container">
            <div class="row">
              <div class="section-title padd-15">
                <h2>About Me</h2>
              </div>
            </div>
            <div class="row">
              <div class="about-content padd-15">
                <div class="row">
                  <div class="about-text padd-15">
                    <h3>
                      &lt;Barbara Cassiram/&gt;
                      <span>&lt;Full Stack Web Developer/&gt;</span>
                    </h3>
                    <p>
                      I have always been very curious, self-taught and
                      enthusiastic about science and technology, I like to learn
                      something new every day and at the same time I like to
                      share that knowledge with others. I am characterized by my
                      adaptability, creative thinking and teamwork, and I want
                      to keep developing myself through continuous learning in
                      order to gain more experience and personal improvement.
                    </p>
                  </div>
                </div>
                <div class="row">
                  <div class="personal-info padd-15">
                    <div class="row">
                      <div class="info-item padd-15">
                        <p>
                          Linkedin:
                          <a
                            href="https://www.linkedin.com/in/barbara-cassiram/"
                            target="_blank"
                            ><span>Bárbara Cassiram</span></a
                          >
                        </p>
                      </div>
                      <div class="info-item padd-15">
                        <p>
                          Github:
                          <a
                            href="https://github.com/cassirambd"
                            target="_blank"
                            ><span>cassirambd</span></a
                          >
                        </p>
                      </div>
                      <div class="info-item padd-15">
                        <p>Email: <span>cassiram15@gmail.com</span></p>
                      </div>
                      <div class="info-item padd-15">
                        <p>Phone: <span>(+54)91128450190</span></p>
                      </div>
                      <div class="info-item padd-15">
                        <p>Location: <span>Buenos Aires, Argentina</span></p>
                      </div>
                      <div class="info-item padd-15">
                        <p>
                          Cats:
                          <span
                            ><i class="fa fa-paw"></i>
                            <i class="fa fa-paw"></i> <i class="fa fa-paw"></i
                          ></span>
                        </p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="buttons padd-15">
                        <a
                          href="#contact"
                          data-section-index="1"
                          class="btn hire-me"
                          >Hire me</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="education padd-15">
                    <h3 class="title">Education</h3>
                    <div class="row">
                      <div class="timeline-box padd-15">
                        <div class="timeline shadow-dark">
         
                          <div class="timeline-item">
                            <div class="circle-dot"></div>
                            <h3 class="timeline-date">
                              <i class="fa fa-calendar"> 2022 - 2022</i>
                            </h3>
                            <h4 class="timeline-title">
                              Full Stack Developer - Henry Bootcamp
                            </h4>
                            <p class="timeline-text">
                              +700 theoretical-practical course hours.
                            </p>
                          </div>
                  
                          <div class="timeline-item">
                            <div class="circle-dot"></div>
                            <h3 class="timeline-date">
                              <i class="fa fa-calendar"> 2011 - 2017</i>
                            </h3>
                            <h4 class="timeline-title">
                              Clinical Laboratory Technician - U.E.P Colegio
                              Cristo Rey
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="experience padd-15">
                    <h3 class="title">Experience</h3>
                    <div class="row">
                      <div class="timeline-box padd-15">
                        <div class="timeline shadow-dark">
              
                          <div class="timeline-item">
                            <div class="circle-dot"></div>
                            <h3 class="timeline-date">
                              <i class="fa fa-calendar"> 2022 - 2022</i>
                            </h3>
                            <h4 class="timeline-title">
                              Full Stack Teaching Assistant - Henry Bootcamp
                            </h4>
                            <p class="timeline-text">
                              Coordinate a group of students to achieve
                              integration to the study group.
                              <br />
                              Guide students in the first steps of the course.
                              <br />
                              Assist to solve exercises and promote group
                              collaboration (Pair Programming).
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </>
  )
}

export default About;