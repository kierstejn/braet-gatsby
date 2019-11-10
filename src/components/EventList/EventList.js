import React, { Fragment } from 'react';
import { graphql } from "gatsby";
import { Card } from '@material-ui/core';
import Moment from 'react-moment';
import 'moment/locale/fr';

import * as styles from './EventList.module.css';

const eventlist = (props) => {
   

    const {events} = props;

    const filteredEventList = events.filter((item) => 
    {   
        console.log(new Date(item.date))
        return Date(item.date) > Date.now()
    })
    console.log(events)
    
    console.log(Date.now())
    return (
        <div className={styles.EventList}>
            <h2 className={styles.EventListHeader}>EVENTS</h2>
            <div className={styles.EventTable}>
                {events.length > 0 ? events.map((item, index) => {
                    return (
                        <div key={index} className={styles.EventItem}>
                            <div className={styles.EventItemDate}>
                                <span>{item.date}</span>
                            </div>
                            <div className={styles.EventItemInfo}>
                                <p>{item.title}</p>
                                <div className={styles.EventItemMoreInfo}>
                                    <div style={{marginRight: "10px"}}>
                                        <span>{item.starttime}</span>
                                        {item.endtime ? 
                                            <Fragment>
                                                <span>-</span>
                                                <span>{item.endtime}</span>
                                            </Fragment>
                                            : null
                                        }
                                        
                                    </div>
                                    {item.link ? 
                                        <a className={styles.EventItemLink} href={item.link}>Mere info</a>
                                        : null
                                    }
                                </div>
                            </div>
                        </div>
                    )
                }) : 
                    <p>Ingen planlagte events</p>
                }
            </div>
        </div>
    )
}

export default eventlist;

