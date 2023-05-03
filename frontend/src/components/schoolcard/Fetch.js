import React, { useState } from 'react'
const dataFile=require('./data.json')
var fs = require('fs');
const Fetch = () => {
    const [schools,setSchools] = useState([])
    useEffect(() => {
        axios
          .get(`http://localhost:5000/api/add/listSchool`)
          .then((response) => {
            // console.log(response.data[1].stadium_owned[0].stadium_name);
            setSchools(response.data);
          });
      }, []);
      const ref = useRef(null);

      

// fs.writeFile("data.json", schools, function(err) {
//     if (err) {
//         console.log(err);
//     }
// });

fs.readFileSync(JSON.stringify(dataFile))
fs.writeFileSync('data.json', 'schools');
  return (
    <div>
      
    </div>
  )
}

export default Fetch
