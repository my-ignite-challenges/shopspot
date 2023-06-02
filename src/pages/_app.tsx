import type { AppProps } from "next/app";
import Image from "next/image";

import { globalStyles } from "../styles/global";
import { Container, Header } from "../styles/pages/app";

import logo from "../assets/logo.svg";

export default function App({ Component, pageProps }: AppProps) {
  globalStyles();
  return (
    <Container>
      <Header>
        <Image src={logo} alt="Logo shopspot" />
      </Header>
      <Component {...pageProps} />
    </Container>
  );
}
