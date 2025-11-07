import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Layout.css";
export default function Layout({ children }) {
  return (
    <div className="container-fluid p-0">
      <Header />
      <main className="mb-3">{children}</main>
      <Footer />
    </div>
  );
}
