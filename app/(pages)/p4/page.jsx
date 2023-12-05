import Form from '@/app/components/Form/Form'
import style from './page.module.scss'

const pdf = 'CV Rodrigo Bercetche.pdf'

const img_redes = [
  {
    alt:'logo_linkedin',
    src:'/assets/icons/logo_linkedin.png',
    href:'https://www.linkedin.com/in/rodrigo-bercetche-8a2356182/',
  },
  {
    alt:'logo_intagram',
    src:'/assets/icons/logo_instagram.png',
    href:'',
  },
  {
    alt:'logo_phone',
    src:'/assets/icons/logo_phone.png',
    href:'',
  },
]

export default function Page4 (){
    return (
      <div id='contact' className={style.container}>
        <h1 className={style.title}>{'<Contacto/>'}</h1>
        <p className={style.subtitle}>Cualquier duda o consulta que tengas no dudes en escribirme a mis redes</p>
        <section>
          <div className={style.imgs}>
            {img_redes.map((e)=>{
              return(
                <a 
                href={e.href}
                target="_blank" 
                rel="noopener noreferrer"
                >
                  <img
                    alt={e.alt}
                    src={e.src}
                    className={style.img}
                  />
                </a>
              )
            })}
              <a href='/assets/Rodrigo Bercetche CV.pdf' download='Rodrigo Bercetche CV.pdf'>
                  <img
                    alt='logo_cv'
                    src='/assets/icons/logo_cv.png'
                    className={style.img}
                  />
                </a>
          </div>
        </section>
        <div>
          <div className={style.form}>
            <Form/>
          </div>
        </div>
      </div>
    )
}