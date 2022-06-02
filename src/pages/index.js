import React from "react";
import styled from "styled-components";
import { Container, Row, Col, Table } from "react-bootstrap";

import { Title, Button, Section, Box, Text, Input } from "../components/Core";

import PageWrapper from "../components/PageWrapper";
import imgBg from "../assets/image/jpeg/coming-soon-bg.jpg";

const BoxStyled = styled(Box)`
  background-image: url(${imgBg});
  min-height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Footer = styled(Box)`
  justify-content: flex-end;
`;

const SocialList = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  height: 100%;
  padding: 0;
  a {
    display: inline-block;
    color: #f7f7fb !important;
    font-size: 23px;
    transform: translateY(0);

    padding: 0 3px;
    margin: 0 12px;
    transition: all 0.4s ease-out;
    &:hover {
      transform: translateY(-3px);
      color: #f7f7fb !important;
    }
    &:visited {
      text-decoration: none;
    }
  }
`;

const ComingSoon = () => {
  return (
    <>
      <PageWrapper>
        <BoxStyled>
          <Box>
            <Container className="text-center">
              <Row className="justify-content-center">
                <Col lg="10" xl="8">
                  <Section>
                    <div>
                      <Title color="light">
                        Find and follow your favorite Solana NFT collection
                      </Title>
                    </div>
                    <div className="mt-5">
                      <form
                        css={`
                          margin: 0 auto;
                          max-width: 813px;
                        `}
                      >
                        <Box my={3}>
                          <Input
                            type="text"
                            placeholder="NFT Name"
                            className="text-center"
                          />
                        </Box>
                        <Box mb={3}>
                          <Button width="100%">Search</Button>
                        </Box>
                      </form>
                    </div>
                  </Section>
                </Col>
              </Row>
            </Container>
          </Box>
          <Box>
            <hr></hr>
            <Container className="text-center">
              <div className="mt-5">
                <Text color="light">
                  Search results
                </Text>
              </div>
              <Table striped border hover>
                <thead>
                  <tr>
                    <td>Name</td>
                    <td>Floor</td>
                    <td>24h Avg</td>
                    <td>Volume</td>
                    <td>ATL</td>
                    <td>ATH</td>
                    <td>Watch</td>
                    <td>Buy</td>
                  </tr>
                </thead>
                <tbody>
                </tbody>
              </Table>
            </Container>
          </Box>
          <Box>
            <hr></hr>
            <Container className="text-center">
              <div className="mt-5">
                <Text color="light">
                  My tracked NFTs
                </Text>
              </div>
              <Table striped border hover>
                <thead>
                  <tr>
                    <td>Name</td>
                    <td>Floor</td>
                    <td>24h Avg</td>
                    <td>Volume</td>
                    <td>ATL</td>
                    <td>ATH</td>
                    <td>Watch</td>
                    <td>Buy</td>
                  </tr>
                </thead>
                <tbody>
                </tbody>
              </Table>
            </Container>
          </Box>

          <Footer pb="70px">
            <Container>
              <SocialList>
                <li>
                  <a href="/" target="_blank">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="/" target="_blank">
                    <i className="fab fa-discord"></i>
                  </a>
                </li>
              </SocialList>
            </Container>
          </Footer>
        </BoxStyled>
      </PageWrapper>
    </>
  );
};
export default ComingSoon;
