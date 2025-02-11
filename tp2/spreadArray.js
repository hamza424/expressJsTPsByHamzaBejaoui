const arr1 =[1,2,3,4,5]
const arr2 = [6,7,8,9,10]
const arr3 = [...arr1,...arr2]

for(i in arr3)
{
    console.log(arr3[i])
}