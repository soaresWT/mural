import Menu from './components/Menu'
import { Card } from './components/Card'
import { Footer } from './components/Footer'

export default function Home() {

  return (
    <>
      <Menu />
      <section className="h-auto w-screen p-0 m-0 flex flex-col items-center justify-center">
        <h1 className='text-[#0052FE] text-center p-3 mt-8 text-[3em] font-bold'> O que é o mural?</h1>
        <Card headerText="Contexto">
          <p>O estágio é uma etapa fundamental para a
            conclusão dos cursos da UFC, é bastante
            comum que empresas busquem discentes para
            preencher suas vagas através destes estágios.</p> <br />
          <p>O Campus de Quixadá recebe uma grande
            quantidade de vagas de estágio de diversas
            empresas todo mês para diversas áreas em
            Tecnologia da Informação.</p>
        </Card>
        <Card headerText="Problema">
          <p>As vagas chegam por caminhos variados e a
            divulgação não é controlada ou organizada,
            professores e alunos possuem vagas a serem
            enviadas mas muitas vezes não sabem com quem
            falar ou como alcançar os alunos.</p> <br />
          <p>Alunos buscam vagas de estágio mas não sabem
            onde encontrá-las ou com quem falar para
            descobrir se há oportunidades disponíveis.</p>
        </Card>
        <Card headerText="Objetivo">
          <p>O principal objetivo é que os alunos consigam
            ver as vagas em um só lugar e que não se
            sintam mais perdidos procurando por elas,
            garantindo assim um melhor relacionamento
            com as empresas e facilitando a vida dos
            alunos que buscam vagas de estágio.</p>
        </Card>
      </section>
      <Footer />
    </>
  )
}
