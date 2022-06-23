import DepartmentList from "./departmentList";
import DoctorSearch from "./doctorSearch";
import {useState} from 'react';



function DepartmentORDoctor() {
    const [showDepart, setShowDepart] = useState(true);
    return (
        <div>
            <div className="dark-css p-3 departOrDoctor">
                
                <div className="btn-group light-css p-1 m-2 toggleDoctorDepart" role="group" aria-label="Basic example">
                    <button type="button" className="btn light-css" onClick={()=>{if(!showDepart) setShowDepart(true)}}>Departments</button>
                    <button type="button" className="btn dark-css" onClick={()=>{if(showDepart) setShowDepart(false)}}>Doctors</button>
                </div>
                
                <h2 className="p-2">{(showDepart) ? "Departments" : "Doctors"}</h2>


                {(showDepart) ? <DepartmentList /> : <DoctorSearch />}

            </div>
        </div>
    );
}
  
export default DepartmentORDoctor;


