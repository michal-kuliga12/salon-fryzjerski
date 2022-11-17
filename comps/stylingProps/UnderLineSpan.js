const UnderLineSpan = ({width}) => {
    return (
        <span style={{
            marginTop: "4px",
            marginBottom: "4px",
            display: "block",
            width: {width},
            height: "2px",
            opacity: ".7",
            backgroundColor: "rgb(250,200,10)",
          }}></span>
    );
}
 
export default UnderLineSpan;