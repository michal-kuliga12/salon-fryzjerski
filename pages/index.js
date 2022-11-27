import Head from 'next/head'
import Image from 'next/image'
import DotPattern from '../comps/stylingProps/DotPattern'
import LinePattern from '../comps/stylingProps/LinePattern'
import UnderLineSpan from '../comps/stylingProps/UnderLineSpan'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Labella | Strona główna</title>
      </Head>
      <div className={styles.backgroundParent}>
        <Image
          className={styles.backgroundImage}
          src="/background-image.jpg"
          alt="https://salongabriellubon.pl"
          layout="fill"
          objectFit='cover'
          objectPosition='center'
        />
      </div>
      <div className={styles.welcomeMessage}>
        <h1>Witamy w naszym <span style={{color:"rgb(167, 124, 7)",}}
        >salonie!</span></h1>
      </div>
      <DotPattern/>
      <main className="oNas">
        <section className={styles.section1}>
          <div className={styles.section1_text}>
            <h2><i>O nas</i></h2>
            <UnderLineSpan width="80%"/>
          </div>
          <div className={styles.section1_item}>
            <Image className={styles.section1_image} src="/section2-img1.jpg" width={360} height={360} alt="!!!"/>
            <div>
              <p style={{fontSize:"32px"}}>Salon Fryzjerski La Bella powstał w 2011 r.</p>
              <br/>
              <p>Oferujemy pełen zakres usług. Nasze motto to: Rzeczy niemożliwe robimy od reki na cuda trzeba chwile poczekać.</p>
            </div>
          </div>
          <div className={styles.section1_item}>
            <div>
              <p>Dzięki rezerwacji on-line w łatwy sposób zarezerwujesz, zmienisz lub odwołasz wizytę.</p>
              <br/>
              <p style={{fontSize:"38px",fontWeight:"bold",}}>Zapraszamy!</p>
            </div>
            <Image className={styles.section1_image} src="/section2-img2.jpg" width={360} height={360} alt="salon-labella.pl"/>
          </div>
          <div className={styles.section1_salonImage}><Image src="/section1-interior.jpg" layout="fill" objectFit='contain'/></div>
        </section>
        <span style={{
          display: "block",
          backgroundColor: "gold",
          borderRadius: "1px",
          width: "90%",
          height: "2px",
          margin: "10px auto",
        }}></span>
        <section className={styles.section2}>
          <div className={styles.section2_itemContainer}>
              <span></span>
              <p>Stosujemy produkty profesjonalne,wyselekcjonowane pod względem jakości, oraz takich które sa przyjazne dla naszego zdrowia.Pracujemy na produktach marek Togethair,Be Color,Estel,Framesi.Ten przytulny salon w którym pracujemy czyli nasz zespół 4-osobowy jest efektem naszej pasji do fryzjerstwa i ludzi .Najwazniejsze jest zadowolenie klienta i poczucie komfortu.</p>
          </div>
          <div className={styles.section2_itemContainer}>
            <span></span>
            <p>Przez ostatnie lata zaufało nam setki klientów. I ty możesz do nich dołączyć już dziś! Skontaktuj się z nami i wybierz dogodny termin.</p>
          </div>
          <div className={styles.section2_itemContainer}>
            <span>
            </span>
            <p>Ciągły rozwój jest dla nas bardzo ważny dlatego uczesticzymy w licznych szkoleniach, zdobywamy wiedzę, śledzimy najnowsze trendy.</p>
          </div>
          <div className={styles.section2_itemContainer}>
            <span></span>
            <p>Oferujemy m.in. koloryzacje kreatywne, awangardowe, flamboyage, sombre, ombre ART HAT, refleksy, strzyżenie damskie, meskie, dziecięce, fryzury okolicznosciowe i ślubne, zabiegi pielęgnacyjne na włosy, sauna.</p>
            
          </div>
        </section>
        <LinePattern />
      </main>
    </div>
  )
}
