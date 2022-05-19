import "./App.css";
import { useEffect } from "react";
import { useRoutes } from "react-router-dom"
import { ScrollToTop, Toast, Navbar, Modal } from "components"
import { routes } from "config"
import { useModal } from "hooks/selectors";

function App() {
  const routeElement = useRoutes(routes)
  const { isShow } = useModal();

  return (
    <>
      <ScrollToTop />
      <Toast />
      <Modal />
      <Navbar />
      <div className="App bg-white">
        {routeElement}
      </div>
    </>
  );
}

export default App;
