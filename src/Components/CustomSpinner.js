import React from 'react'
import "antd/dist/antd.css";
import Spin from "antd/lib/spin";
import LoadingOutlined from '@ant-design/icons/LoadingOutlined';

const antIcon = <LoadingOutlined style={{fontSize: 24}} spin />;
// 1. Spinner Component when data is loading
export const CustomSpinner = () => <Spin indicator={antIcon} />
