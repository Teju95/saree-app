import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Layout.css";
export default function Layout({ children }) {
  return (
    <div className="container-fluid">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
