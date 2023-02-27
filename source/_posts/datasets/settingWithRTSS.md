---
title: 遊戲設定：顧及讀取速度並增加畫面流暢度
date: 2022-06-28 12:45:59
tags: 資料紀錄
category: [遊戲資料, 其他]
cover: https://i.imgur.com/MMIi9Th.jpg
description: "RTSS介紹"
---

# 緣由
因為最近剛換電腦了，從i5-4460換到了i7-12700，升級很有感， **<font color=#ff0000>畫面非常流暢</font>**
說是有感，但是發現到一件事：
在跟社團的跟朋友打本時，在副本讀取畫面時，
我都是第一個開始讀取，但常常是跟其他人同時讀取完畢，甚至是最後一個跑完還卡相對久的時間
(在副本讀取時會大約卡在52%好幾秒才會繼續動)
以及在跑圖時，會一直卡100%好幾秒(接近10秒左右)
就想說明明把遊戲放在M.2 SSD裡面怎麼會有這種情況
## 目前配備簡述
僅提供參考，仍以自身實際使用情況為主
CPU: i7-12700
顯卡: GTX 1050Ti
硬碟: SNVS/500G

---

# 改善讀取速度
**<font color=#f00 size=4>在進一步用這些方法之前，建議將遊戲存放至SSD槽中，確保基本的讀取速度提升</font>**

因此我就上網查了一些資料，看到[韓版這篇](https://closers.nexon.com/Community/Tip/View?n4ArticleSN=19398)文章，說明怎麼提高讀取速度
簡譯如下：
1. (**可選**) 改用全螢幕
1. **關閉垂直同步**(如圖)
![](https://i.imgur.com/qJHfRFu.png)
1. (**可選**) 打開工作管理員 => 點"詳細資料" => 找到"CW.EXE" => 點選"設定親和性" => 把"CPU 0"點掉 => "確定"完成
註：每次開遊戲需要重複3的操作
![](https://i.imgur.com/U20MJ8G.png)

---

然後通常我不用第1點，所以試了第2點，結果很明顯的速度變得快很多，所以我就沒有用第3點了
**<font color=#ff0000>關閉"垂直同步"後，之前跑圖會卡100%好幾秒的情況消失了</font>**
![](https://i.imgur.com/GZ7yNDD.png)

但是這時候另一個問題出現了，如同上面文章所提到的
**<font color=#ff0000>關閉遊戲裡的"垂直同步"後，會讓遊戲不時產生卡頓感(掉幀)</font>**

---

# 拿回流暢的畫面
跟朋友討論說有可能是螢幕Hz數不夠導致，但因為一些原因所以沒辦法馬上換螢幕
所以我試了一些方法，例如從顯卡驅動來開啟垂直同步等等，依舊會有掉幀情形
因此我就再繼續找資料，找如何**同時顧及讀取速度+又有流暢的畫面**
於是我就找到的[這篇](http://closers.nexon.com/Community/Tip/View?n4ArticleSN=19371)
裡面提到2個軟體：
1. Nvidia Profile Inspector
1. **Rivatuner Statistics Server**

其中第1個似乎因為很久沒有更新，所以沒辦法使用(可能是驅動程式版本太新無法抓到)
第2個就是這篇文主角，簡稱RTSS

---

# 使用RTSS
**<font color=#ff0000>注意：若你的螢幕支援Nvidia G-Sync 或 AMD FreeSync的功能，則使用這兩個功能即可。RTSS方法是給比較普通的螢幕使用</font>**
針對Closers的使用教學是參考[這篇](https://gall.dcinside.com/board/view/?id=closers&no=8945992)
[RTSS載點](https://www.guru3d.com/files-details/rtss-rivatuner-statistics-server-download.html)
![](https://i.imgur.com/bXjKUL0.png)
拉到最下面會看到"Download Locations"
上面教學使用7.2.3版，個人是載了7.3.2版，似乎沒什麼問題，因此版本隨意選

**<font color=#ff0000>設定前先把所有相關垂直同步設定關閉(遊戲裡的、NVIDIA 控制面板等)</font>**
下載後解壓縮，點裡面的"RTSSSetupOOO.exe"(OOO是版本)安裝完打開
**<font color=#ff0000>可能會在右下角工作列(要再去點開)</font>**
## 設定方式
1. 如圖：左下角"Add"點開(1)，找到遊戲資料夾，點選"CW.EXE"(2)
![](https://i.imgur.com/5ySxFjG.jpg)
1. **注意左邊"CW.EXE"有沒有選到**
將紅方框內數值進行設定， **<font color=#ff0000>可不用關閉遊戲，設定會實時生效</font>**
![](https://i.imgur.com/MMIi9Th.jpg)

然後就可以點右上角(一條線的標誌)最小化(不能關閉RTSS)
雖然RTSS會在後台運行，但是RAM的佔用量非常小可以忽略

**<font color=#ff0000 size=5>然後大功告成，現在應該會有很快的讀取速度跟很流暢的畫面了</font>**

## 附錄：RTSS是什麼碗糕
有關RTSS的原理與介紹，可以參考巴哈[這篇](https://forum.gamer.com.tw/Co.php?bsn=36072&sn=32315)文章介紹(使用APEX來說明與設定)
有關上面設定的Scanline sync(掃描線同步)說明(節錄巴哈文章)：
`掃描線同步利用純軟體的解決方案，一樣可減少畫面撕裂，同時比一般垂直同步產生更低的輸入延遲。由於人眼感知運動的方式，它還有助於消除不屬於上文所說的可變刷新率 (VRR) 面板上，產生的不穩定卡頓`
就是一個利用軟體達到Nvidia G-Sync 或 AMD FreeSync的效果(可以處理卡頓跟畫面撕裂)

掃描線同步使用時機：
`當顯示卡負載或使用率( 原文為GPU load )較低時，掃描線同步效果最佳。`
由於Closers並非3A大作等需要相對強大的硬體(顯卡)，所以對於大部分顯卡都是符合此條件(GTX等級以上基本上應該都行)

更進一步從影片說明時機(雖影片主要是指G-Sync 或 FreeSync但原理應該類似)：
`螢幕Hz數與顯卡輸出FPS數很接近時是理想的使用時機`
由於Closers本身限制，FPS只到60，與大多普通螢幕的60 Hz相同，因此是很理想的使用時機

其餘更詳細的說明就請看上面巴哈的文章
至於有關垂直同步、G-Sync 或 FreeSync等技術名詞說明，則參考[另外這篇](https://forum.gamer.com.tw/Co.php?bsn=60030&sn=2083384)、或者[影片說明](https://youtu.be/dnsPyyaNCWc)

**<font color=#ff0000 size=4>有關此文章或其他的問題，可以透過Discord或FB來提出</font>**
---