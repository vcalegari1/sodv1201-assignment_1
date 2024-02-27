const dataSet = [   
    [ "Brielle Williamson", "Integration Specialist", "New York", "4804", "2012/12/02", "$372,000" ],
    [ "Herrod Chandler", "Sales Assistant", "San Francisco", "9608", "2012/08/06", "$137,500" ],
    [ "Rhona Davidson", "Integration Specialist", "Tokyo", "6200", "2010/10/14", "$327,900" ],
    [ "Colleen Hurst", "Javascript Developer", "San Francisco", "2360", "2009/09/15", "$205,500" ],
    [ "Sonya Frost", "Software Engineer", "Edinburgh", "1667", "2008/12/13", "$103,600" ],
    [ "Jena Gaines", "Office Manager", "London", "3814", "2008/12/19", "$90,560" ],
    [ "Quinn Flynn", "Support Lead", "Edinburgh", "9497", "2013/03/03", "$342,000" ],
    [ "Tiger Nixon", "System Architect", "Edinburgh", "5421", "2011/04/25", "$320,800" ],
    [ "Garrett Winters", "Accountant", "Tokyo", "8422", "2011/07/25", "$170,750" ],
    [ "Ashton Cox", "Junior Technical Author", "San Francisco", "1562", "2009/01/12", "$86,000" ],
    [ "Cedric Kelly", "Senior Javascript Developer", "Edinburgh", "6224", "2012/03/29", "$433,060" ],
    [ "Airi Satou", "Accountant", "Tokyo", "5407", "2008/11/28", "$162,700" ],
    [ "Charde Marshall", "Regional Director", "San Francisco", "6741", "2008/10/16", "$470,600" ],
    [ "Haley Kennedy", "Senior Marketing Designer", "London", "3597", "2012/12/18", "$313,500" ],
    [ "Tatyana Fitzpatrick", "Regional Director", "London", "1965", "2010/03/17", "$385,750" ],
    [ "Michael Silva", "Marketing Designer", "London", "1581", "2012/11/27", "$198,500" ],
    [ "Paul Byrd", "Chief Financial Officer (CFO)", "New York", "3059", "2010/06/09", "$725,000" ],
    [ "Gloria Little", "Systems Administrator", "New York", "1721", "2009/04/10", "$237,500" ],
    [ "Bradley Greer", "Software Engineer", "London", "2558", "2012/10/13", "$132,000" ],
    [ "Dai Rios", "Personnel Lead", "Edinburgh", "2290", "2012/09/26", "$217,500" ],
    [ "Jenette Caldwell", "Development Lead", "New York", "1937", "2011/09/03", "$345,000" ],
    [ "Yuri Berry", "Chief Marketing Officer (CMO)", "New York", "6154", "2009/06/25", "$675,000" ],
    [ "Caesar Vance", "Pre-Sales Support", "New York", "8330", "2011/12/12", "$106,450" ],
    [ "Doris Wilder", "Sales Assistant", "Sidney", "3023", "2010/09/20", "$85,600" ],
    [ "Angelica Ramos", "Chief Executive Officer (CEO)", "London", "5797", "2009/10/09", "$1,200,000" ],
    [ "Gavin Joyce", "Developer", "Edinburgh", "8822", "2010/12/22", "$92,575" ],
    [ "Jennifer Chang", "Regional Director", "Singapore", "9239", "2010/11/14", "$357,650" ],
    [ "Brenden Wagner", "Software Engineer", "San Francisco", "1314", "2011/06/07", "$206,850" ],
    [ "Fiona Green", "Chief Operating Officer (COO)", "San Francisco", "2947", "2010/03/11", "$850,000" ],
    [ "Shou Itou", "Regional Marketing", "Tokyo", "8899", "2011/08/14", "$163,000" ],
    [ "Michelle House", "Integration Specialist", "Sidney", "2769", "2011/06/02", "$95,400" ],
    [ "Suki Burks", "Developer", "London", "6832", "2009/10/22", "$114,500" ],
    [ "Prescott Bartlett", "Technical Author", "London", "3606", "2011/05/07", "$145,000" ],
    [ "Gavin Cortez", "Team Leader", "San Francisco", "2860", "2008/10/26", "$235,500" ],
    [ "Martena Mccray", "Post-Sales support", "Edinburgh", "8240", "2011/03/09", "$324,050" ],
    [ "Unity Butler", "Marketing Designer", "San Francisco", "5384", "2009/12/09", "$85,675" ]
];
  
  // Transform data into objects for better organization
  const staffData = dataSet.map(row => ({
    name: row[0],
    position: row[1],
    office: row[2],
    extn: row[3],
    startDate: row[4],
    salary: parseInt(row[5].replace(/[^\d]/g, '')) // Extract only numbers from salary, removing other unwanted symbols.
  }));
  
  // Function that will update the staff table display
  function updateStaffTable(dataToDisplay) {
    const staffTableBody = document.getElementById("staff-data");
    staffTableBody.innerHTML = "";
  
    dataToDisplay.forEach(staffMember => {
      const row = staffTableBody.insertRow();
      const nameCell = row.insertCell();
      const salaryCell = row.insertCell();
      const positionCell = row.insertCell();
      const officeCell = row.insertCell();
      const extnCell = row.insertCell();
      const startDateCell = row.insertCell();
  
      nameCell.textContent = staffMember.name;
      salaryCell.textContent = "$" + staffMember.salary.toLocaleString();
      positionCell.textContent = staffMember.position;
      officeCell.textContent = staffMember.office;
      extnCell.textContent = staffMember.extn;
      startDateCell.textContent = staffMember.startDate;
    });
  }
  
  // Function that will filter staff data and update the display
  function filterAndDisplayStaff() {
    const nameFilter = document.getElementById("name-filter").value.toLowerCase();
    const salaryFilter = parseInt(document.getElementById("salary-filter").value);
  
    const filteredData = staffData.filter(staffMember => {
      const matchesName = staffMember.name.toLowerCase().startsWith(nameFilter);
      const matchesSalary = !salaryFilter || staffMember.salary > salaryFilter;
      return matchesName && matchesSalary; // Apply both filters at same time
    });
  
    updateStaffTable(filteredData); 
  }
  
  // Initial display of the full staff list
  updateStaffTable(staffData);
  
  // Event listeners to trigger filtering when filter inputs change
  document.getElementById("name-filter").addEventListener("input", filterAndDisplayStaff);
  document.getElementById("salary-filter").addEventListener("input", filterAndDisplayStaff);
  
  