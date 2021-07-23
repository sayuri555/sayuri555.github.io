function janken(myHand) {

    // じゃんけんの手を格納する配列を用意する
    var handArray = ['グー', 'チョキ', 'パー'];

    // プレイヤーの手は myHand に入っている
    console.log('プレイヤーの手は' + handArray[myHand]);

    // コンピュータの手をランダムに決める
    // Math.random は，0 以上 1 未満の疑似乱数分布を生成し，その分布から一つ値を返す
    var random = Math.random() * 100;
    console.log(random);

    // Math.floor は，与えられた引数以下の最大の整数を返す．
    var randomInt = Math.floor(random)
    console.log(randomInt);

    // 生成したランダムな値を3で割った余りをコンピュータの手とする
    var computerHand = randomInt % 3;
    console.log('コンピュータの手は' + handArray[computerHand]);

    // 勝敗結果を保持する変数（0:アイコ，1:負け，2:勝ち）
    var victory = 0;

    victory = (myHand - computerHand + 3) % 3;

    // プレイヤーとコンピュータの勝ち負けを判定する
    // プレイヤーがグーの時
    // if(myHand == 0) {
    //     if(computerHand == 0) {
    //         victory = 0;
    //     } else if(computerHand == 1) {
    //         victory = 2;
    //     } else if(computerHand == 2) {
    //         victory = 1;
    //     }
    // // プレイヤーがチョキの時
    // } else if (myHand == 1) {
    //     if(computerHand == 0) {
    //         victory = 1;
    //     } else if(computerHand == 1) {
    //         victory = 0;
    //     } else if(computerHand == 2) {
    //         victory = 2;
    //     }
    // // プレイヤーがパーの時
    // } else if (myHand == 2) {
    //     if(computerHand == 0) {
    //         victory = 2;
    //     } else if(computerHand == 1) {
    //         victory = 1;
    //     } else if(computerHand == 2) {
    //         victory = 0;
    //     }
    // }

    // 結果を表示する
    var messageArray = ['アイコです', 'あなたの負けです', 'あなたの勝ちです'];
    // alert('あなたの手は' + handArray[myHand] + '，コンピュータの手は' + handArray[computerHand] + '，なので' + messageArray[victory]);

    // jQueryでHTMLを編集する
    $('#janken-result-p').text("あなたの手は" + handArray[myHand] + "，コンピュータは" + handArray[computerHand] + "なので" + messageArray[victory]);

}