import React, { useState, useEffect } from 'react'
import {Icon} from 'antd';
import moment from 'moment';
// import { useInterval } from 'react-use';
// import Moment from 'react-moment';

function Footer() {

    const nowTime = moment().format('YYYY-MM-DD');
    // const [Times, setTimes] = useState([])
    
    // const [realTime, setRealTime] = useState(Date.now());
    // const startTime = new Date("2020-08-23T16:00");
    
        // const nowTime = Date.now(),
        //       startTime = new Date("2020-08-23T16:00");

    // useEffect(() => {

    //     setTimes(nowTime)

    // }, [])

    // useInterval(() => {
    //     setRealTime(Date.now());
    //   }, 1000);

    return (
        <div style={{
            height: '80px', display: 'flex',
            flexDirection: 'column', alignItems: 'center',
            justifyContent: 'center', fontSize:'1rem'
        }}>
           <div> {nowTime} <Icon type="smile" /></div>
           {/* <div> {startTime} <Icon type="smile" /></div> */}
           {/* <Moment fromNow>{startTime}</Moment> */}
        </div>
    )
}

export default Footer
