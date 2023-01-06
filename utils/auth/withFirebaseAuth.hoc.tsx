import React, { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import { useRouter } from "next/router";

export interface FirebaseAuthProps {
  isLoading: boolean;
  isLoggedIn: boolean;
  user: firebase.User | null;
}

const withFirebaseAuth = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  const HOC: React.FunctionComponent<P & FirebaseAuthProps> = (
    props: P & FirebaseAuthProps
  ) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState<firebase.User | null>(null);
    const router = useRouter();

    useEffect(() => {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          setUser(user);
          setIsLoading(false);
        } else {
          router.push("/login");
        }
      });
    }, []);

    useEffect(() => {
      const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
        setIsLoading(false);
        setIsLoggedIn(!!user);
        setUser(user);
      });

      return unsubscribe;
    }, []);

    return (
      <WrappedComponent
        {...props}
        isLoading={isLoading}
        isLoggedIn={isLoggedIn}
        user={user}
      />
    );
  };

  return HOC;
};

export default withFirebaseAuth;
