/* --- Actions --- */

function toggleFilter(str){
    if(!str) return cl(dom.right, { ["filter-enabled"]: null });
    cl(dom.right, { ["enable-" + str]: null });
}

function selectKanji(kStr){
    clear(dom.single);
    if(!kStr) return cl(document.body, { ["open-kanji"]: false });
    cl(document.body, { ["open-kanji"]: true });
    append(dom.single, singleKanjiTemplate(kStr));
}