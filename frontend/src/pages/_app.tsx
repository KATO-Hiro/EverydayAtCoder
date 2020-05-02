import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import {
  AppProps,
} from 'next/app';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Dashboard from '../components/dashboard/Dashboard';
import {
  responsiveFontSizes,
  createMuiTheme
} from '@material-ui/core/styles';

// See:
// https://nextjs.org/docs/advanced-features/custom-app
// https://github.com/mui-org/material-ui/blob/master/examples/nextjs/pages/_app.js
// https://ajonp.com/courses/nextjs9/nextjs-using-materialui-and-firebase-materialui
const theme = responsiveFontSizes(createMuiTheme());

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');

    // HACK: Unknown if it follows the ideom of TypeScript.
    // Object is possibly 'null' in error message.
    // See:
    // https://github.com/converge-app/converge-spa/blob/be7923676089335ba1f2bc339ac3038e16a56ca6/pages/_app.tsx
    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>Everyday AtCoder</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Dashboard>
          <Component {...pageProps} />
        </Dashboard>
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
