import { useEffect } from "react";
import { checkSignInWithEmailLink } from "../firebase.services";

export default function AuthVerify() {
  useEffect(() => {
    checkSignInWithEmailLink();
  }, []);

  return (
    <>
      <h1>Checking Status</h1>
    </>
  );
}
