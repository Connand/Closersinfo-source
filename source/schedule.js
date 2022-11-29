let date = new Date(); //get current date

let day = date.getDay(); // getDay returns 0 to 6; 0 = sun, 1 = mon and so on.
let hour= date.getHours(); // gethhours returns the hour (0-23)
let result = "";

let dungeons =
[
	{
		name: "[覲見]機械王貝爾菲格",
        html: '<font color=#ff0000><b>[覲見]機械王貝爾菲格</b></font><a href="/datasets/belphegor/">攻略</a><br>',
        days: [0, 2, 5, 6]
	}
];

dungeons.forEach((e, i) => {
    if(e.days.includes(day)){
        result += e.html;
    }
});

//outut the result to div
  document.getElementById("schedule").innerHTML = result;
  
let boss_names = [
"島的主人(食蟲型)<img class=\"inline-img\" src=\"https://i.imgur.com/HoxQxvb.png\" style=\"height:32px\">",
"巴司基(海底型)<img class=\"inline-img\" src=\"https://i.imgur.com/I6BPtrp.png\" style=\"height:32px\">",
"先代之龍赫克頓蓋爾(魔龍形)<img class=\"inline-img\" src=\"https://i.imgur.com/FWfg4L0.png\" style=\"height:32px\">", 
"赤色死神(使徒型)<img class=\"inline-img\" src=\"https://i.imgur.com/t8j9844.png\" style=\"height:32px\">", 
"黃金莫拉克(前腦型)<img class=\"inline-img\" src=\"https://i.imgur.com/acS6rsI.png\" style=\"height:32px\">"
];
//let mockStart = new Date("Sep 25, 2021 04:00:00");
let mockStart = new Date("Jun 25, 2022 04:00:00");
let _second = 1000;
let _minute = _second * 60;
let _hour = _minute * 60;
let _day = _hour * 24;

let now = new Date();
let elaped = now - mockStart;
let number_of_week = Math.ceil(elaped / (7 * 24 * 60 * 60 * 1000)); // 算第幾季：1周 = 7日*24小時*60分鐘*60秒*1000毫秒
let mock_boss_number = Math.floor(elaped / (7 * 24 * 60 * 60 * 1000) % 5); // 算第幾周 => boss
let mockEnd = new Date(mockStart.getTime() + number_of_week * (7 * 24 * 60 * 60 * 1000)); // 算結束日
document.getElementById('mockBattleInfo').innerHTML = "<font size=4><b>第 " + number_of_week + " 周</b><a href=\"https://cls.mangot5.com/game/cls/news/detail?contentNo=46589\" rel=\"external nofollow noreferrer\" target=\"_blank\">模擬戰</a>（<a href=\"/datasets/mockbattle_rank/\" rel=\"external nofollow noreferrer\" target=\"_blank\">分數表</a>）</font><br>";
document.getElementById('mockBattleInfo').innerHTML += "<b>本周BOSS</b>：<br>- " + boss_names[mock_boss_number];
document.getElementById('mockBattleInfo').innerHTML += "<br><b>下周BOSS</b>：<br>- " + boss_names[(mock_boss_number + 1) % 5];

document.getElementById('mockBattleEnd').innerHTML = '<b>' + mockEnd.getFullYear() + '/';
document.getElementById('mockBattleEnd').innerHTML += '<b>' + (mockEnd.getMonth() + 1) + '/';
document.getElementById('mockBattleEnd').innerHTML += '<b>' + mockEnd.getDate() + ' ';
document.getElementById('mockBattleEnd').innerHTML += '<b>' + mockEnd.getHours() + ':00';

function showRemaining() {
    let now = new Date();
    let distance = mockEnd - now;
	
    if(distance <= 0) {
        document.getElementById('mockBattle').innerHTML = '0日00小時00分00秒';
    }
    let days = Math.floor(distance / _day);
    let hours = Math.floor((distance % _day) / _hour);
    let minutes = Math.floor((distance % _hour) / _minute);
    let seconds = Math.floor((distance % _minute) / _second);

    document.getElementById('mockBattle').innerHTML = '<b>' + days + '日';
    document.getElementById('mockBattle').innerHTML += '<b>' + ('0' + hours).slice(-2) + '時';
    document.getElementById('mockBattle').innerHTML += '<b>' + ('0' + minutes).slice(-2) + '分';
    document.getElementById('mockBattle').innerHTML += '<b>' + ('0' + seconds).slice(-2) + '秒';
}
showRemaining();
setInterval(showRemaining, 1000);