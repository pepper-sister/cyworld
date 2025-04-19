const JS_끝말잇기 = () => {
    const 제시어 = document.getElementById('HTML_끝말잇기_제시어').innerText;
    const 입력단어 = document.getElementById('HTML_끝말잇기_입력').value;

    console.log();

    if (제시어[제시어.length - 1] === 입력단어[0]) {
        document.getElementById(
            'HTML_끝말잇기_제시어'
        ).innerText = `제시어 : ${입력단어}`;
        document.getElementById('HTML_끝말잇기_결과').innerText = '정답입니다!';
    } else {
        document.getElementById('HTML_끝말잇기_결과').innerText = '땡!';
    }

    document.getElementById('HTML_끝말잇기_입력').value = '';
};
