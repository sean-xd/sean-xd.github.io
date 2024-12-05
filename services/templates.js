/* --- List --- */

function listTemplate(arr){
    var sortedKanji = arr.filter(e => e.R).sort((a, b) => a.R - b.R)
    return sortedKanji.reduce((list, e) => (e.R ? list.push(listKanjiTemplate(e)): null, list), []);
}

function listKanjiTemplate(obj){
    var statusColors = { Known: "c-green", Learning: "c-yellow", Unknown: "c-red" };
    var className = "kanji w-20 jp pointer inline text-center " + statusColors[store.status[obj._]];
    return t("div", { class: className, onclick: `selectKanji("${obj._}")` }, obj._);
}

/* --- Single --- */

function singleKanjiTemplate(kStr){
    var kObj = kanji.filter(e => e._ === kStr)[0];
    return !kObj ? undefined : [
        t("div", { class: "single-left abs-tl h-100 w-50" }, [
            t("div", { class: "rank abs-tl c-100" }, kObj.R),
            t("div", { class: "kanji jp text-center b-20" }, kObj._),
            t("div", { class: "status f-14 b-0" }, [
                t("div", { class: `status-button c-green flex-center pointer ${isIn(kObj.T || [], "Known") ? "active-status" : ""}`, onclick: `updateStatus('${kStr}', 'Known')` }, "Known"),
                t("div", { class: `status-button c-yellow flex-center pointer ${isIn(kObj.T || [], "Learning") ? "active-status" : ""}`, onclick: `updateStatus('${kStr}', 'Learning')` }, "Learning"),
                t("div", { class: `status-button c-red flex-center pointer ${isIn(kObj.T || [], "Unknown") ? "active-status" : ""}`, onclick: `updateStatus('${kStr}', 'Unknown')` }, "Unknown"),
            ]),
            t("div", { class: "single-left-container scroll-20-10" }, [
                componentListTemplate(kObj),
                compositionListTemplate(kObj)
            ])
        ]),
        t("div", { class: "single-right abs-tr h-100 w-50 scroll-20-10" }, [
            kunyomiTemplate(kObj),
            onyomiTemplate(kObj),
            kanjiWordsTemplate(kObj)
        ])
    ];
}

function componentListTemplate(kObj){
    return t("div", { class: "components" }, !kObj.C ? undefined : kObj.C.reduce((result, c) => {
        var cObj = kanji.filter(e => e._ === c)[0];
        cObj ?  result.push(componentTemplate(cObj, kObj)) : console.log({ kObj, c });
        return result;
    }, [t("div", { class: "components-title"}, "Components")]));
}

function compositionListTemplate(kObj){
    var compositions = kanji.filter(pObj => isIn(pObj.C, kObj._));
    if(compositions.length) compositions = [t("div", { class: "components-title" }, "Compositions")].concat(compositions.map(cObj => componentTemplate(cObj, kObj)));
    return t("div", { class: "compositions" }, compositions);
}

function componentTemplate(cObj, kObj){
    var cDefinition = [], cReadings = [];
    each(cObj.K, (cE, cK) => {
        if(cE) cDefinition.push(cE);
        if(cK && cK !== "_") cReadings.push(cK.replace("_", ""));
    });
    var coloredReadings = cReadings.concat(cObj.O).map(cR => {
        var parentReadings = Object.keys(kObj.K).map(e => e.replace("_", "")).concat(kObj.O);
        return isIn(parentReadings, cR) ? `<span class='c-blue'>${cR}</span>` : cR;
    });
    return t("div", { class: "component-container rel" }, [
        t("div", { class: "component-kanji abs-tl b-20 jp pointer", onclick: `selectKanji('${cObj._}')` }, cObj._),
        t("div", { class: "component-definition v-top c-green" }, cDefinition.join(", ")),
        t("div", { class: "component-readings c-100" }, coloredReadings.join(", "))
    ]);
}

function kunyomiTemplate(kObj){
    var title = t("div", { class: "reading-title" }, "Kunyomi (JP)");
    var readings = reduce(kObj.K, (arr, def, hiragana) => (arr.push(readingTemplate(hiragana, def)), arr), [title]);
    return t("div", { class: "kunyomi" }, readings);
}

function onyomiTemplate(kObj){
    var title = t("div", { class: "reading-title" }, "Onyomi (CN)");
    var readings = reduce(kObj.O, (arr, hiragana) => (arr.push(readingTemplate(hiragana)), arr), [title]);
    return t("div", { class: "onyomi" }, readings);
}

function readingTemplate(hiragana, def){
    if(isIn(hiragana, "_")){
        var [hira, mod] = hiragana.split("_");
        hiragana = hira ? `${hira}<span class='c-yellow'>${mod}</span>` : "";
    }
    var children = hiragana ? [t("div", { class: "reading-hiragana inline c-blue"}, hiragana)] : [];
    if(def) children.push(t("div", { class: "reading-definition inline v-top c-green" }, def));
    return t("div", { class: "reading" }, children);
}

function kanjiWordsTemplate(kObj){
    var words = wordList.filter(e => isIn(mergeNest(e.japanese), kObj._));
    return t("div", { class: "words" }, [t("div", { class: "reading-title" }, "Words")].concat(words.map(wObj => {
        var { japanese, english } = wObj;
        var kText = japanese.map(e => {
            var ekStr = stripHiragana(e[0]);
            var isKanji = !!kanji.filter(k => k._ === ekStr)[0];
            var className = [isKanji ? "pointer" : "", isIn(e[0], kObj._) ? "" : "c-100"].join(" ");
            var onclick = isKanji ? ` onclick="selectKanji('${ekStr}')"` : "";
            return `<span class="${className}"${onclick}>${e[0]}</span>`;
        }).join("");
        var hText = japanese.map(e => isIn(e[0], kObj._) ? e[1] : `<span class='c-100'>${e[1]}</span>`).join("");
        return t("div", { class: "word" }, [
            t("div", { class: "reading-kanji inline" }, kText),
            t("div", { class: "reading-definition inline v-top c-green" }, english),
            t("div", { class: "reading-hiragana c-blue" }, hText)
        ]);
    })));
}

function stripHiragana(kStr){
    if(kStr[0] === "お") return kStr[1];
    else return kStr[0];
}

/* --- Grammar --- */

function lessonTemplate(){
    
}