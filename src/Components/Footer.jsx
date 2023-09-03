import React from 'react'
import './Footer.css';
const Footer = () => {
  return (
    <>
    
    <footer className="social-footer">
  <div className="social-footer-left">
    <p  className='text-info' >Designed by Mina Nady</p>
   
  </div>
  <div className="social-footer-icons fs-4 mx-2 p-1">
      <a className='mx-1 text-info' target='_blank' rel='noreferrer' href="https://www.linkedin.com/in/mina-nady-523506151/"><i className="fa-brands fa-linkedin"></i></a>
      <a className='mx-1 text-info' target='_blank' rel='noreferrer' href="https://github.com/Dr-developer-mina"><i className="fa-brands fa-github"></i></a>
  </div>
</footer>

    
    </>
  )
}

export default Footer