import Card from '@/app/components/Card/Card'
import style from './page.module.scss'

const img = {
    category: 'language',
    alt: 'css_logo',
    src:'/assets/skills_img/css_logo.png',
  }


export default function Page3 (){
  return (
    <div id='projects' className={style.container}>
    <h1 className={style.title}>{'<Projects/>'}</h1>
    <section>
      <div className={style.cards}>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </section>
  </div>
)
}