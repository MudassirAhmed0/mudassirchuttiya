 import { whatWeDo } from '../../assets/data/data'
import Card from './Card';

const ServiceCard = () => {

 

    return (
        <>
            <div className='w-930px m-auto'>
                <div className='flex space-between mob-p-1r ipad-p-3r'>

                    {whatWeDo?.items?.map(item=><Card key={item?.info?.heading} item={item}/>
                       
                    )}
                </div>
            </div>
        </>
    )
}

export default ServiceCard