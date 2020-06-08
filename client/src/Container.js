import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";

import Loader from "@/components/loading/Loading";
import Router from "@/routers/index";
import useStyles from "@/assets/css/styles.css";
import Greeting from "./Greeting";

export default function App({ client, loading }) {
  if (loading) {
    return (
      <div className={useStyles.h1}>
        <Loader />
      </div>
    );
  }

  return (
    <ApolloProvider client={client}>
      <Greeting />
      <Router />
    </ApolloProvider>
  );
}
