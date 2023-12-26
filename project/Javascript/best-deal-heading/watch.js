let loader = document.querySelector('#loader');
let watches = document.querySelector('#allWatches');
// let hide = document.querySelector('.loader');


console.log('location');
setTimeout(loader,5000);
loader.addEventListener('mouseover',loading);


function loading()
{
    let addGroup = document.createElement('div');
    addGroup.classList.add('group6');

    // console.log(addGroup);
    const htmlData=`
    <div class="group2">
          <div class="watch">
            <div class="section">
                <div class="leftSection">
                    <div class="image">
                    <a href="#"><img class ='setImage' src="/project/Images/watch/w4.webp" alt=""></a>
                    </div>
                    <span class="text">60 Hours Playback</span>
                </div>
                <div class="rightSection">
                    <span class="top">
                        <div class="rating"> <i class="fa-solid fa-star"></i>4.8</div>
                        <div class="seller">Flipkart</div>
                    </span>
                    <div class="Heading">
                        <p class="i1">Airpods 131 </p>
                    </div>
                    <div class="i2">
                        <span class="price bold">&#8377;999</span>
                        <span class="cutprice"><del>&#8377;1599</del> </span>
                        <span class="discount">65%off</span>
                    </div>
                    <div class="i3">
                        <span class="technology">13mm driver</span>
                        <span class="technology-1">IWP technology</span>
                    </div>
                    <div class="button">
                        <button class="b1">Add to Cart</button>
                    </div>
            </div>
            </div>
        </div>
      <div class="watch">
        <div class="section">
          <div class="leftSection">
                  <div class="image">
                  <a href="#"><img class ='setImage' src="/project/Images/watch/w9.webp" alt=""></a>
                  </div>
                  <span class="text">60 Hours Playback</span>
              </div>
              <div class="rightSection">
                  <span class="top">
                      <div class="rating"> <i class="fa-solid fa-star"></i>4.8</div>
                      <div class="seller">Flipkart</div>
                  </span>
                  <div class="Heading">
                      <p class="i1">Airpods 131 </p>
                  </div>
                  <div class="i2">
                      <span class="price bold">&#8377;999</span>
                      <span class="cutprice"><del>&#8377;1599</del> </span>
                      <span class="discount">65%off</span>
                  </div>
                  <div class="i3">
                      <span class="technology">13mm driver</span>
                      <span class="technology-1">IWP technology</span>
                  </div>
                  <div class="button">
                      <button class="b1">Add to Cart</button>
                  </div>
          </div>
          </div>
      </div>
      <div class="watch">
        <div class="section">
          <div class="leftSection">
                  <div class="image">
                  <a href="#"><img class ='setImage' src="/project/Images/watch/w7.webp" alt=""></a>
                  </div>
                  <span class="text">60 Hours Playback</span>
              </div>
              <div class="rightSection">
                  <span class="top">
                      <div class="rating"> <i class="fa-solid fa-star"></i>4.8</div>
                      <div class="seller">Flipkart</div>
                  </span>
                  <div class="Heading">
                      <p class="i1">Airpods 131 </p>
                  </div>
                  <div class="i2">
                      <span class="price bold">&#8377;999</span>
                      <span class="cutprice"><del>&#8377;1599</del> </span>
                      <span class="discount">65%off</span>
                  </div>
                  <div class="i3">
                      <span class="technology">13mm driver</span>
                      <span class="technology-1">IWP technology</span>
                  </div>
                  <div class="button">
                      <button class="b1">Add to Cart</button>
                  </div>
          </div>
          </div>
      </div>
      </div>
    
    `
    addGroup.insertAdjacentHTML('afterbegin',htmlData);
    watches.appendChild(addGroup);
    
    loader.style.display='none';


}