import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Main from "./components/Main/Main";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

function App() {
  const queryClient = new QueryClient()
  return (
    <>
    <QueryClientProvider client={queryClient}>
      <Header />
      <Main />
      <Footer />
      </QueryClientProvider>
    </>
  );
}

export default App;
