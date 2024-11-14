import React, { useState } from "react";
import {
  IonPage,
  IonContent,
  IonInput,
  IonButton,
  IonItem,
  IonIcon,
  IonToast,
  IonCard,
  IonCardContent,
  IonGrid,
  IonRow,
  IonCol,
  IonImg,
} from "@ionic/react";
import { mailOutline, lockClosedOutline, personOutline } from "ionicons/icons";
import { useHistory } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import "../styles/signup.css";

const SignUp: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [name, setName] = useState<string>("");
  const [showToast, setShowToast] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string>("");
  const history = useHistory();

  const handleSignUp = async () => {
    setError(null);

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      setToastMessage("Passwords do not match!");
      setShowToast(true);
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      await saveUserData(user.uid, name, email);

      setToastMessage("Account created successfully!");
      setShowToast(true);
      setTimeout(() => {
        history.push("/login");
      }, 1500);
    } catch (error) {
      setToastMessage("Error creating account. Please try again.");
      setShowToast(true);
      console.error("Error creating account:", error);
    }
  };

  const saveUserData = async (userId: string, name: string, email: string) => {
    try {
      await setDoc(doc(db, "users", userId), {
        name: name,
        email: email,
        createdAt: new Date(),
      });
    } catch (error) {
      console.error("Error saving user data:", error);
    }
  };

  return (
    <IonPage>
      <IonContent className="ion-padding sign-up-content">
        <IonGrid className="signup-grid">
          <IonRow>
            <IonCol size="12" sizeMd="6" className="image-column">
              <IonImg
                src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Signup Image"
                className="signup-image"
              />
            </IonCol>

            <IonCol size="12" sizeMd="6">
              <div className="header-container">
                <h2 className="ion-no-margin title">Sign Up</h2>
                <p className="subtitle">Create an account to get started</p>
              </div>

              <IonCard className="signup-card">
                <IonCardContent>
                  <IonItem lines="none" className="input-container">
                    <IonIcon icon={personOutline} slot="start" />
                    <IonInput
                      placeholder="Enter your full name"
                      value={name}
                      onIonChange={(e) => setName(e.detail.value!)}
                      className="input-field"
                    />
                  </IonItem>

                  <IonItem lines="none" className="input-container">
                    <IonIcon icon={mailOutline} slot="start" />
                    <IonInput
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onIonChange={(e) => setEmail(e.detail.value!)}
                      className="input-field"
                    />
                  </IonItem>

                  <IonItem lines="none" className="input-container">
                    <IonIcon icon={lockClosedOutline} slot="start" />
                    <IonInput
                      type="password"
                      placeholder="Enter your password"
                      value={password}
                      onIonChange={(e) => setPassword(e.detail.value!)}
                      className="input-field"
                    />
                  </IonItem>

                  <IonItem lines="none" className="input-container">
                    <IonIcon icon={lockClosedOutline} slot="start" />
                    <IonInput
                      type="password"
                      placeholder="Confirm your password"
                      value={confirmPassword}
                      onIonChange={(e) => setConfirmPassword(e.detail.value!)}
                      className="input-field"
                    />
                  </IonItem>

                  <IonButton
                    expand="block"
                    onClick={handleSignUp}
                    color="primary"
                  >
                    Sign Up
                  </IonButton>
                </IonCardContent>
              </IonCard>

              <div className="login-link">
                <p>Already have an account?</p>
                <IonButton
                  fill="clear"
                  size="small"
                  color="primary"
                  onClick={() => history.push("/login")}
                >
                  Log In
                </IonButton>
              </div>
            </IonCol>
          </IonRow>
        </IonGrid>

        <IonToast
          isOpen={showToast}
          onDidDismiss={() => setShowToast(false)}
          message={toastMessage}
          duration={1500}
          color="success"
          position="top"
        />
      </IonContent>
    </IonPage>
  );
};

export default SignUp;
