import Teams from './Teams';
import TeamMembers from './TeamMembers';

const Employees = ({employees, selectedTeam, handleEmployeeCardClick, handleTeamSelectionChange}) => {

    return (
        <main className="container">
            <div className="row justify-content-center mt-3 mb-3"> {/* Bootstrap Syntax/ centering */}
                <div className="col-6"> {/*Dropdown list */}
                    <Teams selectedTeam={selectedTeam} handleTeamSelectionChange={handleTeamSelectionChange} />
                </div>
            </div>
            <div className="row justify-content-center mt-3 mb-3"> 
                <div className="col-8"> {/* https://getbootstrap.com/docs/4.0/layout/grid/ */}
                    <div className="card-collection">
                        <TeamMembers employees={employees} 
                                        handleEmployeeCardClick={handleEmployeeCardClick}
                                        selectedTeam={selectedTeam} />
                    </div> 
                </div>
            </div>
        </main>
    )
}
export default Employees;