const URL = require('url');

function getPatchVariable(url) {
    return url.split('/').slice(-1).pop();
}

function getQueryParam(url, param_name) {
    let search = URL.parse(url).search;
    if (search) {
        let urlSearchParam = new URL.URLSearchParams(search);
        return urlSearchParam.get(param_name);
    }
}

module.exports = {getPatchVariable: getPatchVariable, getQueryParam: getQueryParam}

