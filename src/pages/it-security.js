import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/Layout'
import HeroDefault from '../components/HeroDefault'
import CardSlider from '../components/CardSlider'
import FooterCards from '../components/FooterCards'

const itSecurity = () => {
  return (
    <Layout>
      <HeroDefault title="IT &amp; Security"></HeroDefault>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <h2>The confidentiality, integrity, and availability of customer information are vital to Librestream’s business operations and success. The Onsight Platform includes a range of security provisions to safeguard and control content.</h2>
              <p>Librestream also takes a multi-layered approach to protect customer information through constant monitoring, review and updates to the applications, hosted systems, and processes to meet the growing demands and challenges of security. This approach includes the following components.</p>
            </div>
            <div className="col-lg-4">
              <img src="https://via.placeholder.com/768x375" className="img-fluid" alt=""/>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <hr className="hr-styled"/>
      </div>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <h2>Librestream invests heavily in the overall security, privacy control, network and central management of the Onsight platform including:</h2>
              <ul>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
              </ul>
              <a href="#" className="btn btn-primary">Download Security Whitepaper</a>
            </div>
            <div className="col-lg-4">
              <img src="https://via.placeholder.com/300x100" className="img-fluid mb-5" alt=""/>
              <img src="https://via.placeholder.com/300x100" className="img-fluid" alt=""/>
            </div>
          </div>
        </div>
      </section>
      <hr className="hr-styled"/>
      <CardSlider title="Case Studies"></CardSlider>
      <FooterCards></FooterCards>
    </Layout>
  )
}

itSecurity.propTypes = {

}

export default itSecurity