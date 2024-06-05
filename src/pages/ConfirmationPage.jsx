import { useAppContent } from "../context/AppContext";
import { useNavigate, Link } from "react-router-dom";
const ConfirmationPage = () => {
    const navigate = useNavigate();
    const {updateCarSelections, setCarData} = useAppContent();
    const handleReset = ()=> {
        setCarData(null);
        updateCarSelections({
            "hood": null,
            "front": null,
            "roof": null,
            "sides": null,
            "back": null
        })
    }
  return (
        <>
            <div className="container">
                <h1>Thanks for your purchase</h1>
                <p><Link className="btn btn-primary" onClick={handleReset} to="/">Back to Home</Link></p>
            </div>
            
        </>
    )
}

export default ConfirmationPage