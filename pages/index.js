import Head from 'next/head'
import Image from 'next/image'
import DotPattern from '../comps/stylingProps/DotPattern'
import LinePattern from '../comps/stylingProps/LinePattern'
import UnderLineSpan from '../comps/stylingProps/UnderLineSpan'
import styles from '../styles/Home.module.scss'
//images
import section3_img1 from "../public/onas-1.jpg"
import section3_img2 from "../public/onas-4.jpg"
import section3_img3 from "../public/onas-5.jpg"
import section3_img4 from "../public/onas-6.jpg"
import Link from 'next/link'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Labella | Strona główna</title>
        <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/uicons-solid-straight/css/uicons-solid-straight.css'></link>
        <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/uicons-thin-rounded/css/uicons-thin-rounded.css'></link>
        <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/uicons-regular-straight/css/uicons-regular-straight.css'></link>
        <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/uicons-regular-straight/css/uicons-regular-straight.css'></link>
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
        <h1>Witamy w salonie <span style={{color:"rgb(167, 124, 7)",whiteSpace:"nowrap"}}
        >La Bella!</span></h1>
      </div>
      <DotPattern/>
      <div className={styles.wrapper}>
        <div className={styles.section1_background}>
          <section className={styles.section1}>
            <h1><i>O nas</i></h1>
            <div className={styles.section1_flex_container}>
              <div className={styles.section1_flex_item}>
                <p>Salon Fryzjerski La Bella powstał w 2011 r.</p>
                <br/>
                <p>Jesteśmy salonem świadczącym najwyższej jakości usługi fryzjerskie stosując jednocześnie najwyższej klasy nowości technologiczne i produkty najlepszej jakości.</p>
                <p>Nasze koloryzacje nie dewastują włosów i skóry głowy, równocześnie są trwałe, rozjaśniające oraz kryjące siwe włosy, są nietoksyczne.</p>
                <br/>
                <p>Zapewniamy modne cięcia i koloryzację, profesjonalną analizę kolorystyczną, dobór fryzury do twarzy i osobowości.</p>
                <p>Oferujemy pełen zakres usług. Nasze motto to: Rzeczy niemożliwe robimy od reki na cuda trzeba chwile poczekać.</p>
                <br/><br/>
                <h2><u>Zapraszamy!</u></h2>
              </div>
              <div className={styles.section1_flex_item}>
                <picture className={styles.section1_image}>
                  <Image src='/onas-2.jpg' width={300} height={300} layout="responsive" alt="pixabay.com"/>
                </picture>
                <picture className={styles.section1_image}>
                  <Image src='/onas-3.jpg' width={300} height={300} layout="responsive" alt="pixabay.com"/>
                </picture>
              </div>
            </div>
          </section>
        </div>
        <section className={styles.section2}>
          <h2>Dlaczego warto nas wybrać?</h2>
          <div className={styles.section2_flex_container}>
            <div className={styles.section2_flex_item}>
                <div className={styles.section2_headers}>
                  <i style={{fontSize: "32px"}} className="fi fi-rs-trophy"></i>
                  <h4>PONAD 12 LAT DOŚWIADCZENIA</h4>
                </div>
                <p>Stosujemy produkty profesjonalne,wyselekcjonowane pod względem jakości, oraz takich które sa przyjazne dla naszego zdrowia.Pracujemy na produktach marek Togethair,Be Color,Estel,Framesi.Ten przytulny salon w którym pracujemy czyli nasz zespół 4-osobowy jest efektem naszej pasji do fryzjerstwa i ludzi .Najwazniejsze jest zadowolenie klienta i poczucie komfortu.</p>
            </div>
            <div className={styles.section2_flex_item}>
              <div className={styles.section2_headers}>
                <i style={{fontSize: "32px"}} className="fi fi-ss-barber-shop"></i>
                <h4>ZAUFANIE</h4>
              </div>
              <p>Przez ostatnie lata zaufało nam setki klientów. I ty możesz do nich dołączyć już dziś! Skontaktuj się z nami i wybierz dogodny termin.</p>
            </div>
            <div className={styles.section2_flex_item}>
              <div className={styles.section2_headers}>
              <i style={{fontSize: "32px"}} className="fi fi-rs-book-bookmark"></i>
                <h4>WIEDZA</h4>
              </div>
              <p>Ciągły rozwój jest dla nas bardzo ważny dlatego uczesticzymy w licznych szkoleniach, zdobywamy wiedzę, śledzimy najnowsze trendy.</p>
            </div>
            <div className={styles.section2_flex_item}>
              <div className={styles.section2_headers}>
                <i style={{fontSize: "32px"}} className="fi fi-tr-coins"></i>
                <h4>NISKIE CENY</h4>
              </div>
              <p>Oferujemy m.in. koloryzacje kreatywne, awangardowe, flamboyage, sombre, ombre ART HAT, refleksy, strzyżenie damskie, meskie, dziecięce, fryzury okolicznosciowe i ślubne, zabiegi pielęgnacyjne na włosy, sauna.</p>
            </div>
          </div>
        </section>
        <section className={styles.section3}>
          <h2>Nasze portfolio</h2>
            <div className={styles.section3_flex_container}>
              <div><Image src={section3_img1} layout="responsive" alt="pixabay.com"/></div>
              <div><Image src={section3_img2} layout="responsive" alt="pixabay.com"/></div>
              <div><Image src={section3_img3} layout="responsive" alt="pixabay.com"/></div>
              <div><Image src={section3_img4} layout="responsive" alt="pixabay.com"/></div>
            </div>
          <div className={styles.section3_gallery_info}>
            <h2>Chcesz zobaczyć więcej? Kliknij tutaj:</h2>
            <Link href="/gallery"><button onClick={()=>{}}>Galeria</button></Link>
          </div>
        </section>
      </div>
    </div>
  )
}
