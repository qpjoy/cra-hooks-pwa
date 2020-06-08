import React, { useState, useEffect } from "react";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloProvider, useQuery } from "@apollo/react-hooks";
import { persistCache } from "apollo-cache-persist";

import Routers from "./routers";

import gql from "graphql-tag";

const GET_GREETING = gql`
  query Hello {
    hello
  }
`;

function Hello() {
  const { loading, error, data } = useQuery(GET_GREETING);

  console.log(error, data);

  if (loading) return <p>Loading ...</p>;

  return <h1>Hello !</h1>;
}

function App() {
  const [client, setClient] = useState(undefined);

  useEffect(() => {
    const cache = new InMemoryCache({});
    const client = new ApolloClient({
      cache,
      link: "localhost:8888/graphql",
    });
    const initData = {
      a: "b",
    };

    cache.writeData({ data: initData });
    persistCache({ cache, storage: window.localStorage }).then(() => {
      client.onResetStore(async () => cache.writeData({ data: initData }));
      setClient(client);
    });

    return () => {};
  }, []);

  return (
    <ApolloProvider client={client}>
      <Hello client={client} />
      <Routers />
    </ApolloProvider>
  );
}

export default App;
