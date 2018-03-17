 var nameVar = 'Ricardo';
 var nameVar = 'Andrew';
 console.log('nameVar', nameVar);

 let nameLet = 'Lucciano';
 //let nameLet = 'Fiorella'
 console.log('nameLet', nameLet);


 const nameConst = 'Alberto';
 //nameConst = 'Olarte';
 console.log('nameConst', nameConst);

 function getPetName() {
 	let petName = "Jack";
 	return petName;
 }

 const petName = getPetName();
 console.log(petName);

 //Block scoping

 var fullName = 'Luccardo Olarte';
 let firstName;

 if(fullName) {
 	firstName = fullName.split(" ")[0];
 	console.log(firstName);
 }

console.log(firstName);