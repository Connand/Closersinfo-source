---
title: 傷害公式
date: 2020-01-01
tags: 資料紀錄
category: [遊戲資料,其他]
cover: /img/HQ_JUDGE_TRUE_DAMAGE.png
description: "數學教室"
---

# 公式

依照參考資料所提，傷害公式為

{% hideToggle 詳細公式 %}

<font size=3>

> 總傷害 = 物魔攻擊力 * 技能倍率 * (1 + 物魔暴傷 + 空暴傷 + 背暴傷 + 浮暴傷 - 敵抗暴) * (1 + 空增傷 + 背增傷 + 浮增傷 + 超能暴發增傷 + 種族增傷) * (1 + 各項增益(技能、被動等)) * (1 - 敵方穿透後剩餘防禦率) * (1 - 敵人減傷) 

> TD = base * multiplier * (1 + cd + acd + bcd + ccd - ecr)* (1 + adi + bdi + cdi + padi + tdi) * (1 + skill_buffs) * (1 - rdr) * (1 - dr) + receiver * (1 + acd + bcd + ccd - ecr) * (1 - dr)
</font>
{% endhideToggle %}

簡化描述為

<font size=3>

> 總傷害 = 基傷 * 技能倍率 * (總暴傷 - 暴抗) * 總增傷 * <font color=red>技能BUFF (第四乘區)</font> * (1 - 防禦率) * (1 - 減傷)  
</font>

但是現今版本中，角色防禦穿透已經是必定大於 100% 的數，因此可以忽略與防禦力相關的乘項，進一步改寫成

<font size=4>

{% note success simple %}
總傷害 = 基傷 * 技能倍率 * (總暴傷 - <font color=red>暴抗</font>) * 總增傷 * <font color=red>技能BUFF (第四乘區)</font> * <font color=red>(1 - 減傷)</font> 
{% endnote %}

若是 {% inlineImg /img/HQ_JUDGE_TRUE_DAMAGE.png 64px %}**<font color=red>真傷</font>** ，可將減傷乘項忽略，寫成
{% note success simple %}
總傷害 (<font color=red>真傷</font>) = 基傷 * 技能倍率 * (總暴傷 - <font color=red>暴抗</font>) * 總增傷 * <font color=red>技能BUFF (第四乘區)</font> 
{% endnote %}
</font>

其中
- `基傷 = 基數 * 總基傷(%)`
- `(1 - 減傷)` 是會使總傷害降低的乘項，是敵人(BOSS)有的數值
依據攻擊狀態與否決定是否為減傷狀態（通常無攻擊時為0減傷狀態）
- `暴抗` 無論傷害是否為真實傷害，均會算入公式之中
- **<font color=red>技能BUFF (第四乘區)</font>** 主要是技能提及的血量相關的說明增加，例如`血量(大於/小於) X %，傷害增加 Y %`。
由於數量少，因此這部分的傷害提昇會非常明顯。詳細可由[Bwiki傷害組成](https://wiki.biligame.com/closers/%E5%B0%81%E5%8D%B0%E8%80%85%E4%BC%A4%E5%AE%B3%E7%BB%84%E6%88%90)的`其他独立区间`查看

---

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