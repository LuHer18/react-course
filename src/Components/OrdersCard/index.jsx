import { CalendarDaysIcon } from '@heroicons/react/24/solid'
import { ShoppingBagIcon } from '@heroicons/react/24/solid'
import { ChevronRightIcon } from '@heroicons/react/24/solid'
const OrdersCard = (props) => {
    const {totalPrice, totalProducts} = props

    let article 
    if (totalProducts> 1){
        article ='articles'
    } else {
        article = 'article'
    }

return (
    <div className='flex justify-between items-center mb-3 border rounded-lg border-black w-80 h-30 p-4 '>
        <div className="flex  justify-between w-full">
            <div className="flex flex-col">
                <div className='flex justify-center gap-1'>
                    <CalendarDaysIcon className='h-6 w-6'></CalendarDaysIcon>
                    <span className="font-light">01.02.23</span>
                </div>
                <div className='flex justify-center gap-2'>
                    <ShoppingBagIcon className='h-6 w-6'></ShoppingBagIcon>
                    <span className="font-light">{`${totalProducts} ${article}`} </span>
                </div>
                
                
            </div>
            <div className='flex justify-center items-center gap-1'>
                <span className="font-medium text-2xl">${totalPrice}</span>
                <ChevronRightIcon className='h-6 w-6'></ChevronRightIcon>
            </div>
        </div>
    </div>
)
}

export default OrdersCard