import Image from "next/image";
import { useEffect, useState } from "react";
import ServiceItem from "../comps/items/ServiceItem";
import styles from "../styles/BookingSite.module.scss"
import connectMongo from "../lib/connectMongo";
import UseFetch from "../lib/useFetch";
import Head from "next/head";
import Calendar,{chosenDate, chosenHour} from "../comps/Calendar";


const serviceList = [
    {
        nazwa: "Strzyżenie chłopięce (do 9 lat)",
        koszt: "35zł",
        metoda: "Maszynka + nożyczki",
    },
    {
        nazwa: "Strzyżenie dziewczynka (do 9 lat)",
        koszt: "40zł",
        metoda: "Nożyczki" ,
    },
    {
        nazwa: "Strzyżenie damskie (końcówki)",
        koszt: "39zł",
        metoda: "Maszynka",
    },
    {
        nazwa: "Strzyżenie damskie (mycie,modelowanie)",
        koszt: "65zł",
        metoda: "Maszynka + nożyczki",
    },
    {
        nazwa: "Stylizacja ślubna",
        koszt: "220zł",
        metoda: "Maszynka + nożyczki" ,
    },
    {
        nazwa: "Strzyżenie męskie",
        koszt: "28zł",
        metoda: "Maszynka",
    },
    {
        nazwa: "Strzyżenie męskie",
        koszt: "42zł",
        metoda: "Maszynka + nożyczki",
    },
    {
        nazwa: "Strzyżenie męskie 'student'",
        koszt: "36zł",
        metoda: "Maszynka + nożyczki",
    },
    {
        nazwa: "Strzyżenie męskie modern/fade",
        koszt: "50zł",
        metoda: "Maszynka + nożyczki",
    }
    
]

const Rezerwacja = () => {
    // // Deklaracja zmiennych w zależności od stanów
    const [service, setService] = useState(null)
    const [client, setClient] = useState("")
    const [date, setDate] = useState("")
    
    const [error, setError] = useState(false)
    const [booked, setBooked] = useState(false)
    const [dateNotAvailable, setDateNotAvailable] = useState(false)

    // Funkcja wykonywana po naciśnięciu przycisku rezerwacji
    const handleSubmit = async (e) => {
        const body = {
            klient: client,
            data: date,
            usluga: service.nazwa,
            metoda: service.metoda,
            cena: service.koszt,
        }
        // const newDate =  new Date(Date.UTC(date.getFullYear(),date.getMonth(),date.getDay(),date.getHours(),date.getMinutes(),date.getSeconds(),date.getMilliseconds()))
        // console.log("newDate: " + newDate)
        console.log(body)
        if (service && client && date) {
            const isDateFound = await UseFetch("./api/controllers/bookFind","PUT",body)   
            console.log(isDateFound)
                if (isDateFound) { 
                    setBooked(false)
                    setError(false)
                    setDateNotAvailable(true)
                } else {
                    UseFetch("./api/routes/booking","POST",body)
                    setBooked(true)
                    setError(false)
                    setDateNotAvailable(false)
                }
        } else {
            alert("Należy uzupełnić wszystkie pola!")
            setBooked(false)
            setError(true)
            setDateNotAvailable(false)
        }
    }
    const [chosenService,setChosenService] = useState(null)
    const getDateFromCalendar = (dateFromCalendar) => {
        setDate(dateFromCalendar)
        console.log("Pomyślnie przesłano datę z kalendarza: "+ dateFromCalendar)
    }
    return (
        <div className={styles.container}>
        <Head>
            <title>Labella | Rezerwacja</title>
        </Head>
            <h1>Rezerwacja</h1>
            <section className={styles.detailsSection}>
                <div className={styles.detailsHeader}>
                    <Image src="/scissors.png" width={32} height={32} alt="flaticon.com"/>
                    <h2>Wybierz rodzaj i szczegóły wizyty</h2>
                </div>
                <div className={styles.background}> {/*Zdjęcie: https://salongabriellubon.pl/ */}
                <div className={styles.detailsContent}>
                    {serviceList.map((item,index)=>{
                        return (
                            <div key={index} className={chosenService===index?styles.serviceItem_container_active:styles.serviceItem_container} onClick={()=>{
                                setChosenService(index)
                                setService(item)
                                console.log(item)
                            }}>
                                <ServiceItem {...item} />
                            </div>
                        );
                    })}
                </div>
                </div>

            </section>
            <section className={styles.dateSection}>
            <div className={styles.detailsHeader}>
                    <Image src="/calendar.png" width={32} height={32} alt="flaticon.com"/>
                    <h2>Termin wizyty</h2>
                </div>
                <Calendar getDateFromCalendar={getDateFromCalendar} />
                <input
                    type="text"
                    required
                    value={client}
                    onChange={(e)=>setClient(e.target.value)}
                    placeholder="Wpisz swoje imię"></input>
                <button onClick={()=>{handleSubmit()}}>ZAREZERWUJ</button>
                {error && <p style={{fontSize:"24px",color:"red"}}>Wystąpił błąd podczas rezerwacji!</p>}
                {booked && <p style={{fontSize:"24px",color:"black"}}>Pomyślnie zarezerwowano wizytę!</p>}
                {dateNotAvailable && <p style={{fontSize:"24px",color:"black"}}>Nie udało się zarezerwować wizyty.<br/>Proszę wybrać inny termin</p>}
            </section>
        </div>
    );
}
export default Rezerwacja;



