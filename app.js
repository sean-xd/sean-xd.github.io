/* --- Cache DOM --- */

var dom = {
    // Left
    single: el("#single"),

    // Right
    right: el("#right"),
    filters: el("#filters"),
    search: el("#search"),
    list: el("#list")
};

var state = {
    filters: []
};

var store = localStorage.store ? JSON.parse(localStorage.store) : {
    status: {}
};

/* --- Initial Display --- */

dom.search.addEventListener("input", drawList);
loadStatuses();
drawList();