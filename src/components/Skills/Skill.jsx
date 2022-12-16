const Skill = ({ name, url }) =>{


  return (
    <>
     <span>
        <img
            src={url}
            title={name}
            alt={name}
            />{name}
    </span>
    </>
  )
}

export default Skill;