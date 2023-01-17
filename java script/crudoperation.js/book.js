let book=[];
function addItem(data)
{
    book.push(data);
}


const getAll=()=>book;

const deleteItem=(index)=>book.splice(index,1);

const updateItem=(index,item)=>    book[index]=item;
