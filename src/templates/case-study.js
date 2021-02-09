import React from 'react'
// import PropTypes from 'prop-types'
import HeroDefault from '../components/HeroDefault'
import NextPrevNav from '../components/NextPrevNav'


const CaseStudy = ({ data: { previous, next, post } }) => {

  return (
    <>
      <HeroDefault
        title="SGS Complete 30,000 Inspections"
        subtitle="Powered By Librestream."
        subnav="false"
        logo="true"
      />
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>Customer Use Case</h2>
              <h2 className="lead text-primary">Title Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, aperiam?</h2>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <hr />
      </div>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="bg-orange p-2">
                <h6 className="mb-0 text-white">Situation</h6>
              </div>
              <div className="border-left border-dark p-3">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias libero unde natus, reprehenderit harum ipsam commodi nesciunt! Distinctio, quos! Consectetur delectus neque reprehenderit error eligendi numquam eius, ab veniam tempore.</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="bg-orange p-2">
                <h6 className="mb-0 text-white">Solution</h6>
              </div>
              <div className="border-left border-dark p-3">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias libero unde natus, reprehenderit harum ipsam commodi nesciunt! Distinctio, quos! Consectetur delectus neque reprehenderit error eligendi numquam eius, ab veniam tempore.</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="bg-orange p-2">
                <h6 className="mb-0 text-white">Results</h6>
              </div>
              <div className="border-left border-dark p-3">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias libero unde natus, reprehenderit harum ipsam commodi nesciunt! Distinctio, quos! Consectetur delectus neque reprehenderit error eligendi numquam eius, ab veniam tempore.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-primary text-white bg-offset-right mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <p className="lead">“30,000 inspections have now been conducted by SGS QiiQ, the remote inspections tool which was fully deployed during the year. This digital tool has established a new standard in the industry.”</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus inventore magnam, voluptatem ullam facilis ratione recusandae illo voluptatibus cumque nisi corporis aspernatur officiis. Praesentium culpa minus enim corrupti sapiente quam.</p>
              <a href="#" className="btn btn-border border-white text-white">Full Article?</a>
              {/* It looks like on the current site this is a link to a blog post */}
            </div>
            <div className="col-lg-5">
              <img src="https://via.placeholder.com/768" className="img-fluid img-offset-top" alt="" />
            </div>
          </div>
        </div>
      </section>
      <NextPrevNav />

    </>
  )
}

CaseStudy.propTypes = {

}

export default CaseStudy