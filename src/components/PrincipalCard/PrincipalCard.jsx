import style from './index.module.css'

const PrincipalCard = () =>{

    return(
        <>
        <div className={style.container}>
            <div className={style.flip-box}>
                <div className={style.flip-box-inner}>
                    <div className={style.flip-box-front}>
                    <div className={style.flip-box-back}></div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )

}



export default PrincipalCard