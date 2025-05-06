import Layout from "../components/Layout";
import Hero from "../components/Hero";
import SeparatorLine from "../components/SeparatorLine";
import Project from "../components/Project";

const App = () => {
  return (
    <Layout>
      <Hero />
      <SeparatorLine />
      <Project title="Minutos Telecom" subtitle="Website completo da concepção ao frontend." />
    </Layout>
  );
};

export default App;