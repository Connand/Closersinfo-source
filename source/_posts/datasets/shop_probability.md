---
title: 轉換器與福袋機率表
date: 2024-04-04 21:38:29
tags: 資料紀錄
category: [遊戲資料,機率資料]
cover: /img/material/syringe_bag.png
description: ""
---

來源為韓版官方公布的機率表：https://closers.nexon.com/News/Notice/View?n4ArticleSN=133964
韓版官方付費道具機率表：https://cs.nexon.com/helpBoard/popuphelpview/5032

**公告中提到：**
- **<font color=#ef674d>所有機率均已通過遊戲記錄分析驗證，可正常運行。</font>**
- **<font color=#ef674d>因為四捨五入到小數第二位會造成些許差異，總機率應為100%，但根據此表計算總機率不一定是100%。</font>**
- **<font color=#ef674d>％ (百分比) 標示到小數點第二位，比例到小數點第一位。</font>**

<style>

  table {
    text-align: center;
    font-weight: bold;
	width: 45%;
  }
  table th,
  table td {
    height: 30px; /*统一每一行的默认高度*/
    border: 1px solid #dedede; /*内部边框样式*/
    padding: 0 10px; /*内边距*/
  }
  table th {
    font-weight: bold; /*加粗*/
    text-align: center !important; /*内容居中，加上 !important 避免被 Markdown 样式覆盖*/
    background: rgba(158,188,226,0.2); /*背景色*/
  }

  table tbody tr:nth-child(2n) {
    background: rgba(158,188,226,0.12);
  }

  table th {
    white-space: nowrap; /*表头内容强制在一行显示*/
  }

  table th:nth-of-type(1){
    width: 20%;
  }
  table th:nth-of-type(2){
    width: 10%;
  }

</style>

---

# 時裝轉換器倍數機會數與倍數機率表

**僅復刻時裝才套用倍數機會 (遊戲內有標示CHANCE ON的時裝)**
- 解釋：根據一次抽取的數量，先透過 **倍數機會數機率表** 決定產生幾格倍數格，每一格再透過 **每格倍數機率表** 決定會有幾倍。

## 倍數機會數機率表

