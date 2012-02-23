/**
 * @fileDescription
 * Bootstraping file for rake.
 */
(function(w){
    //We need to load these thridparty scripts in the order they are listed.
    var thirdPartyScripts = ['thirdparty/require.js'
        , 'thirdparty/jquery-1.7.1.js'
        , 'thirdparty/underscore.js'
        , 'thirdparty/backbone.js'
    ];

    //base URL for the application.
    w.baseRakeURL = '/rake/ui';

    /**
     * This function loads the scripts in the array passed in the order in which they are
     * defined in the array. This helps load dependent scripts.
     *
     * Require.js cannot load scripts that have dependency on each other so we write our own function
     * that would load these script.
     *
     * @param scriptsToLoad Array of scripts to load
     * @param callback Callback function to call after all the scripts are loaded.
     */
    w.loadScripts = function(scriptsToLoad, callback){
        var scriptsLoaded = 0;

        function onAfterScriptLoad(){
            scriptsLoaded++;
            if(scriptsLoaded === scriptsToLoad.length){
                callback();
            }else{
                loadScript(scriptsToLoad[scriptsLoaded], onAfterScriptLoad);
            }
        }


        loadScript(scriptsToLoad[scriptsLoaded], onAfterScriptLoad);
    };

    /**
     * Function to load single script.
     *
     * @param url
     * @param callback
     */
    w.loadScript = function loadScript(url, callback){
        var script, head;

        script = document.createElement('script');
        script.setAttribute('src', w.baseRakeURL + '/' + url);
        script.setAttribute('type', 'text/javascript');
        if(script.readyState){
            script.onreadystatechange = function(){
                if (script.readyState === 'loaded' || script.readyState === 'complete') {
                    console.log("Script " + event.srcElement.src + " loaded.");
                    callback();
                }
            }
        }
        script.onload = function(e){
            var event = e || event;
            console.log("Script " + event.target.src + " loaded.");
            callback();
        };

        head = document.getElementsByTagName('head')[0];
        head.appendChild(script);
    };

    /**
     * This function will start the loading of Rake Application.
     */
    function loadRake(){
        if(!testThirdPartyScriptLoaded()){
            throw {message: "Unable to start loading of Rake application. Not all thirdparty scripts loaded."}
        }

        console.log("All the scripts are loaded");
        //start loading rake
    }

    /**
     * Start the script loading process;
     */
    loadScripts(thirdPartyScripts, loadRake);

    /**
     *  This function will test if the required thirdparty Scripts are loaded.
     *  It will return true if all the scripts are loaded. If even one of the required
     *  scripts are not loaded, it will return false.
     */
    function testThirdPartyScriptLoaded(){
        if(require && jQuery && _ && Backbone){
            return true;
        }

        if(require){
            console.log("Require Library Loaded.");
        }else{
            console.error("Require Library not Loaded");
        }

        if(jQuery){
            console.log("jQuery Library Loaded.");
        }else{
            console.error("jQuery Library not Loaded");
        }

        if(_){
            console.log("jQuery Library Loaded.");
        }else{
            console.error("jQuery Library not Loaded");
        }

        if(Backbone){
            console.log("Backbone Library Loaded.");
        }else{
            console.error("Backbone Library not Loaded");
        }

        return false;
    }

})(window);