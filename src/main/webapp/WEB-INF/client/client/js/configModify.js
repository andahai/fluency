/**
 * Created by lenovo on 2014/12/27.
 */
$(document).ready(function(){
    $("input[name='proFlag']").val("false");
    $("#seniorConfigButton").hide();
    $("#seniorStationConfig").hide();
    $("#seniorInterfaceConfig").hide();
    var url = window.location.href;
    var start = url.indexOf("station=");
    var order = url.slice(start + 8);
    var url = "/nms/getStation?station=" + order;
    $.get(url,function(data){
        showConfig(data);
    });
    goSenior();
    modifyHref();
    Validata();
});
var seniorFlag = 0;
function showConfig(data){
    var config = JSON.parse(data);
    var num = 0;
    for(var k in config){
        if(num != 7 || num != 12 || num != 17){
            $('#' + num).val(config[k]);
        }
        else{
            $('#' + num).html(config[k]);
        }
        if(num == 18){
            if(config[k] == "false"){
                $("#stopButton").val("停用");
            }
            if(config[k] == "true"){
                $("#stopButton").val("启用");
            }
        }
        if(num == 20){
            if(config[k] == "7"){

                $("#seniorConfigButton").show();
            }

        }
        if(num == 21){
            if(config[k] == "true"){
                $("#delete").css("display","none");
            }
        }
        num++;
    }

}
function modifyHref(){
    var url = window.location.href;
    var start = url.indexOf("station=");
    order = url.slice(start + 8);
    $("input[name='station']").val(Number(order));
}
function goSenior(){

    $("#seniorConfigButton").click(function(){
        var url="/nms/getStationPro?station=" + order;
        $.get(url,function(data){
            $('#seniorStationConfig tbody').empty();
            var jsonMap = JSON.parse(data);
            var rowTemplate = "<tr><td>%s</td><td><input type='text' name=%s value='" +"%s'></td></tr>";
            $.each(jsonMap,function(name,value){
                var cnname;
                switch(name){
                    case "name":
                        cnname = "全称";
                        break;
                    case "alias":
                        cnname = "简称";
                        break;
                    case "ids":
                        cnname = "机器ID";
                        break;
                    case "centerFlag":
                        cnname = "主站标志位";
                        break;
                    default :
                        break;

                }
                if(value == null)
                    value = "";
                var row = sprintf(rowTemplate,cnname,name,value);
                $('#seniorStationConfig tbody').append($(row));
            });
        });
        url = "/nms/getInterfacePro?station=" + order;
        $.get(url,function(data){
            $('#seniorInterfaceConfig tbody').empty();
            var jsonArray = JSON.parse(data);
            var length = jsonArray.length;
            for(var i =0 ;i<length;i++) {
                var rowTemplate = "<tr><td>%s</td><td><input type='text' name=%s value=%s></td></tr>";
                var cnname;
                switch (jsonArray[i].name){
                    case "eth0":
                        cnname = "本地局域网";
                        break;
                    case "eth1":
                        cnname = "主用网";
                        break;
                    case "eth2":
                        cnname = "备用网";
                        break;
                }
                if(jsonArray[i].gre == null){
                    jsonArray[i].gre = "";
                }
                var row = sprintf(rowTemplate, cnname,"gre",jsonArray[i].gre );
                $('#seniorInterfaceConfig tbody').append($(row));
            }

        });
        $("#seniorStationConfig").toggle();
        $("#seniorInterfaceConfig").toggle();
        if(seniorFlag == 0){
            $("#seniorConfigButton").val("返回一般配置");
            $("input[name='proFlag']").val("true");
            seniorFlag = 1;
        }
        else{
            $("#seniorConfigButton").val("高级配置");
            $("input[name='proFlag']").val("false");
            seniorFlag = 0;
        }
    });
}

//check form
function Validata(){
    $("#config").validate({
        rules:{
            cnname:{
                required:true
            },
            hosts:{
                required:true
            },
            order:{
                required:true
            },
            ip1:{
                required:true,
                ipv4:true
            },
            netmask1:{
                required:true,
                ipv4:true
            },
            gateway1:{
                ipv4:true
            },
            ip2:{
                ipv4:true
            },
            netmask2:{
                ipv4:true
            },
            gateway2:{
                required:true,
                ipv4:true
            },
            ip3:{
                ipv4:true
            },
            netmask3:{
                ipv4:true
            },
            gateway3:{
                ipv4:true
            }

        },
        messages:{
            cnname:{
                required:"*站点名不能为空"
            },
            hosts:{
                required:"*业务主机IP地址不能为空"
            },
            order:{
                required:"*编号不能为空"
            },
            ip1:{
                required:"*IP不能为空",
                ipv4:"*请输入合法IP地址"
            },
            netmask1:{
                required:"*子网掩码不能为空",
                ipv4:"*请输入合法IP地址"
            },
            gateway1:{
                ipv4:"*请输入合法IP地址"
            },
            ip2:{
                ipv4:"*请输入合法IP地址"
            },
            netmask2:{
                ipv4:"*请输入合法IP地址"
            },
            gateway2:{
                required:"*网关不能为空",
                ipv4:"*请输入合法IP地址"
            },
            ip3:{
                ipv4:"*请输入合法IP地址"
            },
            netmask3:{
                ipv4:"*请输入合法IP地址"
            },
            gateway3:{
                ipv4:"*请输入合法IP地址"
            }
        }

    });
}


