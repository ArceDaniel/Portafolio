import style from './index.module.css';

const Projects = ({img, title, description, website}) =>{

  return (
    <a href={website}>
    <figure>
          <img src={img} alt={title} />
              
          <div className={style.layer}>
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
      </figure>
    </a>
  )
}

export default Projects;