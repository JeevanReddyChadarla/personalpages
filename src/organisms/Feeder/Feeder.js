import { Button } from 'antd';
import React from 'react';
import InputCustom from '../../atoms/InputCustom/InputCustom';
import UploadCustom from '../../atoms/UploadCustom/UploadCustom';
import style from './Feeder.module.scss'

const Feeder = ({ inputData }) => {
    return (
       
        //<div className={style['o-feeder']}>    
          <div className={style['grid-container']}> 
          <div className={style['item1']}> 
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
            </div>
            <section>
             <UploadCustom  text='Upload' />
            </section>
        </div>
    );
};

export default Feeder;