---
title: 增幅PNA
date: 2020-09-07 11:54:31
tags: 資料紀錄
category: [遊戲資料,PNA]
cover: /img/PNA/PNA_slot.png
description: "增幅PNA系統介紹(Amplification PNA)"
---

**本文僅概略敘述增幅PNA的功能，以及紀錄隱藏序列排法之用途**

# 簡介
增幅PNA(Amplification PNA，Amp PNA)是目前PNA系統中，稍微需要注意的一個部分。
開放此系統時，同時開放PNA等級80等

![](/img/PNA/PNA_slot.png)

增幅PNA跟最初始了PNA一樣，需要先開啟格子，現今版本開格費用已經降低了(原本全部需要7000萬金幣)

- 開啟周圍格時，每格 **560萬 金幣，並可獲得1技能點！**
- 開啟中間格時，需要 **1120萬 金幣，並獲得2技能點！**
- <font color=#FF0000>所以開啟所有格子，需要 5600萬 金幣，總共有10技能點</font>

---

# 種類
增幅PNA分成3種，如下。 **取得方式主要由熊熊樂園與熊熊樂園的任務獲得**

|種類|效果|
|:-:|:-|
|攻擊![](/img/PNA/PNA_ampAtk.png)|對 **種類** 增加傷害 (10等時1%)|
|防禦![](/img/PNA/PNA_ampDef.png)|生命值 (10等時最高+700)<br>每3秒恢復HP&MP (10等時恢復HP+60&MP+30)<br>物理/魔法傷害 減免 (10等時+30)<br>物理/魔法防禦力 (10等時+250)|
|輔助![](/img/PNA/PNA_ampSup.png)|魔法值 (10等時+150)<br>追加獲得道具/金幣 (10等時+3.5%)<br>移動速度 (10等時+50)<br>技能消耗減少/時間冷卻 (10等時+10%)|

---

# 序列

## 連結序列
當對應顏色的PNA進行適當的排列，即可觸發連結，連接的排(直)或列(橫)就會發亮，觸發的連結會將能力值乘以1.2倍
![](/img/PNA/PNA_ampConSerie.png)
.

## <font color=#FF0000>隱藏序列</font>
隱藏序列是增幅PNA中最重要的部分，為提供主要能力的地方。
只要將PNA因子依據特定方式擺放即可產生隱藏序列效果。

由於增幅PNA的升等費用相對來說很高，感覺上效益也不高。
若不是特別追求完美的人，至少把隱藏序列弄起來即可。

<style>
.box {
  width: 100%;
}
.pattern {
  display: inline-block;
  width: 33%;
  /* border: 1px solid red;*/
  vertical-align: middle;
}
.description {
  display: inline-block;
  width: 66%;
  /* border: 1px solid red;*/
  vertical-align: middle;
  font-size: 20px
}
.box table {
	border: 2px solid #FA0;
	border-collapse: collapse;
}
</style>

{% tabs 隱藏序列PNA %}
<!-- tab 基傷系列(3)-->

<div class='box'>
	<div class='pattern'> 
		<table>
			<tbody>
				<tr>
					<td><img src="/img/PNA/PNA_ampDef.png"></td>
					<td><img src="/img/PNA/PNA_ampSup.png"></td>
					<td><img src="/img/PNA/PNA_ampSup.png"></td>
				</tr>
				<tr>
					<td><img src="/img/PNA/PNA_ampDef.png"></td>
					<td></td>
					<td></td>
				</tr>
				<tr>
					<td></td>
					<td><img src="/img/PNA/PNA_ampAtk.png"></td>
					<td><img src="/img/PNA/PNA_ampAtk.png"></td>
				</tr>
			</tbody>
		</table>
	</div>
	<div class='description'>物理攻擊力+100<br>魔法攻擊力+ 50</div>
</div>

<div class='box'>
	<div class='pattern'> 
		<table>
			<tbody>
				<tr>
					<td></td>
					<td><img src="/img/PNA/PNA_ampDef.png"></td>
					<td><img src="/img/PNA/PNA_ampDef.png"></td>
				</tr>
				<tr>
					<td><img src="/img/PNA/PNA_ampAtk.png"></td>
					<td></td>
					<td><img src="/img/PNA/PNA_ampSup.png"></td>
				</tr>
				<tr>
					<td></td>
					<td><img src="/img/PNA/PNA_ampSup.png"></td>
					<td><img src="/img/PNA/PNA_ampAtk.png"></td>
				</tr>
			</tbody>
		</table>
	</div>
	<div class='description'>物理攻擊力+ 50<br>魔法攻擊力+100</div>
