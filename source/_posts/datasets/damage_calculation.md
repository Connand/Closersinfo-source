---
title: 傷害公式與暴抗表
date: 2023-04-21 16:40:00
tags: 資料紀錄
category: [遊戲資料,其他]
cover: /img/HQ_JUDGE_TRUE_DAMAGE.png
description: "數學教室"
---

# 公式

依照參考資料所提，傷害公式為

{% hideToggle 詳細公式 %}

<font size=3>

> 總傷害 = 物魔攻擊力 * 技能倍率 * (1 + 暴傷 + 空暴傷 + 背暴傷 + 浮暴傷 - 敵抗暴) * (1 + 空傷 + 背傷 + 浮傷 + 超能暴發傷 + 種族增傷) * (1 + 技能之類給的增益) * (1 - 敵方穿透後剩餘防禦率) * (1 - 敵人減傷) + (真傷)接收器 * (1 + 暴傷 + 空暴傷 + 背暴傷 + 浮暴傷 - 敵抗暴) * (1 - 敵人減傷)

> TD = base * multiplier * (1 + cd + acd + bcd + ccd - ecr)* (1 + adi + bdi + cdi + padi + tdi) * (1 + skill_buffs) * (1 - rdr) * (1 - dr) + receiver * (1 + cd + acd + bcd + ccd - ecr) * (1 - dr)
</font>
{% endhideToggle %}

簡化描述為

<font size=3>

> 總傷害 = 基傷 * 技能倍率 * (總暴傷 - 暴抗) * 總增傷 * <font color=red>技能BUFF (第四乘區)</font> * (1 - 防禦率) * (1 - 減傷) <font color=red>+</font> 接收器 * (總暴傷 - 暴抗) * (1 - 減傷)
</font>

但是現今版本中，由於晶片提供大量防禦穿透值，
因此角色防禦穿透已經是必定大於 100% 的數，因此可以忽略與防禦力相關的乘項，進一步改寫成

<font size=4>

{% note success simple %}
總傷害 = 基傷 * 技能倍率 * (總暴傷 - <font color=red>暴抗</font>) * 總增傷 * <font color=red>技能BUFF (第四乘區)</font> * <font color=red>(1 - 減傷)</font> <font color=purple>+</font> 接收器 * (總暴傷 - 暴抗) * (1 - 減傷)
{% endnote %}

若是 {% inlineImg /img/HQ_JUDGE_TRUE_DAMAGE.png 64px %}**<font color=red>真傷</font>** ，可將減傷乘項忽略，寫成
{% note success simple %}
總傷害 (<font color=red>真傷</font>) = 基傷 * 技能倍率 * (總暴傷 - <font color=red>暴抗</font>) * 總增傷 * <font color=red>技能BUFF (第四乘區)</font> <font color=purple>+</font> 接收器 * (總暴傷 - 暴抗) * (1 - 減傷)
{% endnote %}
</font>

