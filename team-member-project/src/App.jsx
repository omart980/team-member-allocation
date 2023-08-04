import * as React from 'react';
import './App.css';
import Header from './Header'; // reference from jsx
//import Content from './Content'; // reference from jsx
import Footer from './Footer'; // reference from jsx
import Employees from './Employees';
import GroupedTeamMembers from './GroupedTeamMembers';
import { useState, useEffect } from "react"; // react needs to track [] of employ.
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // components
import Nav from './Nav';
import NotFound from './NotFound';

function App() {  
  const [selectedTeam, setTeam ] = useState(JSON.parse(localStorage.getItem('selectedTeam')) || "TeamB");
  const [employees, setEmployees] = useState(JSON.parse(localStorage.getItem('employeeList')) || [{ // ^- value passed in from local storage or default (short circuit evaluation)
      id: 1,
      fullName: "Bob Jones",
      designation: "JavaScript Developer",
      gender: "male",
      teamName: "TeamA"
    },
    {
      id: 2,
      fullName: "Jill Bailey",
      designation: "Node Developer",
      gender: "female",
      teamName: "TeamA"
    },
    {
      id: 3,
      fullName: "Gail Sheppard",
      designation: "Java Developer",
      gender: "female",
      teamName: "TeamA"
    },
    {
      id: 4,
      fullName: "Sam Reynolds",
      designation: "React Developer",
      gender: "male",
      teamName: "TeamB"
    },
    {
      id: 5,
      fullName: "David Henry",
      designation: "DotNet Developer",
      gender: "male",
      teamName: "TeamB"
    },
    {
      id: 6,
      fullName: "Sarah Blake",
      designation: "SQL Server DBA",
      gender: "female",
      teamName: "TeamB"
    },
    {
      id: 7,
      fullName: "James Bennet",
      designation: "Angular Developer",
      gender: "male",
      teamName: "TeamC"
    },
    {
      id: 8,
      fullName: "Jessica Faye",
      designation: "API Developer",
      gender: "female",
      teamName: "TeamC"
    },
    {
      id: 9,
      fullName: "Lita Stone",
      designation: "C++ Developer",
      gender: "female",
      teamName: "TeamC"
    },
    {
      id: 10,
      fullName: "Daniel Young",
      designation: "Python Developer",
      gender: "male",
      teamName: "TeamD"
    },
    {
      id: 11,
      fullName: "Adrian Jacobs",
      designation: "Vue Developer",
      gender: "male",
      teamName: "TeamD"
    },
    {
      id: 12,
      fullName: "Devin Monroe",
      designation: "Graphic Designer",
      gender: "male",
      teamName: "TeamD"
  }]);

useEffect(() => { //whe state changes, updating the array in storage
    localStorage.setItem('employeeList', JSON.stringify(employees));
}, [employees]); // [] means this func. will work when it loads

useEffect(() => { //whe state changes, updating the array in storage
  localStorage.setItem('selectedTeam', JSON.stringify(selectedTeam));
}, [selectedTeam]);

  function handleTeamSelectionChange(event){ 
      setTeam(event.target.value); // this is to change the state and then rerendered
  }
  
  function handleEmployeeCardClick(event){ //method to add/remove a card from selected Team; toggles shadow effects upon selection below
      const transformedArray = employees.map((employee) => employee.id === parseInt(event.currentTarget.id)
                              ?(employee.teamName) === selectedTeam
                              ?{...employee, teamName:''}:{...employee, teamName: selectedTeam}:employee); 
      setEmployees(transformedArray)
  }

  return (
    <Router> {/**prop drilling or props*/}
      <Nav />
      <Header selectedTeam={selectedTeam}
              teamMemberCount={employees.filter((employee) => employee.teamName === selectedTeam).length} />
      <Routes>
        <Route path="/team-member-allocation" /**each component will have its own root component, search this (1:14:59) */
              element={<Employees employees={employees}
                  selectedTeam={selectedTeam}
                  handleEmployeeCardClick={handleEmployeeCardClick}
                  handleTeamSelectionChange={handleTeamSelectionChange} />} >
        </Route> {/*after /, this path will render this info: header, GroupedTeamMebers, and Footer */}
        <Route path='/GroupedTeamMembers' element={<GroupedTeamMembers employees={employees} 
                                                                        selectedTeam={selectedTeam} 
                                                                        setTeam={setTeam} />} >
        </Route> {/**Wild card; here will catch errors for invalid paths */}
        <Route path="*" element={<NotFound />}> {/**will set element to not found property */}
        </Route>
      </Routes>
      <Footer /> {/**check one by one when tryiing to figure out the error */}
    </Router>
  );
}

export default App
