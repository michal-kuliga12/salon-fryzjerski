import Image from "next/image";
import { useEffect, useState } from "react";
import ServiceItem from "../comps/items/ServiceItem";
import styles from "../styles/BookingSite.module.scss"
import bookingModel from "../models/booking";
import connectMongo from "../lib/connectMongo";
import UseFetch from "../lib/useFetch";
import Head from "next/head";


const serviceList = [
    {
        nazwa: "Strzyżenie męskie",
        koszt: "35zł",
        metoda: "Maszynka",
    },
    {
        nazwa: "Strzyżenie męskie",
        koszt: "45zł",
        metoda: "Maszynka + nożyczki" ,
    },
    {
        nazwa: "Strzyżenie damskie",
        koszt: "55zł",
        metoda: "Nożyczki",
    },
    {
        nazwa: "Strzyżenie męskie",
        koszt: "35zł",
        metoda: "Maszynka",
    },
    {
        nazwa: "Strzyżenie męskie",
        koszt: "45zł",
        metoda: "Maszynka + nożyczki" ,
    },
    {
        nazwa: "Strzyżenie damskie",
        koszt: "55zł",
        metoda: "Nożyczki",
    }
    
]

const Rezerwacja = ({ booking }) => {
    // // Deklaracja zmiennych w zależności od stanów
    const [service, setService] = useState(null)
    const [klient, setClient] = useState("")
    const [date, setDate] = useState("")
    const [error, setError] = useState(false)
    const [booked, setBooked] = useState(false)

    // Funkcja wykonywana po naciśnięciu przycisku rezerwacji
    const handleSubmit = async (e) => {
        const body = {
            klient: klient,
            data: date,
            usluga: service.nazwa,
            metoda: service.metoda,
            cena: service.koszt,
        }
        if (service && klient && date) {
            e.preventDefault();
            UseFetch("./api/routes/booking","POST",body)
            setBooked(true)
            setError(false)
        } else {
            alert("Należy uzupełnić wszystkie pola!")
            setBooked(false)
            setError(true)
        }
    }
    return (
        <div className={styles.container}>
        <Head>
            <title>Labella | Rezerwacja</title>
        </Head>
            <h1>Rezerwacja</h1>
            <section className={styles.detailsSection}>
                <div className={styles.detailsHeader}>
                    <Image src="/scissors.png" width={32} height={32}/>
                    <h2>Wybierz rodzaj i szczegóły wizyty</h2>
                </div>
                <div className={styles.detailsContent}>
                    {serviceList.map((item,index)=>{
                        return (
                            <div key={index} className={styles.serviceItem_container} onClick={()=>{
                                setService(item)
                                console.log(item)
                            }}>
                                <ServiceItem {...item} />
                            </div>
                        );
                    })}
                </div>
            </section>
            <section className={styles.dateSection}>
                <h2>Wybierz termin oraz wykonawce usługi</h2>
                <input
                    type="text"
                    required
                    value={klient}
                    onChange={(e)=>setClient(e.target.value)}
                    placeholder="Wpisz swoje imię"></input>
                <input
                    type="text"
                    required
                    value={date}
                    onChange={(e)=>setDate(e.target.value)}
                    placeholder="Wpisz datę"></input>
                <button onClick={handleSubmit}>ZAREZERWUJ</button>
                {error && <p style={{fontSize:"24px",color:"red"}}>Wystąpił błąd podczas rezerwacji!</p>}
                {booked && <p style={{fontSize:"24px",color:"black"}}>Pomyślnie zarezerwowano wizytę!</p>}
                {booking && 
                <div style={{display:"flex",flexWrap:"wrap"}}>
                {booking.map((item,index)=>{
                    return (
                        <div key={index} style={{display: "flex", flexDirection: "column", margin: "10px"}}>
                            <p>Klucz: {index}</p>
                            <p>Imię: {item.klient}</p>
                            <p>Data: {item.data}</p>
                            <p>Usługa: {item.usluga}</p>
                            <p>Metoda: {item.metoda}</p>
                            <p>Cena: {item.cena}</p>
                        </div>
                    );
                })}    
                </div>}
            </section>
        </div>
    );
}
export default Rezerwacja;

export const getServerSideProps = async () => {
    try {
        console.log('CONNECTING TO DATABASE')
        await connectMongo()
        console.log('CONNECTED TO DATABASE')
        console.log('FETCHING DOCUMENT')
        const booking = await bookingModel.find()
        console.log('FETCHED DOCUMENT')
        return {
            props: {
                booking: JSON.parse(JSON.stringify(booking)),
            },
        };
    } catch(error) {
        console.log(error)
        return {
            notFound: true,
        }
    }
}


