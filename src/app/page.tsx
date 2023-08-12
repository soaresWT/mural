import Menu from './components/Menu'
import Vector from '../../public/Vector.png'


export default function Home() {

  return (
    <>
      <Menu />
      <section className="h-auto w-screen p-0 m-0 flex flex-col items-center justify-center">
        <h1 className='text-[#0052FE] text-center p-3 mt-8 text-[3em] font-bold'> O que é o mural?</h1>
        <div className="bg-pink-300 bg-opacity-60 backdrop-blur-sm flex rounded-[15px] items-center flex-col w-2/5 min-w-[250px] h-3/5 min-h-[400px] mt-8 shadow-lg">
          <div className='bg-[#0052FE] rounded-t-[15px] flex p-2 items-center w-full'>oi</div>
          <p>Conteúdo da primeira div...</p>
        </div>
        <div className="bg-pink-300 bg-opacity-60 backdrop-blur-sm flex rounded-[15px] items-center flex-col w-2/5 min-w-[250px] h-3/5 min-h-[400px] mt-8 shadow-lg">
          <div className='bg-[#0052FE] rounded-t-[15px] flex p-2 items-center w-full'>oi</div>
          <p>Conteúdo da primeira div...</p>
        </div>
        <div className="bg-pink-300 bg-opacity-60 backdrop-blur-sm flex rounded-[15px] items-center flex-col w-2/5 min-w-[250px] h-3/5 min-h-[400px] mt-8 shadow-lg">
          <div className='bg-[#0052FE] rounded-t-[15px] flex p-2 items-center w-full'>oi</div>
          <p>Conteúdo da primeira div...</p>
        </div>
      </section>
    </>
  )
}
