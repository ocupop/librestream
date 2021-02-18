import React from "react"
import { graphql } from "gatsby"
// import Image from "gatsby-image"
import parse from "html-react-parser"
import CaseStudies from '../../components/CaseStudies'

const HomeTemplate = ({ data: { page } }) => {
  // const featuredImage = {
  //   fluid: page.featuredImage?.node?.localFile?.childImageSharp?.fluid,
  //   alt: page.featuredImage?.node?.alt || ``,
  // }

  return (

    <>
      {/* if we have a featured image for this post let's display it */}
      {/* {featuredImage?.fluid && (
          <Image
            fluid={featuredImage.fluid}
            alt={featuredImage.alt}
            style={{ marginBottom: 50 }}
          />
      )} */}

      <section className="bg-white">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-7 mx-lg-auto">
              <div className="text-center">
                <h2 className="mb-4 font-weight-light">
                  {parse(page.title)}
                </h2>
                <div className="lead lead-lg text-gray mb-5">
                  {parse(page.description)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CaseStudies />

      <section className="bg-gradient-blue text-white">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <CarouselBootstrap />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white folder-border folder-top">
        <div className="container">
          <div className="row">
            {/* {homeStat && homeStat.map((stat, index) => (
              <Stat key={index} />
              // <div className="col-12 col-md-6 col-lg-3" key={index}>
              //   <div className="display-1">{homeStat.homeStatValue}</div>
              //   <p className="text-uppercase lead border-left border-dark">{homeStat.homeStatLabel}</p>
              // </div>
            ))} */}
          </div>
        </div>
      </section>

      <hr className="hr-styled" />

      <section className="bg-white">
        <div className="container">
          <div className="row mb-4">
            <div className="col-12">
              <h3>Featured News</h3>
            </div>
          </div>
          <div className="row">
            {/* {news && news.map((newsItem) => (
              <div className="col-12 col-md-6 col-lg-3" key={newsItem.newsItem.id}>
                <Card title={newsItem.newsItem.title} />
              </div>
            ))} */}
          </div>
          <div className="row my-5">
            <div className="col-12">
              <div className="text-center">
                <a href="/news" className="btn btn-primary text-white">View All News</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* {!!page.content && (
        <section itemProp="articleBody">{parse(page.content)}</section>
      )} */}

    </>
  )
}

export const pageQuery = graphql`
  query HomeTemplateQuery($id: String!) {
    # selecting the current page by id
    page: wpPage(id: { eq: $id }) {
      ...PageDetails
    }
  }
`

export default HomeTemplate