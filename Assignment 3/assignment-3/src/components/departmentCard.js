import './components.css';

function DepartmentCard(props) {
    return (
        <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6 col-sm-8 mb-4 mb-lg-0  m-2 p-2">
            <div className="card rounded light-css">
                <div className="row">
                    <div className="col-md-6">
                        <img src={`${props.imgURL}`} className="img-thumbnail rounded light-css border-0 h-100" alt="..."/>
                    </div>
                    <div className="col-md-6">
                        <div className="card-body">
                            <h5 className="card-title">{props.title}</h5>
                            <p className="card-text">{props.detail}</p>
                            <p className="card-text"><button className="btn btn-outline p-2 m-2">Learn More</button></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
  
export default DepartmentCard;