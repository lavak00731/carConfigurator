import { useFetch } from './../service/useFetch';
import  CarpersonalizationView from './CarPersonalizationView';
import './../styles/personalization.css';

export default function CarPersonalization() {
  const { data, isLoading } = useFetch('http://localhost:5173/api/carmodel');
  if(isLoading) {
    return (
      <p role="alert">Loading</p>
    )
  }
  
  return (
    <main className="container">
      <CarpersonalizationView data={ data } />
    </main>
    
  )
}
