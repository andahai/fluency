$(document).ready(function(){
    //var data = [{station:'石家庄',eth0:'LAN1',eth1:'LAN2',eth2:'LAN3',gw:'10.33.0.1',netmask:'255.255.255.0',ip:'192.168.0.1',order:'.212'},
      //  {station:'长春',eth0:'LAN1',eth1:'LAN2',eth2:'LAN3',gw:'10.33.0.1',netmask:'255.255.255.0',ip:'192.168.0.1',order:'.212'}];
    init();
});
function init(){
    checkAuth();
    var url="/nms/getGatex";
    $.get(url,function(data){
        createTable(data);
    });
    goGolbal();
    setInterval("ajax_data()",2000);
}
function createTable(data){
    var jsonArray = JSON.parse(data);
    var length = jsonArray.length;
    $("#config tbody").empty();
    for(var i =0 ;i<length;i++) {
        //增加站点，每行ID为i
        if (jsonArray[i].localFlag == "true") {
            var rowtemplate = "<tr id=" + i + "><td class='station'>&nbsp;%s&nbsp;</td><td class='eth0'>%s</td><td class='eth1'>%s</td>"
                + "<td class='eth2'>%s</td><td class='gw'>%s</td><td class='netmask'>%s</td><td class='ip'>%s</td>"
                + "<td><input type='text' readonly='readonly' class='diff'><a href=/nms/stationconfig?station=%s class='edit'>编辑</a><a href=/nms/reboot?station=%s class='reboot'>重启</a>";
            //设备接口
            var row = sprintf(rowtemplate, jsonArray[i].cnname, jsonArray[i].lan1, jsonArray[i].lan2, jsonArray[i].lan3,
                jsonArray[i].gateway, jsonArray[i].netmask, jsonArray[i].switcher, jsonArray[i].order, jsonArray[i].order);
        }
        else {
            var rowtemplate = "<tr id=" + i + "><td class='station'>&nbsp;%s&nbsp;</td><td class='eth0'>%s</td><td class='eth1'>%s</td>"
                + "<td class='eth2'>%s</td><td class='gw'>%s</td><td class='netmask'>%s</td><td class='ip'>%s</td>"
                + "<td><input type='text' readonly='readonly' class='diff'><a href=/nms/stationconfig?station=%s class='edit'>编辑</a><a href=/nms/distribute?station=%s class='distribute'>下发</a><a href=/nms/reboot?station=%s class='reboot'>重启</a>";
            var row = sprintf(rowtemplate, jsonArray[i].cnname, jsonArray[i].lan1, jsonArray[i].lan2, jsonArray[i].lan3,
                jsonArray[i].gateway, jsonArray[i].netmask, jsonArray[i].switcher, jsonArray[i].order, jsonArray[i].order, jsonArray[i].order);
        }
        $('#config tbody').append($(row));
        if(jsonArray[i].disable == "true"){
            $("#" + i).css("color","grey");
            $("#" + i).find(".distribute").css("color","grey");
            $("#" + i).find(".distribute").unbind("click");
            $("#" + i).find(".reboot").css("color","grey");
            $("#" + i).find(".reboot").unbind("click");
            $("#" + i).find(".reboot").attr("href","#");
            $("#" + i).find(".distribute").attr("href","#");
            $("#" + i).find(".distribute").attr("disable","true");
            $("#" + i).find(".reboot").attr("disable","true");

        }
        else if(jsonArray[i].connectFlag == "false"){
            $("#" + i).find(".diff").val("");
            $("#" + i).find(".distribute").css("color","grey");
            $("#" + i).find(".distribute").unbind("click");
            $("#" + i).find(".reboot").css("color","grey");
            $("#" + i).find(".reboot").unbind("click");
            $("#" + i).find(".reboot").attr("href","#");
            $("#" + i).find(".distribute").attr("href","#");
            $("#" + i).find(".distribute").attr("disable","true");
            $("#" + i).find(".reboot").attr("disable","true");
        }
        else if(jsonArray[i].diffFlag == "true"){
            $("#" + i).find(".diff").val("*");
        }

    }
}
function setCss(){
    $("#config tr:odd").css("background-color","#F3F3F3");
}
function ajax_data(){
    var url="/nms/getGatex";
    $.get(url,function(data){
        createTable(data);
    });
}
//check center and authority
function checkAuth(){
    var url = "/nms/getConfigInfo";
    $.get(url,function(data){
       var jsonMap = JSON.parse(data);
        if(jsonMap.centerFlag == "false"){
            $("#addStation").css("display","none");
        }
        if(jsonMap.authority == "3"){
            $("#globalConfig").css("display","none");
        }
    });
}

function goGolbal(){
    $("#globalConfig").click(function(){
        var url="/nms/globalconfig";
        location.href = url;
    });
}