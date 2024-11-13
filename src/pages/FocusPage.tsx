import React from 'react';
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
  IonIcon
} from '@ionic/react';
import '../styles/FocusPage.css';
import {IonItem, IonLabel, IonList } from '@ionic/react';
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/footer";


const FocusPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
      <Navbar />
      </IonHeader>
      <IonContent>
        <IonImg src="/image5.png" className="focus-banner-image" />
        <IonGrid className="focus-content">
          <IonRow className='first-row'>
            <IonCol size="12">
              <IonText className="section-title">Economic Development</IonText>
              <p className="section-paragraph">
                According to the World Bank collection of development indicators, the number of farmers account in Indonesia was reported at 29.28% in 2022 of total employment and contribute only 12.4% to GDP in Indonesia. Despite the level of good agricultural practices knowledge from smallholder farmers below the standard, it’s affected to their incomes, and have a standard of living below the poverty line. Followed by the other conditions such as weather (drought, floods), climate change, pests and disease are also causes of crop failure. Addressing these issues, requires a multi-faceted approach involving investment in rural technology, as well as initiatives to attract youth to farming and improve the overall viability and sustainability of smallholder agriculture in Indonesia.
              </p>
              <p className="section-paragraph">
                Economic development in the agriculture sector refers to efforts aimed at improving the economic performance, sustainability, and inclusivity of agricultural activities. It's important because it supports poverty reduction, ensuring food security and nutrition, providing employment and income as well as the development of rural communities. Through economic development farmers and youth farmers in Indonesia can attain the means to have access to digital technologies in Agriculture, adopt climate-smart agricultural practices, reduce post-harvest losses, as well as community-based natural resource management.
              </p>
            </IonCol>
          </IonRow>

          <IonRow className="program-objectives" style={{ backgroundColor: '#004d4d', color: 'white', borderRadius: '8px', padding: '30px', justifyContent: 'center', alignItems: 'center' }}>
  <IonCol size="5" style={{ padding: '0', display: 'flex', justifyContent: 'center' }}>
    <img
      alt="Petani bekerja di ladang hijau"
      src="image6.png"
      style={{ width: '100%', borderRadius: '5px' }}
    />
  </IonCol>
  <IonCol size="4" style={{ padding: '50px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
    <IonText style={{ fontWeight: 'bold', fontSize: '2em', marginBottom: '1rem', color: '#d3f4f4', textAlign: 'left' }}> PROGRAM OBJECTIVES</IonText>
    
    <div style={{ marginBottom: '1rem', color: '#d3f4f4', textAlign: 'justify' }}>
      <IonText>
        <p>To improve their productivity of smallholder farmers as well as enhance their adaptive capacity.</p>
      </IonText>
    </div>

    <div style={{ marginBottom: '1rem', color: '#d3f4f4', textAlign: 'justify' }}>
      <IonText>
        <p>Increase smallholder farmers income and improve livelihoods for themselves and families.</p>
      </IonText>
    </div>

    <div style={{ color: '#d3f4f4', textAlign: 'justify' }}>
      <IonText>
        <p>To create employment opportunities for youth in agriculture and related sectors, reducing youth unemployment and underemployment in rural areas.</p>
      </IonText>
    </div>
  </IonCol>
</IonRow>


  <IonRow className="impact-section" style={{ display: "flex", justifyContent: "center", textAlign: "left" }}>
    <IonCol size="12" style={{ textAlign: "center" }}>
        <IonText className="section-subtitle" style={{ textAlign: "center" }}>Impact</IonText>
        <div className="impact-icons">
            <div>
                <IonImg src="icon1.png" />
                <p>Increased Incomes and Employment</p>
            </div>
            <div>
                <IonImg src="icon2.png" />
                <p>Skills Enhancement and Empowerment</p>
            </div>
            <div>
                <IonImg src="icon3.png" />
                <p>Improved Livelihood and Well-being</p>
            </div>
            <div>
                <IonImg src="icon4.png" />
                <p>Community Resilience and Social Cohesion</p>
            </div>
        </div>
    </IonCol>
</IonRow>

<IonRow className="program-details"style={{ display: "flex", justifyContent: "center", textAlign: "center" }}>
  <IonCol size="12" style={{ textAlign: "center" }}>
    <IonText className="section-subtitle" style={{ textAlign: 'center', fontWeight: 'bold', color: '#00695c' }}> OUR APPROACH</IonText>
    <IonCard className='ioncard1'>
      <IonCardHeader>
        <IonCardTitle>1</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>Provide training for smallholder farmers on Agribusiness development, digital agriculture, climate-smart agriculture, youth-led cooperatives, and community-based natural resource management to improve farmers productivity, and income, to create employment opportunities both for youth women. The training use Farmers Field School (FFS) and collaborative trials: joint experiential learning for farmers to really understand, practice and own new practices approach.</IonCardContent>
    </IonCard>

    <IonCard className='ioncard2'>
      <IonCardHeader>
        <IonCardTitle>2</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>Work with youth to provide support in assisting smallholder farmers, thereby amplifying their voices and influence in shaping agricultural development agendas.</IonCardContent>
    </IonCard>

    <IonCard className='ioncard3'>
      <IonCardHeader>
        <IonCardTitle>3</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>Work with corporate to provide access to quality and affordable agriculture inputs, seeds, financing, and offtake their product.</IonCardContent>
    </IonCard>

    <IonCard className='ioncard4'>
      <IonCardHeader>
        <IonCardTitle>4</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>Develop and set up farming cooperatives to improve market access, and linkages by strengthening value chains, facilitating market information dissemination, and fostering partnerships with agribusinesses and cooperatives.</IonCardContent>
    </IonCard>

  </IonCol>
</IonRow>

<IonRow className="partnership-section">
  <IonCol size="12">
    <IonText className="partnership-title">Call for Partnership</IonText>
    <p className="partnership-text">
      By fostering collaborative partnerships, we can effectively empower smallholder farmers and youth to develop their potential as drivers of agricultural transformation, rural development, and sustainable food systems. By fostering knowledge exchange, strengthening market linkages, advocating for supportive policies, and promoting social inclusion, we can create an enabling environment that empowers youth farmers to thrive and contribute to a more prosperous and resilient agricultural sector for all. Let’s partner with us by clicking the link below:
    </p>
    <div className="button-container">
      <IonButton routerLink='/Contact' color="dark" className="partnership-button">
        Click here →
      </IonButton>
    </div>
  </IonCol>
</IonRow>
        </IonGrid>
        <Footer/>
      </IonContent>
    </IonPage>
    
  );
};

export default FocusPage;
