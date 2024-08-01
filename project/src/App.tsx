import { BrowserRouter } from "react-router-dom";
import { QueryClientProvider } from "react-query";
import { queryClient } from "./service/queryCliente";
import AppRoutes from "./routes";
import MainContainer from "./containers/MainContainer";
import { WebViewProvider } from "./contexts/WebViewsContext";
import { ToastProvider } from "./contexts/ToastContext";

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <WebViewProvider>
          <MainContainer>
            <ToastProvider>
              <AppRoutes />
            </ToastProvider>
          </MainContainer>
        </WebViewProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
