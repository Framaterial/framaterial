//------------------------------------------------------------------------------
//
// Framaterial.js v1.0
// Author : @LukyVj
// 
//------------------------------------------------------------------------------

$(document).ready(function(){

// init material-design if not already defined
function initFramaterial(){
  var ctx = $("body");
  var md_class = 'material-design';

  if(!ctx.hasClass(md_class)){
    ctx.addClass(md_class);
  }
  else{}
}

function detectMobile(){
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    $('[class*="material-sidebar"]').attr('data-state', 'closed');
  }
}

//------------------------------------------------------------------------------
//
// Animations & effects
//
//------------------------------------------------------------------------------
// Hierachical Animations
/**
* Created by Kupletsky Sergey on 16.09.14.
*
* Hierarchical timing
* Add specific delay for CSS3-transition to elements.
*/
function hierarchy(){
  (function($) {
    var speed = 900;
    var container =  $('.hierarchical-timing');  
    container.each(function() {   
      var elements = $(this).children();
      elements.each(function() {      
        var elementOffset = $(this).offset(); 
        var offset = elementOffset.left*0.8 + elementOffset.top;
        var delay = parseFloat(offset/speed).toFixed(2);
        $(this)
        .css("-webkit-transition-delay", delay+'s')
        .css("-o-transition-delay", delay+'s')
        .css("transition-delay", delay+'s')
        .addClass('animated');
      });
    });
  })(jQuery);
}

// Ripple effect 
$(function(){
  var ink, d, x, y;
  $("a,li").click(function(e){
    if($(this).find(".ink").length === 0){
      $(this).prepend("<div class='ink'></div>");
    }

    ink = $(this).find(".ink");
    ink.removeClass("animate");

    if(!ink.height() && !ink.width()){
      d = Math.max($(this).outerWidth(), $(this).outerHeight());
      ink.css({height: d, width: d});
    }

    x = e.pageX - $(this).offset().left - ink.width()/2;
    y = e.pageY - $(this).offset().top - ink.height()/2;

    ink.css({top: y+'px', left: x+'px'}).addClass("animate");
  });
});

//------------------------------------------------------------------------------
//
// Navigation
//
//------------------------------------------------------------------------------
function navigation(){
  var navigation = $('[class*="material-navigation"]');

  function subNavigation(){
    var subNavigation = navigation.find('.sub-navigation');

    subNavigation.each(function(){
      var $this = $(this);
      var navigationParent = $this.parent().closest('[class*="material-navigation"]')
      navigationParent.addClass('sub-nav');

      if($('body').find('nav[class*="material-sidebar-left"]')){
        if($('nav[class*="material-sidebar"]').attr('data-state') == 'closed'){
          var shrunk = $('nav[class*="material-sidebar"]').width();
          $this.addClass('shrunked').attr('data-shrunk', shrunk);
          $this.css({
            'width': '100%',
            'float': 'right',
            'right': '0',
            'position': 'relative',
            'top': '0px',
            'box-shadow': 'inset 2px 2px 4px rgba(0,0,0,.3)'
          })
        }
        else{
          var shrunk = $('nav[class*="material-sidebar"]').width();
          $this.addClass('shrunked').attr('data-shrunk', shrunk);
          $this.css({
            'width': 'calc(100% - '+ shrunk+'px)',
            'float': 'right',
            'right': '0',
            'position': 'relative',
            'top': '60px',
            'box-shadow': 'inset 2px 2px 4px rgba(0,0,0,.3)'
          })
        }
// When something is clicked, for example, the menu sidebar
        $('*').on('click', function(){
           if($('nav[class*="material-sidebar"]').attr('data-state') == 'closed'){
          var shrunk = $('nav[class*="material-sidebar"]').width();
          $this.addClass('shrunked').attr('data-shrunk', shrunk);
          $this.css({
            'width': '100%',
            'float': 'right',
            'right': '0',
            'position': 'relative',
            'top': '0',
            'box-shadow': 'inset 2px 2px 4px rgba(0,0,0,.3)'
          })
        }
        else{
          var shrunk = $('nav[class*="material-sidebar"]').width();
          $this.addClass('shrunked').attr('data-shrunk', shrunk);
          $this.css({
            'width': 'calc(100% - '+ shrunk+'px)',
            'float': 'right',
            'right': '0',
            'position': 'relative',
            'top': '60px',
            'box-shadow': 'inset 2px 2px 4px rgba(0,0,0,.3)'
          })
        }
        });
      }

      // If sidebar is on right, float header on left.
      else if($('body').find('nav[class*="material-sidebar-right"]')){
       if($('nav[class*="material-sidebar"]').attr('data-state') == 'closed'){
          var shrunk = $('nav[class*="material-sidebar"]').width();
          $this.addClass('shrunked').attr('data-shrunk', shrunk);
          $this.css({
            'width': '100%',
            'float': 'left',
            'left': '0',
            'position': 'relative',
            'top': '60px',
            'box-shadow': 'inset 2px 2px 4px rgba(0,0,0,.3)'
          })
        }
        else{
          var shrunk = $('nav[class*="material-sidebar"]').width();
          $this.addClass('shrunked').attr('data-shrunk', shrunk);
          $this.css({
            'width': 'calc(100% - '+ shrunk+'px)',
            'float': 'left',
            'left': '0',
            'position': 'relative',
            'top': '60px',
            'box-shadow': 'inset 2px 2px 4px rgba(0,0,0,.3)'
          })
        }

        // When something is clicked, for example, the menu sidebar
        $('*').on('click', function(){
           if($('nav[class*="material-sidebar"]').attr('data-state') == 'closed'){
          var shrunk = $('nav[class*="material-sidebar"]').width();
          $this.addClass('shrunked').attr('data-shrunk', shrunk);
          $this.css({
            'width': '100%',
            'float': 'left',
            'left': '0',
            'position': 'relative',
            'top':'0',
            'box-shadow': 'inset 2px 2px 4px rgba(0,0,0,.3)'
          })
        }
        else{
          var shrunk = $('nav[class*="material-sidebar"]').width();
          $this.addClass('shrunked').attr('data-shrunk', shrunk);
          $this.css({
            'width': 'calc(100% - '+ shrunk+'px)',
            'float': 'left',
            'left': '0',
            'position': 'relative',
            'top': '60px',
            'box-shadow': 'inset 2px 2px 4px rgba(0,0,0,.3)'
          })
        }
        });
      }
      else{

      }
    });
    // if (navigation.find('.sub-navigation') == true){
    //   subNavigation.addClass('sub-nav')
    // }

  }

  subNavigation();
}

//------------------------------------------------------------------------------
//
// Sidebar
//
//------------------------------------------------------------------------------
function sidebarActions(){
  function sidebarHeader($size){
    var sidebar = $('[class*="sidebar-"]');
    var header  = sidebar.find('header');
    var img_url = header.attr('data-image-url');

    header.css({
      background: 'url('+ img_url +')',
      backgroundSize: $size
    })
  }

  function sidebarToggle(){
    var trigger = $('[data-toggle*="sidebar"]');

    trigger.on('click', function(){
      var sidebar = $('[class*="material-sidebar"]');
      var sidebarState = sidebar.attr('data-state');

      if(sidebarState == "open"){
        sidebar.attr('data-state', 'closed')
      }
      else{
       sidebar.attr('data-state', 'open')
     }
   });
  }

  sidebarHeader('cover')
  sidebarToggle()
}

//------------------------------------------------------------------------------
//
// Dropdown
//
//------------------------------------------------------------------------------

function openDropdown(){
 var trigger = $(".dropdown-title");
 var dropdownAll = $('.dropdown ul');

 dropdownAll.slideUp('fast');
 
 trigger.on('click', function(){
  var dropdown = $(this).next('ul');  
  if(dropdown.hasClass('open')){
    dropdown.removeClass('open').slideUp('fast');
  } 
  else{
    dropdown.addClass('open').slideDown('fast');  
  }
});

 var notTrigger = $('a,input');

 notTrigger.on('click', function(){
  dropdownAll.removeClass('open').slideUp('fast');
});
} 
//------------------------------------------------------------------------------
//
// Progress bars & Spinner
//
//------------------------------------------------------------------------------

function progressBars(){
  var bars = $('progress[class*="m-progress"]');
  var barsAnim = $('progress[class*="m-progress"][data-type="animated"]');
  var indeterminate = $('progress[data-type="indeterminate"]')

  var ida = 0;
  var idb = 0;
  var idc = 0;

  bars.each(function(){
    $this = $(this);
    $this.wrap('<div class="progress-group">')
    ida++;
    $this.attr('id','prog_'+ida)
  });

  barsAnim.each(function(){

    var $this = $(this);
    var tVal = $this.attr('value');
    var sec = $this.attr('data-timeload');
    
    idb++;
    $this.attr('id','prog_anim_'+idb)
    $this.parent().prepend('<style id="style_prog_anim_'+idb+'"></style>');
    $('#style_prog_anim_'+idb).empty().text('progress[data-timeload]#prog_anim_'+idb+'::-webkit-progress-value{transform:translateX(-100%);transition: transform '+sec+' linear}progress[data-timeload]#prog_anim_'+idb+'.loaded::-webkit-progress-value{transform:translateX(0);}');
    setTimeout(function(){ 
      $this.addClass('loaded')
    }, 100)
  });

  indeterminate.each(function(){
    idc++;
    var $this = $(this);
    var tVal = $this.attr('value');
    var sec = $this.attr('data-timeload');

    $this.attr('id','prog_indeterminate_'+idc)
    $this.parent().prepend('<style id="style_prog_indeterminate_'+idc+'"></style>');
    $('#style_prog_indeterminate_'+idc).empty().text('progress[data-timeload]#prog_indeterminate_'+idc+'::-webkit-progress-value{transform:translateX(-100%);transition: transform '+sec+' linear}progress[data-timeload]#prog_indeterminate_'+idc+'.loaded::-webkit-progress-value{animation: progressIndeterminate '+sec+' linear infinite; }');
    setTimeout(function(){ 
      $this.addClass('loaded')
    }, 100)
  })
}

function spinner(){
  var spinner = $('[class*="m-spinner"]');
  var svgSpinner = '<svg class="spinner" width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg"><circle class="path" fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"></circle></svg>'

  spinner.each(function(){
    var $this = $(this);
    $this.append(svgSpinner)
  })
}

//------------------------------------------------------------------------------
//
// Toasts & Snackbars
//
//------------------------------------------------------------------------------
function toastsSnackbar(){
  var toasts = $('[data-toggle*="toast"]');
  var snacks = $('[data-toggle*="snackbar"]');

  var idToast = 0;
  var idSnack = 0;

  toasts.each(function(){
    var $this = $(this);
    var posY = $this.attr('data-toast-posy');
    var posX = $this.attr('data-toast-posx');
    var content = $this.attr('data-toast-inner');
    var fadeTime = $this.attr('data-toast-fade-time');
    var fadeTime = fadeTime*1000;

    idToast++;

    if(!fadeTime){
      $this.attr('data-toast-fade-time','4');
    }

    $this.attr('id','call_toast_'+ idToast)


    $this.parent().append('<div class="m-toast-'+posX+'-'+posY+'" id="toast_'+idToast+'"><p>'+ content +'</p></div>');

    $this.on('click', function(){
      var fadeTime = $this.attr('data-toast-fade-time');
      var fadeTime = fadeTime*1000;
      var thisId = $this.attr('id').replace('call_','');
      $('[id*="'+thisId+'"]').toggleClass('on-screen');
      $('[class*="m-toast"]').not('[class*="m-toast"]#'+thisId).removeClass('on-screen');

      setTimeout(function(){
        $('[id*="'+thisId+'"]').removeClass('on-screen');
      }, fadeTime);
    });
  })

  snacks.each(function(){
    var $this = $(this);
    var posY = $this.attr('data-snackbar-posy');
    var posX = $this.attr('data-snackbar-posx');
    var content = $this.attr('data-snackbar-inner');

    idSnack++;
    $this.attr('id','call_snackbar_'+ idSnack)

    $this.parent().append('<div class="m-snackbar-'+posX+'-'+posY+'" id="snackbar_'+idSnack+'"><p>'+ content +'</p></div>');

    $this.on('click', function(){
     var thisId = $this.attr('id').replace('call_','');
     $('[id*="'+thisId+'"]').toggleClass('on-screen');
     $('[class*="m-snackbar"]').not('[class*="m-snackbar"]#'+thisId).removeClass('on-screen')
   });
  })
}
//------------------------------------------------------------------------------
//
// Inputs all types
//
//------------------------------------------------------------------------------

function materialInput(){
  var ctx = $('.material-design')
  var $inputTypeList = 'input[type*="text"][class*="m-input"],input[type*="email"][class*="m-input"],input[type*="number"][class*="m-input"],input[type*="password"][class*="m-input"]'; 
  var inputs = ctx.find($inputTypeList);
  
  inputs.each(function(){
    var $this = $(this);
    var $placeholder = $this.attr('placeholder');
    var $cl = $this.attr('class');
    var $cl = $cl.replace('m-input-','');

    if($this.attr('type') == 'text'){
      $this.wrap('<div class="material-input-group-text '+$cl+'">').after('<span class="highlight '+$cl+'"></span> <span class="bar '+$cl+'"></span><label class="text-input-label">'+ $placeholder +'</label>').attr('placeholder','');
    }
    else if($this.attr('type') == 'range'){
      $this.wrap('<div class="material-input-group-range '+$cl+'">').after('<span class="highlight '+$cl+'"></span> <span class="bar '+$cl+'"></span><label class="text-input-label">'+ $placeholder +'</label>').attr('placeholder','');
    }
    else if($this.attr('type') == 'radio'){
      $this.wrap('<div class="material-input-group-radio '+$cl+'">').after('<span class="highlight '+$cl+'"></span> <span class="bar '+$cl+'"></span><label class="text-input-label">'+ $placeholder +'</label>').attr('placeholder','');
    }
    else if($this.attr('type') == 'checkbox'){
      $this.wrap('<div class="material-input-group-checkbox '+$cl+'">').after('<span class="highlight '+$cl+'"></span> <span class="bar '+$cl+'"></span><label class="text-input-label">'+ $placeholder +'</label>').attr('placeholder','');
    }
    else{
      $this.wrap('<div class="material-input-group '+$cl+'">').after('<span class="highlight '+$cl+'"></span> <span class="bar '+$cl+'"></span><label class="text-input-label">'+ $placeholder +'</label>').attr('placeholder','');
    }
  });


function materialCheckboxesRadio(){
  var ip = $('input[type*="checkbox"],input[type*="radio"],[type*="range"]');
  ip.each(function(){
    var $this = $(this);
    var iId = $this.attr('id');
    var iLabel = $this.attr('data-label');
    $this.wrap('<div class="material-input-group"></div>')
    if($this.attr('data-label')){
      $this.parent().append('<label for="'+iId+'">'+iLabel+'<span class="ripple"></span></label>')
    }
    else{
      $this.parent().append('<label for="'+iId+'"><span class="ripple"></span></label>')

    }
  })
}

function radioToggle(){
  var tog = $('[type*="radio"][data-type*="toggle"]');
  var radioStates = {};
  $.each(tog, function(index, rd) {
    radioStates[rd.value] = $(rd).is(':checked');
  });

  tog.click(function() {

    var val = $(this).val();  
    $(this).attr('checked', (radioStates[val] = !radioStates[val]));    

    $.each(tog, function(index, rd) {
      if(rd.value !== val) {
        radioStates[rd.value] = false; 
      }
    });
  });
}
function rangeOutput(){
  var rangeOutput = $('[type*="range"][data-output*="true"],[type*="range"][data-output-expand*="true"]');

  rangeOutput.each(function(){
    var $this = $(this);
    var idex = $this.attr('id');
    var id = idex.replace('rg','rgo');

    if($this.attr('data-output-expand') == "true"){
      $this.parent().prepend('<style id="style_'+id+'"></style>');
      $('#style_'+id+'').text('input[type*="range"]#'+idex+'::-webkit-slider-thumb:after{content:"'+$this.val()+'";}')
      $this.on('change', function(){
        setInterval(function(){
          $('#style_'+id+'').text('input[type*="range"]#'+idex+'::-webkit-slider-thumb:after{content:"'+$this.val()+'";}')
        }, 150)
      });
      
    }
    else{
      $this.parent().prepend('<style id="style_'+id+'"></style>');
      $('#style_'+id+'').text('input[type*="range"]#'+idex+'::-webkit-slider-thumb:after{content:"'+$this.val()+'";}')
      $this.on('change', function(){
        setInterval(function(){
          $('#style_'+id+'').text('input[type*="range"]#'+idex+'::-webkit-slider-thumb:after{content:"'+$this.val()+'";}')
        }, 150)
      });
      
    }
  });
}

function rangeFiller(){
  var range = $('[type*="range"]');

  range.each(function(){

    var $this = $(this);

    var factorMax = $this.attr('max') / 100;
    var lvlMax = Math.floor($this.attr('value') / factorMax);
    var lvl = $this.attr('value');

    if($this.attr('max') > 100){
      $this.css('background', '-webkit-linear-gradient(left, currentColor '+lvlMax+'%, #B3B3B3 '+lvlMax+'%)')
    }
    else if($this.attr('max') < 100){
     $this.css('background', '-webkit-linear-gradient(left, currentColor '+lvlMax+'%, #B3B3B3 '+lvlMax+'%)') 
   }
   else{
    $this.css('background', '-webkit-linear-gradient(left, currentColor '+lvl+'%, #B3B3B3 '+lvl+'%)')
  }

  $this.on('change', function(){

    var factorMax = $this.attr('max') / 100;
    var lvlMax = Math.floor($this.attr('value') / factorMax);
    var lvl = $this.attr('value');


    if($this.attr('max') > 100){
      $this.css('background', '-webkit-linear-gradient(left, currentColor '+lvlMax+'%, #B3B3B3 '+lvlMax+'%)')
    }
    else if($this.attr('max') < 100){
     $this.css('background', '-webkit-linear-gradient(left, currentColor '+lvlMax+'%, #B3B3B3 '+lvlMax+'%)') 
   }
   else{
    $this.css('background', '-webkit-linear-gradient(left, currentColor '+lvl+'%, #B3B3B3 '+lvl+'%)')
  }

});
})
}

function inputIdentification(){
  var ips = $('[type*="checkbox"], [type*="radio"], [type*="range"]');
  var id = 0;
  ips.each(function(){
    var $this = $(this);
    id++;

    var lab = $this.parent().find('.material-input-group');

    if($this.attr('type') == 'checkbox'){
      $this.attr('id', 'ck_'+id)
    }
    else if($this.attr('type') == 'radio'){
      $this.attr('id', 'rd_'+id)
    }
    else if($this.attr('type') == 'range'){
      $this.attr('id', 'rg_'+id)
      $this.attr('value', $this.val())  
      
      if (!$this.attr('max') == true){
        $this.attr('max','100')
      }

      $this.on('change', function(){
        $this.attr('value', $this.val())  
      })   
    }
  });
}

inputIdentification();
materialCheckboxesRadio();
radioToggle();
rangeOutput();  
rangeFiller();

}

//------------------------------------------------------------------------------
//
// Tooltips
//
//------------------------------------------------------------------------------
function sizeTooltip(){

  var tooltips = $('[class*="m-tooltip"]');

  tooltips.each(function(){

    var $this = $(this);
    var tt_content = $this.attr('data-tooltip-content');
    var tt_co_length = tt_content.split(' ');
    var tt_co_length = tt_co_length.length;

    $this.append('<span class="tooltip_content">'+ tt_content +'</span>')

    if(tt_co_length > 25){
      $this.prepend('<style>[class*="m-tooltip"][data-tooltip-content*="'+ tt_content +'"] .tooltip_content{width: 300px}</style>')
    }

    else if(tt_co_length > 20){
      $this.prepend('<style>[class*="m-tooltip"][data-tooltip-content*="'+ tt_content +'"] .tooltip_content{width: 240px}</style>')
    }
    else if(tt_co_length > 10){
      $this.prepend('<style>[class*="m-tooltip"][data-tooltip-content*="'+ tt_content +'"] .tooltip_content{width: 200px}</style>')
    }
    else if(tt_co_length > 5){
      $this.prepend('<style>[class*="m-tooltip"][data-tooltip-content*="'+ tt_content +'"] .tooltip_content{width: 160px}</style>')
    }
    else if(tt_co_length > 3){
      $this.prepend('<style>[class*="m-tooltip"][data-tooltip-content*="'+ tt_content +'"] .tooltip_content{width: 120px}</style>')
    }

    else{

    }     

  });

}

//------------------------------------------------------------------------------
//
// Cards & Modals
//
//------------------------------------------------------------------------------
// All the cards / Modals functions
function cards(){

  // First, disable all links of the footer, to avoid the pageJump
  // The buttons are not here to redirect the user

  function cardsNaturalizeLinks(){
    var cards = $('[class*="m-card"]');
    var footer_btn = cards.find('footer a[class*="-btn"]');

    footer_btn.on('click', function(e){
      var $this = $(this);
      var tUrl = $this.attr('href');
      if(tUrl == '#' || tUrl == ''){
        e.preventDefault()
      }
    })
  }

  // A function to initialize cards, and display them or not on the page
  function displayCards(){

    // Class name
    var $class = 'on-screen'; 

    //Target cards
    var cards = $('[class*="m-card"]');

    // For each cards
    cards.each(function(){
      var $this = $(this);

      // If the card is not on screen
      if($this.hasClass('off-screen')){
        // Do nothing
      }

      // And if the card does not have the "off-screen" class, then it's on screen.
      else{
        $this.addClass($class)
      }
    })
  }


  // A function to give an ID to each card
  function cardsIdentification(){
    var card = $('[class*="m-card"]');  
    // This will be the id number
    var id = 0;

    card.each(function(){
      var $this = $(this);
      // Increment the id number
      id++;

      if(!$this.attr('id')){
        // If the type of the card is a datepicker card type, add a datepicker in the ID
        if($this.attr('data-card-type') == 'datepicker'){
          $this.attr('id','card_datepicker_'+id)
        }

        else{
          $this.attr('id','card_'+id)
        }
      }
    })

  }

  function cardsToggle(){
    // Find all the togglers
    var togglers = $('[data-btn-type*="toggle"]');
    var inCardTogglers = $('[class*="m-card"] footer a[data-btn-type*="toggle"]');

    // for each togglers
    togglers.each(function(){
      var $this = $(this);

      // Find the card to toggle (defined in the href)
      var toToggle = $this.attr('href');

      // Replace the hash sign
      var toToggle = toToggle.replace('#','');

      // Give it a custom attribute that indicate which modal is to toggle
      $this.attr('data-toggle', toToggle)
    })

    togglers.on('click', function(e){
      e.preventDefault();
      var $this = $(this);
      var cardToToggle = $this.attr('data-toggle');
      $('#'+cardToToggle).toggleClass('off-screen').toggleClass('on-screen');
    });

    inCardTogglers.each(function(){
      var $this = $(this);
      var inCardTogglersId = $this.parent().parent().attr("id")

      $this.attr({
        'href':'#'+ inCardTogglersId, 
        'data-toggle': inCardTogglersId
      });

    })

    function defineDay(){
      var tar = $('[data-card-type="datepicker"]');
      setTimeout(function(){

        tar.each(function(){
          var tid = $(this).attr('id');

          var d = new Date();
          var weekday = new Array(7);
          weekday[0]=  "Sunday";
          weekday[1] = "Monday";
          weekday[2] = "Tuesday";
          weekday[3] = "Wednesday";
          weekday[4] = "Thursday";
          weekday[5] = "Friday";
          weekday[6] = "Saturday";

          var n = weekday[d.getDay()];

          var today = $('#'+tid+' .pmu-today').text();
          var tyear = $('#'+tid+' .pmu-years .pmu-selected').text();
          var tmonth = $('#'+tid+' .pmu-month').text().substring(0,3);

          $('.pmu-view-days-num').empty().append(today)
          $('.pmu-view-year-num').empty().append(tyear)
          $('.pmu-month').empty().append(tmonth)
          $('.pmu-today-h').empty().append(n)


          console.log("found"+ '#'+tid+' .pmu-selected.pmu-today')
        })
      }, 10)
    }

    defineDay()

    
    
  }

  function dataBackgroundUrl(){
    var t_item = $('[data-background-url]');

    t_item.each(function(){
      $this = $(this);
      var bg_url = $this.attr('data-background-url');
      var bg_target = $this.find('[data-background]');
      if($this.attr('data-background-url')){
        bg_target.css({
          background:'url('+bg_url+')no-repeat center center',
          backgroundSize:'cover'
        })
      }
    })

  }
  function dataBackgroundColor(){
    var t_item = $('[data-background-color]');

    t_item.each(function(){
      $this = $(this);
      var bg_color = $this.attr('data-background-color');
      var bg_target = $this.find('[data-background]');
      if($this.attr('data-background-color')){
       bg_target.css({
        backgroundColor: bg_color,
        backgroundSize:'cover'
      })
     }
   })

  }

  function dataBackgroundText(){
    var t_item = $('[data-background-text]');

    t_item.each(function(){
      $this = $(this);
      var bg_text = $this.attr('data-background-text');
      var bg_target = $this.find('[data-background]');
      if($this.attr('data-background-text')){
       bg_target.append('<span class="card-header-text">'+ bg_text +'</span>')
     }
   })

  }

  function dataCurtain(){
    var t_item = $('[data-curtain]');

    setTimeout(function(){
     t_item.each(function(){
      $this = $(this);
      if($this.attr('data-curtain') === "true"){
       $this.parent().append('<div class="curtain"></div>')
     }
   })
   }, 150)

  }

  function datePicker(){
    var dp = $('[data-card-type*="datepicker"]');
    var day = '17'; // Replace with a real day script
    var month = 'DEC'; // Replace with a real day script
    var year = '2014'; // Replace with a real day script
    var id = 0;

    dp.each(function(){
      var $this = $(this);
      var dateHeader = $this.find('header');
      var dateContent = $this.find('.inner__card');
      var datePickerContainer = $('[id*="datepicker"][data-picket-id]');

      id++;

      $this.attr('data-datepicker-frame-id', id);

      dateHeader.empty().append('<span class="dp_day">'+day+'</span><span class="dp_month">'+month+'</span><span class="dp_year">'+year+'</span>');
      dateContent.empty().append('<div id="datepicker'+id+'" data-picker-id="'+id+'"></div>')
      datePickerContainer.empty().append('Date Picker Script');

    })

  }

  function deployCardFunctions(){
    cardsIdentification();
    displayCards();
    dataCurtain();
    cardsToggle();
    dataBackgroundUrl();
    dataBackgroundColor();
    datePicker();
    cardsNaturalizeLinks();
    dataBackgroundText();
  }
  deployCardFunctions();
}

//------------------------------------------------------------------------------
//
// Types and font related functions
//
//------------------------------------------------------------------------------
function textFlow(){
  var pTags = $('p');

  pTags.each(function(){
    var $this = $(this);

    $this.addClass('flow-text')
  });
}



//------------------------------------------------------------------------------
//
// Fire everything
//
//------------------------------------------------------------------------------

function  deploy(){
  initFramaterial();
  detectMobile();
  hierarchy();
  navigation();
  openDropdown();
  sidebarActions()
  materialInput();
  sizeTooltip();
  textFlow();
  cards();
  progressBars();
  spinner();
  toastsSnackbar();
}


deploy();


});