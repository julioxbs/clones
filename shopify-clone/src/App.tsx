import { ChakraProvider } from '@chakra-ui/react'
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { ThemeContext } from "./context/ThemeContext";
import { Home } from "./pages/Home";

export function App() {
  return (
    <ThemeContext>
      <ChakraProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </ChakraProvider>
    </ThemeContext>
  );
}