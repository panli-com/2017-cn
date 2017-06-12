function FloorList(data) {
  var mlc = 8,
    fl1 = [],
    fl2 = [],
    fl3 = [],
    fl4 = [],
    fl5 = [],
    fl6 = [],
    fl0 = [];

  for (var i = 0; i < mlc; i++) {
    fl0.push(data[i]);
  }
  for (var i = mlc; i < mlc * 2; i++) {
    fl1.push(data[i]);
  }
  for (var i = mlc * 2; i < mlc * 3; i++) {
    fl2.push(data[i]);
  }
  for (var i = mlc * 3; i < mlc * 4; i++) {
    fl3.push(data[i]);
  }
  for (var i = mlc * 4; i < mlc * 5; i++) {
    fl4.push(data[i]);
  }
  for (var i = mlc * 5; i < mlc * 6; i++) {
    fl5.push(data[i]);
  }
  // for (var i = mlc * 6; i < mlc * 7; i++) {
  //     fl6.push(data[i]);
  // }



  FloorAll(fl0, 'cx', 1);
  FloorAll(fl1, 'ts', 2);
  FloorAll(fl2, 'rw', 3);
  FloorAll(fl3, 'sh', 4);
  FloorAll(fl4, 'sh', 5);
  FloorAll(fl5, 'sh', 6);
  // FloorAll(fl6, 'sh', 7);


}

function FloorAll(data, imgHead, id) {

  var str = '';
  for (var i = 0; i < data.length; i++) {
    var name = data[i].商品名称,
      price = data[i].价格,
      imgUrl = './build/css/imgs/products/' + data[i].图片名称,
      Url = "http://www.panli.com/Crawler.aspx?purl=" + data[i].链接,
      proUrl = data[i].链接;

    str += `<li>
                    <a href="${Url}" target="_blank" class="" title="${name}">
                        <div class="thumb">
                            <img src="${imgUrl}" alt="">
                        </div>
                        <div class="product-content">
                            <p class="product-name">
                                ${name}
                            </p>
                            <div class="buy-wrap">
                                <span class="price">
                                    <i>￥</i>${price}
                                </span>
                                <span class="buy-btn">
                                    马上代购
                                </span>
                            </div>
                        </div>
                    </a>
                </li>`


  };
  $("#floor-" + id).find("ul").html(str);
}