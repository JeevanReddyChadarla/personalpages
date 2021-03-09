import React from 'react'
import ButtonCustom from '../../atoms/ButtonCustom/ButtonCustom'
import Feeder from '../../organisms/Feeder/Feeder'
import style from './FeedsPage.module.scss';

const FeedsPage = () => {
    const inpt = ['title','password','description','director']
    
    return(
        <div>
        <h3 className={style['h3class']} data-test="">Upload video</h3>
        <Feeder inputData={inpt}/>
        </div>
    )
}

export default FeedsPage;