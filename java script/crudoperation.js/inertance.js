const baseClass=class{
    data1="maruthi";
    data2="maru";
    constructor(){
       
        console.log("base clss is present");
    }
    toString(){
            return `${this.data1} and ${this.data2}`;
    }
    dispaly=()=>console.log("base class fuction")
}

class d extends baseClass{
    data3=true;


    dispalyAnother=()=>console.log("deeeeee");

    toString(){
        let data=super.toString();
        data += this.data3;
        return data;
    }
}

const data=new d();
data.dispaly();
data.dispalyAnother();
console.log(data.toString())