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


async function getRecipesAW(){
    const IDs = await getIDs;
    console.log(IDs);
    const recipie = await getRecipe(IDs[2]);
    console.log(recipie);
    const related = await getRelatedRecipe('John');
    console.log(related);

    return recipie;
}

getRecipesAW().then(result => console.log(`${result} is best ever.`)); 
//getRecipesAW automatically return a Promise