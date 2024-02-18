export function Validate(){
    let uid = document.getElementById("uid").value.toUpperCase()
    if((uid == null || uid == "") || !(uid.substring(0,3) === "STD" || uid.substring(0,3) === "ADM" || uid.substring(0,3) === "FAC")){
        console.log(uid.substring(0,3))
        alert("Enter your Unique ID Pproperly")
        document.getElementById("uid").focus();
        return -1;
    }
    else
    console.log("sapna")

    if(document.getElementById("fn").value == null || document.getElementById("fn").value == ""){

        alert("Enter your First Name")
        document.getElementById("fn").focus();
        return;

    }

    if(document.getElementById("ln").value == null || document.getElementById("ln").value == ""){

        alert("Enter your Last Name")
        document.getElementById("ln").focus();
        return;

    }

    if(document.getElementById("dob").value == null || document.getElementById("dob").value == ""){

        alert("Select your D.O.B")
        document.getElementById("dob").focus();
        return;

    }

    // if(document.getElementById("roll").value == null || document.getElementById("roll").value == ""){
    //     alert("Enter your Roll No.")
    //     document.getElementById("roll").focus();
    //     return;
    // }

    if(document.getElementById("phone").value === null || document.getElementById("phone").value === ""){
        alert("Enter your Phone No.")
        document.getElementById("phone").focus();
        return;

    }

}