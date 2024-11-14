import React from "react";
import Footer from "../Footer/Footer";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonImg,
  IonText,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonIcon,
} from "@ionic/react";
import { IonItem, IonLabel, IonList } from "@ionic/react";

const Konten: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <IonImg
          src="/image1.png"
          className="focus-banner-image"
          style={{ marginBottom: "8px" }}
        />

        <IonGrid className="focus-content">
          <section>
            {/* Info 1 */}
            <section style={{ padding: "20px", marginTop: "8px" }}>
              <IonRow
                className="program-objectives"
                style={{ color: "white", padding: "40px" }}
              >
                <IonCol size="6" style={{ padding: "0" }}>
                  <img
                    alt="Petani bekerja di ladang hijau"
                    src="/image2.jpg"
                    style={{ width: "100%", borderRadius: "5px" }}
                  />
                </IonCol>
                <IonCol
                  size="6"
                  style={{
                    padding: "30px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <IonText
                    style={{
                      fontWeight: "600",
                      fontSize: "18px",
                      marginBottom: "1rem",
                      color: "black",
                      letterSpacing: "2px",
                    }}
                  >
                    {" "}
                    TENTANG KAMI
                  </IonText>
                  <IonText
                    style={{
                      fontWeight: "300",
                      fontSize: "1.5em",
                      marginBottom: "1px",
                      color: "#2f4b26",
                      letterSpacing: "2px",
                    }}
                  >
                    {" "}
                    Edufarmers International Foundation
                  </IonText>
                  <div
                    style={{
                      marginBottom: "1rem",
                      color: "#2f4b26",
                      marginRight: "40px",
                      fontSize: "16px",
                      letterSpacing: "2px",
                    }}
                  >
                    <IonText>
                      <p>
                        Yayasan Edu Farmers International merupakan sebuah
                        organisasi non-profit yang berdiri sejak tahun 2015
                        untuk mengembangkan petani dan pemuda di Indonesia. Kami
                        berkomitmen untuk memberikan dampak positif bagi sektor
                        agrikultur Indonesia.
                      </p>
                    </IonText>
                    <div className="button-container">
                      <IonButton routerLink="/home" className="tombol">
                        Selengkapnya
                      </IonButton>
                    </div>
                  </div>
                </IonCol>
              </IonRow>
            </section>

            {/* Info 2 */}
            <section style={{ marginTop: "40px" }}>
              <IonRow
                className="program-objectives"
                style={{ color: "white", padding: "40px" }}
              >
                <IonCol
                  size="6"
                  style={{
                    padding: "30px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <IonText
                    style={{
                      fontWeight: "600",
                      fontSize: "18px",
                      marginBottom: "1rem",
                      color: "black",
                      letterSpacing: "2px",
                    }}
                  >
                    {" "}
                    FOKUS KAMI
                  </IonText>
                  <IonText
                    style={{
                      fontWeight: "300",
                      fontSize: "1.5em",
                      marginBottom: "1px",
                      color: "#2f4b26",
                      letterSpacing: "2px",
                    }}
                  >
                    {" "}
                    Economic Development
                  </IonText>
                  <div
                    style={{
                      marginBottom: "1rem",
                      color: "#2f4b26",
                      marginRight: "40px",
                      fontSize: "16px",
                      letterSpacing: "2px",
                    }}
                  >
                    <IonText>
                      <p>
                        {" "}
                        Economic development in the agriculture sector refers to
                        efforts aimed at improving the economic performance,
                        sustainability, and inclusivity of agricultural
                        activities.
                      </p>
                      <div className="button-container">
                        <IonButton routerLink="/focus" className="tombol">
                          Selengkapnya
                        </IonButton>
                      </div>
                    </IonText>
                  </div>
                </IonCol>
                <IonCol size="6" style={{ padding: "0" }}>
                  <img
                    alt="Petani bekerja di ladang hijau"
                    src="/image3.png"
                    style={{
                      marginLeft: "40px",
                      width: "90%",
                      height: "100%",
                      borderRadius: "5px",
                    }}
                  />
                </IonCol>
              </IonRow>
            </section>

            {/* Info 3 */}
            <section style={{ marginTop: "80px", marginBottom: "10px" }}>
              <IonRow className="impact-section">
                <IonCol size="12" style={{ textAlign: "center" }}>
                  <IonText
                    className="section-subtitle"
                    style={{
                      textAlign: "center",
                      fontWeight: "600",
                      fontSize: "18px",
                      marginBottom: "1rem",
                      color: "black",
                      letterSpacing: "2px",
                    }}
                  >
                    PROGRAM KAMI
                  </IonText>
                  <IonCardTitle
                    style={{
                      marginTop: "30px",
                      fontWeight: "600",
                      color: "#2f4b26",
                      fontSize: "1.5em",
                    }}
                  >
                    Google.org Project
                  </IonCardTitle>
                </IonCol>
              </IonRow>

              <section style={{ marginBottom: "80px" }}>
                <IonRow
                  className="program-details"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    textAlign: "center",
                  }}
                >
                  <IonCol size="12" style={{ textAlign: "center" }}>
                    <IonCard className="ioncard1">
                      <IonCardHeader>
                        <img
                          alt="Petani bekerja di ladang hijau"
                          src="/image4.jpg"
                          style={{
                            marginTop: "20px",
                            marginLeft: "30px",
                            marginRight: "30px",
                            width: "90%",
                            borderRadius: "5px",
                          }}
                        />
                        <IonCardTitle style={{ marginTop: "20px" }}>
                          Dengan dukungan dari Google.org
                          <br />
                          Memperkuat Ketahanan Pangan Indonesia
                        </IonCardTitle>
                      </IonCardHeader>
                      <IonCardContent
                        style={{
                          marginLeft: "40px",
                          marginRight: "40px",
                          marginBottom: "20px",
                        }}
                      >
                        Tantangan di sektor pertanian di Indonesia, seperti
                        menurunnya jumlah petani dan produktivitas yang rendah,
                        mengancam ketahanan pangan dan pertumbuhan ekonomi. Dua
                        tahun sejak menerima hibah pertama dari Google.org
                        senilai US$ 724,490 di 2022, Edufarmers melalui
                        inisiatif “Bertani untuk Negeri” telah melatih 4,438
                        petani dan 1,040 mahasiswa. Sementara, platform belajar
                        daring Bertani Academy telah mencapai 2,500 pendaftar
                        dan video pendidikan singkat di media sosial telah
                        ditonton jutaan pengguna. Pelatihan intensif terkait
                        praktik pertanian berkelanjutan, manajemen keuangan, dan
                        soft skills berupaya untuk meningkatkan produktivitas
                        dan pendapatan petani.{" "}
                      </IonCardContent>
                      <div className="button-container">
                        <IonButton
                          routerLink="/program"
                          className="tombol"
                          style={{ marginBottom: "30px", marginRight: "40px" }}
                        >
                          Selengkapnya
                        </IonButton>
                      </div>
                    </IonCard>
                  </IonCol>
                </IonRow>
              </section>
            </section>
          </section>
        </IonGrid>
        <Footer />
      </IonContent>
    </IonPage>
  );
};

export default Konten;
