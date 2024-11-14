import React, { useState } from "react";
import {
  IonGrid,
  IonRow,
  IonCol,
  IonText,
  IonImg,
} from "@ionic/react";
import Footer from "../components/Footer/footer";
import Navbar from "../components/Navbar/Navbar";
import "../styles/program.css";

const ProgramPage: React.FC = () => {
  return (
    <IonGrid className="program-container">
      <Navbar />

      <IonRow className="program-hero">
        <IonCol size="12" className="hero-overlay">
          <IonText color="tertiary">
            <p className="subheading">DENGAN DUKUNGAN DARI GOOGLE.ORG</p>
          </IonText>
          <IonText color="light">
            <h1 className="hero-title">
              Memperkuat Ketahanan Pangan Indonesia
            </h1>
          </IonText>
        </IonCol>
      </IonRow>

      {/* Main Content Section */}
      <IonRow className="program-content">
        <IonCol size="12" sizeMd="6" className="content-wrapper">
          <IonText color="tertiary">
            <p className="content-subheading">
              DENGAN DUKUNGAN DARI GOOGLE.ORG
            </p>
          </IonText>
          <IonText color="primary">
            <h2 className="content-title">
              Memperkuat Ketahanan Pangan Indonesia
            </h2>
          </IonText>
          <IonText color="medium">
            <p className="content-text">
              Tantangan di sektor pertanian di Indonesia, seperti menurunnya
              jumlah petani dan produktivitas yang rendah, mengancam ketahanan
              pangan dan pertumbuhan ekonomi. Dua tahun sejak menerima hibah
              pertama dari Google.org senilai US$ 724,490 di 2022, Edufarmers
              melalui inisiatif “Bertani untuk Negeri” telah melatih 4,438
              petani dan 1,040 mahasiswa. Sementara itu, platform belajar daring
              Bertani Academy telah mencapai 2,500 pendaftar dan video
              pendidikan singkat di media sosial telah ditonton jutaan pengguna.
              Pelatihan intensif terkait praktik pertanian berkelanjutan,
              manajemen keuangan, dan soft skills bertujuan untuk meningkatkan
              produktivitas dan pendapatan petani.
            </p>
          </IonText>
        </IonCol>
      </IonRow>

      {/* Program Goals Section */}
      <IonRow className="program-goals">
        <IonCol size="12" sizeMd="6" className="image-wrapper">
          <IonImg
            src="https://www.edufarmers.org/cfind/source/thumb/images/foto-google/cover_w560_h420_tw2978_th2234_x1979_y1325_20221122_044626707_ios.jpg"
            alt="Tujuan Program"
          />
        </IonCol>
        <IonCol size="12" sizeMd="6" className="text-wrapper">
          <h3>Tujuan Program</h3>
          <ul>
            <li>
              <img
                src="https://www.edufarmers.org/cfind/source/thumb/images/cover_w48_h48_icons8-research-48-1.png"
                className="icon"
                alt="Ikon Penelitian"
              />
              Menghasilkan pengetahuan untuk meningkatkan produktivitas dan
              hasil panen petani dengan melakukan penelitian dan menguji
              diantaranya, berbagai benih, pupuk, dan sistem irigasi.
            </li>
            <li>
              <img
                src="https://www.edufarmers.org/cfind/source/thumb/images/cover_w48_h48_icons8-books-50.png"
                className="icon"
                alt="Ikon Peningkatan"
              />
              1 dari setiap 4 petani yang dilatih mengalami peningkatan
              pemahaman tentang praktik pertanian yang baik.
            </li>
            <li>
              <img
                src="https://www.edufarmers.org/cfind/source/thumb/images/cover_w48_h48_icons8-implementation-64.png"
                className="icon"
                alt="Ikon Adopsi"
              />
              30% peningkatan adopsi praktik pertanian yang baik.
            </li>
            <li>
              <img
                src="https://www.edufarmers.org/cfind/source/thumb/images/cover_w48_h48_icons8-conference-64.png"
                className="icon"
                alt="Ikon Produktivitas"
              />
              Petani mengalami peningkatan produktivitas dan pendapatan minimal
              sebesar 15% pada akhir program.
            </li>
          </ul>
        </IonCol>
      </IonRow>

      <Footer />
    </IonGrid>
  );
};

export default ProgramPage;
