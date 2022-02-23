 import { whatWeDo } from '../../assets/data/data'
import Card from './Card';

import adImgWhite from '../../assets/images/detail-icon-both/onlineadvertising-white.svg'
import smmImgWhite from '../../assets/images/detail-icon-both/socialmediamarketingandmanagement-white.svg'
import emailImgWhite from '../../assets/images/detail-icon-both/emailmarketing.white.svg'
import videoImgWhite from '../../assets/images/detail-icon-both/videoproduction-white.svg'
import smsImgWhite from '../../assets/images/detail-icon-both/smsmarketing-white.svg'
import brandImgWhite from '../../assets/images/detail-icon-both/brandmarketing-white.svg'
import graphicImgWhite from '../../assets/images/detail-icon-both/graphicdesign-white.svg'
import marketingImgWhite from '../../assets/images/detail-icon-both/marketingstrategy-white.svg'
import websitedevelopment from '../../assets/images/detail-icon-both/websitedevelopment-white.svg'

import adImgBlue from '../../assets/images/detail-icon-both/onlineadvertising-blue.svg'
import smmImgBlue from '../../assets/images/detail-icon-both/socialmediamarketingandmanagement-blue.svg'
import emailImgBlue from '../../assets/images/detail-icon-both/emailmarketing-blue.svg'
import smsImgBlue from '../../assets/images/detail-icon-both/smsmarketing-blue.svg'
import videoImgBlue from '../../assets/images/detail-icon-both/videoproduction-blue.svg'
import brandImgBlue from '../../assets/images/detail-icon-both/brandmarketing-blue.svg'
import graphicBlue from '../../assets/images/detail-icon-both/graphicdesign-blue.svg'
import marketingImgWBlue from '../../assets/images/detail-icon-both/marketingstrategy-blue.svg'
import websiteImgWBlue from '../../assets/images/detail-icon-both/websitedevelopment-blue.svg'


const ServiceCard = () => {

 const imgs =[
     {
         imgBlue:adImgBlue,
         imgWhite:adImgWhite,
     },
     {
         imgBlue:smmImgBlue,
         imgWhite:smmImgWhite,
     },
     {
        imgBlue: emailImgBlue,
        imgWhite:emailImgWhite,
    },
     {
         imgBlue:videoImgBlue,
         imgWhite:videoImgWhite,
     },
     {
         imgBlue:smsImgBlue,
         imgWhite:smsImgWhite,
     },
     {
         imgBlue:brandImgBlue,
         imgWhite:brandImgWhite,
     },
     {
         imgBlue:graphicBlue,
         imgWhite:graphicImgWhite,
     },
     {
         imgBlue: marketingImgWBlue,
         imgWhite: marketingImgWhite,
     },
     {
         imgBlue:websiteImgWBlue,
         imgWhite: websitedevelopment,
     },
     
 ]

    return (
        <>
            <div className='w-930px m-auto'>
                <div className='flex space-between mob-p-1r ipad-p-3r'>

                    {whatWeDo?.items?.map((item,index)=><Card images={imgs[index]} key={item?.info?.heading} item={item}/>
                       
                    )}
                </div>
            </div>
        </>
    )
}

export default ServiceCard