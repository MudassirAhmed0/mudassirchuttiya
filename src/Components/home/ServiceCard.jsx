import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import OnlineIcon from '../../assets/images/detail-icon-both/onlineadvertising-blue.svg'
import OnlineIconWhite from '../../assets/images/detail-icon-both/onlineadvertising-white.svg'
import { CgArrowLongRight } from "react-icons/cg";
import { whatWeDo } from '../../assets/data/data'
import Card from './Card';

const ServiceCard = () => {

 

    return (
        <>
            <div className='w-930px m-auto'>
                <div className='flex space-between ipad-p-3r'>

                    {whatWeDo?.items?.map(item=><Card item={item}/>
                       
                    )}
                </div>
            </div>
        </>
    )
}

export default ServiceCard