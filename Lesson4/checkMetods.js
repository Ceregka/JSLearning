let check = [
    {title: 'banana', 
     amount: 5,
     price:50},

    {title:'apple', 
     amount:2,
     price:15},

    {title:'orange', 
     amount:1.5,
     price:55},

];


function printCheck (check) {
    let ch = 'Назва - кількість - ціна - вартість \n';
    let sum = 0;
    for (let article of check) {
        let {title:t, amount:a, price:p} = article;
        ch = ch + `${t} - ${a}кг - ${p}грн - ${a*p}грн \n`;        
     }
     ch = ch + `Разом ${getTotalCost (check)}грн`
    return ch;
}

function getTotalCost (check) {
    let totalCost = 0;
    for (let article of check) {
        totalCost += article.amount*article.price;
    }
    return totalCost;
}

function getMostExpensiveArticle (check) {
    let maxValue = 0;
    let mostExpensiveArticle = '';
    for (let article of check) {
        if (article.amount*article.price > maxValue){
            maxValue = article.amount*article.price;
            mostExpensiveArticle = article.title;
        }
    }
    return mostExpensiveArticle;
}

function getAverageCost (check) {
    return (getTotalCost(check)/check.length).toFixed(2);
}

alert(printCheck(check));
alert(`Загальна вартість покупок - ${getTotalCost(check)} грн.`);
alert(`Найдорожча покупка - ${getMostExpensiveArticle(check)}.`);
alert(`Середня вартість покупок - ${getAverageCost(check)} грн.`);
