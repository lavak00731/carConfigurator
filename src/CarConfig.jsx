import { Route, Routes, Outlet } from "react-router-dom";
import { AppProvider } from "./context/AppContext";
import CarPersonalization from "./pages/CarPersonalization";
import CarSelection from "./pages/CarSelection";

export const CarConfig = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <AppProvider>
            <Outlet />
          </AppProvider>
        }
      >
        <Route path="/" element={ <CarSelection/> } />
        <Route path="/:carId" element={ <CarPersonalization /> } />
      </Route>
    </Routes>
  );
};
