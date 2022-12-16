import style from './index.module.css';
import Projects from './Project.jsx';
import projects from './projects.js';

const Portafolio = () =>{

  return (
    <>
       <div className={style.container}>
            <div className={style.row}>
              <div className={style.title}>
                <h2>Portfolio</h2>
              </div>
            </div>
            <div className={style.row}>
            <div className={style.heading}>
                <h2>My Projects:</h2>
              </div>
            </div>
            <div className={style.projects}> 
            {
              projects.map(e => (
              <Projects title={e.title} img ={e.img} description = {e.description} website={e.website} />
              ))
            }
            </div>

      </div>
    </>
  )
}

export default Portafolio;