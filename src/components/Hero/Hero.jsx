import style from './index.module.css'

const Hero = () =>{

  return (
    <>
      <div className={style.hero}>
        <div className={style.content}>
          <h2>Hero Header</h2>
          <p>Aliquam erat ac ipsum. Integer aliquam purus. Quisque lorem tortor fringilla sed, vestibulum id, eleifend justo vel bibendum sapien massa ac turpis faucibus orci luctus non</p>
        </div>
        <div className={style.waves}></div>
      </div>
    </>
  )
}

export default Hero;