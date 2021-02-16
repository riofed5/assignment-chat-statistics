import React from 'react'
import "antd/dist/antd.css";
import Layout from "antd/lib/layout";
import Table from 'antd/lib/table';
import PropTypes from 'prop-types';

// 4. Table component to display all the data by date 
// based on conversation_count, missed_chat_count, visitors_with_conversation_count	

export const TableDatas = ({data, widthColumnDate}) => {

    const columnsRender = [
        {
            title: "conversation_count",
            dataIndex: "conversation_count",
            key: "id",
            sorter: (a, b) => a.conversation_count - b.conversation_count,
        },
        {
            title: "missed_chat_count",
            dataIndex: "missed_chat_count",
            key: "id",
            sorter: (a, b) => a.missed_chat_count - b.missed_chat_count,
        },
        {
            title: "visitors_with_conversation_count",
            dataIndex: "visitors_with_conversation_count",
            key: "id",
            sorter: (a, b) => a.visitors_with_conversation_count - b.visitors_with_conversation_count,
        },
        {
            title: 'Date',
            width: widthColumnDate,
            dataIndex: 'date',
            key: 'id',
            fixed: 'right',
            sorter: (a, b) => new Date(a.date) - new Date(b.date),
        },
    ];

    return (
        <Layout.Content>
            <Table
                columns={columnsRender}
                rowKey="id"
                dataSource={data}
                scroll={{x: 1500}}
                pagination={{position: ["bottomCenter"]}}
            />
        </Layout.Content>
    )
};

TableDatas.propTypes = {
    data: PropTypes.array.isRequired,
};
