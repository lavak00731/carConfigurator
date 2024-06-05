import { useAppContent } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
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
        navigate("/")
    }
  return (
        <>
            <div className="container">
                <h1>Thanks for your purchase</h1>
                <p><button className="btn btn-primary" onClick={handleReset}>Back to Home</button></p>
            </div>
            
        </>
    )
}

export default ConfirmationPage