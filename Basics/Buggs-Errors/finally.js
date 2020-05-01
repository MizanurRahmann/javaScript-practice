const accounts = {
    a: 100,
    b: 0,
    c: 20
};

function getAccount(){
    let accountName = prompt("Enter an account name: ");
    if(!accountName.hasOwnProperty(accountName)){
        throw new Error (`No such account: ${accountName}`);
    }
    return accountName;
}

function transfer(from, amount){
    if(account[from] < amount)
        return;
    accounts[from] -= amount;
    accounts[getAccount()] += amount;
}
/*Here, transfer first removes the money from the account and then calls
getAccount before it adds it to another account. If it is broken off by an
exception at that point, it’ll just make the money disappear.*/


//SOLUTION:
function transfer(from, amount){
    if(account[from] < amount)
        return;
    let progress = 0;
    try{
        accounts[from] -= amount;
        progress++; //1
        accounts[getAccount()] += amount;
        progress++; //2
    } finally{
        if(progress == 1){
            accounts[from] += amount;
        }
    }
}
/*the finally code is run when an exception is thrown
in the try block, it does not interfere with the exception. After the finally
block runs, the stack continues unwinding.*/