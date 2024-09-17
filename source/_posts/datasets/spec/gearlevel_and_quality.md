---
title: 裝備等級與品級
date: 2023-04-23 11:25:00
tags: 資料紀錄
category: [遊戲資料,新手指南]
cover: /img/material/gearquality_refresh.png
description: "裝備等級跟裝備品級的說明"
---

> # 裝備品級{% inlineImg /img/material/gearquality_refresh.png 40px %}

裝備品級 (或品質) 會顯示在裝備的右上角 (如圖 <font color=#00ffdf>藍色</font> 圈起來部分)
![](https://i.imgur.com/nS1q5Tk.png)

- 品質分為五種

|微弱|<font color=brown>低級</font>|<font color=green>中級</font>|<font color=blue>高級</font>|<font color=purple>究極</font>
|:-:|:-:|:-:|:-:|:-:
|0~19%|20~39%|40~59%|60~79%|80~100%

- 裝備品級會影響裝備基礎白色數值 (請參考下圖 **<font color=red>紅色</font>** 方框數字)

|品級0%<br>從拍賣或升級預覽|品級100%
|:-:|:-:
|![](https://i.imgur.com/rI3pofo.png)|![](https://i.imgur.com/emczcUJ.png)

## 怎麼洗裝備品級

- 需要使用{% inlineImg /img/material/gearquality_refresh.png 40px %} Union裝備品級潤滑劑， **使用後裝備品級將變成隨機的 % 數 (機率為平均分布)**
**一般來說，取得方式為活動或副本掉落，也可從拍賣購買**
**<font color=red>建議將武器核心與模組的品級洗到究極 (90%) 以上，當然越高越好</font>**
<br>{% inlineImg https://i.imgur.com/KQwaY0W.png 300px %}

## 注意事項

- 武器品質 (0%-100%) 的白字數值 **<font color=red>並不會受到總攻擊力加成</font>**
- 模組品質 (0%-100%) 的白字數值 **<font color=red>會受到總攻擊力加成</font>**

---

> # 裝備等級

- 裝備等級 (簡稱裝等) 是一個類似限制入場的一種機制 (如圖的 "平均 LV")
每件裝備均會標註 "超能裝備等級" (可參考上面圖片)
會根據**武器、模組、接收器、護盾共11格裝備**的裝備等級來計算平均 **<font color=red>(無條件捨去，觸發器不記入)</font>**

<div style="text-align: center">{% inlineImg https://i.imgur.com/0HyCfhi.png 350px %}</div>

## 關卡裝備等級

- 大多數關卡會標示 "裝備等級" 
**<font color=green>若高於標示的裝備等級，則進入副本會獲得增傷BUFF</font>；若低於則~~會有減傷以及被擊傷害增加的DEBUFF，且~~<font color=red>不能使用 "尋找組隊F6" 功能</font>** (已於[韓版2024/06/13更新](https://closers.nexon.com/News/GMNote/View?n4ArticleSN=595)時刪除DEBUFF效果)

|<font color=green>當裝等足夠時</font>|<font color=red>當裝等不足時</font>
|:-:|:-:
|{% inlineImg https://i.imgur.com/a4vBDyD.png 350px %}|{% inlineImg https://i.imgur.com/cfJtO8P.png 350px %}


## BUFF / DEBUFF

<div class="container">

<div class="childDiv">

- <font color=green>高於標示的裝備等級的BUFF數值</font>
但超過 30% 時均固定為 30%

|高於等級|造成傷害增加
|:-:|:-:
|1|3 %
|2|4 %
|3|5 %
|4|6 %
|5|7 %
|6|8 %
|7|9 %
|8|11 %
|9|13 %
|10|15 %
|11|17 %
|12|19 %
|13|21 %
|14|23 %
|15|26 %
|16|29 %
|17|32 %
|18|36 %
|19|40 %
|20|45 %
</div>
<div class="childDiv">

- 已經被刪除的設定，僅供參考
- 低於標示的裝備等級的DEBUFF數值

|低於等級|對敵人傷害減少|被攻擊傷害增加
|:-:|:-:|:-:
|1|10 %|10 %
|2|15 %|15 %
|3|20 %|20 %
|4|25 %|25 %
|5|30 %|30 %
|6|35 %|40 %
|7|40 %|50 %
|8|45 %|60 %
|9|50 %|80 %
|10|55 %|100 %
|11|60 %|120 %
|12|65 %|140 %
|13|70 %|160 %
|14|75 %|180 %
|15|80 %|200 %
</div>

</div>

## 強化提升裝備等級

強化會提升一部份的裝備等級
+20 以後均不會增加裝備等級

|強化等級|+1|+2|+3|+4|+5|+6|+7|+8|+9|+10|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|裝備等級提升|0|0|1|1|1|2|2|2|3|3|

|強化等級|+11|+12|+13|+14|+15|+16|+17|+18|+19|+20|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|裝備等級提升|4|5|9|14|20|26|32|38|44|50|


---

<style>
    .container {
        overflow: hidden;
        zoom: 1;
        width: 100%;
        height: flex;
        /*border: 1px solid red;*/
    }
    .childDiv {
        float: left;
        width: 50%;
        height: 100%;
        padding: 10px;
        /* border: 1px solid greenyellow;*/
    }
</style>