function getStrInfo(str) {
    let c_count = 0;
    let n_count = 0;
    let other = 0;
    const engAB = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const ukrAB = ['а', 'б', 'в', 'г', 'ґ', 'д', 'е', 'є', 'ж', 'з', 'и', 'і', 'ї', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ь', 'ю', 'я'] 
    const nums = ['0','1','2','3','4','5','6','7','8','9'];
    let [language = 'англійська', alphabet = engAB] = checkLanguage(str);

    for (symbol of str) {
                
        if (alphabet.includes(symbol)) {
            c_count++;
            continue;
        } 
        
        if (nums.includes(symbol)) {
            n_count++;
            continue;
        }  
        
        other++;        
    }

    function checkLanguage(str) {
        for (symbol of str) {
               if (ukrAB.includes(symbol.toLowerCase())) return ['українська', ukrAB]; 
             
        }
    }
    console.log(str);
    console.log(`Довжина рядка ${str.length} символів`);
    console.log(`Мова рядка - ${language}`);
    console.log(`В рядку ${n_count} цифр`);
    console.log(`В рядку ${c_count} літер`);
    console.log(`В рядку ${other} інших символів`);
}

 
getStrInfo(prompt('Введіть рядок для аналізу',''));