</div>

<div class='box'>
	<div class='pattern'> 
		<table>
			<tbody>
				<tr>
					<td></td>
					<td><img src="/img/PNA/PNA_ampAtk.png"></td>
					<td><img src="/img/PNA/PNA_ampSup.png"></td>
				</tr>
				<tr>
					<td></td>
					<td><img src="/img/PNA/PNA_ampSup.png"></td>
					<td><img src="/img/PNA/PNA_ampDef.png"></td>
				</tr>
				<tr>
					<td><img src="/img/PNA/PNA_ampDef.png"></td>
					<td></td>
					<td><img src="/img/PNA/PNA_ampAtk.png"></td>
				</tr>
			</tbody>
		</table>
	</div>
	<div class='description'>物理攻擊力+ 50<br>魔法攻擊力+100</div>
</div>

<!-- endtab -->

<!-- tab 爆傷系列(5)-->
<div class='box'>
	<div class='pattern'> 
		<table>
			<tbody>
				<tr>
					<td></td>
					<td><img src="/img/PNA/PNA_ampAtk.png"></td>
					<td><img src="/img/PNA/PNA_ampDef.png"></td>
				</tr>
				<tr>
					<td><img src="/img/PNA/PNA_ampSup.png"></td>
					<td><img src="/img/PNA/PNA_ampAtk.png"></td>
					<td></td>
				</tr>
				<tr>
					<td><img src="/img/PNA/PNA_ampSup.png"></td>
					<td><img src="/img/PNA/PNA_ampSup.png"></td>
					<td></td>
				</tr>
			</tbody>
		</table>
	</div>
	<div class='description'>物理暴擊傷害+ 5%<br>魔法暴擊傷害+15%</div>
</div>

<div class='box'>
	<div class='pattern'> 
		<table>
			<tbody>
				<tr>
					<td><img src="/img/PNA/PNA_ampAtk.png"></td>
					<td></td>
					<td></td>
				</tr>
				<tr>
					<td><img src="/img/PNA/PNA_ampDef.png"></td>
					<td><img src="/img/PNA/PNA_ampAtk.png"></td>
					<td><img src="/img/PNA/PNA_ampDef.png"></td>
				</tr>
				<tr>
					<td><img src="/img/PNA/PNA_ampSup.png"></td>
					<td><img src="/img/PNA/PNA_ampSup.png"></td>
					<td></td>
				</tr>
			</tbody>
		</table>
	</div>
	<div class='description'>物理暴擊傷害+15%<br>魔法暴擊傷害+ 5%</div>
</div>

<div class='box'>
	<div class='pattern'> 
		<table>
			<tbody>
				<tr>
					<td><img src="/img/PNA/PNA_ampAtk.png"></td>
					<td></td>
					<td></td>
				</tr>
				<tr>
					<td><img src="/img/PNA/PNA_ampSup.png"></td>
					<td></td>
					<td><img src="/img/PNA/PNA_ampSup.png"></td>
				</tr>
				<tr>
					<td><img src="/img/PNA/PNA_ampSup.png"></td>
					<td><img src="/img/PNA/PNA_ampDef.png"></td>
					<td><img src="/img/PNA/PNA_ampSup.png"></td>
				</tr>
			</tbody>
		</table>
	</div>
	<div class='description'>物理暴擊傷害+10%<br>魔法暴擊傷害+10%</div>
</div>

<div class='box'>
	<div class='pattern'> 
		<table>
			<tbody>
				<tr>
					<td></td>
					<td><img src="/img/PNA/PNA_ampDef.png"></td>
					<td><img src="/img/PNA/PNA_ampDef.png"></td>
				</tr>
				<tr>
					<td><img src="/img/PNA/PNA_ampSup.png"></td>
					<td><img src="/img/PNA/PNA_ampSup.png"></td>
					<td></td>
				</tr>
				<tr>
					<td></td>
					<td><img src="/img/PNA/PNA_ampAtk.png"></td>
					<td><img src="/img/PNA/PNA_ampSup.png"></td>
				</tr>
			</tbody>
		</table>
	</div>
	<div class='description'><font color=#FF0000><b>常用序列之一</b></font><br>空中暴擊傷害+ 5%<br>背擊暴擊傷害+12%<br>浮空暴擊傷害+ 5%</div>
</div>

