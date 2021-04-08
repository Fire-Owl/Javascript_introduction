const counterp=document.getElementById('counterp');
const buttonPlusp=document.getElementById('plusp');
const buttonMinusp=document.getElementById('minusp');
let counterpValue=0;
const applePrice=1;
const total=document.getElementById('total');
//var addition=counterValue*applePrice;

buttonPlusp.addEventListener('click',morep);
buttonMinusp.addEventListener('click',lessp);

function morep(){
    counterpValue++;
    console.log(counterpValue);
    counterp.innerHTML=counterpValue+' articles';
    if(counterpValue== 1){
        counterp.innerHTML=counterpValue+' article';
    }
    else{
        counterp.innerHTML=counterpValue+' articles';  
    }
    document.getElementById("total").innerHTML=counterpValue*applePrice+counterbValue*bananaPrice+countercValue*cherryPrice;
}

function lessp(){
    counterpValue--;
    console.log(counterpValue);
    if(counterpValue<=0){
        counterpValue=0 ;
        counterp.innerHTML=counterpValue+' article';
    }
    else if(counterpValue== 1){
        counterp.innerHTML=counterpValue+' article';
    }
    else{
        counterp.innerHTML=counterpValue+' articles';
    }
    document.getElementById("total").innerHTML=counterpValue*applePrice+counterbValue*bananaPrice+countercValue*cherryPrice;
}

//bananas

const counterb=document.getElementById('counterb');
const buttonPlusb=document.getElementById('plusb');
const buttonMinusb=document.getElementById('minusb');
let counterbValue=0;
const bananaPrice=1.1;
//const total=document.getElementById('total');
//var addition=counterValue*applePrice;

buttonPlusb.addEventListener('click',moreb);
buttonMinusb.addEventListener('click',lessb);

function moreb(){
    counterbValue++;
    console.log(counterbValue);
    counterb.innerHTML=counterbValue+' articles';
    if(counterpValue== 1){
        counterb.innerHTML=counterbValue+' article';
    }
    else{
        counterb.innerHTML=counterbValue+' articles';  
    }
    document.getElementById("total").innerHTML=counterpValue*applePrice+counterbValue*bananaPrice+countercValue*cherryPrice;
}

function lessb(){
    counterbValue--;
    console.log(counterbValue);
    if(counterbValue<=0){
        counterbValue=0 ;
        counterb.innerHTML=counterbValue+' article';
    }
    else if(counterbValue== 1){
        counterb.innerHTML=counterbValue+' article';
    }
    else{
        counterb.innerHTML=counterbValue+' articles';
    }
    document.getElementById("total").innerHTML=counterpValue*applePrice+counterbValue*bananaPrice+countercValue*cherryPrice;
}

//cherry

const counterc=document.getElementById('counterc');
const buttonPlusc=document.getElementById('plusc');
const buttonMinusc=document.getElementById('minusc');
let countercValue=0;
const cherryPrice=1.01;
//const total=document.getElementById('total');
//var addition=counterValue*applePrice;

buttonPlusc.addEventListener('click',morec);
buttonMinusc.addEventListener('click',lessc);

function morec(){
    countercValue++;
    console.log(countercValue);
    counterc.innerHTML=countercValue+' articles';
    if(countercValue== 1){
        counterc.innerHTML=countercValue+' article';
    }
    else{
        counterc.innerHTML=countercValue+' articles';  
    }
    document.getElementById("total").innerHTML=counterpValue*applePrice+counterbValue*bananaPrice+countercValue*cherryPrice;
}

function lessc(){
    countercValue--;
    console.log(countercValue);
    if(countercValue<=0){
        countercValue=0 ;
        counterc.innerHTML=countercValue+' article';
    }
    else if(countercValue== 1){
        counterc.innerHTML=countercValue+' article';
    }
    else{
        counterc.innerHTML=countercValue+' articles';
    }
    document.getElementById("total").innerHTML=counterpValue*applePrice+counterbValue*bananaPrice+countercValue*cherryPrice;
}