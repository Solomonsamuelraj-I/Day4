//create your own resume in JSON format

let myResume={
    "basics": {
      "name": "Solomon Samuelraj I",
      "email": "solomonsamuelraj@gamil.com",
      "phone": 9042838729,
      "degree": "B.Tech",
      "location": {
        "address": "No 14, PGP Nagar Second street",
        "postalCode": 600056,
        "city": "Chennai",
        "state": "Tamilnadu",
        "country": "India"
      },
     
    },
    "work": [
      {
        "company": "TCS",
        "position": "IT Analyst",
        "startDate": "2022-01-10",
        "endDate": "2024-03-11",
        "summary": "I work as an Computer operations team member and monitor the organizations devices and network",
      },
    ],
    "education": [
      {
        "institution": "Thiagarajar College Of Engineering",
        "department": "Mechatronics",
        "studyType": "fulltime",
        "batch end year": 2013,
        "gpa": 6.9,
      }
    ],
    "skills": [
      {
        "name": "HTML, css, javascript",
        "level": "beginer",
        
      }
    ],
    "languages": [
      {
        "language": "Tamil,Enlish",
      }
    ],
    "interests": [
      {
        "name": "Blogging, Video Editing & Youtube ",
      }
    ]
  }
  console.log(myResume);
  

  //2.For the above resume in  JSON iterate over all for loops (for, for in, for of, forEach)"
  
  var json = [{
    "id" : "Stud1", 
    "msg"   : "For the given JSON iterate over all for loops (for, for in, for of, forEach)",
    "task" : "zen portal task",
    "mail": "stud1@gmail.com"
},
{
    "id" : "stud2", 
    "msg"   : "For the given JSON iterate over all for loops (for, for in, for of, forEach)",
    "task" : "zen portal task",
    "mail": "stud2@gmail.com"
}];
//for loop
for(var i = 0; i < json.length; i++) {
    var obj = json[i];

    console.log(obj.id);
    console.log(obj.msg);
    console.log(obj.task);
    console.log(obj.mail);

}

//for In
for (var key in json) {
if (json.hasOwnProperty(key)) {
  console.log(json[key].id);
  console.log(json[key].msg);
 
}
}
//for Of
let text = "";
for (let x of json[key].id) {
 text += x; 
}
 console.log(text);

  