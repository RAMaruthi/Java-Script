// let exa=123;

// var exam=123;

// for (var i = 0; i < 5;i++) {
//     console.log(i);
//     }
//     console.log(i);


//     ////////////////
    
//     function exampl(mess="good moring") 
//     {
//         console.log(mess);
//     }

//     exampl();
//     exampl("hi");

function divArea(hegith="150px",width="350px",display="inline-block",border="1px solid red") 
{
    const div=document.createElement("div");
    div.style.height=hegith;
    div.style.width=width;
    div.style.display=display;
    div.style.border=border;

    const area =document.querySelector("#diva");
    area.appendChild(div);
    return div;
}

//////////////////////////////////////////////////////////

function add(...agrs) {
    // return agrs
    // .filter((e)=>typeof e === 'number')
    // .reduce((prev,next)=>prev+next);
}
console.log(add(123,232))

////////////////

const values=[1,2,3,4,5];
const newvalues=[0,...values];
console.log(values);


///////////
s

