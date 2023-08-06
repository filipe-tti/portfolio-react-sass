import {
    DiJsBadge,
    DiNodejsSmall,
    DiReact,
    DiGithubBadge
} from "react-icons/di"

import {
    SiTypescript,
    SiSass
} from "react-icons/si"

import '../Styles/components/technologiescontainer.sass'

const technologies = [
    {id: "js", name: "JavaScript", icon: <DiJsBadge/>, description: "A linguagem que me cativou por sua versatilidade, dinamismo e sua amplitude para diversas aplicações."},
    {id: "node", name: "Node.js", icon: <DiNodejsSmall/>, description: " Utilizei o ecossistema de pacotes NPM na maioria dos meus projetos."},
    {id: "typescript", name: "TypeScript", icon: <SiTypescript/>, description: " Estou me dedicando em aprender mais sobre pois acredito ser uma escolha valiosa para projetos mais robustos e ser uma base confiavel em cima do JavaScript."},
    {id: "react", name: "React", icon: <DiReact/>, description: " O framework de JS que mais utilizei nos projetos até o momento."},
    {id: "sass", name: "Sass", icon: <SiSass/>, description: " Considero uma evolução do CSS e gosto muito dos seus recursos como mixins, funções e na sua organização e melhoria da produtividade."},
    {id: "github", name: "GitHub", icon: <DiGithubBadge/>, description: " Uso o GitHub para hospedar meus projetos pessoais e contribuições em projetos de código aberto."}
]

function TechnologiesContainer() {
  return <section className="tecnologies-container">
    <h2>Tecnologias</h2>
    <div className="technologies-grid">
    {technologies.map((tech) =>(
        <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technology-info">
                <h3>{tech.name}</h3>
                <p>{tech.description}</p>
            </div>
        </div>
    ))}
    </div>
  </section>
}

export default TechnologiesContainer
