function getSecondLargest(nums) {
    let g=nums[0], sg=nums[0];
    for(let i=1; i<nums.length; i++){
        if(nums[i] > sg){
            if(nums[i] > g){
                sg = g;
                g = nums[i];
            } else{
                if(nums[i] != g){
                    sg = nums[i];
                }
            }
        }
    }
    return sg;
}


function main() {
    const n = +(readLine());
    const nums = readLine().split(' ').map(Number);
    
    console.log(getSecondLargest(nums));
}