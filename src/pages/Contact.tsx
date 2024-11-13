import React, { useState } from 'react';
import { 
  IonApp, 
  IonContent, 
  IonGrid, 
  IonRow, 
  IonCol, 
  IonInput, 
  IonTextarea, 
  IonButton,
  IonText,
  IonImg,
  IonIcon
} from '@ionic/react';
import { arrowForward } from 'ionicons/icons';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../firebase';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/footer';
import '../styles/Contact.css';

const Contact: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [organization, setOrganization] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async () => {
    try {
      const currentUser = auth.currentUser;
      if (currentUser) {
        const contactData = {
          firstName,
          lastName,
          phoneNumber,
          organization,
          email,
          message,
          createdAt: new Date(),
          userId: currentUser.uid,
        };

        await setDoc(doc(db, 'contacts', currentUser.uid), contactData);
        console.log('Contact submitted successfully!');

        // Reset form fields
        setFirstName('');
        setLastName('');
        setPhoneNumber('');
        setOrganization('');
        setEmail('');
        setMessage('');
      }
    } catch (error) {
      console.error('Error submitting contact:', error);
    }
  };

  return (
    <IonApp>
      <Navbar />
      <IonContent>
        <IonImg src="public/imageKontak.png" className="focus-banner-image" />
        <IonGrid className="focus-content">
            <div className="contact-container">
                  <IonRow className='first-row'>

                    <IonText className="kontak-title">KONTAK</IonText>
                    <p className="kontak-message">
                    Mari berkolaborasi bersama kami untuk memberdayakan petani dan generasi muda di sektor pertanian. Bersama kita ciptakan keberlanjutan, inovasi, dan kemajuan nyata bagi Bangsa Indonesia! Wisma 09, Jl. Letjen Z.T. Haryono No.kav 09, RT.09/RW.09, Tebet Bar., Jakarta, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 090909
                    </p>

                  </IonRow>
                    <div className="contact-info">
                    <IonText>
                        <a href="tel:+622100000000">(+62 21) 00000000</a>
                    </IonText>
                    <IonText>
                        <a href="mailto:partnership@gmail.com">partnership@gmail.com</a>
                    </IonText>
                    </div>
                </div>

              <div className="contact-form-container">
                <h2 className="contact-form-title">Contact Us</h2>
                <IonRow className="form-row">
                    <IonCol className="form-col" size="12" sizeMd="6">
                    <label className="form-label">First Name *</label>
                    <IonInput
                        className="form-input"
                        value={firstName}
                        onIonChange={(e) => setFirstName(e.detail.value!)}
                        placeholder="Enter your first name"
                    />
                    </IonCol>
                    <IonCol className="form-col" size="12" sizeMd="6">
                    <label className="form-label">Last Name *</label>
                    <IonInput
                        className="form-input"
                        value={lastName}
                        onIonChange={(e) => setLastName(e.detail.value!)}
                        placeholder="Enter your last name"
                    />
                    </IonCol>
                </IonRow>
                <IonRow className="form-row">
                    <IonCol className="form-col" size="12" sizeMd="6">
                    <label className="form-label">Phone Number *</label>
                    <IonInput
                        className="form-input"
                        value={phoneNumber}
                        onIonChange={(e) => setPhoneNumber(e.detail.value!)}
                        placeholder="Enter Phone Number"
                    />
                    </IonCol>
                    <IonCol className="form-col" size="12" sizeMd="6">
                    <label className="form-label">Organization</label>
                    <IonInput
                        className="form-input"
                        value={organization}
                        onIonChange={(e) => setOrganization(e.detail.value!)}
                        placeholder="Enter Organization"
                    />
                    </IonCol>
                </IonRow>
                <IonRow className="form-row">
                    <IonCol className="form-col" size="12">
                    <label className="form-label">Email *</label>
                    <IonInput
                        className="form-input"
                        value={email}
                        onIonChange={(e) => setEmail(e.detail.value!)}
                        placeholder="Enter Email Address"
                        type="email"
                    />
                    </IonCol>
                </IonRow>
                <IonRow className="form-row">
                    <IonCol className="form-col" size="12">
                    <label className="form-label">Message</label>
                    <IonTextarea
                        className="form-textarea"
                        value={message}
                        onIonChange={(e) => setMessage(e.detail.value!)}
                        placeholder="Write us message"
                    />
                    </IonCol>
                </IonRow>
                <IonRow className="form-row">
                    <IonCol className="form-col">
                    <IonButton className="submit-button" onClick={handleSubmit}>
                        Kirim
                        <IonIcon icon={arrowForward} />
                    </IonButton>
                    </IonCol>
                </IonRow>
           </div>
        </IonGrid>
      </IonContent>
      <Footer />
    </IonApp>
  );
};

export default Contact;