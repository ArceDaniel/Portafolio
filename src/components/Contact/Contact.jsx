import Icons from './Icons';
import style from './index.module.css';

const Contact = () =>{
 const dataIcons=[
  {
    icon:"fa fa-phone",
    text:"Phone",
    subText:"(+54) 91123346010"
  },
  {
    icon:"fa fa-map-marker-alt",
    text:"Location",
    subText:"Buenos Aires, Argentina"
  },
  {
    icon:"fa fa-envelope",
    text:"Email",
    subText:"Jonathandanielarce9 @gmail.com"
  },
  {
    icon:"fa fa-globe-europe",
    text:"Web site",
    subText:"www.Dani.com"
  },
 ]
  return (
    <>
      <div className={style.container}>
          <div className={style.row}>
            <div className={style.title}>
              <h2>Contact</h2>
            </div>
          </div>
          <h3 className={style.titleContact}>Contact me</h3>
          <h4 className={style.subTitleContact}>I'm at your services!</h4>
          <div className={style.row}>
            {
              dataIcons.map(i => <Icons icon={i.icon} text={i.text} subText={i.subText} key={i.text} />)
            }

          </div>
          <h3 className={style.titleContact}>Send me an email</h3>
  
          <form
            action="https://formsubmit.co/Jonathandanielarce9@gmail.com"
            method="POST"
          >
            <div className={style.row}>
              <div className={style.contactForm}>
                <div className={style.row}>
                  <div className={style.formItem6}>
                      <input
                        name="name"
                        type="text"
                        className={style.formControl}
                        placeholder="Name"
                        required
                      />
                  </div>
                  <div className={style.formItem6}>
                      <input
                        name="email"
                        type="email"
                        className={style.formControl}
                        placeholder="Email"
                        required
                      />
                  </div>
                </div>
                <div className={style.row}>
                <div className={style.formItem12}>
                      <input
                        name="subject"
                        type="text"
                        className={style.formControl}
                        placeholder="Subject"
                        required
                      />
                  </div>
                </div>
                <div className={style.row}>
                <div className={style.formItem12}>
                    <div class="form-group">
                      <textarea
                        name="textarea"
                        className={style.formControl}
                        style={{height:"140px"}}
                        placeholder="Message"
                        required
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className={style.row}>
                <div className={style.itemBtn}>
                    <button type="submit" className={style.btn}>Send</button>
                  </div>
                </div>
              </div>
            </div>
          </form>
          <div className={style.row}>
            <div className={style.footer}>
            <p>
              © 2022 - Created by
              <a href="https://github.com/ArceDaniel"
                > Dani</a>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact;