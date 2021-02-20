const routes = require('./routes')

function dispatch(request, response) {
    let notFound = true;
    const url_path = request.url
    for (let route of routes.keys()){
        if (url_path.match(route)){
            let action = routes.get(route);
            action(request,url_path)
                .then(data => response.end(data))
                .catch(err => response.end(err));
            notFound = false;
        }
    }
    if (notFound){
        response.end('Page not found')
    }
}

module.exports = {dispatch: dispatch}