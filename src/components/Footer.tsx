import React from "react";
import { IonFooter, IonText, IonTitle, IonToolbar } from "@ionic/react";
import "./Footer.css";

export const Kaki: React.FC = () => {
  return (
    <IonFooter>
      <IonToolbar className="ion-padding-horizontal">
        <IonTitle size="small">
          <IonText className="teks" color="dark">
            &copy; <b>Kelompok 3</b> Sistem Informasi Teknik Informatika 2022
          </IonText>
        </IonTitle>
      </IonToolbar>
    </IonFooter>
  );
};

export default Kaki;