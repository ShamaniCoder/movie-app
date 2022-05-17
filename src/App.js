import ContextProvider from "./context/Context";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <div>
      <ContextProvider>
        <AppRouter />
      </ContextProvider>
    </div>
  );
}

export default App;
