import React from "react";
import { Spinner } from "./Spinner";
import styled from "styled-components";
import { Helmet } from "react-helmet";

const Title = styled.h1`
  font-size: 64px;
  font-weight: bold;
  margin: 100px;
  height: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
`;

// const head = styled.div`
//   font-size: 64px;
//   font-weight: bold;
//   margin: 100px;
//   height: 80px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   font-size: 2rem;
// `;

const Loading = () => {
  return (
    <div style={{ width: "100%" }}>
      <Helmet>
        <title>Loading... | 로딩...</title>
      </Helmet>
      {/* <div>Loading...</div> */}

      <Title>
        <Spinner />
      </Title>
    </div>
  );
};

export default Loading;
