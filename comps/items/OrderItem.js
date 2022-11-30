import Image from "next/image"
import UseFetch from "../../lib/useFetch"

const OrderItem = ( {item, index}) => {
    const deleteItem = async (item) => {
        const res = await fetch('./api/routes/order',{
            method: "DELETE",
            headers: { 
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({ _id: item._id }),
        }).then((res)=> {
            console.log(res)
        })
    }
    let orderDate = new Date(item.order_date)
    let realizationDate = new Date(item.realization_date)
    orderDate = `${orderDate.getDate()}/${orderDate.getMonth()+1}/${orderDate.getFullYear()}`
    realizationDate = `${realizationDate.getDate()}/${realizationDate.getMonth()}/${realizationDate.getFullYear()}`
    return (
        <>
            <div>
                <p>{index+1}  | <b>{orderDate}</b></p>
                <p>{item.name}</p>
                <p>{item.price} zł x {item.quantity} szt. = {item.price*item.quantity} zł</p>
                <div>
                    <p>{item.customer}</p>
                    <p>{item.address}</p>
                </div>
            </div>
            <span onClick={()=>{deleteItem(item)}}>
                <Image src="/cross.png" width={24} height={24} alt={"www.flaticon.com"}/>
            </span>
        </>
    );
}
 
export default OrderItem;