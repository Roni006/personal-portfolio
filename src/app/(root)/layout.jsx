import Navbar from "@/Components/Navbar";

export const metadata = {
  title: "Home page",
  description: "This is home page of my personal portfolio website",
};
const layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default layout;
