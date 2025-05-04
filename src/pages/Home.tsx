import Layout from "../components/Layout";
import Hero from "../components/Hero";
import SeparatorLine from "../components/SeparatorLine";
import SkillCards from "../components/SkillCards";

const App = () => {
  return (
    <Layout>
      <Hero />
      <SeparatorLine />
      <SkillCards />
    </Layout>
  );
};

export default App;