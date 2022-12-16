const Skill = ({ name }) =>{


  return (
    <>
     <span>
        <img
            src={`%PUBLIC_URL%/${name}.png`}
            title={name}
            alt={name}
            class="skill-img"
            />{name}
    </span>
    </>
  )
}

export default Skill;