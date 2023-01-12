import { useState } from 'react';

const GroupedTeamMembers = ({ employees, selectedTeam, setTeam }) => {

    const [groupedEmployees, setGroupedData] = useState(groupTeamMembers());
    // groupTeamMembers will return the default value of the grouped employees array

    // will return default value of grouped employees array properties: team name, employee data/ team, and collapsed  
    // collapsed property will store the state of the list item for collapsable list returned from grouped members comp. ( basically clicking to expand or shrink list) 
    // function will trans. the list of employee objects stored in the employees array and group them into appro. teams 
    function groupTeamMembers() {
        var teams = [];

        var teamAMembers = employees.filter((employee) => employee.teamName === 'TeamA'); // returns Team A members
        var teamA = { team: 'TeamA', members: teamAMembers, collapsed: selectedTeam === "TeamA" ? false : true} //collapsed logic
        teams.push(teamA);

        var teamBMembers = employees.filter((employee) => employee.teamName === 'TeamB');
        var teamB = { team: 'TeamB', members: teamBMembers, collapsed: selectedTeam === "TeamB" ? false : true}
        teams.push(teamB);

        var teamCMembers = employees.filter((employee) => employee.teamName === 'TeamC');
        var teamC = { team: 'TeamC', members: teamCMembers, collapsed: selectedTeam === "TeamC" ? false : true}
        teams.push(teamC);

        var teamDMembers = employees.filter((employee) => employee.teamName === 'TeamD');
        var teamD = { team: 'TeamD', members: teamDMembers, collapsed: selectedTeam === "TeamD" ? false : true}
        teams.push(teamD);

        return teams;
    }

    // we use map func. to traverse the items in the grouped employees array
    // if team name matches the ID after click, collapse will toggle with correct info presented
    function handleTeamClick(event){
        var transformedroupData = groupedEmployees.map((groupedData) => groupedData.team === event.currentTarget.id 
                                                                ?{...groupedData, collapsed:!groupedData.collapsed}
                                                                :groupedData);
        setGroupedData(transformedroupData);
        setTeam(event.currentTarget.id);
    }

    return (
        <main className="container">
            {
                groupedEmployees.map((item) => {
                    return ( // team
                        <div key={item.team} className='card mt-2' style={{cursor:'pointer'}}>
                            <h4 id={item.team} className="card-header text-secondary bg-white" onClick={handleTeamClick}>
                                Team Name: {item.team}
                            </h4>

                            <div id={"collapse_" + item.team} className={item.collapsed === true?"collapse":""}>
                               <hr/>
                                {
                                    item.members.map(member => {
                                        return (
                                            <div className='mt-2'>
                                                <h5 className='card-title-mt-2'>
                                                    <span className='text-dark'>Full Name: {member.fullName}</span>
                                                </h5>
                                                <p>Designation: {member.designation}</p>
                                            </div>
                                        );
                                    })
                                }
                            </div>
                        </div>
                    )
                })
            }
        </main>
    )
}
export default GroupedTeamMembers;