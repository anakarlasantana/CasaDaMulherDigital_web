import { BrowserRouter} from "react-router-dom";
import { QueryClientProvider } from "react-query";
import { queryClient } from "./service/queryCliente";
import AppRoutes from "./routes";

function App() {

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
      <AppRoutes />
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
