import Layout from "../components/Layout";
import Hero from "../components/Hero";
import SeparatorLine from "../components/SeparatorLine";
import ProjectsSection from "../components/ProjectsSection";
import AProposSection from "../components/AProposSection";
import SkillsSection from "../components/SkillsSection";

const App = () => {
  return (
    <Layout>
      <Hero />
      <SeparatorLine />
      <ProjectsSection />
      <SeparatorLine />
      <AProposSection />
      <SeparatorLine />
      <SkillsSection />
      <SeparatorLine />

    </Layout>
  );
};

export default App;