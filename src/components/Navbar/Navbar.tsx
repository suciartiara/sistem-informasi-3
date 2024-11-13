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
          {/* <IonImg
            src="https://www.freepik.com/icon/link_14873775#fromView=search&page=1&position=19&uuid=5dfb3667-dc6e-444f-a198-4db00d567717"
            alt="Plantwise Logo"
            className="navbar-logo"
          /> */}
          <IonTitle className="navbar-title">Nama Website</IonTitle>
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
