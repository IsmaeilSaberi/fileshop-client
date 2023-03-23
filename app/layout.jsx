import "../styles/globals.css";
import Header from "../components/header";

const RootLayout = ({ children }) => {
  return (
    <html lang="fa-IR">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
