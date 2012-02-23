require.config({
        baseUrl: '/rake/ui'
});
require(['thirdparty/underscore', 'thirdparty/jquery-1.7.1', 'thirdparty/backbone'], function(){
    if(_){
        console.log("_ loaded");
    }else{
        console.log("_ not loaded");
    }
    if(jQuery){
        console.log("jQuery loaded");
    }else{
        console.log("jQuery not loaded");
    }
    if(Backbone){
        console.log("Backbone loaded");
    }else{
        console.log("Backbone not loaded");
    }


});