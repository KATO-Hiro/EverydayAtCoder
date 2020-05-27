import React, {
  useEffect,
  useState,
} from 'react';
import router from 'next/router';
import {
  auth,
} from '../firebase';
import { colors } from '@material-ui/core';

// See:
// https://medium.com/@uvictor/simple-firebase-authentication-with-next-js-using-hoc-higher-order-components-8e8931d25cfa
// https://nekorokkekun.hatenablog.com/entry/2019/09/25/000041#%E3%82%B5%E3%82%A4%E3%83%B3%E3%82%A4%E3%83%B3%E3%82%92%E3%81%97%E3%81%A6%E3%81%BF%E3%82%8B
// https://medium.com/javascript-scene/do-react-hooks-replace-higher-order-components-hocs-7ae4a08b7b58
const withAuth = (Component) => props => {
  const [status, setStatus] = useState("LOADING");

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if (authUser) {
        setStatus("SIGNED_IN");
      } else {
        router.push("/");
      }
    });
  }, [status]);

  function renderContent() {
    if (status == "LOADING") {
      return <h1>Loading ......</h1>;
    } else if (status == "SIGNED_IN") {
      return <Component { ...props } />;
    }
  }

  return (
    <>
      { renderContent() }
    </>
  );
};

export default withAuth;
