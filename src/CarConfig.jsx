import { Route, Routes, Outlet } from "react-router-dom";
import { AppProvider } from "./context/AppContext";
import CarPersonalization from "./pages/CarPersonalization";
import CarSelection from "./pages/CarSelection";
import PreviewSelection from "./pages/PreviewSelection";
import ConfirmationPage from "./pages/ConfirmationPage";

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
        <Route path="/preview" element={ <PreviewSelection />  } />
        <Route path="/confirmation" element={ <ConfirmationPage />  } />
      </Route>
    </Routes>
  );
};
