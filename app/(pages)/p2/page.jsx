import style from './page.module.scss'

const img = [
  {
    category: 'language',
    alt: 'css_logo',
    src:'/assets/skills_img/css_logo.png',
  },
  {
    category: 'tools',
    alt: 'figma_logo',
    src:'/assets/skills_img/figma_logo.png',
  },
  {
    category: 'tools',
    alt: 'firebase_logo',
    src:'/assets/skills_img/firebase_logo.png',
  },
  {
    category: 'tools',
    alt: 'git_logo',
    src:'/assets/skills_img/git_logo.png',
  },
  {
    category: 'tools',
    alt: 'github_logo',
    src:'/assets/skills_img/github_logo.png',
  },
  {
    category: 'language',
    alt: 'html_logo',
    src:'/assets/skills_img/html_logo.png',
  },
  {
    category: 'language',
    alt: 'js_logo',
    src:'/assets/skills_img/js_logo.png',
  },
  {
    category: 'f&l',
    alt: 'nextjs_logo',
    src:'/assets/skills_img/nextjs_logo.png',
  },
  {
    category: 'f&l',
    alt: 'nodejs_logo',
    src:'/assets/skills_img/nodejs_logo.png',
  },
  {
    category: 'tools',
    alt: 'npm_logo',
    src:'/assets/skills_img/npm_logo.png',
  },
  {
    category: 'f&l',
    alt: 'reactNative_logo',
    src:'/assets/skills_img/react_logo.png',
  },
  {
    category: 'f&l',
    alt: 'sass_logo',
    src:'/assets/skills_img/sass_logo.png',
  },
  {
    category: 'tools',
    alt: 'slack_logo',
    src:'/assets/skills_img/slack_logo.png',
  },
]

export default function Page2 (){
  const language = img.filter((c)=>c.category == 'language');
  const f_l = img.filter((c)=>c.category == 'f&l');
  const tools = img.filter((c)=>c.category == 'tools');
  return (
    <div id='skills' className={style.container}>
    <h1 className={style.title}>{'<Skills/>'}</h1>
    <div>
      <p className={style.subtitle}>Tecnologías</p>
      <div className={style.imgs}>
        {language.map((e)=>{
          return(
            <img
              alt={e.alt}
              src={e.src}
              className={style.img}
            />
          )
        })}
      </div>
      <p className={style.subtitle}>Frameworks y Librerías</p>
      <div className={style.imgs}>
        {f_l.map((e)=>{
          return(
            <img
              alt={e.alt}
              src={e.src}
              className={style.img}
            />
          )
        })}
      </div>
      <p className={style.subtitle}>Herramientas</p>
      <div className={style.imgs}>
        {tools.map((e)=>{
          return(
            <img
              alt={e.alt}
              src={e.src}
              className={style.img}
            />
          )
        })}
      </div>
    </div>
  </div>
)
}