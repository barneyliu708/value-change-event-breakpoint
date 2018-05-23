//define a kind of watcher to innvoke an event when a property value of the object is changed 

//debug: object change event start
console = console || {}; // just in case
console.watch = function (oObj, sProp) {
    sPrivateProp = "$_" + sProp + "_$"; // to minimize the name clash risk
    oObj[sPrivateProp] = oObj[sProp];

    // overwrite with accessor
    Object.defineProperty(oObj, sProp, {
        get: function () {
            return oObj[sPrivateProp];
        },

        set: function (value) {
		    oObj[sPrivateProp] = value;
			if(value === null){
			   console.log("setting " + sProp + " to " + null); 
			}
			else if(value === undefined){
			   console.log("setting " + sProp + " to " + undefined); 
			}
			else if(value === ""){
			   console.log("setting " + sProp + " to " + "\"\""); 
			}
			else{
			   console.log("setting " + sProp + " to " + value); 
			}          
			//console.trace(); //log the trace
            debugger; // sets breakpoint
            
        }
    });
}
//debug: object change event end

//invocation
console.watch(obj, "someProp");
