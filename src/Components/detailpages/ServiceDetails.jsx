import React, { useEffect, useState } from 'react'
// import service from '../../assets/images/detail-service.JPG'
import service1 from '../../assets/images/service-icon/8.svg'
// import axios from 'axios';
import { serviceData } from '../../assets/data/data'

const ServiceDetails = ({ serviceName }) => {
    const [service, setService] = useState([])
    useEffect(() => {
        const newItem = serviceData.items.filter(item => item.serviceName == serviceName)

        setService(...newItem)
    }, [])
 
    return (
        <>
            <div className='why-background  w-full services-destail-one pt-9r'>
             <div className='w-930px m-auto service-detail-content min-tab-pt-4r mob-pt-2-5'>
                    <img src={service?.info?.img} alt={service?.info?.heading}  className=' service-detail-icon' />
                    <div className='mob-mt-3'>
                        <h3 className='f-18 mob-f-20 big-color font-weight-500'>{service?.info?.heading}</h3>
                        <p className='f-15 mt-1r p-color'>{service?.info?.para}</p>
                    </div>
                    <div className='service-offer'>
                        <h3 className='f-18 mob-f-20 font-weight-500 big-color mb-5r'>{service?.info?.servicesoffer}</h3>
                        <ul className=''>
                            {service?.info?.servicedetail?.map((newdata, chal) =>
                                <li key={chal} className="mt-3r mb-3r">
                                    <h3 className='pl-2r font-w500 light-color relative mt- '> <span className='service-dot'></span>{newdata[0]}</h3>
                                    <p className='mt-1-2 pl-2r f-13 p-color'>{newdata[1]}</p>
                                </li>
                            )}
                        </ul>
                    </div> 
                </div>  
            </div>
        </>
    )
}

export default ServiceDetails