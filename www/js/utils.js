var Utils = {
     getJSONByPromise: function(url){
            return new Promise(function(resolve, reject) {
                var xhr = new XMLHttpRequest();
                xhr.open('get', url, true);
                xhr.responseType = 'json';
                xhr.onload = function() {
                    if (xhr.status == 200) {
                        var data = (!xhr.responseType)?JSON.parse(xhr.response):xhr.response;
                        resolve(data);
                    } else {
                        reject(status);
                    }
                };
                xhr.onerror = function() {
                    reject(Error("Network Error"));
                };
                xhr.send();
            });
        },
        getParamsFromUrl: function(url) {
            var regex = /[?&]([^=#]+)=([^&#]*)/g,
                params = {},
                match;
            while(match = regex.exec(url)) {
                params[match[1]] = match[2];
            }
            return params;
        },
        getJSONPByPromise: function(url) {
        
            var script = document.createElement('script');
            script.src = url;

            script.onload = function () {
                this.remove();
            };// After scripts is loaded and executed, remoe it from the DOM 

            var head = document.getElementsByTagName('head')[0];
            head.insertBefore(script, head.firstChild);// Insert script into the DOM

            var params = this.getParamsFromUrl(url);
            var callbackStr = 'json_callback';
            if(params['prefix']) {
                callbackStr = params['prefix'];
            } else if(params['callback']) {
                callbackStr = params['callback'];
            }
            return new Promise(function(resolve, reject) {
                window[callbackStr] = function(data) {
                    resolve(data);
                }
            });
        }
    
};