import Header from "./Header";
// import CartOverview from "../features/cart/CartOverview";
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";
import Footer from "./Footer";

const AppLayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      {isLoading && <Loader />}
      <Header />

      <div className="overflow-y-scroll">
        <main className="max-w-6xl mx-auto">
          {/* content */}
          <Outlet />
        </main>
      </div>
      {/* <CartOverview /> */}
      <Footer />
    </div>
  );
};

export default AppLayout;
