import React from "react";
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
  IonMenuButton,
  IonContent,
  IonImg,
} from "@ionic/react";
import "./Navbar.css";

const Navbar: React.FC = () => {
  return (
    <IonHeader>
      <IonToolbar className="navbar-toolbar">
        <IonButtons slot="start">
        <IonTitle className="navbar-title">Edufarmers</IonTitle>
        </IonButtons>

        <div className="navbar-links" slot="end">
          <IonButton fill="clear" routerLink="/beranda">
            Beranda
          </IonButton>
          <IonButton fill="clear" routerLink="/Fokus">
            Fokus Kami
          </IonButton>
          <IonButton fill="clear" routerLink="/program">
            Program Kami
          </IonButton>
          <IonButton fill="clear" routerLink="/contact">
            Contact
          </IonButton>
          <IonButtons>
            <IonButton
              color="dark"
              routerLink="/login"
              className="login-button"
            >
              Masuk
            </IonButton>
            <IonButton
              color="light"
              routerLink="/signup"
              className="signup-button"
            >
              Daftar
            </IonButton>
          </IonButtons>
        </div>
      </IonToolbar>
    </IonHeader>
  );
};

export default Navbar;