let obj={};
obj.id=123;
obj.name="maruthi";
obj.salary=35000;

for (const key in obj) console.log(obj[key]);
    



class emp {
    constructor(id,name,salary){
        this.empid=id;
        this.empname=name;
        this.empsalary=salary;
    }
}

const empobj=new emp(222,'maru',45000);