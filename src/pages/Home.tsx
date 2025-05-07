import Layout from "../components/Layout";
import Hero from "../components/Hero";
import SeparatorLine from "../components/SeparatorLine";
import ProjectsSection from "../components/ProjectsSection";
import AProposSection from "../components/aProposSection";

const App = () => {
  return (
    <Layout>
      <Hero />
      <SeparatorLine />
      <ProjectsSection />
      <SeparatorLine />
      <AProposSection />
    </Layout>
  );
};

export default App;