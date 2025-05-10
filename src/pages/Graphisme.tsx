import Layout from "../components/Layout";
import img from "../assets/img/construction.png"

function Graphisme() {
  return (
    <Layout>
      <img src={img} alt="Cette page est en cours de construction" />
    </Layout>
  )
}

export default Graphisme;