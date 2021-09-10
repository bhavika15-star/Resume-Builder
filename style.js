
//Adding new Work experience Field
function addNewWEField() {
    //alert("Working");
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",2);
    newNode.setAttribute("placeholder","Enter here")

    let weOb=document.getElementById("we");
    let weAddButtonOb=document.getElementById("weAddButton");

    weOb.insertBefore(newNode,weAddButtonOb);
}

//Adding new Academic-qualification Field
function addNewAQField(){
    //alert("Working");
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("eqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",2);
    newNode.setAttribute("placeholder","Enter here")

    let aqOb=document.getElementById("aq");
    let aqAddButtonOb=document.getElementById("aqAddButton");

    aqOb.insertBefore(newNode,aqAddButtonOb);

}

//Adding new Skills Field
function addNewSKField(){
    //alert("Working");
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("skField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",1);
    newNode.setAttribute("placeholder","Enter here")

    let skOb=document.getElementById("sk");
    let skAddButtonOb=document.getElementById("skAddButton");

    skOb.insertBefore(newNode,skAddButtonOb);

}

//Adding new training Field
function addNewTRField(){
    //alert("Working");
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("trField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",2);
    newNode.setAttribute("placeholder","Enter here")

    let trOb=document.getElementById("tr");
    let trAddButtonOb=document.getElementById("trAddButton");

    trOb.insertBefore(newNode,trAddButtonOb);

}

//generating CV//

function generateCV()
{
    //name
    //console.log("generating CV");
    let nameField=document.getElementById("nameField").value;

    let nameT1=document.getElementById('nameT1');
    nameT1.innerHTML=nameField;

    document.getElementById('nameT2').innerHTML=nameField;

    //contact
    document.getElementById("contactT").innerHTML=document.getElementById("contactField").value;

    //email
    document.getElementById("emailT").innerHTML=document.getElementById("emailField").value;

    //address
    document.getElementById("addressT").innerHTML=document.getElementById("addressField").value;

    //links
    document.getElementById("hackerT").innerHTML=document.getElementById("fbField").value;
    document.getElementById("linkT").innerHTML=document.getElementById("linkedinField").value;
    document.getElementById("gitT").innerHTML=document.getElementById("githubField").value;

    //objective
    document.getElementById("objectiveT").innerHTML=document.getElementById("objectiveField").value;

    //work-experience
    let wes=document.getElementsByClassName("weField");
    let str="";
    for(let e of wes){
        str=str + `<li> ${e.value} </li>`;
    }
    document.getElementById("weT").innerHTML=str;

    //Academic-Qualification
    let aqs=document.getElementsByClassName("eqField");
    let str1="";
    for(let e of aqs){
        str1+= `<li> ${e.value} </li>`;
    }
    document.getElementById("aqT").innerHTML=str1;

    //Skills
    let Ss=document.getElementsByClassName("skField");
    let str2="";
    for(let e of Ss){
        str2+= `<li> ${e.value} </li>`;
    }
    document.getElementById("sT").innerHTML=str2;

    //Training
    let Ts=document.getElementsByClassName("trField");
    let str3="";
    for(let e of Ts){
        str3+= `<li> ${e.value} </li>`;
    }
    document.getElementById("tT").innerHTML=str3;

    //Updating Image
    let file=document.getElementById('imgField').files[0]
    console.log(file);
    let reader=new FileReader()
    reader.readAsDataURL(file);
    console.log(reader.result);

    //Setting Image
    reader.onloadend=function(){
        document.getElementById("imgTemplate").src=reader.result;
    };


    //Hiding of form and showing of Resume
    document.getElementById("cv-form").style.display="none";
    document.getElementById("cv-template").style.display="block";
}

//printing CV
function printCV(){
    window.print();
}