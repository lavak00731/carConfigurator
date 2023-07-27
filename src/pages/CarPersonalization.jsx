import { useLocation } from 'react-router-dom';

export default function CarPersonalization() {
  let location = useLocation();
  console.log(location);
  return (
    <div>CarPersonalization</div>
  )
}
