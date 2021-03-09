import React from 'react';
import InputCustom from '../../atoms/InputCustom/InputCustom';
import UploadCustom from '../../atoms/UploadCustom/UploadCustom';
import style from './Feeder.module.scss'

const Feeder = ({ inputData }) => {
    return (
        <div className='sameline'>
        <div className={style['o-feeder']}>    
            {
                inputData.map(
                    (k, index) => 
                    <div key={index} type="text">
                     
                    <InputCustom data={k}>                        
                    </InputCustom>
                    </div>
                )}
        </div>
        <div className='sameline'>
        <UploadCustom className='uploadbutton' text='Upload'/>
        </div>
        </div>
    );
};

export default Feeder;