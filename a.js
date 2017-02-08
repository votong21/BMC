var count = 0;
//auto invite by http://facebook.com/
function clickInvite() {


    if (document.querySelectorAll('a._42ft[ajaxify^="/ajax/pages/invite/send_single"]').length > 0) {
        if (document.querySelector('.uiScrollableArea a.uimorePagerPrimary')) {


            document.querySelector('.uiScrollableArea a.uimorePagerPrimary').click();
        }
        document.querySelectorAll('a._42ft[ajaxify^="/ajax/pages/invite/send_single"]')[0].click();
        setTimeout(clickInvite, 6000);
        count++;
        console.log(count)
    }
    else {
        count = 0;
        if (confirm('Chay xong ! Reload lai trang ?'))
            window.location.reload()
    }
}
clickInvite();


function loadShirt(){
    for(var i=0; i<document.querySelectorAll('div.panel-body div.thumbnail a').length>0;i++){
        var string = document.querySelectorAll('div.thumbnail a')[i]+"";
        var url = "https://www.sunfrog.com/"
        url = url+ string.substr(string.indexOf("GroupID")+8,9)
            +"-"+string.substr(string.indexOf("mockupID")+9,string.indexOf("mockupID")+18)+".html?73921";
        var win = window.open(url, '_blank');
        win.focus();
    }
}
loadShirt();


function cost(){
    for(var i=0; i<document.querySelectorAll('span.pull-left').length>0;i++){
        var string = parseFloat(document.querySelectorAll('span.pull-left')[i].innerHTML+"")+2;
        document.querySelectorAll('div.col-sm-5 input.form-control')[i].value=string;
        console.log(string);
    }
    document.querySelector('button.btn-success').click();
}

cost();

var count =0;
function loadPage(){

    while(count<3){
        var selection = document.querySelector('.fbPhotoSnowliftPopup .UFIList .UFILastCommentComponent  a.UFIPagerLink') !== null;
        if(selection) {
            document.querySelector('.fbPhotoSnowliftPopup .UFIList .UFILastCommentComponent  a.UFIPagerLink').click();
            count++;
            setTimeout(loadPage,10000);
        }
    } console.log('.xong.');

}
loadPage();

function getID(){
    for(var i=0; i<document.querySelectorAll('.fbPhotosSnowliftFeedback .fbPhotosSnowliftUfi .UFIComment ._3b-9').length>0;i++){
        var string = parseFloat(document.querySelectorAll('span.pull-left')[i].innerHTML+"")+2;
        document.querySelectorAll('div.col-sm-5 input.form-control')[i].value=string;
        console.log(string);
    }
}
getID();