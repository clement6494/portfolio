import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header  from '../components/Header'
import Banner from '../components/Banner'
import Banner_top from '../components/Banner_top'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const dots = Array.from({ length: 27 }, (_, index) => <div key={index} id='dots'></div>);  return (
    <div>
      <Header> </Header>
      <main className="wrapper">
        <Banner_top></Banner_top>
        
        <div className="border">
          <div className='triangle-top'></div>
          <h2 className='title'>My Projects: </h2>
          <div className='triangle-bot'></div>
        </div>
          
        <div className="panel">
          {dots.map((dot, index) => (
            <div key={index}>
              {dot}
            </div>
          ))}
        </div>  
        

        
      </main>
      <Banner> </Banner>
    </div>
  )
}
