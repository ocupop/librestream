import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import parse from "html-react-parser"
import Hero from "../../common/ui/Hero"

const ItSecurityTemplate = ({ data: { page } }) => {
  const featuredImage = {
    fluid: page.featuredImage?.node?.localFile?.childImageSharp?.fluid,
    alt: page.featuredImage?.node?.alt || ``,
  }

  const acf = page.acfTemplateItSecurity
  
  return (
    <>
      <Hero heroTitle={page.title} />
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              {acf.intro && parse(acf.intro)}
            </div>
            <div className="col-lg-4">  
              <Image
                fluid={acf?.introImage?.localFile?.childImageSharp?.fluid}
                alt={acf?.introImage?.altText}
              />
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <hr className="hr-styled" />
      </div>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              {acf.details && parse(acf.details)}
              <div className="mt-5">
                {acf.downloads && acf.downloads.map( download => (
                  <p><a href={download.download} target="_blank" className="btn btn-gradient-dark-blue text-white">{download.downloadLabel}</a></p>
                ))}
              </div>
            </div>
            <div className="col-lg-4">
              {acf.certificationImages && acf.certificationImages.map(image => (
                <Image
                  fluid={image?.certificationImage?.localFile?.childImageSharp?.fluid}
                  alt={image?.altText}
                  className="mb-3"
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      {!!page.content && (
        <section itemProp="articleBody">{parse(page.content)}</section>
      )}

    </>
  )
}

export const pageQuery = graphql`
  query ItSecurityTemplateQuery($id: String!) {
    # selecting the current page by id
    page: wpPage(id: { eq: $id }) {
      ...PageDetails
      acfTemplateItSecurity {
        details
        intro
        introImage {
          localFile {
            childImageSharp {
              fluid(maxWidth: 900) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        certificationImages {
          certificationImage {
            localFile {
              childImageSharp {
                fluid(maxWidth: 900) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        downloads {
          download {
            localFile {
              url
            }
            altText
          }
          downloadLabel
        }
      }
    }
  }
`

export default ItSecurityTemplate