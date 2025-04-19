const JS_홈이동 = () => {
    document.getElementById('HTML_이동').src = './home.html';
    document.getElementById('HTML_카테고리_홈').style =
        'background-color: #ffffff; color: #000000;';
    document.getElementById('HTML_카테고리_쥬크박스').style =
        'background-color: #298eb5; color: #ffffff;';
    document.getElementById('HTML_카테고리_게임').style =
        'background-color: #298eb5; color: #ffffff;';
};

const JS_쥬크박스이동 = () => {
    document.getElementById('HTML_이동').src = './jukebox.html';
    document.getElementById('HTML_카테고리_홈').style =
        'background-color: #298eb5; color: #ffffff;';
    document.getElementById('HTML_카테고리_쥬크박스').style =
        'background-color: #ffffff; color: #000000;';
    document.getElementById('HTML_카테고리_게임').style =
        'background-color: #298eb5; color: #ffffff;';
};

const JS_게임이동 = () => {
    document.getElementById('HTML_이동').src = './game.html';
    document.getElementById('HTML_카테고리_홈').style =
        'background-color: #298eb5; color: #ffffff;';
    document.getElementById('HTML_카테고리_쥬크박스').style =
        'background-color: #298eb5; color: #ffffff;';
    document.getElementById('HTML_카테고리_게임').style =
        'background-color: #ffffff; color: #000000;';
};
