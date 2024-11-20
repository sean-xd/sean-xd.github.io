/* --- Cache DOM --- */

var dom = {
    // Left
    single: el("#single"),

    // Right
    right: el("#right"),
    filters: el("#filters"),
    list: el("#list")
};

/* --- Initial Display --- */

append(dom.list, listTemplate());
append(dom.filters, filterListTemplate());