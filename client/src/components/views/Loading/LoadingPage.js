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

const Loading = () => {
  return (
    <>
      {/* 이부분이 사라지면 헤더위치가 바뀜 */}
      <div style={{ fontSize: "0" }}>Loading</div>
      <div style={{ width: "100%" }}>
        <Helmet>
          <title>Loading... | 로딩...</title>
        </Helmet>

        <Title>
          <Spinner />
        </Title>
      </div>
    </>
  );
};

export default Loading;
