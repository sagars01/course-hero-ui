import { useEffect } from "react";
import { checkSignInWithEmailLink } from "../../../utils/auth/firebase.services";

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
