const mediaChangePc = (query) => {
    if(query.matches) {
// 時間の指定
let time = 5000;

// スライドする要素を取得
let imgs = document.querySelectorAll('.pc_slide img');

// 最初の画像を表示
imgs[0].classList.add('show');

// 画像の番号
let imgNum = 0;
function showImg () {
  for (let i = 0; i < imgs.length; i++) {
    imgs[i].classList.remove('show');
  }
  if (imgNum >= imgs.length - 1) {
    imgNum = 0;
  } else {
    imgNum++;
  }
  imgs[imgNum].classList.add('show');
  showImgTimer();
}
function showImgTimer () {
  setTimeout(showImg, time);
}
showImgTimer()


    } else {
        let time = 5000;

// スライドする要素を取得
let imgs = document.querySelectorAll('.sp_slide img');

// 最初の画像を表示
imgs[0].classList.add('show');

// 画像の番号
let imgNum = 0;
function showImg () {
  for (let i = 0; i < imgs.length; i++) {
    imgs[i].classList.remove('show');
  }
  if (imgNum >= imgs.length - 1) {
    imgNum = 0;
  } else {
    imgNum++;
  }
  imgs[imgNum].classList.add('show');
  showImgTimer();
}
function showImgTimer () {
  setTimeout(showImg, time);
}
showImgTimer()
    }
};

// ブレイクポイントを追加
const queryPc = matchMedia("(min-width: 751px)");
queryPc.addListener(mediaChangePc);

// 初回表示の際も実行
mediaChangePc(queryPc);

// スライド画像の高さを復活させる
$(window).on('load resize', function(){
  let biggestHeight = "0";
  $(".pc_slide *, .sp_slide *").each(function(){
      if ($(this).height() > biggestHeight ) {
          biggestHeight = $(this).height()
      }
  });
  $(".pc_slide, .sp_slide").height(biggestHeight);
})

$(window).scroll(function (){
$('#menu_head_sp, #menu_head_pc').each(function(){
  let position = $(this).offset().top;
  let scroll = $(window).scrollTop();
  let windowHeight = $(window).height();
  if (scroll > position - windowHeight + 20){
    $(this).addClass('isActive');
  }
});
});

$(".menu-trigger").on("click", function () {
  $(".menu-trigger").toggleClass("close");
  $(".nav-wrapper").toggleClass("fade");
});

/*$(window).on('load resize', function(){
  let biggestWidth = "0";
  $("#header_message_whole *").each(function(){
      if ($(this).width() > biggestWidth ) {
          biggestWidth = $(this).width()
      }
  });
  $("#header_message_whole").width(biggestWidth);
})*/