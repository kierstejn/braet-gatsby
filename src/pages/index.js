import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from '../layouts/index'
import * as styles from './pageStyles/index.module.css'


export default ( props ) => {
    const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "images/braet.jpg" }) {
        childImageSharp {
          # Specify a fixed image and fragment.
          # The default width is 400 pixels
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  console.log(data);
  return (
    <div>
        <div className={styles.Header}>
            <h1><span className={styles.Name}>Braet</span> - kbh's nye brætspils cafe</h1>
            <h3>Kom ind til en kop kaffe, et glas vin eller et slag brætspil</h3>

        </div>
        <div className={styles.Image}>
            <Img
                fixed={data.file.childImageSharp.fixed}
                alt="Gatsby Docs are awesome"
            />
        </div>
       
    </div>
  )
};

