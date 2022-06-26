$(function(){
    var items = [
    "如何申請帳號？",
    "帳號遺失怎麼辦？",
    "帳號被盜用怎麼辦？",
    "忘記密碼",
    "更改收件地址",
    "貨物遺失",
    "訂單進度",
    "如何成為賣家？",
    "忘記帳號",
    "如何上架商品？",
    "查詢包裹",
    "外國人士如何申請帳號？",
    "取消交易",
    "棄單投訴",
    "付款方式"
];
$('#tags').autocomplete({
    source:items
});
    $( "#tabs" ).tabs().addClass( "ui-tabs-vertical ui-helper-clearfix" );
    $( "#tabs li" ).removeClass( "ui-corner-top" ).addClass( "ui-corner-left" );
  
});
