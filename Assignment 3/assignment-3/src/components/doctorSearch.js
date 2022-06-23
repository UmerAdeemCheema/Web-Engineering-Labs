import DepartmentCard from './departmentCard';
import React from 'react';
import doctors from "../data/doctors";
import { useState } from 'react';

var abcComponent = doctors.map((doctor, index) =>{
    return (
        <DepartmentCard imgURL={doctor.imgURL} title={doctor.title} detail={doctor.detail}/>
    );
})




const DoctorSearch = () => {
    const [doctorname, setDoctorName] = useState("");

    const [cardsComponent, setCardsComponent] = useState(abcComponent);

    async function onSearchChange (event) {
        setDoctorName(event.target.value);

    }

    function modifyCards(event){
        
        abcComponent = doctors.map((doctor, index) =>{
            var detail = doctor.detail.toLowerCase();
            var name = doctor.title.toLowerCase();
            var doc = doctorname.toLowerCase();
            if(detail.includes(doc)||name.includes(doc)){
                return <DepartmentCard imgURL={doctor.imgURL} title={doctor.title} detail={doctor.detail}/>
            }
            else {
                return null;
            }
        })
        setCardsComponent(abcComponent);
        
    }

	return(
		<div className='p-2 dark-css'>
		    <input className ='p-1 m-2 w-50' type='search' placeholder='search doctors' value={doctorname} onChange={onSearchChange} />
            <input className='btn light-css' value="Search" onClick={modifyCards}/>

            <div className="container-fluid dark-css">
                <br/>
                
                <div className="row row-cols-auto justify-content-around">
                    
                    {cardsComponent}

                </div>
                
            </div>
		</div>
	);
}

export default DoctorSearch;