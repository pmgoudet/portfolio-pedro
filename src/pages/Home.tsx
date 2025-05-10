import Layout from "../components/Layout";
import Hero from "../components/Hero";
import SeparatorLine from "../components/SeparatorLine";
import ProjectsSection from "../components/ProjectsSection";
import AProposSection from "../components/AProposSection";
import SkillsSection from "../components/SkillsSection";
import ContactSection from "../components/ContactSection";

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
      <ContactSection />
    </Layout>
  );
};

export default App;