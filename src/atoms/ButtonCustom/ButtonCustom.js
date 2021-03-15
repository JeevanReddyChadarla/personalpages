import React from 'react';
import style from './ButtonCustom.module.scss';
import { Button } from 'antd';

const ButtonCustom = ({text}) => {
    return (
        <div className={style['button']}>
           <Button data-test="button">
               <p>{text}</p>
           </Button>
        </div>
    );
};

export default ButtonCustom;