import React, { useRef, useState } from 'react'
import { CgArrowLongRight } from 'react-icons/cg'
import { Link } from 'react-router-dom'

const Card = ({ item }) => {
    const [image,setImage] = useState(true)
    const imgRef = useRef()
    const handleMouseEnter = (src) => setImage(!image)
    const handleMouseLeave = (src) => setImage(!image)
    return (
        <div className='service-card cursour-pointer' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className='flex justify-center align-center h-150px'>
                {/* <img src={OnlineIcon} alt="" className='icon-width' /> */}

                {/* <img ref={imgRef} src={item?.info?.imgBlue} alt={item?.info?.heading} className='icon-width' /> */}
     {   image ?        <img  src={item?.info?.imgBlue} alt={item?.info?.heading} className='icon-width' />:
                <img  src={item?.info?.imgWhite} alt={item?.info?.heading} className='icon-width' />}
                {/* {!isHovered ?
                                :

                                <img src={item?.info?.imgWhite} alt="" className='icon-width' />

                            } */}
            </div>
            <div className='card-content'>
                <h3 className='mt-1r big-color font-weight-500'>{item?.info?.heading}</h3>
                <p className='mt-1-2 mb-1r f-15 p-color'>{item?.info?.para}</p>

                <Link to={`/services/${item?.serviceName}`} className='text-decoration font-blue-color '>Learn more <CgArrowLongRight className='service-card-arrow' /></Link>
            </div>
        </div>)
}

export default Card