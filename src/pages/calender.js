import React from "react"
import Layout from '../components/Layout/Layout';
import EventList from '../components/EventList/EventList';

import * as styles from './pageStyles/calender.module.css';

const calender = ( props ) => {

    const {data} = props;
    let events = [];
    events = props.data && props.data.allMarkdownRemark.edges.map(item => {
        return {
            "title": item.node.frontmatter.title,
            "date": item.node.frontmatter.date,
            "starttime": item.node.frontmatter.starttime,
            "endtime": item.node.frontmatter.endtime,
            "link": item.node.frontmatter.link
            
        }
    })
    return (
        <Layout>
            <div className={styles.EventList}>
                <EventList events={events}/>
            </div>
        </Layout>
    )
};

export const eventsQuery = graphql`
    query MyQuery {
        allMarkdownRemark {
        edges {
            node {
            frontmatter {
                date: starttime(formatString: "DD. MMM", locale: "da")
                starttime: starttime(formatString: "HH:mm", locale: "da")
                endtime: endtime(formatString: "HH:mm", locale: "da")
                link
                title
            }
            }
        }
        }
    }
    `

export default calender;