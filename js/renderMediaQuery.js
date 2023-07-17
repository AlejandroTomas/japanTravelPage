let selectBackgrundDesktop = `
<div class="wraaper-city-select">

                    <div class="item-city" id="item-Tokyo">
                        <div class="item-left">
                            <div class="container-img" id="select-Tokyo">
                                <!-- Image -->
                            </div>
                        </div>
                        <div class="item-right">
                            <span>GET INTO THE FUTURE IN</span>
                            <h2>Tokyo</h2>
                        </div>
                        <div class="clickeable-div"></div>
                    </div>
                    
                    <div class="item-city" id="item-Kyoto">
                        <div class="item-left">
                            <div class="container-img" id="select-Kyoto">
                                <!-- Image -->
                            </div>
                        </div>
                        <div class="item-right">
                            <span>TURN BACK THE TIME IN</span>
                            <h2>Kyoto</h2>
                        </div>
                        <div class="clickeable-div"></div>
                    </div>
                    
                    <div class="item-city" id="item-Osaka">
                        <div class="item-left">
                            <div class="container-img" id="select-Osaka">
                                <!-- Image -->
                            </div>
                        </div>
                        <div class="item-right">
                            <span>GET IMPRESSED BY</span>
                            <h2>Osaka</h2>
                        </div>
                        <div class="clickeable-div"></div>
                    </div>
                    
                    <div class="item-city" id="item-Nara">
                        <div class="item-left">
                            <div class="container-img" id="select-Nara">
                                <!-- Image -->
                            </div>
                        </div>
                        <div class="item-right">
                            <span>MAKE FRIENDS WITH NATURE IN</span>
                            <h2>Nara</h2>
                        </div>
                        <div class="clickeable-div"></div>
                    </div>
                    <
                    </div> 
`;

let selectBackgrundTablet = `
<div class="wraaper-city-select">

                    <div class="item-city" id="item-Tokyo">
                        <div class="item-left">
                            <div class="container-img" id="select-Tokyo">
                                <!-- Image -->
                            </div>
                        </div>
                        <div class="item-right">
                            <span>GET INTO THE FUTURE IN</span>
                            <h2>Tokyo</h2>
                        </div>
                        <div class="clickeable-div"></div>
                    </div>
                    
                    <div class="item-city" id="item-Kyoto">
                        <div class="item-left">
                            <div class="container-img" id="select-Kyoto">
                                <!-- Image -->
                            </div>
                        </div>
                        <div class="item-right">
                            <span>TURN BACK THE TIME IN</span>
                            <h2>Kyoto</h2>
                        </div>
                        <div class="clickeable-div"></div>
                    </div>
                    
                    <div class="item-city" id="item-Osaka">
                        <div class="item-left">
                            <div class="container-img" id="select-Osaka">
                                <!-- Image -->
                            </div>
                        </div>
                        <div class="item-right">
                            <span>GET IMPRESSED BY</span>
                            <h2>Osaka</h2>
                        </div>
                        <div class="clickeable-div"></div>
                    </div>
                    
                    <div class="item-city" id="item-Nara">
                        <div class="item-left">
                            <div class="container-img" id="select-Nara">
                                <!-- Image -->
                            </div>
                        </div>
                        <div class="item-right">
                            <span>MAKE FRIENDS WITH NATURE IN</span>
                            <h2>Nara</h2>
                        </div>
                        <div class="clickeable-div"></div>
                    </div>
                    <div class="tab">
                        select city
                    </div>
                    </div> 
`;

const menuDesktop = `
                    <ul>
                        <li><a href="#">Hometales of Japan</a></li>
                        <li><a href="#">Destinations</a></li>
                        <li><a href="#">Experience</a></li>
                    </ul>
                    <label>
                        <input type="search" placeholder="SEARCH...">
                        <span class="fas fa-search"></span>
                    </label>
`;
const menuTablet = ` <div class="hamburguer__container">
<i class="fas fa-bars" id="menuQuery" status="no-active"></i>
</div>
<div class="menu-absolute" id="element">
<div class="wrapper-menu-absoluto">
    <h2><a href="#">HOME</a></h2>
    <ul>
        <li><a href="#">Hometales of Japan</a><i class="fas fa-hotel"></i></li>
        <li><a href="#">Destinations</a><i class="fas fa-plane-arrival"></i></li>
        <li><a href="#">Experience</a><i class="fas fa-hiking"></i></li>
    </ul>
    <div class="social">
        <span class="fab fa-twitter"></span>
        <span class="fab fa-facebook-f"></span>
        <span class="fab fa-instagram"></span>
        <span class="fas fa-tram"></span>
    </div>
    <div class="close-menu"><i id="close" class="fas fa-times"></i></div>
</div>
</div>
<label>
<input type="search" placeholder="SEARCH...">
<span class="fas fa-search"></span>
</label>
`;

export default function renderScreen(sizeScreen, renderRoot,config) {
 switch(config){
    case 'menu':
        if (sizeScreen <= 768) {
            console.log("tablet");
            renderRoot.innerHTML = menuTablet;
          }
          if (sizeScreen > 768) {
            console.log("desktop");
            renderRoot.innerHTML = menuDesktop;
          }
        break;
    case'selectBackgrund':
            if (sizeScreen <= 768) {
                console.log("tablet");
                renderRoot.innerHTML = selectBackgrundTablet;
            }
            if (sizeScreen > 768) {
                console.log("desktop");
                renderRoot.innerHTML = selectBackgrundDesktop;
            }
          break;

 }
}
