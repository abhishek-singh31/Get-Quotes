const quote=document.querySelector('.quote');
const author=document.querySelector('.author');
const loader=document.querySelector('.loader');
const quoteContent=document.querySelector('.quote-content');

const URL='https://type.fit/api/quotes';
function getQuote(){
    fetch(URL)
    .then(response=>response.json())
    .then(data=>{
        loader.style.display='none';
        let x=Math.floor(Math.random()*(data.length));
        console.log(x);
        quote.innerHTML=data[x]['text'];
        author.innerHTML=`~ ${data[x]['author']}`;
        quoteContent.style.display='block';
    });
}

setTimeout(getQuote,800);