<div class='box'>
	<div class='pattern'> 
		<table>
			<tbody>
				<tr>
					<td><img src="/img/PNA/PNA_ampDef.png"></td>
					<td><img src="/img/PNA/PNA_ampAtk.png"></td>
					<td><img src="/img/PNA/PNA_ampDef.png"></td>
				</tr>
				<tr>
					<td></td>
					<td><img src="/img/PNA/PNA_ampSup.png"></td>
					<td></td>
				</tr>
				<tr>
					<td><img src="/img/PNA/PNA_ampDef.png"></td>
					<td></td>
					<td><img src="/img/PNA/PNA_ampSup.png"></td>
				</tr>
			</tbody>
		</table>
	</div>
	<div class='description'><font color=#FF0000><b>常用序列之一</b></font><br>空中暴擊傷害+10%<br>背擊暴擊傷害+ 5%<br>浮空暴擊傷害+ 5%</div>
</div>

<!-- endtab -->

<!-- tab 爆擊率系列(2)-->
<div class='box'>
	<div class='pattern'> 
		<table>
			<tbody>
				<tr>
					<td></td>
					<td></td>
					<td><img src="/img/PNA/PNA_ampSup.png"></td>
				</tr>
				<tr>
					<td></td>
					<td><img src="/img/PNA/PNA_ampAtk.png"></td>
					<td></td>
				</tr>
				<tr>
					<td><img src="/img/PNA/PNA_ampDef.png"></td>
					<td></td>
					<td><img src="/img/PNA/PNA_ampDef.png"></td>
				</tr>
			</tbody>
		</table>
	</div>
	<div class='description'>物理暴擊率+15%<br>魔法暴擊率+15%</div>
</div>

<div class='box'>
	<div class='pattern'> 
		<table>
			<tbody>
				<tr>
					<td><img src="/img/PNA/PNA_ampDef.png"></td>
					<td></td>
					<td><img src="/img/PNA/PNA_ampSup.png"></td>
				</tr>
				<tr>
					<td></td>
					<td><img src="/img/PNA/PNA_ampAtk.png"></td>
					<td></td>
				</tr>
				<tr>
					<td></td>
					<td></td>
					<td><img src="/img/PNA/PNA_ampSup.png"></td>
				</tr>
			</tbody>
		</table>
	</div>
	<div class='description'>空中暴擊率+10%<br>背擊暴擊率+10%<br>浮空暴擊率+10%</div>
</div>
<!-- endtab -->

<!-- tab 防禦穿透系列(2)-->
<div class='box'>
	<div class='pattern'> 
		<table>
			<tbody>
				<tr>
					<td><img src="/img/PNA/PNA_ampDef.png"></td>
					<td></td>
					<td><img src="/img/PNA/PNA_ampDef.png"></td>
				</tr>
				<tr>
					<td></td>
					<td><img src="" alt="空圖片"></td>
					<td></td>
				</tr>
				<tr>
					<td><img src="/img/PNA/PNA_ampDef.png"></td>
					<td><img src="/img/PNA/PNA_ampSup.png"></td>
					<td><img src="/img/PNA/PNA_ampDef.png"></td>
				</tr>
			</tbody>
		</table>
	</div>
	<div class='description'>物理防禦穿透率+10%<br>魔法防禦穿透率+10%</div>
</div>

<div class='box'>
	<div class='pattern'> 
		<table>
			<tbody>
				<tr>
					<td><img src="/img/PNA/PNA_ampSup.png"></td>
					<td></td>
					<td><img src="/img/PNA/PNA_ampSup.png"></td>
				</tr>
				<tr>
					<td><img src="/img/PNA/PNA_ampDef.png"></td>
					<td><img src="" alt="空圖片"></td>
					<td></td>
				</tr>
				<tr>
					<td><img src="/img/PNA/PNA_ampSup.png"></td>
					<td></td>
					<td><img src="/img/PNA/PNA_ampSup.png"></td>
				</tr>
			</tbody>
		</table>
	</div>
	<div class='description'>空中防禦穿透率+10%<br>背擊防禦穿透率+10%<br>浮空防禦穿透率+10%</div>
</div>
<!-- endtab -->

<!-- tab 傷害增加系列(3)-->
<div class='box'>
	<div class='pattern'> 
		<table>
			<tbody>
				<tr>
					<td><img src="/img/PNA/PNA_ampSup.png"></td>
					<td><img src="/img/PNA/PNA_ampAtk.png"></td>
					<td><img src="/img/PNA/PNA_ampSup.png"></td>
				</tr>
				<tr>
					<td><img src="/img/PNA/PNA_ampDef.png"></td>
					<td><img src="/img/PNA/PNA_ampDef.png"></td>
					<td></td>
				</tr>
				<tr>
					<td><img src="/img/PNA/PNA_ampAtk.png"></td>
					<td></td>
					<td></td>
				</tr>
			</tbody>
		</table>
	</div>
	<div class='description'>傷害+5%</div>
