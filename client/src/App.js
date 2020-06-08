import React, { useEffect, useState } from "react";

import getApolloClient from "@/apollo/apolloClient";
import Container from "./Container";

export default function App() {
  const [client, setClient] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getApolloClient().then(client => {
      setClient(client);
      setLoading(false);
    });
  }, []);

  return <Container client={client} loading={loading} />;
}
