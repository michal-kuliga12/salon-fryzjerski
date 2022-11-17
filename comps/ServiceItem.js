import style from "../styles/BookingSite.module.scss"
const ServiceItem = ({nazwa,koszt,metoda}) => {
    return (
        <>
            <div className={style.serviceItem_containerLeft}>
                <h3 style={{
                    fontSize: "24px",
                    marginBottom: "4px"
                }}>{nazwa}</h3>
                <p style={{
                    fontSize: "18px",
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
                    fontSize: "24px",
                }}>{koszt}</p>
                <button style={{
                    height: "40px",
                    width: "80px",
                    backgroundColor: "white",
                    border: "1px solid black",
                    borderRadius: "6px"

                }}>Wybierz</button>
            </div>
        </>
    );
}
 
export default ServiceItem;