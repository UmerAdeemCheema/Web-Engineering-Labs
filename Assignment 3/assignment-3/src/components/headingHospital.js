import './components.css';

function HeadingHospital(props) {
    return (
        <div className="light-css p-3">
            <h2>THE HOSPITAL</h2>
            <br/><p>Serving & treating everyone from 2001.</p>
            <br/>
            <button className="btn btn-outline p-3 m-2">Book an Appointment</button>
            <button className="btn btn-outline p-3 m-2" onClick={()=>props.setButtonTrigger(true)}>Login</button>
        </div>
    );
}
  
export default HeadingHospital;