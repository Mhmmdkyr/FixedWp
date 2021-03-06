(function ($) {

    $.fn.fixedwp = function( options ) {
        var uniqnumber = Math.floor((Math.random() * 100) + 10);
        var settings = $.extend({
            number: "",
            text: "Merhaba",
            bg: "#25D366",
            color: "#fff",
            placement: "right",
            align_right:  "30px",
            align_bottom: "30px",
            align_top: "auto",
            align_left: "auto",
            padding: "17px"
        }, options );
        var html = '<style>.fixedwp_'+uniqnumber+'{z-index: 1453;animation: ring 4s .7s ease-in-out infinite;box-shadow: 0 0 15px rgba(0,0,0,0.4);border:3px solid #fff;width: 71px; height: 71px;display: block;position:fixed;top:'+settings.align_top+';bottom:'+settings.align_bottom+';left:'+settings.align_left+';right:'+settings.align_right+';background-color:'+settings.bg+';color:'+settings.color+'; padding:'+settings.padding+';border-radius:50%;font-size: 30px;}.fixedwp_'+uniqnumber+' svg{fill:#fff;width: 30px; height: 30px}@keyframes ring{0%{transform:rotate(0)}5%{transform:rotate(30deg)}10%{transform:rotate(-28deg)}15%{transform:rotate(34deg)}20%{transform:rotate(-32deg)}25%{transform:rotate(30deg)}30%{transform:rotate(-28deg)}35%{transform:rotate(26deg)}40%{transform:rotate(-24deg)}45%{transform:rotate(22deg)}50%{transform:rotate(-20deg)}55%{transform:rotate(18deg)}60%{transform:rotate(-16deg)}65%{transform:rotate(14deg)}70%{transform:rotate(-12deg)}75%{transform:rotate(10deg)}80%{transform:rotate(-8deg)}85%{transform:rotate(6deg)}90%{transform:rotate(-4deg)}95%{transform:rotate(2deg)}100%{transform:rotate(-1deg)}}</style>';
        html = html + '<a href="https://wa.me/'+settings.number+'?text='+encodeURIComponent(settings.text)+'" class="fixedwp_'+uniqnumber+'" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256.064 0h-.128C114.784 0 0 114.816 0 256c0 56 18.048 107.904 48.736 150.048l-31.904 95.104 98.4-31.456C155.712 496.512 204 512 256.064 512 397.216 512 512 397.152 512 256S397.216 0 256.064 0zm148.96 361.504c-6.176 17.44-30.688 31.904-50.24 36.128-13.376 2.848-30.848 5.12-89.664-19.264-75.232-31.168-123.68-107.616-127.456-112.576-3.616-4.96-30.4-40.48-30.4-77.216s18.656-54.624 26.176-62.304c6.176-6.304 16.384-9.184 26.176-9.184 3.168 0 6.016.16 8.576.288 7.52.32 11.296.768 16.256 12.64l23.008 55.392c1.824 3.776 3.648 8.896 1.088 13.856-2.4 5.12-4.512 7.392-8.288 11.744s-7.36 7.68-11.136 12.352c-3.456 4.064-7.36 8.416-3.008 15.936 4.352 7.36 19.392 31.904 41.536 51.616 28.576 25.44 51.744 33.568 60.032 37.024 6.176 2.56 13.536 1.952 18.048-2.848 5.728-6.176 12.8-16.416 20-26.496 5.12-7.232 11.584-8.128 18.368-5.568 6.912 2.4 43.488 20.48 51.008 24.224 7.52 3.776 12.48 5.568 14.304 8.736 1.792 3.168 1.792 18.048-4.384 35.52z"/></svg></a>';
        $('body').append(html);

    };

}( jQuery ));
