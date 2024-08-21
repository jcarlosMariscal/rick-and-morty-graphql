import { Outlet } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { ApolloProvider } from "@apollo/client";
import client from "./apollo/client";
import { AppProvider } from "./context/AppContext";
import { Toaster } from "sonner";

export const App = () => {
  return (
    <ApolloProvider client={client}>
      <AppProvider>
        <Header />
        <main className="main">
          <Outlet />
        </main>
        <Toaster richColors />
      </AppProvider>
    </ApolloProvider>
  );
};