因為表格太大，請直接參考[舊台版公告](https://www.mangot5.com/Index/News/NoticeDetail?contentNo=52197)或[韓版公告](https://closers.nexon.com/News/Guide/View?n4ArticleSN=245&n4ArticleCategorySN=4)

## 每格倍數機率表

| 倍數 | 機率 |
| :- | :-: |
| 2 倍 | 84.85 % |
| 3 倍 | 8.00 % |
| 4 倍 | 4.00 % |
| 5 倍 | 2.00 % |
| 6 倍 | 0.50 % |
| 7 倍 | 0.30 % |
| 8 倍 | 0.20 % |
| 9 倍 | 0.10 % |
| 10 倍 | 0.05 % |

---

# 通用寵物轉換器機率表

| 內容 | 機率 |
| :- | :-: |
| 當期寵物 | 5.00 % |
| 次元世界之透明寵物幼體保管箱 | 5.00 % |
| 菁英寵物 | 15.00 % |
| 一般寵物 | 75.00 % |

---

# 通用時裝轉換器機率表

**根據時裝類型數、角色數等來平均分配**

{% tabs 標籤區名稱 %}
<!-- tab 台版-->
| 內容 | 機率 |
| :- | :-: |
| 當期時裝全套箱 | 0.07 % |
| 當期時裝飾品 | 0.50 % |
| 當期時裝威嚴 | 0.15 % |
| 當期時裝部位 | <font color=red>18.50 %</font> |
| 輝煌飾品選擇箱子 | 0.40 % |
| 輝煌飾品全套選擇箱子 | 0.005 % |
| 稀有飾品選擇箱子 | 1.00 % |
| 稀有飾品全套選擇箱子 | 0.10 % |
| 確定染色藥水 | 0.05 % |
| 強化燃料 +18 | 0.0005 % |
| 強化燃料 +17 袋子 | 0.0010 % |
| 強化燃料 +16 袋子 | 0.0050 % |
| 強化燃料 +15 袋子 | 0.3000 % |
| 強化燃料 +14 袋子 | 2.0000 % |
| 強化燃料 +13 袋子 | 3.5000 % |
| SS 確定 D 零件：裝備 | 0.01 % |
| SS 確定 D 零件：時裝 | 0.005 % |
| SS/S D 零件：裝備 | <font color=red>0.10 %</font> |
| SS/S D 零件：時裝 | 0.05 % |
| S 確定 D 零件：裝備 | 0.20 % |
| S 確定 D 零件：時裝 | <font color=red>0.10 %</font> |
| 技能 D 零件：裝備 | 0.20 % |
| 技能 D 零件：時裝 | 0.10 % |
| 高級 D 零件：裝備 | 3.50 % |
| 高級 D 零件：時裝 | 1.50 % |
| 一般 D 零件：裝備 | 4.50 % |
| 一般 D 零件：時裝 | 3.50 % |
| All in one 護符箱子（1日） | 2.00 % |
| UNION特製雙倍經驗藥水選擇箱子 | 3.00 % |
| α重鑄等化器（Lv.81～92） | <font color=red>0.50 %</font> |
| 超越秘藥 | 3.00 % |
| 強化器防護劑 | 1.00 % |
| 幸運強化器燃料 | 2.00 % |
| 一般強化器燃料 | <font color=red>5.00 %</font> |
| 強化增益使用契約券 | 0.05 % |
| 強化槽類型變更工具 | 3.00 % |
| 晶片保護裝置 | 1.00 % |
| 完美PNA進化套裝 | <font color=red>5.10 %</font> |
| 晶瑩之服裝重鑄等化器 | 2.50 % |
| 常見超能纖維 | 4.00 % |
| 燦爛超能纖維 | 2.00 % |
| 稀有同步纖維選擇箱子 | <font color=red>2.00 %</font> |
| 輝煌同步纖維選擇箱子 | 0.50 % |
| 時裝合成纖維 | 0.50 % |
| 伺服器喇叭 | 2.00 % |
| UNION裝備品級潤滑劑 | 4.00 % |
| 品質保證封印 | 2.00 % |
| UNION 名字標籤 | 0.10 % |
| 特工名條 | 0.05 % |
| 高濃縮梅子汁 | 1.00 % |
| 營養飼料 | <font color=red>4.584 %</font> |
| 復活膠囊11個 | <font color=red>4.00 %</font> |
| 神效雙倍恢復膠囊 | <font color=red>3.77 %</font> |
<!-- endtab -->
<!-- tab 韓版-->
| 內容 | 機率 |
| :- | :-: |
| 當期時裝全套箱 | 0.07 % |
| 當期時裝飾品 | 0.50 % |
| 當期時裝威嚴 | 0.15 % |
| 當期時裝部位 | <font color=red>16.00 %</font> |
| 輝煌飾品選擇箱子 | 0.40 % |
| 輝煌飾品全套選擇箱子 | 0.005 % |
| 稀有飾品選擇箱子 | 1.00 % |
| 稀有飾品全套選擇箱子 | 0.10 % |
| 確定染色藥水 | 0.05 % |
| 強化燃料 +18 | 0.0005 % |
| 強化燃料 +17 袋子 | 0.0010 % |
| 強化燃料 +16 袋子 | 0.0050 % |
| 強化燃料 +15 袋子 | 0.3000 % |
| 強化燃料 +14 袋子 | 2.0000 % |
| 強化燃料 +13 袋子 | 3.5000 % |
| SS 確定 D 零件：裝備 | 0.01 % |
| SS 確定 D 零件：時裝 | 0.005 % |
| SS/S D 零件：裝備 | <font color=red>0.07 %</font> |
| SS/S D 零件：時裝 | 0.05 % |
| S 確定 D 零件：裝備 | 0.20 % |
| S 確定 D 零件：時裝 | <font color=red>0.15 %</font> |
| 技能 D 零件：裝備 | 0.20 % |
| 技能 D 零件：時裝 | 0.10 % |
| 高級 D 零件：裝備 | 3.50 % |
| 高級 D 零件：時裝 | 1.50 % |
| 一般 D 零件：裝備 | 4.50 % |
| 一般 D 零件：時裝 | 3.50 % |
| All in one 護符箱子（1日） | 2.00 % |
| UNION特製雙倍經驗藥水選擇箱子 | 3.00 % |
| α重鑄等化器（Lv.81～92） | <font color=red>1.00 %</font> |
| 超越秘藥 | 3.00 % |
| 強化器防護劑 | 1.00 % |
| 幸運強化器燃料 | 2.00 % |
| 一般強化器燃料 | <font color=red>5.20 %</font> |
| 強化增益使用契約券 | 0.05 % |
| 強化槽類型變更工具 | 3.00 % |
| 晶片保護裝置 | 1.00 % |
| 完美PNA進化套裝 | <font color=red>6.00 %</font> |
| 晶瑩之服裝重鑄等化器 | 2.50 % |
| 常見超能纖維 | 4.00 % |
| 燦爛超能纖維 | 2.00 % |
| 稀有同步纖維選擇箱子 | <font color=red>3.50 %</font> |
| 輝煌同步纖維選擇箱子 | 0.50 % |
| 時裝合成纖維 | 0.50 % |
| 伺服器喇叭 | 2.00 % |
| UNION裝備品級潤滑劑 | 4.00 % |
| 品質保證封印 | 2.00 % |
| UNION 名字標籤 | 0.10 % |
| 特工名條 | 0.05 % |
| 高濃縮梅子汁 | 1.00 % |
| 營養飼料 | <font color=red>4.60 %</font> |
| 復活膠囊11個 | <font color=red>3.9164 %</font> |
| 神效雙倍恢復膠囊 | <font color=red>3.7171 %</font> |
| <font color=red>晶片保護裝置</font> | 1.00 % |
| <font color=red>3星BOSS威嚴選擇箱子 ver 1.2</font> | 0.50 % |
| <font color=red>晶瑩之服裝重鑄等化器</font> | 2.50 % |
| <font color=red>UNION特製雙倍經驗藥水選擇箱子</font> | 3.00% |
<!-- endtab -->
{% endtabs %}

---

# 幸運福袋機率表

### {% inlineImg /img/material/syringe_bag.png 48px %} [強化器防護劑] 幸運福袋

| 內容與數量 | 機率 |
| :- | :-: |
| {% inlineImg /img/material/HQ_154011_SUPPLEMENT_ENCHANT.PNG 40px %} 強化器防護劑 x 7 | 83.54 % |
| {% inlineImg /img/material/HQ_154011_SUPPLEMENT_ENCHANT.PNG 40px %} 強化器防護劑 x 8 | 8.00 % |
| {% inlineImg /img/material/HQ_154011_SUPPLEMENT_ENCHANT.PNG 40px %} 強化器防護劑 x 9 | 4.86 % |
| {% inlineImg /img/material/HQ_154011_SUPPLEMENT_ENCHANT.PNG 40px %} 強化器防護劑 x 10 | 2.00 % |
| {% inlineImg /img/material/HQ_154011_SUPPLEMENT_ENCHANT.PNG 40px %} 強化器防護劑 x 15 | 1.00 % |
| {% inlineImg /img/material/HQ_154011_SUPPLEMENT_ENCHANT.PNG 40px %} 強化器防護劑 x 20 | 0.30 % |
| {% inlineImg /img/material/HQ_154011_SUPPLEMENT_ENCHANT.PNG 40px %} 強化器防護劑 x 30 | 0.20 % |
| {% inlineImg /img/material/HQ_154011_SUPPLEMENT_ENCHANT.PNG 40px %} 強化器防護劑 x 50 | 0.10 % |

### {% inlineImg /img/material/elixir_bag.png 48px %} [超越秘藥] 幸運福袋

| 內容與數量 | 機率 |
| :- | :-: |
| {% inlineImg /img/material/elixir.png 40px %} 超越秘藥 x 17 | 64.54 % |
| {% inlineImg /img/material/elixir.png 40px %} 超越秘藥 x 18 | 19.00 % |
| {% inlineImg /img/material/elixir.png 40px %} 超越秘藥 x 19 | 10.36 % |
| {% inlineImg /img/material/elixir.png 40px %} 超越秘藥 x 20 | 4.00 % |
| {% inlineImg /img/material/elixir.png 40px %} 超越秘藥 x 30 | 1.00 % |
| {% inlineImg /img/material/elixir.png 40px %} 超越秘藥 x 40 | 0.50 % |
| {% inlineImg /img/material/elixir.png 40px %} 超越秘藥 x 50 | 0.30 % |
| {% inlineImg /img/material/elixir.png 40px %} 超越秘藥 x 70 | 0.20 % |
| {% inlineImg /img/material/elixir.png 40px %} 超越秘藥 x 100 | 0.10 % |

### 黑暗光輝飾品隨機箱子

| 內容 | 機率 |
| :- | :-: |
| {% inlineImg https://i.imgur.com/j8l7M8H.png 40px %} 濃縮黑暗光輝眼線紋身[稀有] x 1 | 35.00 % |
| {% inlineImg https://i.imgur.com/Dnm3PJT.png 40px %} 濃縮黑暗光輝頭飾[稀有] x 1 | 25.00 % |
| {% inlineImg https://i.imgur.com/GAeSil7.png 40px %} 濃縮黑暗光輝翅膀[稀有] x 1 | 30.00 % |
| {% inlineImg https://i.imgur.com/fiYIa5J.png 40px %} 濃縮黑暗光輝眼瞳[稀有] x 1 | 10.00 % |

### +13/+14 燃料隨機箱子

| 內容 | 機率 |
| :- | :-: |
| {% inlineImg /img/material/fuel13.PNG 40px %} 強化燃料 +13 x 1 | 99.00 % |
| {% inlineImg /img/material/fuel14.PNG 40px %} 強化燃料 +14 x 1 | 1.00 % |

### +14/+15 燃料隨機箱子

| 內容 | 機率 |
| :- | :-: |
| {% inlineImg /img/material/fuel14.PNG 40px %} 強化燃料 +14 x 1 | 95.00 % |
| {% inlineImg /img/material/fuel15.PNG 40px %} 強化燃料 +15 x 1 | 5.00 % |

---