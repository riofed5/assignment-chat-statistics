import React, {useEffect, useState} from 'react'
import './App.css';
import "antd/dist/antd.css";
import useWindowDimensions from "./useWindowDimensions";
import {CustomSpinner} from './Components/CustomSpinner';
import {StatisticDatas} from './Components/StatisticDatas';
import {TableDatas} from './Components/TableDatas';
import {BarChart} from './Components/BarChart';
import {InputContainer} from './Components/InputContainer'
import {MenuContainer} from './Components/MenuContainer';
import {PageHeader} from './Components/PageHeader';
import {Subtitle} from './Components/Subtitle';


export const App = () => {

  const [data, setData] = useState(null);
  const [pickingDate, setPickingDate] = useState(JSON.parse(localStorage.getItem('datePicking')));
  const [isDataLoading, setIsDataLoading] = useState(true);
  const {widthScreen} = useWindowDimensions();
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [category, setCategory] = useState(null);
  const [current, setCurrent] = useState('table');

  useEffect(() => {
    if (token && pickingDate) {
      const fetchOptions = {
        headers: {
          'Authorization': `Token ${token}`,
        },
      };
      fetch(`https://api.giosg.com/api/reporting/v1/rooms/84e0fefa-5675-11e7-a349-00163efdd8db/chat-stats/daily/?start_date=${pickingDate[0]}&end_date=${pickingDate[1]}`, fetchOptions)
        .then(response => response.json())
        .then(json => {
          const reformatDay = (d) => d.toString().replace(/\w+ (\w+) (\d+) (\d+).*/, '$2 $1 ($3)');

          // Preparing phase
          // 1. Reformat date and add Id by item to data.by_date array
          let listOfDataBydate = [...json.by_date];
          const result = listOfDataBydate.map((item, id) => {
            const formatDate = reformatDay(new Date(item.date));
            return {...item, id, date: formatDate};
          })
          setData({...json, by_date: result});

          // 2. Get data by category for bar chart
          const conversation_countList = listOfDataBydate.map((item) => {
            const modifyItem = {
              date: item.date,
              value: item.conversation_count
            }
            return modifyItem;
          })
          const missed_chat_countList = listOfDataBydate.map((item) => {
            const modifyItem = {
              date: item.date,
              value: item.missed_chat_count
            }
            return modifyItem;
          })
          const visitors_with_countList = listOfDataBydate.map((item) => {
            const modifyItem = {
              date: item.date,
              value: item.visitors_with_conversation_count
            }
            return modifyItem;
          })
          setCategory({
            conversation_countList,
            missed_chat_countList,
            visitors_with_countList
          })
          // After all prepared data is ready.
          setIsDataLoading(false);
        })
        .catch(err => console.log(err))
    }
  }, [pickingDate, token]);

  // width of Inputs, Statistics Card and column Date in table
  let widthInput = '100%';
  let widthCard = '100%';
  let widthColumnDate = 0.5 * widthScreen;

  // Those above width change when screen width is larger than 768px
  if (widthScreen > 768) {
    widthInput = 0.5 * widthScreen
    widthCard = 0.3 * widthScreen
    widthColumnDate = 500;
  }

  const renderLayout = (dataLoading) => {
    if (dataLoading) {
      return <div className="content"><CustomSpinner /></div>
    } else {
      return (
        <div className="content">
          <StatisticDatas
            data={{
              total_conversation_count: data.total_conversation_count,
              total_user_message_count: data.total_user_message_count,
              total_visitor_message_count: data.total_visitor_message_count
            }}
            widthCard={widthCard} />
          <MenuContainer current={current} setCurrent={setCurrent} />
          {current === "table" &&
            <TableDatas data={data.by_date} widthColumnDate={widthColumnDate} />
          }
          {current !== "table" &&
            <BarChart data={current === "table" ? category.conversation_countList : category[current]} title={"Bar chart here"} />
          }
        </div >
      )
    }
  }
  return (
    <>
      <PageHeader />
      <InputContainer widthInput={widthInput} updateDate={setPickingDate} setToken={setToken} token={token} />
      {!token && <Subtitle subtitle="Please insert your access token!" />}
      {token && !pickingDate && <Subtitle subtitle="Please select Starting Date and Ending Date!" />}
      {pickingDate && renderLayout(isDataLoading)}
    </>
  );
}

