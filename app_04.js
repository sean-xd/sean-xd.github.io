/* --- Cache DOM --- */

var dom = {
    single: el("#single"),

    right: el("#right"),
    filters: el("#filters"),
    list: el("#list")
};

/* --- Display --- */

append(dom.list, kanji.filter(e => e.R).sort((a, b) => a.R - b.R).reduce((list, e) => {
    var tagClasses = (e.T || []).map(t => "tag-" + t);
    var className = "kanji w-20 jp pointer inline text-center " + tagClasses.join(" ");
    if(e.R) list.push(t("div", { class: className, onclick: `selectKanji("${e._}")` }, e._));
    return list;
}, []));

append(dom.filters, reduce(kanji, (arr, e) => {
    if(e.T) e.T.forEach(t => !isIn(arr, t) ? arr.push(t) : null);
    return arr;
}, []).sort().map(e => t("div", { class: "filter pointer w-20 text-center filter-" + e, onclick: `toggleFilter('${e}')` }, e)));

/* --- Actions --- */

function toggleFilter(str){
    if(!str) return cl(dom.right, { ["filter-enabled"]: null });
    cl(dom.right, { ["enable-" + str]: null });
}

function selectKanji(str){
    clear(dom.single);
    if(!str) return cl(document.body, { ["open-kanji"]: false });
    cl(document.body, { ["open-kanji"]: true });
    var obj = kanji.filter(e => e._ === str)[0];

    // Components
    var components = !obj.C ? undefined : obj.C.reduce((result, c) => {
        var cObj = kanji.filter(e => e._ === c)[0];
        if(!cObj) { console.log({ obj, c }); return result; }
        var cDefinition = reduce(cObj.K, (str, e) => (str ? e ? [str, e].join(", ") : str : e), "");
        result.push(t("div", { class: "component-container" }, [
            t("div", { class: "component-kanji inline b-10" }, cObj._),
            t("div", { class: "component-definition inline v-top c-green" }, cDefinition)
        ]));
        return result;
    }, [t("div", { class: "components-title"}, "Components")]);

    // Readings
    var kunyomi = reduce(obj.K, (arr, def, hiragana) => {
        if(isIn(hiragana, "_")){
            var hiraganaSplit = hiragana.split("_");
            if(!hiraganaSplit[0]) hiragana = "";
            else hiragana = `${hiraganaSplit[0]}<span class='c-yellow'>${hiraganaSplit[1]}</span>`;
        }
        var children = hiragana ? [t("div", { class: "reading-hiragana inline c-blue"}, hiragana)] : [];
        if(def) children.push(t("div", { class: "reading-definition inline v-top c-green" }, def))
        arr.push(t("div", { class: "reading" }, children));
        return arr;
    }, []);

    var onyomi = reduce(obj.O, (arr, hiragana) => {
        arr.push(t("div", { class: "reading" }, [t("div", { class: "reading-hiragana c-blue" }, hiragana)]));
        return arr;
    }, []);

    var words = wordList.filter(e => isIn(mergeNest(e.japanese), obj._)).map(wordObj => {

        var kanjiText = wordObj.japanese.map(e => {
            if(!isIn(e[0], obj._)) return `<span class='c-100'>${e[0]}</span>`;
            return e[0];
        }).join("");

        var hiraganaText = wordObj.japanese.map(e => {
            if(!isIn(e[0], obj._)) return `<span class='c-100'>${e[1]}</span>`;
            return e[1];
        }).join("");

        return t("div", { class: "word" }, [
            t("div", { class: "reading-kanji inline" }, kanjiText),
            t("div", { class: "reading-definition inline v-top c-green" }, wordObj.english),
            t("div", { class: "reading-hiragana c-blue" }, hiraganaText)
        ]);
    });

    // Interface
    append(dom.single, [
        t("div", { class: "single-left abs-tl h-100 w-50" }, [
            t("div", { class: "rank abs-tl c-100" }, obj.R),
            t("div", { class: "kanji jp text-center b-20" }, obj._),
            t("div", { class: "components" }, components)
        ]),
        t("div", { class: "single-right abs-tr h-100 w-50" }, [
            t("div", { class: "kunyomi" }, [t("div", { class: "reading-title" }, "Kunyomi (JP)")].concat(kunyomi)),
            t("div", { class: "onyomi" }, [t("div", { class: "reading-title" }, "Onyomi (CN)")].concat(onyomi)),
            t("div", { class: "words" }, [t("div", { class: "reading-title" }, "Words")].concat(words))
        ])
    ]);
}