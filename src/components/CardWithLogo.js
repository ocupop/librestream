import React from 'react'
import PropTypes from 'prop-types'

const CardWithLogo = ({logo}) => {
  return (
    <div className="card">
      <div 
        className="card-img-top bg-image aspect-1x1 grayscale"
        style={{
        backgroundImage: `url(https://picsum.photos/500)`
        }}
      >
        <div className="bg-fill">
          <div className="card-logo-overlay text-white">
            <div className="row">
              <div className="col-lg-6">
                <img src={`https://via.placeholder.com/100x50`} className="img-fluid" alt="alt text"/>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 ml-lg-auto">
                <p className="text-uppercase lead">
                  Saves XX% in Overall Productivity
                </p>
              </div>
            </div>
          </div>
        </div>  
      </div>
      <div className="card-footer bg-transparent text-primary text-center text-uppercase">
        <h6 className="mt-5 text-dark">Find out how nov saved up to 70% in total productivity</h6>
        <div className="border-bracket-bottom"></div>
      </div>
    </div>
  )
}

CardWithLogo.propTypes = {

}

export default CardWithLogo
