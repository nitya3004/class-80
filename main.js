nameofastudentarray=[];
function submit(){
    var display_student_array=[];
    for(var i=1; i<=4;i++){
        var nameofastudent=document.getElementById("name_of_the_student_"+i).value;
        console.log(nameofastudent);
        nameofastudentarray.push(nameofastudent);
    }
    console.log(nameofastudentarray);
    var length_of_student_array=nameofastudentarray.length;
    console.log(length_of_student_array);
    for(var s=0;s<length_of_student_array;s++){
        display_student_array.push("<h4>Name-"+nameofastudentarray[s]+"</h4>");
        console.log(display_student_array);
    }
    document.getElementById("display_name_with_commas").innerHTML=display_student_array;
    var remove_commas=display_student_array.join("");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML=remove_commas;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
}
function sorting(){
    nameofastudentarray.sort();
    console.log(nameofastudentarray);
    var display_student_array_sorting=[];
    var length_of_student_array=nameofastudentarray.length;
    console.log(length_of_student_array);
    for(var j=0;j<length_of_student_array;j++){
        display_student_array_sorting.push("<h4>Name-"+nameofastudentarray[j]+"</h4>");
        console.log(display_student_array_sorting);
    }
    var remove_commas=display_student_array_sorting.join("");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML=remove_commas;
}

