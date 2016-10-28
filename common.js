//define(['jquery'], function($){
//    console.log("loading common");
//    var MFiCommunication = new function(){
//        
//         this.getControls = function(oData, fnCallback) {
//            var sURL = null;
//            sURL = "../../Data/" + oData + ".json";
//            $.ajax({
//                url : sURL,
//                dataType : 'json',
//                success : function(data) {fnCallback(data);} ,
//                error : ""
//            });
//        };
//    }
//    return MFiCommunication;
//});