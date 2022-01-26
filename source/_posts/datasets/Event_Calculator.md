---
title: 字母活動計算機
date: 2022-01-23 13:45:59
tags: 資料紀錄
category: [遊戲資料, 其他]
cover: https://images.mangot5.com/Images/cms/happycode/20220120/1642641329691.jpg
description: "字母活動專用"
---
[活動網址](https://cls.mangot5.com/game/cls/news/detail?contentNo=48046)

<script>
    let normal_all = true
    let rare_all = true
    window.onload = function () {
        document.getElementById('check_all_rare').onclick = function () {
            let rare_checkboxes = document.querySelectorAll('input[name=RQ_ck02]')
            for (let checkbox of rare_checkboxes) {
                checkbox.checked = rare_all
            }
            rare_all = !rare_all
        }
        document.getElementById('check_all_normal').onclick = function () {
            let normal_checkboxes = document.querySelectorAll('input[name=RQ_ck01]')
            for (let checkbox of normal_checkboxes) {
                checkbox.checked = normal_all
            }
            normal_all = !normal_all
        }
        document.getElementById('result_btn').onclick = function () {
            let normal_checkboxes = document.querySelectorAll('input[name=RQ_ck01]')
            let rare_checkboxes = document.querySelectorAll('input[name=RQ_ck02]')
			let normalCounters = {}
            let rareCounters = {}
            for (const c of "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789") {
              normalCounters[c] = 0
              rareCounters[c] = 0
            }
            for (let checkbox of normal_checkboxes) {
                let label = document.querySelector(`label[for=${checkbox.id}]`).innerHTML
                console.log(label, checkbox.value, checkbox.checked)
                if(checkbox.checked) continue
                for (const c of label) {
                    if(c == ' ') continue
                    normalCounters[c]++
                }
            }
            for (let checkbox of rare_checkboxes) {
                let label = document.querySelector(`label[for=${checkbox.id}]`).innerHTML
                console.log(label, checkbox.value, checkbox.checked)
                if(checkbox.checked) continue
                for (const c of label) {
                    if(c == ' ') continue
                    rareCounters[c]++
                }
            }
            let str1 = ""
            for (let e in normalCounters) {
                if(normalCounters[e] == 0) {
                    str1 += ("<font color=red>" + e + ": &emsp;" + normalCounters[e] + "</font><br>")
                }
                else {
                    str1 += (e + ": &emsp;" + normalCounters[e] + "<br>")
                }
            }
            let str2 = ""
            for (let e in normalCounters) {
                if(rareCounters[e] == 0) {
                    str2 += ("<font color=red>" + e + ": &emsp;" + rareCounters[e] + "</font><br>")
                }
                else {
                    str2 += (e + ": &emsp;" + rareCounters[e] + "<br>")
                }
            }
            document.querySelector(`font[name="normalResult"]`).innerHTML = str1
            document.querySelector(`font[name="rareResult"]`).innerHTML = str2
        };
    };
</script>

<style>
    table,
    td {
        border: 1px solid #333;
        width: 750px;
        height: 750px;
        vertical-align:top;
        padding-left: 25px;
    }

    thead,
    tfoot {
        background-color: #333;
        color: #000;
    }
</style>

<table>
    <thead>
        <tr>
            <th colspan="3">字母活動計算機<br>使用方法：勾選已經湊齊的字串，按下"計算結果"，就能算出剩下的字串還需要多少字母。</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                <b>普通字串</b><button id="check_all_normal" class="btn-beautify button--animated blue" target="_blank" rel="noopener" href="" title="全選/全消"><i class="far fa-hand-point-right"></i><span>全選/全消</span></button><br>
                <div>
                    <input name="RQ_ck01" id="RQ_ck01_01" type="checkbox" value="1" /> 
                    <label for="RQ_ck01_01">CLOSERS2022</label>
                </div>
                <div>
                    <input name="RQ_ck01" id="RQ_ck01_02" type="checkbox" value="2" /> 
                    <label for="RQ_ck01_02">SOLOMON</label>
                </div>
                <div>
                    <input name="RQ_ck01" id="RQ_ck01_03" type="checkbox" value="3" /> 
                    <label for="RQ_ck01_03">SHINING STAR</label>
                </div>
                <div>
                    <input name="RQ_ck01" id="RQ_ck01_04" type="checkbox" value="4" /> 
                    <label for="RQ_ck01_04">BLACK LAMBS</label>
                </div>
                <div>
                    <input name="RQ_ck01" id="RQ_ck01_05" type="checkbox" value="5" /> 
                    <label for="RQ_ck01_05">WOLFDOG</label>
                </div>
                <div>
                    <input name="RQ_ck01" id="RQ_ck01_06" type="checkbox" value="6" /> 
                    <label for="RQ_ck01_06">WILDHUTER</label>
                </div>
                <div>
                    <input name="RQ_ck01" id="RQ_ck01_07" type="checkbox" value="7" /> 
                    <label for="RQ_ck01_07">RATTUS</label>
                </div>
                <div>
                    <input name="RQ_ck01" id="RQ_ck01_08" type="checkbox" value="8" /> 
                    <label for="RQ_ck01_08">SEHA63</label>
                </div>
                <div>
                    <input name="RQ_ck01" id="RQ_ck01_09" type="checkbox" value="9" /> 
                    <label for="RQ_ck01_09">SEULBI430</label>
                </div>
                <div>
                    <input name="RQ_ck01" id="RQ_ck01_10" type="checkbox" value="10" /> 
                    <label for="RQ_ck01_10">YURI517</label>
                </div>
                <div>
                    <input name="RQ_ck01" id="RQ_ck01_11" type="checkbox" value="11" /> 
                    <label for="RQ_ck01_11">J1122</label>
                </div>
                <div>
                    <input name="RQ_ck01" id="RQ_ck01_12" type="checkbox" value="12" /> 
                    <label for="RQ_ck01_12">MISTELTEIN1031</label>
                </div>
                <div>
                    <input name="RQ_ck01" id="RQ_ck01_13" type="checkbox" value="13" /> 
                    <label for="RQ_ck01_13">NATA716</label>
                </div>
                <div>
                    <input name="RQ_ck01" id="RQ_ck01_14" type="checkbox" value="14" /> 
                    <label for="RQ_ck01_14">LEVIA66</label>
                </div>
                <div>
                    <input name="RQ_ck01" id="RQ_ck01_15" type="checkbox" value="15" /> 
                    <label for="RQ_ck01_15">HARPY1213</label>
                </div>
                <div>
                    <input name="RQ_ck01" id="RQ_ck01_16" type="checkbox" value="16" /> 
                    <label for="RQ_ck01_16">TINA528</label>
                </div>
                <div>
                    <input name="RQ_ck01" id="RQ_ck01_17" type="checkbox" value="17" /> 
                    <label for="RQ_ck01_17">VIOLET103</label>
                </div>
                <div>
                    <input name="RQ_ck01" id="RQ_ck01_18" type="checkbox" value="18" /> 
                    <label for="RQ_ck01_18">WOLFGANG45</label>
                </div>
                <div>
                    <input name="RQ_ck01" id="RQ_ck01_19" type="checkbox" value="19" /> 
                    <label for="RQ_ck01_19">LUNA923</label>
                </div>
                <div>
                    <input name="RQ_ck01" id="RQ_ck01_20" type="checkbox" value="20" /> 
                    <label for="RQ_ck01_20">SOMA326</label>
                </div>
                <div>
                    <input name="RQ_ck01" id="RQ_ck01_21" type="checkbox" value="21" /> 
                    <label for="RQ_ck01_21">BAI99</label>
                </div>
                <div>
                    <input name="RQ_ck01" id="RQ_ck01_22" type="checkbox" value="22" /> 
                    <label for="RQ_ck01_22">SETH825</label>
                </div>
                <div>
                    <input name="RQ_ck01" id="RQ_ck01_23" type="checkbox" value="23" /> 
                    <label for="RQ_ck01_23">MIRAE112</label>
                </div>
                <div>
                    <input name="RQ_ck01" id="RQ_ck01_24" type="checkbox" value="24" /> 
                    <label for="RQ_ck01_24">CHEOLSUKIM72</label>
                </div>
                <div>
                    <input name="RQ_ck01" id="RQ_ck01_25" type="checkbox" value="25" /> 
                    <label for="RQ_ck01_25">EUNHA412</label>
                </div>
                <div>
                    <input name="RQ_ck01" id="RQ_ck01_26" type="checkbox" value="26" /> 
                    <label for="RQ_ck01_26">LUCY228</label>
                </div>
                <b>稀有字串</b><button id="check_all_rare" class="btn-beautify button--animated blue" target="_blank" rel="noopener" href="" title="全選/全消"><i class="far fa-hand-point-right"></i><span>全選/全消</span></button><br>
                <div>
                    <input name="RQ_ck02" id="RQ_ck02_01" type="checkbox" value="1" /> 
                    <label for="RQ_ck02_01">BUSAN CENTUM</label>
                </div>
                <div>
                    <input name="RQ_ck02" id="RQ_ck02_02" type="checkbox" value="2" /> 
                    <label for="RQ_ck02_02">CHUNJIE</label>
                </div>
                <div>
                    <input name="RQ_ck02" id="RQ_ck02_03" type="checkbox" value="3" /> 
                    <label for="RQ_ck02_03">PLAYCLOSERS22</label>
                </div>
                <div>
                    <input name="RQ_ck02" id="RQ_ck02_04" type="checkbox" value="4" /> 
                    <label for="RQ_ck02_04">UN TG</label>
                </div>
                <div>
                    <input name="RQ_ck02" id="RQ_ck02_05" type="checkbox" value="5" /> 
                    <label for="RQ_ck02_05">1PLCHBX</label>
                </div>
                <div>
                    <input name="RQ_ck02" id="RQ_ck02_06" type="checkbox" value="6" /> 
                    <label for="RQ_ck02_06">1SHOT</label>
                </div>
                <div>
                    <input name="RQ_ck02" id="RQ_ck02_07" type="checkbox" value="7" /> 
                    <label for="RQ_ck02_07">GREMORY BX</label>
                </div>
                <div>
                    <input name="RQ_ck02" id="RQ_ck02_08" type="checkbox" value="8" /> 
                    <label for="RQ_ck02_08">20K</label>
                </div>
                <div>
                    <input name="RQ_ck02" id="RQ_ck02_09" type="checkbox" value="9" /> 
                    <label for="RQ_ck02_09">CHUXI</label>
                </div>
                <button id="result_btn" class="btn-beautify button--animated outline blue" target="_blank" rel="noopener" href="" title="計算結果"><i class="far fa-hand-point-right"></i><span>計算結果</span></button>
            </td>
            <td>
                普通字母<br><br>
                <font name="normalResult">結果會顯示在這邊</font>
            </td>
            <td>
                稀有字母<br><br>
                <font name="rareResult">結果會顯示在這邊</font>
            </td>
        </tr>
    </tbody>
</table>