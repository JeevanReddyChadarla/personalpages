import { Button } from 'antd';
import React from 'react';
import InputCustom from '../../atoms/InputCustom/InputCustom';
import UploadCustom from '../../atoms/UploadCustom/UploadCustom';
import style from './Feeder.module.scss'

const Feeder = ({ inputData }) => {
    return (
       
        <div className={style['o-feeder']}>    
            
            <section>
            {
                inputData.map(
                    (k, index) => 
                    <div key={index} type="text">  
                        <InputCustom data={k} />                        
                    </div>
                )}
                <Button className={style['button']} type="primary">Confirm</Button>
            </section>
            
            <section>
             <UploadCustom  text='Upload' />
            </section>
        </div>
    );
};

export default Feeder;