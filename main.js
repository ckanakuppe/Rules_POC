require.config({
    baseUrl: '../Scripts/modules',
    paths: {
        jquery: '//ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min',
        bootstrap: '/Scripts/libs/Bootstrap/js/bootstrap.min',
        common:'modules/common'
    },
    shim: {
        'bootstrap': ['jquery']
    }
});

require(['jquery', 'bootstrap', 'properties'], function ($, BOOTSTRAP, Properties) {
    $(function() {
        var getControls = function(oData, fnCallback) {
            console.log('consoling from get controls');
            var sURL = null;
            sURL = "/Data/" + oData + ".json";
            $.ajax({
                url : sURL,
                dataType : 'json',
                success : function(data) {fnCallback(data);} ,
                error : ""
            });
        },
        callBack = function(data){
            sessionStorage.setItem("initialDataStore", JSON.stringify(data)); 
            loadAdminControls($("#attribute-select"), data);
         },
        loadAdminControls =  function (_el, oControls) {
                var that = this, html = "", key, id;
//                if(oControls.length != undefined && oControls.length > 1){
//                    for(var key in oControls){
//                    switch (oControls[key]["type"]) {
//                        case "Q_SELECT":
//                            html += '<select id="' + oControls[key].key + '">\
//												<option value="">No Value</option>';
//                            if (oControls[key].values.length > 0) {
//                                for (j in oControls[key].values) {
//                                    html += '<option value="' + oControls[key].values[j] + '">' +Properties.getTextFromKey(oControls[key].values[j]) + '</option>';
//                                }
//                            }
//                            html += '</select>';
//                            break;
//                        case "Q_TEXTBOX":
//                            html += '<input type="text" id="' + oControls[key].key + '"/>';
//                            break;
//                        }
//                        
//                    }
//                }else{
                     oControls = oControls.attributes;
                    var multiValueData= oControls.values;
                switch (oControls["type"]) {
                        case "Q_SELECT":
                            html += '<select id="' + oControls["key"] + '">\
												<option value="">No Value</option>';
                            if (multiValueData.length > 0) {
                                for (j in multiValueData) {
                                    html += '<option value="' + multiValueData[ j] + '">' + Properties.getTextFromKey(multiValueData[j]) + '</option>';
                                }
                            }
                            html += '</select>';
                            break;
                   //     }
                }
                    _el.html(html);
             
            },
            attachEvents = function(){
                
                $("#attribute-select").on("change","select",function() {
                    var jsonData = JSON.parse(sessionStorage.getItem("initialDataStore"));
                    $.each(jsonData.dependentControls, function(i,item){
                        if(item.key == $("#ATTRIBUTE_LIST option:selected").val()){
                            loadAdminControls($("#dependent-controls"), item.dependentElements);
                        }
                    });
                });
                
                $("#rule-table tbody tr").on("click",'div.glyphicon-plus' ,function(e){
                    $("#rule-container table tbody tr:last").clone(true, true).appendTo($("#rule-table tbody"));
                    // Add a new row and do not clone previous row
                    // Attach events to new row
                    // Add a unique id to the row
                    //
                var new_row ='<tr class="row_status" colspan="3"><td class="initial-td" >\
                         <div class="row-left-controls row-condition-initial">\
                             <div id="dynamic-controls">\
                                 <div id="attribute-select"></div>\
                                 <div id="dependent-controls"></div>\
                             </div></div>\
                            <div class="row-right-controls row-condition-initial">\
                                <div class="glyphicon glyphicon-plus"></div>\
                                <div class="glyphicon glyphicon-minus"></div>\
                                <div class="glyphicon glyphicon-option-horizontal"></div>\
                            </div></td>\
                    </tr>';
                });
                
                $("div.glyphicon-minus").on("click", function(e){
                    console.log(e.relatedTarget);
                });
                $("div.glyphicon-option-horizontal").on("click",function(){
                     $("#rule-container table tbody tr:first").clone(true).attr("class", "indent-row-main").appendTo($("#rule-container table tbody"));
                     $("#rule-container table tbody tr:first").clone(true).attr("class", "indent-row-first").appendTo($("#rule-container table tbody"));
                var html='<select class="operator main-condition-initial">\
                            <option>All</option>\
                            <option>Any</option>\
                    </select>';
                    
                });
            };
        
        $('document').ready(function(){
           getControls("RulesQuestionnaire", callBack);
           attachEvents();
        });
        
         
    });
     
    
});
