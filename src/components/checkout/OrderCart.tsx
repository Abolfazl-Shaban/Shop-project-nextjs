import Image from "next/image";
import { CartItem } from "@/context/CartContext";
import { CalDiscount } from "@/app/utils/calDiscount";

const OrderCart = ({cartItem} : {cartItem : CartItem}) => {

    return ( <div>
        <div className="flex flex-col items-center rounded-lg p-3 border h-[230px] w-[180px]">
            <Image src={cartItem.product.image} alt={cartItem.product.name} width={512} height={512} className=" w-fit h-[70%] rounded-lg" />
            <div className="flex flex-col items-center gap-1 mt-1">
                <h3 className=" font-semibold">{cartItem.product.name}</h3>
                <div className="flex gap-2 items-center">
                    <p className="text-sm text-dark-300 rounded-sm p-1.5 flex-center border size-6 font-[vazir]" >{cartItem.quantity}</p>
                    <p className="text-xs text-dark-200"> <span className="font-[vazir] font-semibold text-sm">{(CalDiscount(cartItem.product.price, cartItem.product.discount) * cartItem.quantity).toLocaleString()}</span> تومان</p>
                </div>
            </div>
        </div>
    </div> ); 
}
 
export default OrderCart;