import React from "react";
import "./the-best.css"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faRobot,faLightbulb,faCogs,faShieldAlt} from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";


const TheBest = () => {
  return (
    <div className="best-container3">
      <div className="best-con13">
        <img
          src="https://images.hindustantimes.com/img/2022/12/15/550x309/spacejoy-YI2YkyaREHk-unsplash_1671112806479_1671112828103_1671112828103.jpg"
          alt="SS Automation"
          className="best-image13"
        />
        <div className="best-text3">
          <h1>SS Interiors The Best</h1>
          {/* <p>Transform your space with our professional flooring solutions</p> */}
        </div>
      </div>

<div className="best-boxes3">
  <div className="bestbox3">
    <i class="fa-solid fa-palette"></i>
    <h3>Interior Design</h3>
    <p>Complete home design solutions</p>
  </div>

  <div className="bestbox3">
    <i class="fa-regular fa-house"></i>
    <h3>Space Planning</h3>
    <p>Optimal layout design</p>
  </div>

  <div className="bestbox3">
    <i class="fa-solid fa-couch"></i>
    <h3>Furniture Selection</h3>
    <p>Curated furniture solutions</p>
  </div>

  <div className="bestbox3">
   <i class="fa-solid fa-lightbulb"></i>
    <h3>Lighting Design</h3>
    <p>Custom lighting plans</p>
  </div>
</div>

<div className="best-products3">
  <h2>Our Products</h2>
  <div className="best-grid3">
    <div className="best-card3">
      <img src="https://hangerswala.com/cloth-drying-hanger/clothes-dryi-hangers/" alt="Product 1" className="best-image3" />
      <p className="best-title3">Cloth Ceiling Hanger</p>
      <p className="best-desc3">Space-saving, Durable, Convenient</p>
    </div>
    <div className="best-card3">
      <img src="https://5.imimg.com/data5/SELLER/Default/2023/10/351501516/UG/ZD/SK/9251935/pleated-mosquito-mesh-door-500x500.jpeg" alt="Product 2" className="best-image3" />
      <p className="best-title3">Pleated Mosquito Screens</p>
      <p className="best-desc3">Protective, Foldable, Lightweight Artistic floor lamp</p>
    </div>
    <div className="best-card3">
      <img src="https://images-cdn.ubuy.co.in/634d051de82b6202ff23a8c3-gacend-3d-no-glue-static-decoration.jpg" className="best-image3" />
      <p className="best-title3">Window Panels</p>
      <p className="best-desc3">Stylish, Adjustable, Functional</p>
    </div>
    <div className="best-card3">
      <img src="https://assets.ajio.com/medias/sys_master/root/20240919/kmNy/66ebfce1f9b8ef490b519a82/-473Wx593H-700443388-grey-MODEL.jpg" alt="Product 4" className="best-image3" />
      <p className="best-title3">Curtains</p>
      <p className="best-desc3">Decorative, Soft, Versatile</p>
    </div>
    <div className="best-card3">
      <img src="https://m.media-amazon.com/images/I/51lL4uPzy+L._UF894,1000_QL80_.jpg" alt="Product 5" className="best-image3" />
      <p className="best-title3">PVC Partitions</p>
      <p className="best-desc3">Weatherproof, Durable, Effective</p>
    </div>
    <div className="best-card3">
      <img src="https://ae01.alicdn.com/kf/Sce8ff755a52e48bdbf662c07733e1fbdY.jpg" alt="Product 6" className="best-image3" />
      <p className="best-title3">Customized wall pannels</p>
      <p className="best-desc3">Bespoke, Decorative, Unique</p>
    </div>
    <div className="best-card3">
      <img src="https://5.imimg.com/data5/SELLER/Default/2023/3/295983414/QL/VD/QM/124291438/mdf-louver-panel-500x500.jpg" alt="Product 7" className="best-image3" />
      <p className="best-title3">Louvers & Panels</p>
      <p className="best-desc3">Insulating, Private, Energy-efficient</p>
    </div>
    <div className="best-card3">
      <img src="https://m.media-amazon.com/images/I/713yAL9uGJL._UF894,1000_QL80_.jpg" alt="Product 8" className="best-image3" />
      <p className="best-title3">Glass Films</p>
      <p className="best-desc3">Transparent, Protective, Frosted</p>
    </div>
  
  </div>
</div>

<div className="best-intro3">
  <h1>Why Choose Our Design Services?</h1>
  <p>We create beautiful, functional spaces that reflect your style and personality</p>
</div>
<div className="best-section3">
  <div className="best-left3">
    <div className="best-points3">
          <p><FontAwesomeIcon icon={faCheck} className="best-icon3" />Experienced design team</p>
      <p><FontAwesomeIcon icon={faCheck} className="best-icon3" /> Custom solutions for every budget</p>
      <p><FontAwesomeIcon icon={faCheck} className="best-icon3" /> High-quality materials</p>
      <p><FontAwesomeIcon icon={faCheck} className="best-icon3" /> Project management</p>
    <p><FontAwesomeIcon icon={faCheck} className="best-icon3" />3D visualization</p>
      <p><FontAwesomeIcon icon={faCheck} className="best-icon3" /> Post-project support</p>
    </div>
  </div>

  <div className="best-right3">
    <img
      src="https://images.hindustantimes.com/img/2022/12/15/550x309/spacejoy-YI2YkyaREHk-unsplash_1671112806479_1671112828103_1671112828103.jpg"
      alt="Automation Feature"
      className="best-image33"
    />
  </div>
</div>

      

    </div>
  );
};

export default TheBest;
