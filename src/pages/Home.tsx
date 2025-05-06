import Layout from "../components/Layout";
import Hero from "../components/Hero";
import SeparatorLine from "../components/SeparatorLine";
import ProjectsSection from "../components/ProjectsSection";

const App = () => {
  return (
    <Layout>
      <Hero />
      <SeparatorLine />
      <ProjectsSection />
    </Layout>
  );
};

export default App;