import style from "../../styles/BookingSite.module.scss"
const ServiceItem = ({nazwa,koszt,metoda}) => {
    return (
        <>
            <div className={style.serviceItem_containerLeft}>
                <h3 style={{
                    marginBottom: "4px"
                }}>{nazwa}</h3>
                <p style={{
                    marginLeft: "4px",
                }}>{metoda}</p>
            </div>
            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "6px"
            }} className={style.serviceItem_containerRight}>
                <p style={{
                    fontSize: "20px",
                    minWidth: "50px",
                    textAlign: "right",
                }}>{koszt}</p>
                <button>Wybierz</button>
            </div>
        </>
    );
}
 
export default ServiceItem;