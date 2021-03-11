import React from 'react';
import style from './ButtonCustom.module.scss';
import { Button } from 'antd';

const ButtonCustom = ({text}) => {
    return (
        <div className={style['button']}>
           <Button type="text">
               <p>{text}</p>
               <span></span><span></span><span></span><span></span>
           </Button>
        </div>
    );
};

export default ButtonCustom;