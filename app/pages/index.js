import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header  from '../components/Header'
import Banner from '../components/Banner'
import Banner_top from '../components/Banner_top'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Header> </Header>
      <main className="wrapper">
        <Banner_top></Banner_top>
        
        <div className="border">
          <div className='triangle-top'></div>
          <h2 className='title'>My Projects: </h2>
          <div className='triangle-bot'></div>
        </div>
          
        

        
      </main>
      <Banner> </Banner>
    </div>
  )
}
