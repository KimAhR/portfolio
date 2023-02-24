import { Children } from "react";
import "./App.css";
import { ThemeProvider } from "styled-components";
import { theme } from "./style";
import Header from "./layouts/main/header/Header";
import Main from "./layouts/main/Main";
import Footer from "./layouts/main/footer/Footer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Main />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
