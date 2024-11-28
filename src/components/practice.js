const user=[
    {firstname:"akshay",lastname:"saini",age:26},
    {firstname:"donald",lastname:"trump",age:75},
    {firstname:"elon",lastname:"musk",age:50},
    {firstname:"gajanan",lastname:"shelke",age:26}
];

const output=user.reduce((acc,curr)=>{
    if(curr.age<30)
    {
        acc.push(curr.firstname);
    }
},[])

console.log(output);