import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";
import Features from "../components/Features";

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro
}) => (
  <div>
    <div className="mt-0 mb-12 py-64 angle-clip-bottom landing-page-main-bg">
      <div className="mx-auto text-center md:pl-64 md:mx-0">
        <h1 className="font-bold text-4xl">{title}</h1>
        <h3 className="font-bold text-xl">{subheading}</h3>
      </div>
    </div>
    <div className="container m-auto pb-12 flex">
      <div className="md:w-1/2 content p-4">
        <div>
          <h2>{mainpitch.title}</h2>
        </div>
        <div>
          <h3>{mainpitch.description}</h3>
        </div>
      </div>
      <div className="md:w-1/2 content p-4">
        {mainpitch.image}
      </div>
    </div>
    <div className="bg-grey-100 pt-12 pb-32">
      <div className="container mx-auto flex">
        <div className="container mx-auto p-4 md:w-2/5">
          <h3 className="font-semibold is-size-2">{heading}</h3>
          <p>{description}</p>
        </div>
        <Features style={{marginTop: '-100px'}} gridItems={intro.blurbs} />
      </div>
    </div>
    <div className="container mx-auto pt-24 pb-12">
      <div className="text-center">
        <Link className="py-2 px-4 text-xl border-grey-400 border uppercase" to="/products">
          Request a demo
        </Link>
      </div>
    </div>
  </div>
);

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array
  })
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`;
