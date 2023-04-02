function calculateAverage(numbers) {
    let n = [4, 9, 16, 23, 8]
    let sum = 0;
    for (let i = 0; i < n.length; i++){
        sum+=n[i]
    }
    let averge = sum / n.length;
    console.log(averge)
    
    let max = n[0]
    for(let i = 1; i < n.length; i++){
        if(n[i] > max){
            max = n[i]
        }
    }
    console.log(max)
}

