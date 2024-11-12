import React, { useState } from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonInput,
  IonButton,
  IonItem,
  IonText,
  IonIcon,
  IonCard,
  IonCardContent,
  IonLabel,
  IonToast,
} from "@ionic/react";
import { mailOutline, lockClosedOutline, personOutline } from "ionicons/icons";
import { useHistory } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import "../styles/signup.css";

const SignUp: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [showToast, setShowToast] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string>("");
  const history = useHistory();

  const handleSignUp = async () => {
    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setToastMessage("Sign up successful!");
      setShowToast(true);
      history.push("/login");
    } catch (err: any) {
      setError("Error: " + err.message);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle className="ion-text-center">Academy Sign Up</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <div className="signup-container">
          <IonCard className="signup-card">
            <IonCardContent>
              <div className="ion-text-center">
                <h2>Create a New Account</h2>
              </div>

              <IonItem lines="none">
                <IonIcon icon={personOutline} slot="start" />
                <IonInput
                  type="text"
                  value={name}
                  placeholder="Enter your full name"
                  onIonChange={(e) => setName(e.detail.value!)}
                />
              </IonItem>

              <IonItem lines="none">
                <IonIcon icon={mailOutline} slot="start" />
                <IonInput
                  type="email"
                  value={email}
                  placeholder="Enter your email"
                  onIonChange={(e) => setEmail(e.detail.value!)}
                />
              </IonItem>

              <IonItem lines="none">
                <IonIcon icon={lockClosedOutline} slot="start" />
                <IonInput
                  type="password"
                  value={password}
                  placeholder="Enter your password"
                  onIonChange={(e) => setPassword(e.detail.value!)}
                />
              </IonItem>

              <IonItem lines="none">
                <IonIcon icon={lockClosedOutline} slot="start" />
                <IonInput
                  type="password"
                  value={confirmPassword}
                  placeholder="Confirm your password"
                  onIonChange={(e) => setConfirmPassword(e.detail.value!)}
                />
              </IonItem>

              {error && (
                <IonText color="danger" className="ion-padding-start">
                  <p>{error}</p>
                </IonText>
              )}

              <IonButton
                expand="block"
                onClick={handleSignUp}
                color="primary"
                className="signup-button"
              >
                Sign Up
              </IonButton>

              <div className="ion-text-center">
                <IonText color="medium">
                  Already have an account?{" "}
                  <span
                    onClick={() => history.push("/login")}
                    className="login-link"
                  >
                    Login
                  </span>
                </IonText>
              </div>
            </IonCardContent>
          </IonCard>
        </div>

        <IonToast
          isOpen={showToast}
          onDidDismiss={() => setShowToast(false)}
          message={toastMessage}
          duration={1500}
          color="success"
          position="bottom"
        />
      </IonContent>
    </IonPage>
  );
};

export default SignUp;
