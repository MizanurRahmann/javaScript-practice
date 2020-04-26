const  matrixSpiral = n => {
    //Declare a Empty array
    let matrix = new Array(n).fill().map(() => new Array(n).fill('0'));

    let startCol = 0, endCol = n-1;
    let startRow = 0, endRow = n-1;
    let counter = 1;

    //Process the array
    while(startCol<=endCol && startRow<=endRow)
    {
        for(let i=startCol; i<=endCol; i++){
            matrix[startRow][i] = counter;
            counter++;
        }
        startRow++;

        for(let i=startRow; i<=endRow; i++){
            matrix[i][endCol] = counter;
            counter++;
        }
        endCol--;

        for(let i=endCol; i>=startCol; i--){
            matrix[endRow][i] = counter;
            counter++;
        }
        endRow--;

        for(let i=endRow; i>=startRow; i--){
            matrix[i][startCol] = counter;
            counter++;
        }
        startCol++;
    }
    
    //print Matrinx
    for(let row of matrix)
        console.log(row);
    console.log('\n');
}

matrixSpiral(2);
matrixSpiral(3);
matrixSpiral(4);