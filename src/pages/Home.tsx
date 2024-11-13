import {IonContent,IonHeader,IonPage,IonTitle,IonToolbar, IonFooter, IonText} from "@ionic/react";
import Konten from "../components/Konten";
import Navbar from "../components/Navbar";
import "../styles/Home.css";

const Home: React.FC = () => {
  return (

    <IonPage>


      {/* Navbar */}
      <IonHeader>
       <Navbar />
      </IonHeader>

      {/* Konten */}
      <IonContent fullscreen>
        <IonHeader collapse="condense">
        </IonHeader>
        <Konten/>

        
      </IonContent>
     

     </IonPage>

    
  );
};

export default Home;
