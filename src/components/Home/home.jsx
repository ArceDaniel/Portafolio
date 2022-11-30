import style from './index.module.css'
import { ReactTypical } from '@deadcoder0904/react-typical'

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
          </h3>
          <h3 className={style.name}>jonathan Daniel Arce <span>&#160;</span></h3>
          <h3 class="my-profession">
            I'm a
            <br />
            <span class="name typing"> </span>
          </h3>
          <div class="row home-icons">
            <div class="icon">
              <a
                href="https://www.linkedin.com/in/barbara-cassiram/"
                target="_blank"
                ><i class="fa fa-linkedin-square"></i
              ></a>
            </div>
            <div class="icon">
              <a href="https://github.com/cassirambd" target="_blank"
                ><i class="fa fa-github"></i
              ></a>
            </div>
            <div class="icon">
              <a
                download=""
                href="cv/cv_barbara_cassiram.pdf"
                target="_blank"
                ><i class="fa fa-file-text-o"></i
              ></a>
            </div>
          </div>
        </div>
        <div class="home-img padd-15">
          <img src="img/user.jpg" alt="" />
        </div>
      </div>
    </div>

    </>
  )
}

export default Home;