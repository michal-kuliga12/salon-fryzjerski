import Image from "next/image";
import styles from "../styles/comp-styles/AdminBooking.module.scss"

const BookingItem = ({item,index}) => {
    const deleteItem = async (item) => {
        console.log(item._id)
        const res = await fetch('./api/booking/delete',{
            method: "POST",
            headers: { 
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({ _id: item._id }),
        }).then((res)=> {
            console.log(res)
        })
    }
    return (
    <>
        <div className={styles.booking__itemUp}>
            <div>
                <p><b>{index+1}. {item.klient}</b></p>
            </div>
            <div>
                <p>Dzień: <b>{item.data}</b></p>
                <p>Godzina: <b>16:00</b></p>
            </div>
            <div>
                <span onClick={()=>{editItem}}>
                    <Image src="/edit.png" width={24} height={24} alt="www.flaticon.com"/>
                </span>
                <span onClick={()=>{deleteItem(item)}}>
                    <Image src="/cross.png" width={28} height={28} alt="www.flaticon.com"/>
                </span>
            </div>
        </div>
        <div className={styles.booking__itemDown}>
            <p>{item.usluga}</p>
            <p>{item.metoda}</p>
        </div>
    </>
    );
}
 
export default BookingItem;