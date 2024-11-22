import React, { useState } from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Collections from '../components/Collections'
import Footer from '../components/Footer'
import { Gents, Women } from '../data'
import WomenCollection from '../components/WomenCollection'


const MainPage = () => { 
  const [gentsFashion, setGentsFashion] = useState(Gents);
  const [womenFashion, setWomenFashion] = useState(Women);
  console.log(Gents);

  return (
    <div>
        
        <Header />
        <Banner />
        <Collections gentsFashion = {gentsFashion} />
        <WomenCollection womenFashion = {womenFashion}/>
        <Footer />
    </div>
  )
}

export default MainPage