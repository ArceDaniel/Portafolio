import { useNavigate } from 'react-router-dom';
import style from './index.module.css';

const About = () =>{
  const navigate = useNavigate();

  const goTo = (e)=>{
    console.log(e.target.id);
    navigate(`/${e.target.id}`)
  }
  return (
    <>
        <div className={style.container}>
            <div className={style.row}>
              <div className={style.title}>
                <h2>About Me</h2>
              </div>
            </div>
            <div className={style.row}>
              <div className={style.aboutContent}>
              <div className={style.row}>
                  <div className={style.aboutText}>
                    <h3>
                      &lt;Arce Daniel /&gt;
                      <span>&lt;Full Stack Web Developer /&gt;</span>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium vel nostrum animi! Esse nam incidunt ipsam voluptatum, cupiditate exercitationem quod sed necessitatibus molestiae ad, a numquam similique aliquam nisi beatae?
                    </p>
                  </div>
                </div>
                <div className={style.row}>
                  <div className={style.personalInfo}>
                  <div className={style.row}>
                    <div className={style.infoItem}>
                        <p>
                          Linkedin:
                          <a
                            href="https://www.linkedin.com/in/jonathandanielarce/"
                            ><span>Jonathan Daniel Arce</span></a>
                        </p>
                      </div>
                      <div className={style.infoItem}>
                        <p>
                          Github:
                          <a
                            href="https://github.com/ArceDaniel"
                            ><span>ArceDaniel</span></a>
                        </p>
                      </div>
                      <div className={style.infoItem}>
                        <p>Email: <span>jonathandanielarce@gmail.com</span></p>
                      </div>
                      <div className={style.infoItem}>
                        <p>Phone: <span>(+54)9112346010</span></p>
                      </div>
                      <div className={style.infoItem}>
                        <p>Location: <span>Buenos Aires, Argentina</span></p>
                      </div>
                    </div>
                    <div className={style.row}>
                      <div className={style.buttons}>
                        <button
                          id='contact'
                          onClick={goTo}
                          className={style.btn}
                          >Hire me</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={style.row}>
                  <div className={style.section}>
                    <h3 className={style.subTitle}>Education</h3>
                    <div className={style.row}>
                      <div className={style.timelineBox}>
                        <div className={style.timeline}>
         
                          <div className={style.timelineItem}>
                            <span className={style.circle}></span>
                            <h3 className={style.timelineDate}>
                              <i class="fa fa-calendar"> oct 2022 - feb 2023</i>
                            </h3>
                            <h4 className={style.timelineTitle}>
                              Full Stack Developer - Henry Bootcamp
                            </h4>
                            <p className={style.timelineText}>
                              +700 theoretical-practical course hours.
                            </p>
                          </div>
                  
                          <div className={style.timelineItem}>
                          <div className={style.circle}></div>
                            <h3 className={style.timelineDate}>
                              <i class="fa fa-calendar"> sep 2022 - oct 2022</i>
                            </h3>
                            <h4 className={style.timelineTitle}>
                              Programacion Desde cero - Egg Education
                            </h4>
                            <p className={style.timelineText}>
                              +80 theoretical-practical course hours.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={style.section}>
                    <h3 className={style.subTitle}>Experience</h3>
                    <div className={style.row}>
                    <div className={style.timelineBox}>
                    <div className={style.timeline}>
              
                    <div className={style.timelineItem}>
                    <span className={style.circle}></span>
                            <h3 className={style.timelineDate}>
                              <i class="fa fa-calendar"> 2022 - 2022</i>
                            </h3>
                            <h4 className={style.timelineTitle}>
                              Full Stack Freelance
                            </h4>
                            <p className={style.timelineText}>
                              Create websites with the Mern and Pern stack
                              <br />
                              quite simple and intuitive
                              <br />
                              Some of them are uploaded to the web to see them
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