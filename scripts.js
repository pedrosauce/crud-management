$(document).ready(function() {
    


    $("#btn").click(function() {
        var name = document.getElementById("name").value;
        var url = document.getElementById("url").value;
        var description = document.getElementById("description").value;
        var dataString = {"name":name,"url":url,"description":description};
        var serverData = JSON.stringify(dataString);

        if (name == '' || url == '' || description == '') {
            alert("You forgot something");
        }
        else {
           
            $.ajax({
                type: "POST",
                url: "api.php",
                data: {myData:serverData},
                success: function(){
                    alert('Database successfully updated');
                },
                error: function(e){
                    alert("upload unsuccessful");
                }
            });
        }
    });

    $("#sid").click(function() {
        var selectID = document.getElementById("selectedID").value;//selects the ID it wants to
        var jsonSID = {"ID":selectID};
        var jsonSelectID = JSON.stringify(jsonSID);

        alert("Program runs to here");
        if(selectID=="")
            alert("Please select an ID to find");
        else{
            //AJAX goes here
            $.ajax ({
               type:"POST",
                url:"viewData.php",
                data: {selectData: jsonSelectID},
                success: function(selectData){
                    var sID = selectData[0];
                    var date = selectData[1];
                    var name = selectData[2];
                    var url = selectData[3];
                    var desc = selectData[4];

                    $("#viewID").innerText(sID);
                },
                error: function(e){
                    alert("Didn't work, refresh and it should work");
                }

            });
        }

    });


});
