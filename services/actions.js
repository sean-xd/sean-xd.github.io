/* --- Actions --- */

function drawList(){
    var filteredKanji = searchFilter(state.filters.length ? filterKanji(kanji) : kanji);
    append(clear(dom.list), listTemplate(filteredKanji));
}

function filterKanji(kArr){
    return kArr.filter(k => {
        for(var i = 0; i < state.filters.length; i++){
            if(isIn(k.T, state.filters[i])) return true;
        }
        return false;
    });
}

function searchFilter(kArr){
    var sStr = (dom.search.value || "").toLowerCase();
    if(!sStr) return kArr;

    var isExact = sStr[0] === '"' && sStr.slice(-1) === '"';
    if(isExact) sStr = sStr.slice(1,-1);

    return kArr.filter(kObj => {
        // Search Kanji
        if(kObj._ === sStr) return true;
        // Search Onyomi
        if((kObj.O || []).length){
            for(var oI = 0; oI < kObj.O.length; oI++){
                if(!isExact && isIn(kObj.O[oI], sStr)) return true; // Nonexact Onyomi
                if(isExact && kObj.O[oI] === sStr) return true;     // Exact Onyomi
            }
        }
        // Search Kunyomi & English
        var kKeys = Object.keys(kObj.K || {});
        if(kKeys.length){
            for(var kI = 0; kI < kKeys.length; kI++){
                var kStr = kKeys[kI].replace("_", "");
                var eStr = kObj.K[kKeys[kI]].toLowerCase();
                if(!isExact && isIn(kStr, sStr)) return true;   // Nonexact Kunyomi
                if(isExact && kStr === sStr) return true;       // Exact Kunyomi
                if(!isExact && isIn(eStr, sStr)) return true;   // Nonexact English
                if(isExact && eStr === sStr) return true;       // Exact English
            }
        }
        return false;
    });
}

function toggleFilter(fStr, fElem){
    if(!fStr) return cl(document.body, { "show-filters": null });
    if(isIn(state.filters, fStr)) state.filters = state.filters.filter(e => e !== fStr);
    else state.filters.push(fStr);
    cl(fElem, { "filter-selected": null });
    drawList();
}

function selectKanji(kStr){
    if(!kStr) return cl(document.body, { "open-kanji": false });
    clear(dom.single);
    cl(document.body, { ["open-kanji"]: true });
    append(dom.single, singleKanjiTemplate(kStr));
}

function updateStatus(kStr, sStr){
    var kObj = kanji.filter(e => e._ === kStr)[0];
    kObj.T = (kObj.T || []).filter(e => !isIn(["Known", "Learning", "Unknown"], e));
    if(sStr) kObj.T.push(sStr);    
    store.status[kStr] = sStr;
    localStorage.store = JSON.stringify(store);
    drawList();
    selectKanji(kStr);
}

function loadStatuses(){
    kanji.forEach(kObj => {
        var status = store.status[kObj._];
        if(!status) status = store.status[kObj._] = "Unknown";
        kObj.T = (kObj.T || []).concat(status);
    });
    localStorage.store = JSON.stringify(store);
}