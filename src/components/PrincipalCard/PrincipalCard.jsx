import style from './index.module.css'

const PrincipalCard = () =>{

    return(
        <>
        <div className={style.container}>
            <div className={style.flipBox}>
                <div className={style.flipBoxInner}>
                    <div className={style.flipBoxFront}>
                    <div className={style.flipBoxBack}></div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )

}



export default PrincipalCard