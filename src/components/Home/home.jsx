import style from './index.module.css';
import Typewriter from 'typewriter-effect';


const Home = () =>{


  return (
    <>
    <div className={style.container}>
      <div className={style.row}>
        <div className={style.homeInfo}>
          <h3 className={style.hello}>
            Hello World,
            <br />
           my name is
            <br />
          <span>
            <Typewriter
            options={
              {
                autoStart:true,
                loop:true,
                delay:100,
                strings:[
                  "Jonathan Daniel Arce"
                ]
              }
            }
            />
          </span>
          </h3>
          <h3 className={style.hello}>
            I'm a
            <br />
            <span>
            <Typewriter
            options={
              {
                autoStart:true,
                loop:true,
                delay:80,
                strings:[
                  "FullStack developer",
                  "Stack: MERN & PERN"
                ]
              }
            }
             />
            </span>
          </h3>
          <div className={style.homeIcons}>
          <a href='https://www.linkedin.com/in/jonathandanielarce/' className={style.iconLikedin}></a>
          <a href='https://github.com/ArceDaniel' className={style.iconGit}></a>
          <a download href='./cv.pdf' className={style.iconCv}></a>
          </div>
        </div>
        {/* <div className={style.imgHome}>
          <img src="../../img/fotoCv.jpeg" alt='cv photo' />
        </div> */}
      </div>
    </div>

    </>
  )
}

export default Home;