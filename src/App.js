import "./App.css";
import { useRoutes } from "react-router-dom"
import { ScrollToTop, Toast, Navbar } from "components"
import { routes } from "config"
function App() {
  const routeElement = useRoutes(routes)
  return (
    <>
      <ScrollToTop />
      <Toast />
      <Navbar />
      <div className="App bg-white">
        {routeElement}
      </div>
    </>
  );
}

export default App;
