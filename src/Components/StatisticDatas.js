import React from 'react'
import "antd/dist/antd.css";
import Statistic from "antd/lib/statistic";
import Card from 'antd/lib/card';
import PropTypes from 'prop-types';

// 3. Statistic Datas Component to display total_conversation_count, 
// total_user_message_count,total_visitor_message_count

export const StatisticDatas = ({data, widthCard}) =>

    (
        <div className="statistic-container">

            <Card
                title="Total conversation count"
                style={{width: widthCard}}
            >
                <Statistic
                    value={data.total_conversation_count}
                    valueStyle={{color: '#ff0000'}}
                />
            </Card>

            <Card
                title="Total user message count"
                style={{width: widthCard}}
            >
                <Statistic
                    value={data.total_user_message_count}
                    valueStyle={{color: '#3f8600'}}
                />
            </Card>

            <Card
                title="Total visitor message count"
                style={{width: widthCard}}
            >
                <Statistic
                    value={data.total_visitor_message_count}
                    valueStyle={{color: '#3f8600'}}
                />
            </Card>
        </div>
    )
    ;

StatisticDatas.propTypes = {
    data: PropTypes.object.isRequired,
};