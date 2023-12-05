import { useRef, useEffect} from 'react'
import style from './page.module.scss'
import { Nova_Round } from 'next/font/google'
import Typed from 'typed.js';

const righteous = Nova_Round({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export default function Page1 (){


  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Apasionado del mundo digital y la programación. Siempre en constante aprendizaje y actualización de las últimas tecnologías y tendencias. Comprometido y enfocado, siempre dispuesto a asumir nuevos desafíos y superar las expectativas de los clientes.'],
      typeSpeed: 25,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);



    return (
      <div id='home' className={style.container}>
        <section className={style.animate}/>
        <section className={style.text_box}>
          <div className={style.title}>
            <p className={style.name}>Rodrigo Bercetche</p>
          </div>
          <p className={style.subTitle}>{'<Desarrollador Web/>'}</p>
          <div className={style.text}>
            <span ref={el}/>
          </div>
        </section>
        <div className={style.arrow}>
          <p className={style.animateArrow}>{'>'}</p>
        </div>
      </div>
    )
}
