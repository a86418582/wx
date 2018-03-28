/*
function wx(){
    var wx = document.getElementById("wx");
    var address = document.getElementById("address")
        if(wx.style.display = "none"){
            wx.style.display = "block";
            address.style.display = "none";
        }
}
function address(){
    var address = document.getElementById("address");
    var wx = document.getElementById("wx");
        if(address.style.display = "none"){
            address.style.display = "block";
            wx.style.display = "none";
        }
}
function hind(){
    var find = document.getElementById("find");
        if(find.style.display = "none"){

        }
}*/
/*上面的没有问题可以运行，下面这几种都有问题
问题一
wx = document.getElementById("wx");
address = document.getElementById("address")
function wx(){
        if(wx.style.display = "none"){
            wx.style.display = "block";
            address.style.display = "none";
        }
}
问题二
var wx = document.getElementById("wx");
    var address = document.getElementById("address")
function wx(){
    
        if(wx.style.display = "none"){
            wx.style.display = "block";
            address.style.display = "none";
        }
}

问题三
function (){
    var wx = document.getElementById("wx");
    var address = document.getElementById("address");
    function wx(){
    
        if(wx.style.display = "none"){
            wx.style.display = "block";
            address.style.display = "none";
        }
}
}

提示Object is not a function     at HTMLDivElement.onclick；
HTML页面改了引用名还是错。


*/ 

$(document).ready(function(){
    var wx = $("#wx");
    var address = $("#address");
    var found = $("#found");
    var me = $("#me");
    $("#click-wx").mousedown(function(){   //显示WX页面，隐藏其他页面
        wx.show();
        address.hide();
        found.hide();
        me.hide();
        $(this).css("background","#ccc");
        $("#click-address").css("background","#eeeaea");
        $("#click-find").css("background","#eeeaea");
        $("#click-me").css("background","#eeeaea");
    });
    $("#click-address").mousedown(function(){   //显示address页面
        wx.hide();
        address.show();
        found.hide();
        me.hide();
        $(this).css("background","#ccc");
        $("#click-wx").css("background","#eeeaea");
        $("#click-find").css("background","#eeeaea");
        $("#click-me").css("background","#eeeaea");
    });
    $("#click-find").mousedown(function(){ //显示find页面
        wx.hide();
        address.hide();
        found.show();
        me.hide();
        $(this).css("background","#ccc");
        $("#click-address").css("background","#eeeaea");
        $("#click-wx").css("background","#eeeaea");
        $("#click-me").css("background","#eeeaea");
    });
    $("#click-me").mousedown(function(){    //显示我的页面
        wx.hide();
        address.hide();
        found.hide();
        me.show();
        $(this).css("background","#ccc");
        $("#click-wx").css("background","#eeeaea");
        $("#click-find").css("background","#eeeaea");
        $("#click-address").css("background","#eeeaea");
        
    });
    $("#menu").click(function(){
        $(".shade").attr("id","shade");
        $("#menu").css("background","#000");
        //$(".list").css("z-index",50);
        $(".list").show(100,function(){
            $(".menu").css("background","#3b3a3a")  
        });
        if($(".list").is(":visible")){
            $(".shade").click(function(){
                $(".list").hide();
            })
    }
});
    $(".shade").click(function(){
        $(".shade").removeAttr("id");
    })
    $("li:nth-child(1)").click(function(){
        window.location.href = "group-chat.html" ;
    })
    $("li:nth-child(2)").click(function(){
        window.location.href = "group-chat.html" ;
    })
    $("li:nth-child(3)").click(function(){
        window.location.href = "group-chat.html" ;
    })
    $("li:nth-child(4)").click(function(){
        window.location.href = "group-chat.html" ;
    })
    $("li:nth-child(5)").click(function(){
        window.location.href = "group-chat.html" ;
    })
    $(".search").mousedown(function(){
        $(".search").css("background","#000");
    });
    $(".search").mouseup(function(){
        window.location.href = "group-chat.html" ;
    });
})