const MyHeading =({name,text,price=300})=>
{
const obj ={abb:132,ccd:560}
const{abb,ccd}=obj
const a =232;
return(
<>
<div>{a}</div>     
<h1>{name }{abb}</h1>
<main>The price is {8000} {ccd}</main>
<footer>This is the footer page of number {text}</footer>   

</>
);
};
export const MyHeadingLittle=()=><h1>Good </h1>;
export const MyHeadingLittle2=()=><h2>bad</h2>;
export const MyHeadingLittle3=()=><h3>Good</h3>;
export default MyHeading;

