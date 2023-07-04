---
title: 攻擊判定與能力上限
date: 2023-05-30 11:25:52
tags: 
    - 資料紀錄
    - 新手指南
category: [遊戲資料,新手指南]
cover: /img/new_guide/chase.png
description: "說明攻擊判定與其重要性，以及簡單提供部分能力的數值上限"
---

# 攻擊判定

這遊戲攻擊會根據玩家與敵人的位置與方向區分為三種

## 前導：判定的重要性

因為這遊戲裝備數值除了基礎的**增傷**與**爆擊傷害**外，還有根據判定所增加的 **<font color=red>(條件)增傷</font>** 與 **<font color=red>(條件)爆擊傷害</font>** 
這是一個相當重要重要的傷害來源，如果判定不足的話傷害會大幅降低，當然無法高於[暴擊傷害抵抗](/datasets/damage_calculation/)門檻的情況下，就有可能產生**暴擊跟沒暴擊傷害一樣的情況**

{% tabs 判定 %}
<!-- tab 結論-->
後面標籤僅為測試圖片，僅供參考
|狀態|傷害|差距
|:-:|:-:|:-:
|無判定|2,023,845|-
|空中|5,573,411|2.75倍
|空中 + 背擊|10,119,264|無判定5.00倍<br>純空中2.75倍
<!-- endtab -->
<!-- tab 無判定-->
![](https://i.imgur.com/McYj2Z0.png)
<!-- endtab -->
<!-- tab 空中-->
![](https://i.imgur.com/A1nz58m.png)
<!-- endtab -->
<!-- tab 空中 + 背擊-->
![](https://i.imgur.com/bZtiKvF.png)
<!-- endtab -->
{% endtabs %}

## 空中（Aerial） {% inlineImg /img/new_guide/aerial.png 32px %}

**<font color=blue>判定方式：只要玩家（角色）在空中攻擊時即可獲得</font>**
最容易達成的判定

## 背擊（Back） {% inlineImg /img/new_guide/back.png 32px %}

**<font color=blue>判定方式：角色必須要在敵人的背後攻擊才會產生此判定</font>**
具有一定難度的判定
部分BOSS會頻繁變換方向，因此難度又會再更上去

通常 **BOSS面向螢幕時，右邊為其背後；BOSS面向背景時，左邊為其背後**
如果是固定設置型的敵人或者無法確定方向的話，可以於兩邊嘗試攻擊一次來確定背的方向

## 浮空（Chase） {% inlineImg /img/new_guide/chase.png 32px %}

**<font color=blue>判定方式：需要敵人在空中時攻擊才會產生此判定</font>**
大部分按照正常方法無法觸發的判定，需要依靠 **<font color=red>確定判定（強制判定）</font>** 來觸發

<font size=3>**<font color=red>緹娜</font>** 這角色的被動為： **在地上攻擊時一律產生 浮空 判定**
因此這角色在重鑄與晶片等方向都以**浮空**來取代空中作為主要能力</font>


## 確定判定（強制判定）

基本上技能都會說明它會有何種判定，如下圖為李世河的破曉星光（三大）的倍率說明
- 確定判定為空中時，代表不需要角色在空中也可獲得此判定
- 當擁有**空中/背擊/浮空**這三種判定時，玩家們會稱為有 **<font color=red>三判</font>**

![](https://i.imgur.com/2MwQUw6.png)

## 小結

判定的有無對於輸出傷害有著非常重要的因素
在戰鬥的時候請盡量**保持最基本的空中（緹娜則為浮空）**攻擊判定，並且進一步讓**背擊**判定的覆蓋率達到最大，此時會需要繞背的技巧，可以善用角色的位移技能來達成

---

# 能力上限

有一部分能力其實是設有上限的，雖然超過上限後數值仍會上去，但是其實並不會有效果，而且戰力也不會提升

其實這部分的內容都還好，最重要就是 **<font color=red>技能冷卻時間</font>** (簡稱CD或-CD)，其上限值為 40%
因為 **<font color=red>CD會極大幅度影響戰力的計算</font>** ，若在換裝備以後發現戰力反而下降了（常見於物理與雙修角色），建議先檢查 CD 是不是少於 40 % 了
若不足 40% ，建議使用 [增幅PNA](/datasets/spec/ampPNA/) 中的輔助CD來補足

下面列出一些數值的上限或公式（公式僅供參考，不需要太深入了解(?)）

- **<font color=red>技能冷卻時間</font>** ：40 %
- 防禦<b><font color=red>力</font></b>換算成防禦<b><font color=red>率</font></b>公式：
防禦率 = 防禦力 / (等級 + 1) × 100 + 防禦力）× 100（%）
- **降低魔法或生命消耗** ：60 %

- 遞減數值公式
最終數值 = 100% - (100% - 詞條1) * (100% - 詞條2) * ... * (100% - 詞條n)
增加量 = (100% - 目前數值) / 100 * 額外數值

    - **遞減數值公式適用於** ：
    -- 超能爆發時增加傷害
    -- 條件增加傷害
    -- 條件暴擊率
    -- 技能冷卻時間
    -- 降低魔法或生命消耗
    -- 移動速度(%)
    - **簡述** ：由於增傷在80%或90%以上會極度嚴重遞減，因此重鑄幾乎不考慮增傷屬性。



參考：[Namu wiki](https://namu.wiki/w/%ED%81%B4%EB%A1%9C%EC%A0%80%EC%8A%A4/%EC%8B%9C%EC%8A%A4%ED%85%9C#s-3.2.4)、[Bwiki](https://wiki.biligame.com/closers/%E5%B0%81%E5%8D%B0%E8%80%85%E4%BC%A4%E5%AE%B3%E7%BB%84%E6%88%90)

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
        width: 33.3%;
        height: 100%;
        /* border: 1px solid greenyellow;*/
    }
    table {
        width: 80%;
    }
</style>