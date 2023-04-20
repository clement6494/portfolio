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



      

      <Banner> </Banner>
    </main>

    </div>
  )
}
