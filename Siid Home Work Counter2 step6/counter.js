(() => {
const $counter = document.getElementById("js-counter");


const clickHandler =(e) => {
    const $targetButton = e.currentTarget;
    let currentCount = parseInt ($counter.textContent);
    if ($targetButton.textContent === "+"){
        currentCount += 1;
    } else {
        currentCount -= 1;
    }
    $counter.textContent = currentCount;
    checkAndSpeak(currentCount);

};

let interval;

const startCounting = (e) => {
    const $targetButton = e.currentTarget;
    const increment = $targetButton.textContent === "+" ? 1 :-1;

    interval = setInterval(() => {
        let currentCount = parseInt($counter.textContent);
        currentCount += increment;
        $counter.textContent = currentCount;
        checkAndSpeak(currentCount);
    }, 100 );
};

const stopCounting = () => {
    clearInterval(interval);
};

const checkAndSpeak = (count) => {
    console.log(count);
    if (count % 3 === 0 && count !== 0) {
        console.log("He");
        const utterance = new SpeechSynthesisUtterance("マッチョ！！");
        utterance.voice = speechSynthesis.getVoices().find(voice => voice.name === "Google 日本語");

        speechSynthesis.speak(utterance);
    };
};

const buttons = document.getElementsByClassName("js-button");
for (let index =0; index <buttons.length; index++) {
    buttons[index].addEventListener("click" , clickHandler);
    buttons[index].addEventListener("mousedown" , startCounting);
    buttons[index].addEventListener("mouseup" , stopCounting);
    buttons[index].addEventListener("mouseleave" , stopCounting);


};

})();

/*
数字の入力が３の倍数になった時「マッチョ」と話すようにしました。また、長押し機能を追加しました。
AIと相談しながら作りましたが、よくわからずやっていました。極力理解に努めましたが、、、
コピペはしないように手入力でやりました。
理解しながら作れたら楽しいのだろうと思います。いつかはそうなりたいです。
*/