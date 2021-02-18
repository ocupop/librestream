import React from 'react'
// import PropTypes from 'prop-types'
import AccordionItems from '../../components/AccordionItems'
import AccordionNav from '../../components/AccordionNav'


const supportAndTraining = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <AccordionNav />
              <div className="border-bracket mt-5 text-center">
                <h6>Onsight Service Status</h6>
              </div>
              <a href="#" className="btn btn-gradient-blue-cyan">View Onsight Service</a>
            </div>
            <div className="col-lg-9">
              <h2>Support Section Title</h2>
              {[...Array(6)].map((x, i) => (
                <div className="row border-bottom border-primary py-3 my-3">
                  <div className="col-lg-6">
                    <h3>Windows VXX.X.X (XXXX)</h3>
                    <AccordionItems />
                  </div>
                  <div className="col-lg-3 ml-lg-auto">
                    <img src="https://via.placeholder.com/500" className="img-fluid" alt="" />
                  </div>
                </div>
              )
              )}
            </div>
          </div>
        </div>
      </section>
      <hr className="hr-styled" />
    </>
  )
}

supportAndTraining.propTypes = {

}

export default supportAndTraining
