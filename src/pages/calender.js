import React from "react"
import EventList from '../components/EventList/EventList';

import * as styles from './pageStyles/calender.module.css';

const calender = ({data, pageContext}) => {

    
    
    console.log(data)
    console.log(pageContext)
    let events = [];
    events = data.allEventsJson && data.allEventsJson.edges.map(item => {
        return {
            "title": item.node.title,
            "date": item.node.date,
            "starttime": item.node.starttime,
            "endtime": item.node.endtime,
            "link": item.node.link
            
        }
    })
    return (
        <div className={styles.EventList}>
            <EventList events={events}/>
        </div>
    )
};

export const eventsQuery = graphql`
    query MyQuery($currentDate: Float) {
        allEventsJson(
            filter: {
                starttimestamp: {gte: $currentDate}
            }
            sort: {
                fields: [starttime]
                order: DESC
            }
            ) {
            edges {
                node {
                        title
                        link
                        date: starttime(formatString: "DD. MMM", locale: "da")
                        starttime: starttime(formatString: "HH:mm", locale: "da")
                        endtime: endtime(formatString: "HH:mm", locale: "da")
                    }
                }
        }
    }
    `

export default calender;