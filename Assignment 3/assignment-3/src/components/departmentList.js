
import DepartmentCard from "./departmentCard";
import departs from "../data/departs";
import './components.css';

const cardsComponent = departs.map((depart, index) =>{
    return (
        <DepartmentCard imgURL={depart.imgURL} title={depart.title} detail={depart.detail}/>
    );
})
function DepartmentList() {
    return (

            <div className="container-fluid dark-css">
                <br/>
                
                <div className="row row-cols-auto justify-content-around">
                    
                    {cardsComponent}

                </div>
                
            </div>
    );
}
  
export default DepartmentList;