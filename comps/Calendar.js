import Image from "next/image"
import { useEffect, useState } from "react"
import calendarStyles from "../styles/comp-styles/Calendar.module.scss"

const Calendar = ({getDateFromCalendar}) => {
    const weekday = ["Nd","Pon","Wt","Śr","Czw","Pt","Sob"]
    const bookHours = [8, 9,10,11,12,13,14,15,16,17]
    
    const actualDate = new Date()
    const [day, setDay] = useState("")
    const [month, setMonth] = useState("")
    const [dayOfWeek, setDayOfWeek] = useState()
    const [isHourChosen, setIsHourChosen] = useState(false)

    const [chosenDate, setChosenDate] = useState(new Date())
    const [chosenHour, setChosenHour] = useState(null)

    useEffect(() => {
        chosenDate.setHours(chosenHour)
        chosenDate.setMinutes(0)
        chosenDate.setSeconds(0)
        chosenDate.setMilliseconds(0)
        getDateFromCalendar(chosenDate)
        console.log("Wybrano date")
    },[chosenHour]);

    const handleDayChange = (increment) => {
        const tempDate = chosenDate;
        tempDate.setDate(chosenDate.getDate() + increment);
        setChosenDate(tempDate)
        setDay(chosenDate.getDate())
        setMonth(chosenDate.getMonth()+1)
        setDayOfWeek(chosenDate.getDay())
        console.log(tempDate)
    }
    return (
        <div className={calendarStyles.container}>
            <section className={calendarStyles.selectDate_container}>
                <button onClick={()=>{
                    if (
                        !(
                            actualDate.getDay()===chosenDate.getDay() &&
                            actualDate.getDate()===chosenDate.getDate()
                        )
                    )
                    {
                        handleDayChange(-1)
                    } else console.log("Nie można zarezerwować przeszłych dni")}}
                    ><Image src="/angle-left.png" alt="flaticon.com" width={16} height={16}/></button>
                <div>
                    <p>{day} / {month}</p>
                    <p>({weekday[dayOfWeek]})</p>
                </div>
                <button onClick={()=>{
                    if (
                        !(
                            actualDate.getDay()===chosenDate.getDay() &&
                            actualDate.getDate()!=chosenDate.getDate()
                        )
                    ) {
                        handleDayChange(1)
                    }else console.log("Nie można rezerwować tydzień w przód")
                   }}><Image src="/angle-right.png" alt="flaticon.com" width={16} height={16}/></button>    
            </section>
            <section className={calendarStyles.selectHour_container}>
            {bookHours.map((item,index)=>{
                return (
                    <div key={index} className={(isHourChosen==index?calendarStyles.selectHour_item_active:calendarStyles.selectHour_item)} onClick={()=>{
                        setIsHourChosen(index)
                        setChosenHour(item)
                    }}>{item}:00</div>        
                )
            })}   
            </section>
        </div>
    );
}

export default Calendar;