其中
- `基傷 = 基數 * 總基傷(%)` 可參考下方 [基傷 vs 暴傷](#基傷-vs-暴傷) 計算
- `(1 - 減傷)` 是會使總傷害降低的乘項，是敵人(BOSS)有的數值
依據攻擊狀態與否決定是否為減傷狀態（通常無攻擊時為0減傷狀態）
- `暴抗` 無論傷害是否為真實傷害，均會算入公式之中
- **<font color=red>技能BUFF (第四乘區)</font>** 主要是技能提及的血量相關的說明增加，例如`血量(大於/小於) X %，傷害增加 Y %`。
由於數量少，因此這部分的傷害提昇會非常明顯。詳細可由[Bwiki傷害組成](https://wiki.biligame.com/closers/%E5%B0%81%E5%8D%B0%E8%80%85%E4%BC%A4%E5%AE%B3%E7%BB%84%E6%88%90)的`其他独立区间`查看
- 仍有更多乘項可能尚未提及 ~~如果有空想到再補充~~

---

# 常見BOSS之血量與暴抗與減傷表

均為估算值，僅供參考 (以 `暴擊傷害抵抗` 做排序)

**若處於非攻擊狀態，減傷一律為 0%**

{% tabs 暴抗表 %}
<!-- tab 常見副本-->

|BOSS|血量 (億)|暴擊傷害抵抗 (%)|減傷 (%)
|:-|:-:|:-:|:-:
|模擬戰 Lv. 2|2666|3400|50
|16村GW|6000|3100|50 (基頓)<br>75 (尤德、鏡者)
|野獸王上位副本|?|3000|50
|[極刑] 龍之刑場|-|3000|50
|（火焰王上位4人）普羅米修斯|60000|2600|20
|（火焰王上位4人）吉達|50000|2600|20
|（火焰王）普羅米修斯|50000|2500|20
|（火焰王）吉達|25000|2500|20
|（野獸王）貝西摩斯|6000|2500|50
|（野獸王）貝斯特|5000|2500|50
|（野獸王）亞特梅爾|5000|2500|50
|（野獸王）曼蒂克|5000|2500|30
|（火焰王）狂氣的黃昏|3700|2500|20
|（火焰王）幻想的木偶劇|3100|2500|20
|（火焰王）監視者之房|2600|2500|20
|另一個路西法|2800(困難)<br>2000(普通)|2200|30
|達斯特|2200(困難)<br>1500(普通)|1800|30
|機械王分析室|?|1800|30
<!-- endtab -->

<!-- tab 四人版機械王、野獸王-->

韓版於2023/05/18下放為4人副本 [更新公告](https://closers.nexon.com/News/Notice/View?n4ArticleSN=141079)
以單人血量為主，實際上會依人數變動 **(2人1.5倍、3人2倍、4人2.5倍)**

|BOSS|血量 (億)|暴擊傷害抵抗 (%)|減傷 (%)
|:-:|:-:|:-:|:-:
|野獸王|1600|2500|50
|野獸王手下|1200|2500|50
|機械王|1100 + 600 + ?|2000|50
|機械王手下|1100|1800|50
<!-- endtab -->
{% endtabs %}


---

# 基傷 vs 暴傷

根據自身角色約3000萬戰力的狀態，站街數值約為下表

|基數|總基傷(%)|總暴傷(%)|總增傷
|:-:|:-:|:-:|:-:
|33360|326.2|3269|649.2

今天假設一個BOSS的 **<font color=red>暴擊傷害抵抗為 2000%</font>**

今天分別在武器裝上T4的基傷晶片跟暴傷晶片
|T4基傷|T4暴傷|+25 T4基傷|+25 T4暴傷
|:-:|:-:|:-:|:-:
|370|30%|703|63%

套入傷害公式計算 (忽略接收器、技能倍率、減傷等)

|晶片|總傷害|增幅
|:-:|:-:|:-:
|無晶片|8,964,996|-
|T4基傷|9,064,428|1.10%
|T4暴傷|9,176,935|2.36%
|+25 T4基傷|9,153,917|2.10%
|+25 T4暴傷|9,410,067|4.96%

{% note success simple %}
由此計算可知，**暴傷晶片**的效果是明顯高於基傷晶片的 (甚至+0的暴傷效果高於+25的基傷)
{% endnote %}

並且在暴抗更高的情況下，此差距值會拉得更開

但是基傷晶片在戰力計算上則是比較高的
<font color=red>23/09/19註：僅保證戰力約在4000萬以下時成立，戰力越高時暴傷所提供的戰力也會越高</font>

{% note warning simple %}
**本文若有錯誤之處歡迎提出！**
{% endnote %}

傷害公式參考資料：https://forum.gamer.com.tw/C.php?bsn=23655&snA=5446

Bwiki傷害組成：https://wiki.biligame.com/closers/%E5%B0%81%E5%8D%B0%E8%80%85%E4%BC%A4%E5%AE%B3%E7%BB%84%E6%88%90


<style>
    table {
        text-align: center;
        font-weight: bold;
        width: 80%;
    }
</style>