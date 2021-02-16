const datas = {
    by_date: [
        {
            chats_from_autosuggest_count: 105,
            chats_from_user_count: 0,
            chats_from_visitor_count: 5,
            conversation_count: 11,
            date: "2017-05-02",
            missed_chat_count: 1,
            user_message_count: 53,
            visitor_message_count: 51,
            visitors_affected_by_chat_count: 107,
            visitors_autosuggested_count: 103,
            visitors_with_chat_count: 12,
            visitors_with_conversation_count: 11,
        },
        {
            chats_from_autosuggest_count: 105,
            chats_from_user_count: 0,
            chats_from_visitor_count: 3,
            conversation_count: 10,
            date: "2017-05-03",
            missed_chat_count: 4,
            user_message_count: 70,
            visitor_message_count: 77,
            visitors_affected_by_chat_count: 100,
            visitors_autosuggested_count: 99,
            visitors_with_chat_count: 17,
            visitors_with_conversation_count: 9,
        },
        {
            chats_from_autosuggest_count: 98,
            chats_from_user_count: 1,
            chats_from_visitor_count: 8,
            conversation_count: 9,
            date: "2017-05-04",
            missed_chat_count: 3,
            user_message_count: 94,
            visitor_message_count: 97,
            visitors_affected_by_chat_count: 100,
            visitors_autosuggested_count: 92,
            visitors_with_chat_count: 16,
            visitors_with_conversation_count: 9
        }
    ],
    end_date: "2017-05-04",
    room_id: "123456789",
    start_date: "2017-05-01",
    total_chats_from_user_count: 3,
    total_chats_from_visitor_count: 58,
    total_conversation_count: 130,
    total_missed_chat_count: 31,
    total_user_message_count: 1102,
    total_visitor_message_count: 1044,
    total_visitors_affected_by_chat_count: 1641,
    total_visitors_autosuggested_count: 1603,
    total_visitors_with_chat_count: 179,
    total_visitors_with_conversation_count: 126,
}

const category = {
    conversation_countList: [
        {date: "2017-05-02", value: 11},
        {date: "2017-05-03", value: 10},
        {date: "2017-05-04", value: 9}
    ],
    missed_chat_countList: [
        {date: "2017-05-02", value: 1},
        {date: "2017-05-03", value: 4},
        {date: "2017-05-04", value: 3}
    ],
    visitors_with_countList: [
        {date: "2017-05-02", value: 11},
        {date: "2017-05-03", value: 9},
        {date: "2017-05-04", value: 9}
    ]
};

const statisticsData = {
    total_conversation_count: 30,
    total_user_message_count: 217,
    total_visitor_message_count: 225,
}

module.exports = {
    datas,
    category,
    statisticsData
};


