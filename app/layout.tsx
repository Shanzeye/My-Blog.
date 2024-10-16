
import "./globals.css";
import Transition from "./components/transition";
import Header from "./components/header";
import Footer from "./components/footer";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
         
         <Header/>
         
         <Transition> {children}  </Transition>
         
        <Footer />
      </body>
      
    </html>
    
  );
}
