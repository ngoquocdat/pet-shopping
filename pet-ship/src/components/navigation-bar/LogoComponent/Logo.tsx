import { useNavigate } from "react-router-dom";
import "./styles.scss" 

export const Logo = () => {
  const navigate = useNavigate();
  return (
    <div className="logo-animation" onClick={() => navigate('/')}>
        <div className="fancy" />
        <img className="logo" src={process.env.PUBLIC_URL + '/assets/car-logo.svg'} width={120}/>
    </div>
  )
}
