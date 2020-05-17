import React from 'react';
import router from 'next/router';
import {
  auth,
} from '../firebase';

// See:
// https://medium.com/@uvictor/simple-firebase-authentication-with-next-js-using-hoc-higher-order-components-8e8931d25cfa
// https://nekorokkekun.hatenablog.com/entry/2019/09/25/000041#%E3%82%B5%E3%82%A4%E3%83%B3%E3%82%A4%E3%83%B3%E3%82%92%E3%81%97%E3%81%A6%E3%81%BF%E3%82%8B
const withAuth = (Component) => {
  // TODO: Rewrite in function format.
  return (
    class extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          status: "LOADING"
        };
      }

      componentDidMount() {
        auth.onAuthStateChanged(authUser => {
          if (authUser) {
            this.setState({
              status: "SIGNED_IN"
            });
          } else {
            router.push("/");
          }
        });
      }

      renderContent() {
        const { status } = this.state;

        if (status == "LOADING") {
          return <h1>Loading ......</h1>;
        } else if (status == "SIGNED_IN") {
          return <Component { ...this.props } />;
        }
      }

      render() {
        return (
          <>
            {this.renderContent()}
          </>
        );
      }
    }
  );
};

export default withAuth;
