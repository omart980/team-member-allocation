
import femaleProfile from "./images/femaleProfile.jpg";
import maleProfile from "./images/maleProfile.jpg";

const Employees = ({employees, selectedTeam, handleCardClick, handleTeamSelectionChange}) => {

    return (
        <main className="container">
            <div className="row justify-content-center mt-3 mb-3"> {/* Bootstrap Syntax/ centering */}
                <div className="col-6"> {/*Dropdown list */}
                    <select className="form-select form-select-lg" value={selectedTeam} onChange={handleTeamSelectionChange}> {/* useState, default B */}
                        <option value="TeamA">TeamA</option>
                        <option value="TeamB">TeamB</option>
                        <option value="TeamC">TeamC</option>
                        <option value="TeamD">TeamD</option>
                    </select>
                </div>
                <div className="col-8"> {/* https://getbootstrap.com/docs/4.0/layout/grid/ */}
                    <div className="card-collection">
                        { /**pay attentioon to the strucuture here */
                        employees.map((employee) => (  /* mapping  and rendering a card/ include key in every list*/
                            <div key={employee.id} id={employee.id} className={(employee.teamName === selectedTeam ? 'card m-2 standout':'card m-2')} style={{cursor: "pointer"}} onClick={handleCardClick}> {/* {} for jsx/ javascript used for style*/}
                            {/*ternary operator for localizing gender/  ^-toggling effect, the effect or adding or removing box effect using standout class*/}
                                {(employee.gender === 'male') ? <img src={maleProfile} alt="Male Profile" className="card-img-top"/>
                                                             : <img src={femaleProfile} alt="Female Profile"  className="card-img-top"/>}

                                <div className="card-body">
                                    <h5 className="card-title">Full Name: {employee.fullName}</h5>
                                    <p className="card-text"><b>Designation:</b> {employee.designation}</p>
                                </div>
                            </div> 
                        ))
                        }  
                    </div> 
                </div>
            </div>
        </main>
    )
}
export default Employees