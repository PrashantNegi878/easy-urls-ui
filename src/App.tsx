import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/Home/Home";

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Header />
        <Home/>
        <Footer />
      </QueryClientProvider>
    </>
  );
}

export default App;
