import React from 'react';
import './component/ecommerce.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome To Ware App</h1>
        
        <nav>
        <ul>
          <li><a href="#page">Home</a></li>
          <li><a href="#shop">Shop</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </nav>
      </header>
      <img src="https://assets-global.website-files.com/6009ec8cda7f305645c9d91b/60107f0ac4e460731db8aea3_6002086f72b727301501e594_wareapp-gif.gif" alt="" id="page"/>
      <main>
        
      <h2 id="shop">Featured Products</h2>
        <section className="products">
           
           
          <div className="product1">
            <img src="https://fossil.scene7.com/is/image/FossilPartners/JR1401_main?$sfcc_fos_large$" alt="Product" id="img1" />
            <h3> Fossil watch</h3>
            <p id="cost1">₹15000</p>
            <button id="add1">Add to Cart</button>
          </div> <br /> <br />
          <div className="product2">
            <img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQKtuJlSM5WKKBgVf6ZdFtWN2cps6pjwcACKuFEh-4VubELq6csIJsTY_MZPTlqNM8GL5JgLfxW1aDAkZsUds3VgDmPKLO2CSXwMPm5L7NeB7ujWMVbuFM5&usqp=CAE" alt="Product" id="img2" />
            <h3>Nike Sneakers</h3>
            <p id="cost2">₹12000</p>
            <button id="add2">Add to Cart</button>
          </div> <br /> <br />
          <div className="product3">
            <img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSom00Jixea5x9wi_AXvDqNoVcfNweWI34C3nZKR-GjcIWLkfCGLfeTFd7PyRj_0ordP0R5kp35jzpRYiCpDoWM1d6QS-6I1tFqxKGWOH3miCvr92rXOyKiwg&usqp=CAE" alt="Product" id="img3"/>
            <h3>Puma Flipflop</h3>
            <p id="cost3">₹1500</p>
            <button id="add3">Add to Cart</button>
          </div> <br /> 
          
          <div className="product4">
            <img src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSloAroIjI7Oolms_FEfID5Jj_13peWnhzHjb9HKd_QFya3HJL97j9lEyfod65Fa9tllvwF-jmgEGb-LWfkq8G1-8Wj252MUWzLwG34PcQ&usqp=CAE" alt="Product" id="img3"/>
            <h3> U.S POLO Assn Joggers</h3>
            <p id="cost4">₹1500</p>
            <button id="add4">Add to Cart</button>
          </div>

          
        </section> <br />  <br />
        <section className='products1'>
        <div className="product5">
            <img src="https://cdn.shopify.com/s/files/1/0623/8850/2700/products/PKWM0028_750x1000.png?v=1654782427" alt="Product" id="img5"/>
            <h3>King Lion Shirt</h3>
            <p id="cost5">₹1300</p>
            <button id="add5">Add to Cart</button>
          </div>

          <div className="product6">
            <img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTR65gttWMDZBIxgRljEwaesug-bTo_o1HjcZiP3Lbi4Hm1xtYFw9oALbo7_KurhWWSofhGsiSJCnz3DYcrhf3W5L7UOq6uuNuqQZExmYUrczWM1WDOKBGU&usqp=CAE" alt="Product" id="img6"/>
            <h3>Printed T-shirt</h3>
            <p id="cost6">₹500</p>
            <button id="add6">Add to Cart</button>
          </div>
          <div className="product7">
            <img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRFCP-VPGl3XGNRDrrlWvdyFKKRs3bVJXHytn8icXS-hfD16BqQm9T8OFqkoBEwmHsJfV77jMYaM0QJTo3QD1-eA6Oe2Ve2wgO12ppNtDObap3oIuAyuPamMA&usqp=CAE" alt="Product" id="img7"/>
            <h3>Samsung Smart Watch</h3>
            <p id="cost7">₹35000</p>
            <button id="add7">Add to Cart</button>
          </div>
          <div className="product8">
            <img src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR6NMW9R_0tGFeYmcDX8nl6HMJbN8L9ANXQmqBLeIxils0SlONFIkKq1gajIt2Rk4K_5JjYR5H9nw4w5i1Vgq-aTjgH4ptDnCNKV3w_uDF--fK7aZYxuI1L&usqp=CAE" alt="Product" id="img8"/>
            <h3>Laptop Bag</h3>
            <p id="cost8">₹3500</p>
            <button id="add8">Add to Cart</button>
          </div>
          
        </section>
        
        <section className="featured-category">
          <h2 id="about">Featured Category</h2>
          <img src="https://images.businessnewsdaily.com/app/uploads/2022/04/04073619/how-ecommerce-works.png" alt="Featured Category" />
         <p id="pp">At Ware App Online, we're passionate about making your online shopping experience as easy and enjoyable as possible. We offer a wide selection of high-quality products at competitive prices, with fast and reliable shipping to anywhere in the world.</p>
        </section>
      </main>
      <div class="footer">
      <h2 id="contact">Contact Us</h2>
         <form>
        <label>
           Name:
           <input type="text" name="name" />
         </label> <br /> <br />
         <label>
           Email:
           <input type="email" name="email" />
         </label> <br /> <br />
         <label>
          Phone :
           <input type="phone" name="amount" />
         </label> <br />
         <br></br>
         <button type="submit" class="btn">Submit </button>
       </form>
       </div>
      <footer>
        <p>&copy; 2023 E-Commerce Site</p>
      </footer>
    </div>
  );
}

export default App;