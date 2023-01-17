function book()
{
    let a=[];
    let o=document.getElementById("texname").value;
    let ol=document.getElementById("list");
    a.push(o);
    for (let i = 0; i < a.length; i++) {
        let element = "<li>"+a[i]+"<\li>";
        ol.innerHTML+=element;
    }

}