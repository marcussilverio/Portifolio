import {
  DiHtml5,
  DiCss3,
  DiJava,
  DiAngularSimple,
  DiPostgresql,
  DiPython,
  DiMysql,
  DiGit
} from 'react-icons/di'
import {
  SiTypescript,
  SiC,
  SiCplusplus,
  SiQuarkus
} from 'react-icons/si'

import '../styles/components/technologiescontainer.sass'

const technologies = [
  {id:"java", name:"Java", icon: <DiJava/>},
  {id:"typescript", name:"Typescript", icon: <SiTypescript/>},
  {id:"quarkus", name:"Quarkus", icon: <SiQuarkus/>},
  {id:"angular", name:"Angular", icon: <DiAngularSimple/>},
  {id:"html", name:"HTML5", icon: <DiHtml5/>},
  {id:"css", name:"CSS3", icon: <DiCss3/>},
  {id:"mysql", name:"MySQL", icon: <DiMysql/>},
  {id:"postgres", name:"Postgres", icon: <DiPostgresql/>},
  {id:"c", name:"C", icon: <SiC/>},
  {id:"cpp", name:"C++", icon: <SiCplusplus/>},
  {id:"python", name:"Python", icon: <DiPython/>},
  {id:"git", name:"Git", icon: <DiGit/>},
 

]
const TechnologiesContainer = () => {
  return (
    <section className='technologies-container'>
       <h2>Tecnologias</h2>
       <div className="technologies-grid">
        {technologies.map((tech)=>(
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technology-info">
              <h3>{tech.name}</h3>
            </div>
          </div>
        ))}
       </div>
    </section>
  )
}

export default TechnologiesContainer