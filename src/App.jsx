import React from 'react'
import Header from './assets/components/header/Header'
import Left from './assets/components/left/Left'
import Right from './assets/components/right/Right'
import Footer from './assets/components/footer/Footer'

function App() {
  return (
    <>
      <Header />
      <div className="middle">
        <div className="div">
          <Left heading={'For UI/UX Design'} />
          <Left heading={'For Web development'} />
        </div>
        <Right />
      </div>
      <Footer />
    </>
  )
}

export default App