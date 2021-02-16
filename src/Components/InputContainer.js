import React from 'react'
import "antd/dist/antd.css";
import UnlockFilled from '@ant-design/icons/UnlockFilled';
import Input from "antd/lib/input";
import DatePicker from 'antd/lib/date-picker';
import moment from 'moment';
import PropTypes from 'prop-types';

// 2. Input component for input from user
export const InputContainer = ({widthInput, updateDate, token, setToken}) => {

    const {RangePicker} = DatePicker;
    const dateFormat = 'YYYY-MM-DD';
    const defaultDate = localStorage.getItem('datePicking') ? JSON.parse(localStorage.getItem('datePicking')) : ['2017-05-01', '2017-05-02']

    const onChangeDate = (date, dateString) => {
        localStorage.setItem("datePicking", JSON.stringify(dateString));
        updateDate(dateString);
    }

    function disabledDate(current) {
        // Can not select days before start Date and after end Date 
        const start = moment('2017-05-01', dateFormat);
        const end = moment('2017-06-16', dateFormat);
        return current < start || current > end;
    }

    return (
        <div className="content">
            <div className="input-container">
                {!token &&
                    <div>
                        <p>** Step 1: Insert your access token</p>
                        <Input
                            style={{width: widthInput}}
                            placeholder="Access Token"
                            prefix={<UnlockFilled />}
                            onPressEnter={(e) => {
                                setToken(e.target.value);
                                localStorage.setItem("token", e.target.value);
                            }}
                        />
                    </div>
                }
                {token &&
                    <div>
                        <p>** Step 2: Select the starting and ending dates</p>
                        <RangePicker
                            showTime
                            style={{width: widthInput}}
                            format={dateFormat}
                            defaultValue={[moment(defaultDate[0], dateFormat), moment(defaultDate[1], dateFormat)]}
                            onChange={(date, dateString) => onChangeDate(date, dateString)}
                            disabledDate={disabledDate}
                        />
                    </div>
                }
            </div>
        </div>
    )
}

InputContainer.propTypes = {
    updateDate: PropTypes.func.isRequired,
    token: PropTypes.string,
    setToken: PropTypes.func.isRequired
};