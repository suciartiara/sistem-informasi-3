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
  IonToast,
  IonIcon,
  IonCard,
  IonCardContent,
  IonLabel,
} from "@ionic/react";
import { logoGoogle, mailOutline, lockClosedOutline } from "ionicons/icons";
import { useHistory } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../firebase";
import "../styles/Home.css";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [showToast, setShowToast] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string>("");
  const history = useHistory();

  const handleSignIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setToastMessage("Sign in successful!");
      setShowToast(true);
      history.push("/home");
    } catch (err: any) {
      setError("Error: " + err.message);
    }
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      setToastMessage("Signed in with Google successfully!");
      setShowToast(true);
      history.push("/home");
    } catch (err: any) {
      setError("Error: " + err.message);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle className="ion-text-center">Academy Login</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <div className="login-container">
          <IonCard className="login-card">
            <IonCardContent>
              <div className="ion-text-center">
                <h2>Login to Your Account</h2>
              </div>

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

              {error && (
                <IonText color="danger" className="ion-padding-start">
                  <p>{error}</p>
                </IonText>
              )}

              <IonButton
                expand="block"
                onClick={handleSignIn}
                color="primary"
                className="login-button"
              >
                Sign In
              </IonButton>

              <div className="ion-text-center">
                <IonText color="medium">or sign in with</IonText>
              </div>

              <IonButton
                expand="block"
                onClick={handleGoogleSignIn}
                color="secondary"
                className="google-button"
              >
                <IonIcon slot="start" icon={logoGoogle} />
                Sign in with Google
              </IonButton>

              <div className="ion-text-center">
                <IonText color="medium">
                  Don't have an account?{" "}
                  <span
                    onClick={() => history.push("/signup")}
                    className="signup-link"
                  >
                    Sign Up
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

export default Login;
