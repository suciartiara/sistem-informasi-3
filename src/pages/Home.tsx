import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonFooter,
  IonText,
} from "@ionic/react";
import Konten from "../components/Content/Konten";
import Navbar from "../components/Navbar/Navbar";
import "../styles/Home.css";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <Navbar />
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense"></IonHeader>
        <Konten />
      </IonContent>
    </IonPage>
  );
};

export default Home;
