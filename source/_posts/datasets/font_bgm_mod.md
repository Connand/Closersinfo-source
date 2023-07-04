---
title: 字體與BGM修改(0425更新字體bat用法)
date: 2023-04-19 16:40:00
tags: 資料紀錄
category: [遊戲資料,其他]
cover: 
description: "<b>0425更新字體bat用法</b><br>客製化遊戲體驗"
---

**<font color=#FF0000 size=4>有修改檔案之疑慮，建議或不要用在韓版上</font>**

{% note info simple %}
[<font size=4>相關資料下載</font>](https://drive.google.com/drive/folders/1fHPqOSgnMD25ngCPioh7v92nZrBGgFqg?usp=share_link)
{% endnote %}


# 手動修改字體方法
1. 開啟遊戲啟動器(LAUNCHER)並更新，直到可以按 `開始遊戲`
1. 找到遊戲資料夾 (例如 `C:/CLOSERS/`) ，將遊戲資料夾內，原本的 `MSJH.TTF` 刪除
1. 將準備好的字型檔案 (例如本文提供的 `MSJH1.TTF`) 命名成 `MSJH.TTF` 並放置於相同位置

# 一鍵修改字體(bat檔案)
1. 將本文提供的 3 個檔案都下載
1. 將檔案放置於遊戲資料夾 (例如 `C:/CLOSERS/`)
1. 可以對 `Closers.bat` 點右鍵 -> 傳送到(N) -> 桌面 (建立捷徑)。日後可直接使用此檔案開啟
1. 點 `Closers.bat` 開啟
1. 再從官網按 `GAME START`
1. 更新完後點 `開始遊戲` ，會自動更換字型

---

# BGM修改方法
1. 找到遊戲資料夾的DAT資料夾 (例如 `C:/CLOSERS/DAT`)
1. 將準備好的音樂改成想要替換掉的檔名
    - 例如想要改 裏劇場 的音樂，則改為 `CM_BEELEBUB_TOWN.mp3`
    - 例如想要改 平原之門 的音樂，則改為 `CM_DEMI_TOWN_BGM.mp3`
1. 將音樂檔放至 `DAT` 資料夾


{% note primary simple %}
可至`MUSIC`資料夾 (例如 `C:/CLOSERS/DAT/MUSIC`) 內
一個一個來查看或聽每一個檔案對應的BGM為何以便更改
{% endnote %}

---

# 額外參考
{% note info simple %}
可以看板上另外[一位巴友所做的bat檔案](https://forum.gamer.com.tw/C.php?bsn=23655&snA=9205)
此方法包含了 刪除過場動畫、更換BGM 功能，可以參考看看
{% endnote %}

---