import style from './index.module.css';
import Skill from './Skill';
import Tech from './tech.js'
const Skills = () =>{

  return (
    <>
     <div className={style.container}>
      <div className={style.row}>
            <div className={style.title}>
                <h2>Skills</h2>
            </div>
      </div>
        <div>
        <div className={style.skillsSection}>
            <div className={style.skillsContainer}>
                {
                    Tech.map(s =>(
                <Skill key={s} name={s} />
                ))
                }
            </div>
        </div>

        </div>
     </div>
    </>
  )
}

export default Skills;