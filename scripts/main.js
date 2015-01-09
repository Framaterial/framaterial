$(document).ready(function(){
// Only for the demo 
$('#reload').on('click', function(e){
  $('.hierarchical-timing > *').css('transform', 'scale(0)'); 

  setTimeout(function(){
    $('.hierarchical-timing > *').css('transform', 'scale(1)');
  }, 3500)
}); 

function closeToggle(){
  $('[data-action="close-toggle"]').on('click', function(e){
    var $this = $(this);
    var panel = $this.closest('.part').find('.toggle'); 
    panel.toggleClass('open');
    
    if($this.hasClass('material-btn-blue')){
      $this.removeClass('material-btn-blue').addClass('material-btn-red').text('close');
    }
    else{
      $this.removeClass('material-btn-red').addClass('material-btn-blue').text('open');
    }
  })
}



function download(){
  var css = $.ajax({
    type: "HEAD",
    url: "styles/main.min.css",
    success: function(msg){

      $('#download').attr('data-size-css',(css.getResponseHeader('Content-Length')[0] + css.getResponseHeader('Content-Length')[1]) );
    }
  });

  var js = $.ajax({
    type: "HEAD",
    url: "scripts/framaterial.min.js",
    success: function(msg){

      $('#download').attr('data-size-js', (js.getResponseHeader('Content-Length')[0] + js.getResponseHeader('Content-Length')[1]) );

    }
  });

  setTimeout(function(){
    var numOne = $('#download').attr('data-size-css');
    var numTwo = $('#download').attr('data-size-js');
    var res = parseInt(numOne) + parseInt(numTwo);

    $('#download ~ .tooltip_content').empty().append( res + 'Ko')
  }, 150)
}

// function detectGithub(){

// var pathArray = window.location.href.split( '/' );
// var protocol = pathArray[0];
// var host = pathArray[2];
// var url = protocol + '//' + host;
// var url = url.replace('http://lukyvj.','');
// var url = url.replace('.io','');


//   if(url == 'github'){
//     $('body').attr('data-host','github')
//   }
// }

// detectGithub()

function activeSideNav(){
  var pageTitle = jQuery(location).attr('href');
  var pageTitle = pageTitle.split('/');
  var pageTitle = pageTitle[3].replace('.html','');
  var pageTitle = pageTitle.replace('#','');
  var backColor = $("[class*='sidebar']").attr('background')
  
  $("[class*='sidebar'] ul li a[href*='"+pageTitle+"']").parent().css({
    'background':'rgba(255,255,255,.2)' 
  })

  $("[class*='sidebar'] ul li a[href*='"+pageTitle+"']").css({ 
    'color': backColor + '!important'
  })
}

function toggleComponents(){
  var trig = $('.navigation-side li a');
  var component = $('.panel');

  trig.on('click',function(){
    var $this = $(this);
    var c_url = $this.attr('href');
    var c_url = c_url.replace('#','');
    var componentSelected = $('.panel[data-component="'+ c_url +'"]');

    component.removeClass('on-screen');
    componentSelected.addClass('on-screen');

  });
}

function sampleLinker(){
  var compo_section = $('[data-linker*="on"] header h3');

  var sample_root = '/examples/';

  compo_section.each(function(){
    var $this = $(this);
    var sample = $this.text().toLowerCase();
    //var sample = sample.replace('#','');
    var linkToSample = ' <a href="'+sample_root+sample+'.html" class="lts material-btn-blue right">Example</a>';
    $this.append(linkToSample);
  });
}

function identifier(){
  var elms = $('[data-component]');
  elms.each(function(){
    var $this = $(this);
    $this.attr('id', $this.attr('data-component'));
  })
}

// $('a').click(function(){
//   $('html, body').animate({
//     scrollTop: $( $.attr(this, 'href') ).offset().top
//   }, 500);
//   return false;
// });

if(window.location.href.indexOf("examples") > -1) {
  $('header').addClass('documentation')
}

function appendAboutModal(){
  var modalStr = '<div class="m-card bit-2 off-screen" data-type="modal" data-background-text="about" data-background-color="#03a9f4" data-curtain="true" data-depth="4" id="about"><header data-background></header><section class="inner__card"><h2 class="title">Framaterial V1.0 (RC.1.2)</h2><p>Framaterial - A Framework to create Material Design projects </p><ul><li>Creation : <code>Decemember 3 2014</code></li><li>Author : <code>@LukyVj</code></li><li>Contributions : <code>@Dervonderbengen</code></li><li>On Github : <code>https://github.com/LukyVj/Framaterial-design</code></li></ul></section><footer><a href="#" data-btn-type="toggle" class="material-btn-flat-black">Cancel</a><a href="#" class="material-btn-flat-lightblue">Ok</a></footer></div>';
  $('.material-design-layout').append(modalStr);
}
toggleComponents()
closeToggle()
download()
sampleLinker()
identifier()
appendAboutModal()


});