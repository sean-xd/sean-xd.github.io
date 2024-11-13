//#region - Iterable (Object/Array/Html)
function copy(original, updates){
    if(!isObj(original)) return original;
    if(updates === true){
        if(isArr(original)) return original.map(e => copy(e, true));
        return reduce(original, (newObj, e, key) => (newObj[key] = copy(e, true), newObj), {});
    }
    if(isObj(updates)) each(updates, (e, key) => original[key] = e);
    return original;
}

function each(obj, fn, truthyExit) {
    if(isArr(obj) || isHtml(obj)) {
        for(var i = 0; i < obj.length; i++) {
            let result = fn(obj[i], i, obj);
            if(truthyExit && isT(result)) return result;
        }
    }
    else if(isObj(obj)) {
        const keys = Object.keys(obj);
        for(var i = 0; i < keys.length; i++) {
            let result = fn(obj[keys[i]], keys[i], obj);
            if(truthyExit && isT(result)) return result;
        }
    }
}

function reduce(arr, fn, initial) {
    if(isArr(arr)) return arr.reduce(fn, isVal(initial) ? initial : []);
    if(!isObj(arr)) return initial;
    return Object.keys(arr).reduce((result, key) => fn(result, arr[key], key), isVal(initial) ? initial : {});
}

function map(obj, fn){
    if(isArr(obj) || isHtml(obj)){
        let result = isArr(obj) ? arr : [];
        for(var i = 0, l = obj.length; i < l; i++) result[i] = fn(obj[i], i, obj);
        return result;
    }
    if(isObj(obj)) return Object.keys(obj).map(key => fn(obj[key], key));
}

function mergeNest(arr){
    return arr.reduce((merge, nest) => {
        return merge.concat(nest);
    }, []);
}

//#endregion

//#region - Object
function v(store, key, fallback) {
    if (isNum(key)) key = toStr(key);
    if (isStr(key)) {
        const isEvent = store instanceof Event;
        for (let i = 0, keys = key.split("."), l = keys.length; i < l; i++) {               // Iterate over property array
            if (!store || (!isEvent && !store.hasOwnProperty(keys[i]))) return fallback;    // If store doesn't contain property, return fallback.
            if (!isVal(store[keys[i]])) return fallback;                                    // If no value exists at store[prop], return fallback.
            store = store[keys[i]];                                                         // Otherwise set store to store[prop] and continue iteration.
        }
        return store;
    }
    if (isArr(key)) return key.slice(-1)[0].apply(null, key.slice(0,-1).map(val => v(store, val))); // [values..., fn]
    if (isObj(key)) return reduce(key, (obj, val, prop) => {
        const result = (isStr(val) || isNum(val) || isBool(val) || isArr(val)) ? v(store, val) : undefined;
        if (isVal(result)) obj[prop] = result;
        return obj;
    }, {});
}
//#endregion

//#region - Functional
function methMap(obj, methConfig){
    each(methConfig, (config, method) => {
        if(!isObj(config)) obj[method](config);
        else each(config, (val, key) => isVal(val) ? obj[method](key, val) : null);
    });
    return obj;
}

function c(fn, a){ return (b) => fn(a, b); }

function maybeFn(fn, args) { return isFn(fn) ? fn.apply(null, toArr(args)) : fn; }
//#endregion

//#region - Typecasting
function enumStr(enumObj, num){ return each(enumObj, (e, key) => { if(e === num) return key; }, true); }
function classStr(config){ return Object.keys(config).filter(key => key !== "undefined" && config[key]).join(" "); }
function toBool(val) { return val === "true" ? true : val === "false" ? false : val; }
function toStr(val){ return isStr(val) ? val : isIn([null, undefined], val) ? val : isObj(val) ? JSON.stringify(val) : val.toString(); }
function toNum(val) { return parseInt((val || "").replace(/[$,\%]/g, "")) || 0; }
function toArr(val){ return !isVal(val) ? [] : !isArr(val) ? [val] : val; }
function toObj(val, key){
    if(isArr(val) && key) return reduce(val, (obj, e) => e[key] ? (obj[e[key]] = e, obj) : obj, {});
    if(isJson(val)) return JSON.parse(val);
}
//#endregion

