let str = 'Жили были не тужили четверо друзей';
let mass = str.split('');
let count_vowel = 0;
mass.forEach(vowel)
//console.log(mass);
//console.log(str);
//console.log(vowels(str));
function vowels(strin){
    let count = 0;
    for(let i = 0; i < strin.length; i++){
        if(strin[i]=='а'||strin[i]=='е'||strin[i]=='о'||strin[i]=='ё'||strin[i]=='у'||strin[i]=='и'||strin[i]=='ю'||strin[i]=='я'||strin[i]=='ы'||strin[i]=='э'){
            count++;
        }
    }
    return count;
}

function vowel(v,i,a){
    if(v=='а'||v=='е'||v=='о'||v=='ё'||v=='у'||v=='и'||v=='ю'||v=='я'||v=='ы'||v=='э'){
        count_vowel++;
    }
    if(i+1 == a.length){
        console.log(count_vowel);
    }
}