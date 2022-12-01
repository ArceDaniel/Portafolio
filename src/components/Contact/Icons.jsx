import style from './index.module.css';

const Icons = ({icon, text, subText}) =>{


    return(
        <div className={style.iconInfo}>
        <div className={style.icon}>
          <i class={`${icon}`}></i>
      </div>
        <h4>{text}</h4>
        <p>{subText}</p>
      </div>
    )
}

export default Icons;