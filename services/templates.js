/* --- List --- */

function listTemplate(){
    var sortedKanji = kanji.filter(e => e.R).sort((a, b) => a.R - b.R)
    return sortedKanji.reduce((list, e) => (e.R ? list.push(listKanjiTemplate(e)): null, list), []);
}

function listKanjiTemplate(obj){
    var tagClasses = (obj.T || []).map(t => "tag-" + t);
    var className = "kanji w-20 jp pointer inline text-center " + tagClasses.join(" ");
    return t("div", { class: className, onclick: `selectKanji("${obj._}")` }, obj._);
}

function filterListTemplate(){
    var sortedTags = reduce(kanji, (arr, e) => (e.T ? e.T.forEach(t => !isIn(arr, t) ? arr.push(t) : null) : null, arr), []).sort();
    return sortedTags.map(filterTemplate);
}

function filterTemplate(str){
    return t("div", { class: "filter pointer w-20 text-center filter-" + str, onclick: `toggleFilter('${str}')` }, str);
}

/* --- Single --- */

function singleKanjiTemplate(kStr){
    var kObj = kanji.filter(e => e._ === kStr)[0];
    return !kObj ? undefined : [
        t("div", { class: "single-left abs-tl h-100 w-50" }, [
            t("div", { class: "rank abs-tl c-100" }, kObj.R),
            t("div", { class: "kanji jp text-center b-20" }, kObj._),
            componentListTemplate(kObj)
        ]),
        t("div", { class: "single-right abs-tr h-100 w-50" }, [
            kunyomiTemplate(kObj),
            onyomiTemplate(kObj),
            kanjiWordsTemplate(kObj)
        ])
    ];
}

function componentListTemplate(kObj){
    return t("div", { class: "components" }, !kObj.C ? undefined : kObj.C.reduce((result, c) => {
        var cObj = kanji.filter(e => e._ === c)[0];
        cObj ?  result.push(componentTemplate(cObj)) : console.log({ kObj, c });
        return result;
    }, [t("div", { class: "components-title"}, "Components")]));
}

function componentTemplate(cObj){
    var cDefinition = reduce(cObj.K, (str, e) => (str ? e ? [str, e].join(", ") : str : e), "");
    return t("div", { class: "component-container" }, [
        t("div", { class: "component-kanji inline b-10" }, cObj._),
        t("div", { class: "component-definition inline v-top c-green" }, cDefinition)
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
        var kText = japanese.map(e => isIn(e[0], kObj._) ? e[0] :`<span class='c-100'>${e[0]}</span>`).join("");
        var hText = japanese.map(e => isIn(e[0], kObj._) ? e[1] : `<span class='c-100'>${e[1]}</span>`).join("");
        return t("div", { class: "word" }, [
            t("div", { class: "reading-kanji inline" }, kText),
            t("div", { class: "reading-definition inline v-top c-green" }, english),
            t("div", { class: "reading-hiragana c-blue" }, hText)
        ]);
    })));
}