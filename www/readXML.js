// File: readXML.js

// Start function when DOM has completely loaded 
$(document).ready(function(){ 

	// Open the students.xml file
	$.get("http://www.w3schools.com/dom/books.xml",{},function(xml){
      	
		// Build an HTML string
		myHTMLOutput = '';
	 	myHTMLOutput += '<table width="98%" border="1" cellpadding="0" cellspacing="0">';
	  	myHTMLOutput += '<th>Name</th><th>Age</th><th>Phone</th><th>SSN</th>';
	  	
		// Run the function for each student tag in the XML file
		$('book',xml).each(function(i) {
			studentName = $(this).find("title").text();
			studentAge = $(this).find("author").text();
			studentPhone = $(this).find("year").text();
			studentSSN = $(this).find("price").text();
			studentPost = $(this).find("title").attr("post"); 
			
			// Build row HTML data and store in string
			mydata = BuildStudentHTML(studentName,studentAge,studentPhone,studentSSN,studentPost);
			myHTMLOutput = myHTMLOutput + mydata;
		});
		myHTMLOutput += '</table>';
		
		// Update the DIV called Content Area with the HTML string
		$("#ContentArea").append(myHTMLOutput);
	});
});
 
 
 
 function BuildStudentHTML(studentName,studentAge,studentPhone,studentSSN,studentSE){
	
	// Check to see if their is a "post" attribute in the name field
	if ((studentPost) != undefined){
		studentPostHTML = "<strong>(" + studentPost + ")</strong>";
	}
	else
	{
		studentPostHTML = "";
	}
	
	// Build HTML string and return
	output = '';
	output += '<tr>';
	output += '<td>'+ studentName + studentPostHTML + '</td>';
	output += '<td>'+ studentAge +'</td>';
	output += '<td>'+ studentPhone +'</td>';
	output += '<td>'+ studentSSN +'</td>';
	output += '</tr>';
	return output;
}
	 