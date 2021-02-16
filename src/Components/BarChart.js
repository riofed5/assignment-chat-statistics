import React from 'react'
import "antd/dist/antd.css";
import {Chart,Interval} from 'bizcharts/lib/';
import {CustomSpinner} from './CustomSpinner';
import PropTypes from 'prop-types';

// 5. Bar chart to display data based on category such as conversation_count, missed_chat_count, visitors_with_conversation_count	
export const BarChart = ({data}) =>
    (
        <>
            {!data && <CustomSpinner />}
            {data &&
                <Chart height={400} autoFit data={data} interactions={['element-active']} padding={[30, 30, 30, 50]} >
                    <Interval position="date*value" />
                </Chart>
            }
        </>
    )

BarChart.propTypes = {
    data: PropTypes.array.isRequired
};