import React from "react";
import {TableDatas} from "./TableDatas";
import {shallow} from "enzyme";
import {datas} from '../../tools/dataTest';

const renderCourseForm = (args) => {
    const defaultProps = {
        data: datas.by_date,
        widthDate: "100%"
    };
    const props = {...defaultProps, ...args};
    return shallow(<TableDatas {...props} />);
}

it('render form and header', () => {
    const wrapper = renderCourseForm();
    console.log(wrapper.debug());
    // Nothing for now. Incomming testing
    expect(true).toBe(true);
});
