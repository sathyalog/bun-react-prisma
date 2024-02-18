import Navbar from "./pages/Navbar";
import { routes } from "./routes";
import { Theme, ThemePanel } from "@radix-ui/themes";
import "./theme-config.css";
function App() {
  return (
    <>
      <Theme accentColor="blue" grayColor="sand" radius="large" scaling="95%">
        <Navbar />
        {routes}
        <ThemePanel />
      </Theme>
    </>
  );
}

export default App;