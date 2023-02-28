import "./App.css";
import Layout from "./components/layout/Layout";
import AboutMe from "./components/pages/AboutMe";
import ContactMe from "./components/pages/ContactMe";
import MyWork from "./components/pages/MyWork";
import TechStack from "./components/pages/TechStack";

function App() {
  return (
    <Layout>
      <AboutMe />
      <TechStack />
      <MyWork />
      <ContactMe />
    </Layout>
  );
}

export default App;
