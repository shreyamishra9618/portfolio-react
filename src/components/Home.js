import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player';
import { NavLink } from 'react-router-dom';
import '../styles/Home.css'

const Home = () => {
  return (
    <section className="bg-light p-5 min-vh-100">
      <div className='container-fluid'>
       <div className='homecontainer'>
          <div className='ms-sm-5 ps-sm-5 d-flex flex-column text-center align-items-center align-items-lg-start'>
            <h1 className='d-inline-flex p-2 bd-highlight'>Hi, I'm Shreya Mishra</h1>
            <h1 className='fw-bold custom-font'>Full Stack Web Developer!</h1>
            <p className='pt-5'>Frontend Development / ReactJS / Web Designing</p>
            <NavLink to='/projects'><button className='btn btn-primary custom-btn ps-5 pe-5 fw-bold mt-2'>My Work</button></NavLink>
          </div>

          <div>
            <Player
              src='https://assets6.lottiefiles.com/packages/lf20_pwohahvd.json'
              className="player"
              loop
              autoplay
              style={{ maxHeight: '700px', maxWidth: '700px' }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home

