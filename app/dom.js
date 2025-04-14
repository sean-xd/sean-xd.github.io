//#region - Element Selection
function el(str, parent){
    if(!parent) parent = document;
    if(isStr(parent)) parent = el0(parent);
    if(str[0] === "#") return parent.getElementById(str.slice(1));
    if(str[0] === ".") return parent.getElementsByClassName(str.slice(1));
    return parent.getElementsByTagName(str);
}

function el0(selector){
    return selector[0] === "#" ? el(selector) : el(selector)[0];
}

function innerChild(obj, key){
    var nextChild = obj, lastChild = null;
    while(nextChild) { lastChild = nextChild; nextChild = v(lastChild, key); }
    return lastChild;
}
//#endregion

//#region - Element Creation & Modification
function t(tag, config, children) {
    return append(methMap(document.createElement(tag), { setAttribute: config }), children);
}

function append(elem, children) {
    if (isStr(elem)) elem = el0(elem);
    if (!elem) return;
    if (isStr(children) || isNum(children)) elem.innerHTML = children;
    if (isArr(children)) children.forEach(child => !child || elem.appendChild(child));
    if (isHtml(children)) elem.appendChild(children);
    return elem;
}

function clear(elem){
    if(isArr(elem)) return (elem.forEach(clear), elem);
    if(isStr(elem)) elem = el0(elem);
    if(elem) { while (elem.lastChild) elem.removeChild(elem.lastChild); }
    return elem;
}

function cl(elem, classObj){
    if(!classObj) { classObj = elem; elem = document.body; }
    if(isObj(elem) && !isHtml(elem)) return each(elem, (config, selector) => cl(selector, config));
    if(isStr(elem)) elem = el0(elem);
    if(!elem) return;
    const { classList, className } = elem;
    var isContained = false;
    each(classObj, (val, key) => {
        if(val === "?") return isContained = classList.contains(key);   // Check classList.
        if(val) return classList.add(key);                              // Add.
        if(val === null) return classList.toggle(key);                  // Toggle.
        if(key === "*") return elem.className = "";                     // Remove all.
        if(!isIn(key, "*")) return classList.remove(key);               // Remove single.
        if(className) elem.className = wordFilter(className, e => !isIn(e, key.replace(/\*/g, ""))); // Remove wildcards.
    });
    return isContained;
}

function show(key, val){
    if(val && val !== "?") val = !!val;
    cl({ [`show-${key}`]: val });
}

function activate(group, key){
    if(!parseInt(key) && parseInt(key) !== 0) group = group + "-";
    if(cl({ [`active-${group}${key}`]: "?" })) return;
    cl({ [`active-${group}*`]: false, [`active-${group}${key}`]: isVal(key) });
}
//#endregion