import Image from "next/image";
import styles from "../../styles/comp-styles/AdminBooking.module.scss"

const BookingItem = ({item,index}) => {
    const data = new Date(item.data)
    const deleteItem = async (item) => {
        const res = await fetch('./api/routes/booking',{
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
    return (
    <>
        <div className={styles.booking__itemUp}>
            <div>
                <p>{index+1}. {item.klient}</p>
            </div>
            <div>
                <p>{data.getDate()}/{data.getMonth()}/{data.getFullYear()}</p>
                <p>{data.getHours()}:00</p>
            </div>
            <div>
                {/* <span onClick={()=>{editItem}}>
                    <Image src="/edit.png" width={24} height={24} alt={"www.flaticon.com"}/>
                </span> */}
                <span onClick={()=>{deleteItem(item)}}>
                    <Image src="/cross.png" width={24} height={24} alt={"www.flaticon.com"}/>
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