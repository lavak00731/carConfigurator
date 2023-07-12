import {Route, Routes} from 'react';
import { CarSelection } from './pages/CarSelection';
import CarPersonalization from './pages/CarPersonalization';


export const CarConfig = () => { 
  console.log('entro')
  return (

      <Routes>
        <Route path="/" element={<CarSelection />}/>
        <Route path="/:carId" element={<CarPersonalization/> }/>
      </Routes>

  )
}
