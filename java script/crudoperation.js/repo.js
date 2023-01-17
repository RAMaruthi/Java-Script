class emp {
    constructor(id,name,salary){
        this.empid=id;
        this.empname=name;
        this.empsalary=salary;
    }
}

class repoemp{
    data=[];

    addEmp(emp){
        this.data.push(emp);

    }

    getALLEmp=()=>{
        return this.data;
    }

    getEmp(id){
        for (const emp of this.data) {
            if (emp.empid == id) 
                return emp;
        }  
        throw "empid is not found";   
    }

    updateEmployee(emp){
        for(const empRec of this.data){
            if(emp.empid == empRec.empid){
               empRec.empname = emp.empname; 
               empRec.empsalary = emp.empsalary; 
               return;//exit the function 
            }
        }
        throw "Employee not found to update"
    }

}


let i=new repoemp();
i.addEmp(new emp(123,"marut",3500));
i.addEmp(new emp(124,"mathi",300));
i.addEmp(new emp(125,"ramu",35000));


const data=i.getALLEmp()
// for (const emp of data) console.log(emp)