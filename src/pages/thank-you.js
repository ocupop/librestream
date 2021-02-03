import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/Layout'
import HeroDefault from '../components/HeroDefault'
import CardSlider from '../components/CardSlider'
import FooterCards from '../components/FooterCards'

const thankYou = () => {
  return (
    <Layout>
      <HeroDefault title="Thank You!"></HeroDefault>
      <section>
        <div className="container">
          <div className="row justify-content-lg-center">
            <div className="col-lg-8">
              <div className="border-bracket text-center">
                <h2>Thank you for your submission</h2>
                <p>You will receive an automated messaged confirming your request. Within 24 hours a member of our team will reach out to you on next steps including user allocation of Onsight licences.</p>
              </div>
              <hr className="hr-styled"/>
              <h2 className="text-center mt-3">Here is your FREE copy of our Remote Expert Industry Guide.</h2>
              <div className="bg-image aspect-5x7">
                <div className="bg-fill">
                  Industry Guide
                </div>
              </div>
              <hr className="hr-styled"/>
              <div className="col-12">
                <h2 className="text-center">What will you get in this package</h2>
                <p className="text-primary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et maiores, deleniti ipsa officia quibusdam voluptas vero ratione. Nemo culpa, quisquam quia, nobis nostrum quae ducimus at esse sequi inventore officia.</p>
                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, dolore?</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, dolore?</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, dolore?</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, dolore?</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, dolore?</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, dolore?</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, dolore?</li>
              </div>
              
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

thankYou.propTypes = {

}

export default thankYou