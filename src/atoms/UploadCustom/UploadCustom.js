import React from 'react';
import style from './UploadCustom.module.scss';
import { Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const UploadCustom = ({text}) => {
    return (
        <div className='colors-4-hex'>
           <Upload {...text}>
            <Button icon={<UploadOutlined />}>{text}</Button>
            </Upload>
        </div>
    );
};

export default UploadCustom;