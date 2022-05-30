function calculateCI(P, R, T)
{
       // Your code here
       //amount = p * (1+R)^t
       //ci = amount - p
       let amount = P * (Math.pow((1 + R/100), T));
       let ci = (amount-P).toFixed(2);
       console.log(ci);
}