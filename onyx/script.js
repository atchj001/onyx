
fetch("https://run.mocky.io/v3/6a13fe7e-840c-4d82-b58f-c737139f0e55")
.then(function(response){
	return response.json();//expecting a json file
})
.then(function(data){// this is to fetch the data
	let placeholder = document.querySelector("#data-output");//getting access to tables body element
	let out = "";// this variable will hold all of the products at the end
	for(let product of data){
        // appending every product to the "out" variable
        // backticks allows me to write regular html in js
		out += `
			<tr> 
		
				<td>${product.turbine}</td>
				<td>${product.level}</td>
				<td>${product.count}</td>
			
			</tr
		`// passing in the turbine, level and count into table
        ;
	}

	placeholder.innerHTML = out;// populating the table's body element with json data.
});