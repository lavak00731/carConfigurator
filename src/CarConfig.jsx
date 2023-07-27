import {Route, Routes} from 'react-router-dom';
import CarSelection from './pages/CarSelection';
import CarPersonalization from './pages/CarPersonalization';


export const CarConfig = () => { 
  return (
      <Routes>
        <Route path="/" element={<CarSelection />}/>
        <Route path="/:carId" element={<CarPersonalization /> }/>
      </Routes>
  )
}