</div>

<div class='box'>
	<div class='pattern'> 
		<table>
			<tbody>
				<tr>
					<td></td>
					<td><img src="/img/PNA/PNA_ampDef.png"></td>
					<td><img src="/img/PNA/PNA_ampDef.png"></td>
				</tr>
				<tr>
					<td><img src="/img/PNA/PNA_ampSup.png"></td>
					<td><img src="/img/PNA/PNA_ampDef.png"></td>
					<td></td>
				</tr>
				<tr>
					<td><img src="/img/PNA/PNA_ampAtk.png"></td>
					<td></td>
					<td><img src="/img/PNA/PNA_ampSup.png"></td>
				</tr>
			</tbody>
		</table>
	</div>
	<div class='description'>空中增加傷害+10%<br>背擊增加傷害+ 5%<br>浮空增加傷害+ 5%</div>
</div>

<div class='box'>
	<div class='pattern'> 
		<table>
			<tbody>
				<tr>
					<td><img src="/img/PNA/PNA_ampSup.png"></td>
					<td><img src="/img/PNA/PNA_ampDef.png"></td>
					<td><img src="/img/PNA/PNA_ampSup.png"></td>
				</tr>
				<tr>
					<td></td>
					<td></td>
					<td><img src="/img/PNA/PNA_ampSup.png"></td>
				</tr>
				<tr>
					<td><img src="/img/PNA/PNA_ampAtk.png"></td>
					<td><img src="/img/PNA/PNA_ampAtk.png"></td>
					<td></td>
				</tr>
			</tbody>
		</table>
	</div>
	<div class='description'>空中增加傷害+ 5%<br>背擊增加傷害+12%<br>浮空增加傷害+ 5%</div>
</div>


<!-- endtab -->

<!-- tab 其他系列(2)-->
<div class='box'>
	<div class='pattern'> 
		<table>
			<tbody>
				<tr>
					<td><img src="/img/PNA/PNA_ampAtk.png"></td>
					<td></td>
					<td><img src="/img/PNA/PNA_ampAtk.png"></td>
				</tr>
				<tr>
					<td></td>
					<td><img src="/img/PNA/PNA_ampDef.png"></td>
					<td></td>
				</tr>
				<tr>
					<td><img src="/img/PNA/PNA_ampSup.png"></td>
					<td><img src="/img/PNA/PNA_ampSup.png"></td>
					<td><img src="/img/PNA/PNA_ampSup.png"></td>
				</tr>
			</tbody>
		</table>
	</div>
	<div class='description'><font color=#FF0000><b>常用序列之一</b></font><br>攻擊速度+10%</div>
</div>

<div class='box'>
	<div class='pattern'> 
		<table>
			<tbody>
				<tr>
					<td><img src="/img/PNA/PNA_ampSup.png"></td>
					<td></td>
					<td><img src="/img/PNA/PNA_ampAtk.png"></td>
				</tr>
				<tr>
					<td><img src="/img/PNA/PNA_ampDef.png"></td>
					<td><img src="/img/PNA/PNA_ampDef.png"></td>
					<td><img src="/img/PNA/PNA_ampSup.png"></td>
				</tr>
				<tr>
					<td></td>
					<td><img src="/img/PNA/PNA_ampSup.png"></td>
					<td></td>
				</tr>
			</tbody>
		</table>
	</div>
	<div class='description'>超能爆發時傷害+10%</div>
</div>
<!-- endtab -->
{% endtabs %}

---

# 強化費用

增幅PNA使用金幣與 **<font color=#F00>強化材料 (Lv 5以上則變為 進化材料)</font>** 來升級，強化材料可透過分解初始PNA以及增幅PNA來取得

**<font size=5>注意：一樣可以使用特殊PNA升級的輔助道具使用</font>** {% inlineImg https://i.imgur.com/ofbuOah.png 64px %}

|等級(Lv.)|所需材料|所需金幣|成功機率|
|:-:|:-:|:-:|:-:|
|0|1080(強化)|89萬|75%|
|1|1130(強化)|144萬|75%|
|2|1210(強化)|233萬|75%|
|3|1340(強化)|377萬|75%|
|4|1550(強化)|610萬|75%|
|5|1210(進化)|314萬|**30%**|
|6|1340(進化)|159萬|60%|
|7|1550(進化)|265萬|50%|
|8|1890(進化)|358萬|40%|
|9|2440(進化)|479萬|**10%**|
|最低消耗|6310(強化) + 8430(進化)|3028萬|-|