var list = []
function submit() 
{
    var s1 = document.getElementById("s1").value;
    var s2 = document.getElementById("s2").value;
    var s3 = document.getElementById("s3").value;
    var s4 = document.getElementById("s4").value;

    list.push(s1,s2,s3,s4)

    console.log(list)

    document.getElementById("displayname").innerHTML=list;
    document.getElementById("sort").style.display="inline-block";
    document.getElementById("sub").style.display="none";
}
function sort()
{
    list.sort()
    console.log(list)
    document.getElementById("displayname").innerHTML=list;
}