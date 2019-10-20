import React from 'react';
import { graphql } from "gatsby";
import { Card } from '@material-ui/core';
import Moment from 'react-moment';
import 'moment/locale/fr';

import * as styles from './EventList.module.css';

const eventlist = (props) => {
   

    const {events} = props;
    return (
        <div className={styles.EventList}>
            <h2 className={styles.EventListHeader}>Events:</h2>
            <div className={styles.EventTable}>
                {events.length > 0 ? events.map(item => {
                    return (
                        <div className={styles.EventItem}>
                            <div className={styles.EventItemDate}>
                                <span>{item.date}</span>
                            </div>
                            <div className={styles.EventItemInfo}>
                                <p>{item.title}</p>
                                <div className={styles.EventItemMoreInfo}>
                                    <div style={{marginRight: "10px"}}>
                                        <strong>
                                            {item.time}
                                        </strong>
                                    </div>
                                    <a className={styles.EventItemLink} href="url">Mere info</a>
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

