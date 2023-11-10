
var API_ENDPOINT = "https://aykmmb80hk.execute-api.us-east-1.amazonaws.com/deve"
//GET REQUEST
document.getElementById("createAccount").onclick = function(){
  var inputData = {
    "userId":$('#userid').val(),
        "userFirstName":$('#fname').val(),
        "userLastName":$('#lname').val(),
    "userEmailId":$('#email').val() ,
	"userPassword":$('#pwd').val(),"userMobileNumber":$('#mnumber').val()
		};
  $.ajax({
        url: API_ENDPOINT,
        type: 'POST',
        data:  JSON.stringify(inputData)  ,
        contentType: 'application/json; charset=utf-8',
        success: function (response) {
          document.getElementById("UserAccountCreated").innerHTML = "User Account registered successfully!";
        },
        error: function () {
            alert("error");
        }
    });
}
//GET REQUEST
document.getElementById("getusers").onclick = function(){  
  $.ajax({
        url: API_ENDPOINT,
        type: 'GET',
         contentType: 'application/json; charset=utf-8',
        success: function (response) {
          $('#UserProfile tr').slice(1).remove();
          jQuery.each(response, function(i,data) {          
            $("#UserProfile").append("<tr> \
                <td>" + data['userId'] + "</td> \
                <td>" + data['userFirstName'] + "</td> \
                <td>" + data['userLastName'] + "</td> \
                <td>" + data['userEmailId'] + "</td> \
				<td>" + data['userPassword'] + "</td> \
				<td>" + data['userMobileNumber'] + "</td> \
                </tr>");
          });
        },
        error: function () {
            alert("error");
        }
    });
}