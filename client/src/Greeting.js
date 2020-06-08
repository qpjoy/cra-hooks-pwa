import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { GREETING } from "@/apollo/graphql/gql";

function Greeting() {
  const { loading, error, data } = useQuery(GREETING, {
    fetchPolicy: "network-only",
  });

  if (loading) return <p>Loading ...</p>;

  if (error) console.log(error);

  return <h1>Hello {JSON.stringify(data)}!</h1>;
}

export default Greeting;
