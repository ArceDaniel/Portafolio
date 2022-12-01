import style from './index.module.css';
const Skill = ({ name }) =>{


  return (
    <>
     <span>
        <img
            src={`./img/${name}.png`}
            title={name}
            alt={name}
            class="skill-img"
            />{name}
    </span>
    </>
  )
}

export default Skill;