//#region - Boolean
function isBool(val) { return typeof val === "boolean"; }
function isObj(val) { return typeof val === "object" && val != null; }
function isNum(val) { return typeof val === "number"; }
function isStr(val) { return typeof val === "string"; }
function isFn(val) { return typeof val === "function"; }
function isVal(val) { return val !== undefined; }
function isArr(val) { return Array.isArray(val); }
function isHtml(val) { return val instanceof HTMLElement; }
function isT(val) { return !isIn([null, "", undefined, false, NaN], val); }
function isJson(val) { return !isStr(val) ? false : isIn(["{", "["], val[0]); }
function isIn(parent, val) {
    if(isArr(parent) && isFn(val)) return isVal(arr.filter(val)[0]);
    if(isArr(val)) return val.reduce((check, str) => {
        if(check) return true;
        return parent.indexOf(str) > -1;
    }, false);
    if(isArr(parent) || isStr(parent)) return parent.indexOf(val) > -1;
}

function compare(initialValue, comparator, compareValue){
    // Turn currency into numbers.
    const firstInitial = isStr(initialValue) ? initialValue[0] : null;
    const lastInitial = isStr(initialValue) ? initialValue.slice(-1) : null;
    const firstCompare = isStr(compareValue) ? compareValue[0] : null;
    const lastCompare = isStr(compareValue) ? compareValue.slice(-1) : null;
    if (firstInitial === "$" || lastInitial === "%") initialValue = toNum(initialValue);
    if (firstCompare === "$" || lastCompare === "%") compareValue = toNum(compareValue);
    if (comparator === "!") return !isT(initialValue);
    if (comparator === "!!") return isT(initialValue);
    if (comparator === "==") return initialValue == compareValue;
    if (comparator === "!=") return initialValue != compareValue;
    if (comparator === "<") return initialValue < compareValue;
    if (comparator === "<=") return initialValue <= compareValue;
    if (comparator === ">") return initialValue > compareValue;
    if (comparator === ">=") return initialValue >= compareValue;
    if (comparator === "in") return initialValue >= compareValue[0] && initialValue <= compareValue[1];
    if (comparator === "unique") return isUnique(initialValue, compareValue);
    if (comparator === "regex") return !!(toStr(initialValue) || "").match(new RegExp(compareValue));
    if (comparator === "dateMin") {
        if (initialValue.split("/").length !== 3) return false;
        const initialDate = new Date(initialValue);
        initialDate.setFullYear(initialValue.split("/")[2]); // Force year to entered value (chrome parses 0023 as 2023 and 0050 as 1950)
        const minDate = new Date();
        minDate.setHours(0,0,0,0);
        if(isNum(compareValue)) minDate.setDate(minDate.getDate() + compareValue);
        return initialDate >= minDate;
    }
    if (comparator === "dateMax") {
        if (initialValue.split("/").length !== 3) return false;
        const initialDate = new Date(initialValue);
        initialDate.setFullYear(initialValue.split("/")[2]);
        const maxDate = new Date();
        maxDate.setHours(0,0,0,0);
        if(isNum(compareValue)) maxDate.setDate(maxDate.getDate() + compareValue);
        return initialDate <= maxDate;
    }
    if (comparator === "shortDateMin") {
        const [month, year] = (initialValue || "").split("/");
        if(compareValue === "today"){
            const today = new Date();
            const thisMonth = today.getMonth() + 1;
            const thisYear = parseInt(today.getFullYear().toString().slice(2,4));
            if(parseInt(year) < thisYear) return false;
            if(parseInt(year) === thisYear && parseInt(month) < thisMonth) return false;
            return true;
        }
    }
    return false;
}
//#endregion