//PROMISES: Object that keeps track about whether a certain evnet has happened already or not.

const getIDs = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([523, 883, 432, 974]);
    }, 1500)
});

const getRecipe = recID => {
    return new Promise((resolve, reject) => {
        setTimeout(id => {
            const recipie = {
                title: 'Fresh tomato pasta',
                publisher: 'John'
            };
            resolve (`${id}: ${recipie.title}`);
        }, 1500, recID);
    });
};

const getRelatedRecipe = publisher => {
    return new Promise((resolve, reject) => {
        setTimeout(pub => {
            const recipie2 = {
                title: 'Italian Pizza',
                publisher: 'Jphn'
            }
            resolve(`${pub}: ${recipie2.title}`);
        }, 1500, publisher)
    });
};


getIDs
.then(IDs => {
    console.log(IDs);
    return getRecipe(IDs[2]);
})
.then(recipie => {
    console.log(recipie);
    return getRelatedRecipe('John');  
})
.then(recipie => {
    console.log(recipie);
})
.catch(error => {
    console.log("Error: " + error);
});