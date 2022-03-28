import React from 'react';
import { Spin, Alert } from 'antd';

const Loading = () => {
    return (
        <Spin tip="Loading..." size='large'>
            <Alert
            message="Alert message title"
            description="Further details about the context of this alert."
            type="info"
            />
        </Spin>
    );
};

export default Loading;