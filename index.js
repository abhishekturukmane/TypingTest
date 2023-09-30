const setOfWords=[
    "Maharashtra is also famous for its culture and festivals and much more contribute to this lively culture",
    "Gujarat is renowned for its temple towns and historic capitals and natural grandeur are gifts of Gujarat",
    "Andhra Pradesh is one of the leading rice growing states in the country and is a major producer of Indias tobacco",
    "If there is one thing that Tamil Nadu is famous for all over the world it is glorious and ancient temples",
    "Madhya Pradesh is the second largest Indian state by area and the fifth largest state by population with over 72 million residents"
];

const msg=document.getElementById("msg");
const typeWords=document.getElementById('myWords');
const btn=document.getElementById('btn');
let startTime ,endTime;

btn.addEventListener('click',function(){

    if(this.innerText=='Start')
    {
        typeWords.disabled=false;
        playGame();
    }
    else if(this.innerText=="Done")
    {
        typeWords.disabled=true;
        btn.innerText="Start";
        endPlay();
    }
})

const playGame=()=>{

    let randomNumber=Math.floor(Math.random()*setOfWords.length);
    //console.log(setOfWords[randomNumber])
    msg.innerText=setOfWords[randomNumber];
    let date=new Date();
    startTime=date.getTime();
    btn.innerText="Done";
}



const endPlay=()=>{

    let date=new Date();
    endTime=date.getTime();
    let totalTime=((endTime-startTime)/1000);
    //console.log(totalTime);

    let totalStr=typeWords.value;
    let wordCount=wordCounter(totalStr);

    let speed=Math.floor((wordCount/totalTime)*60);
    console.log("speed",speed);

    let finalMsg="you typed total at "+ speed +" words per minute. ";
    finalMsg += compareWords(msg.innerText,totalStr);
    msg.innerText=finalMsg;
}

let wordCounter=(Str)=>{
    let response=Str.split(" ").length;
    console.log("wordcount: "+ response);
    return response;
} 

const  compareWords=(str1,str2)=>{

    let words1=str1.split(" ");
    let words2=str2.split(" ");

    let cnt=0;
    words1.forEach((item,index)=>{

        if(item === words2[index])
        {
            cnt++;
        }
    })

    let errorWords=(words1.length-cnt);
    return (cnt + " correct out of " + words1.length +
    " words and the total number of error are "+ errorWords+". ");
}
