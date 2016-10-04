$(document).ready(()=>{
    let $cookieDisclaimerButton = $('.cookies-disclaimer__button');

    if ( !disclaimerCookieIsSet()){
        showCookieDisclaimer();
        $cookieDisclaimerButton
            .click(()=>{
                setCookie('coockieDisclaimer' , 'set' , 30);
                hideCookieDisclaimer();
            });
    }
});

function disclaimerCookieIsSet() {
    return (getCookie('coockieDisclaimer') == 'set');
}
function hideCookieDisclaimer(){
    $('.cookies-disclaimer')
        .css({display:'none'})
}
function showCookieDisclaimer(){
    $('.cookies-disclaimer')
        .removeAttr('style')
}

function setCookie(cname:string, cvalue:string, exdays:number) {
    let d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires:string = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires + '; path=/';
}
function getCookie(cname:string) {
    let name:string = cname + "=",
         ca = document.cookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0)==' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length,c.length);
        }
    }
    return "";
}
