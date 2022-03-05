import "./App.css";



function App() {
  const dressPrice = 1000;
  const sareePrice = 1500;
  const gownsPrice = 2000;
  const tshirtPrice = 500;
  const palazzosPrice = 800;
  const jeansPrice = 1000;
  const skirtPrice = 500;
  const kurtasetPrice = 1000;
  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "INR",

    
    minimumFractionDigits: 0,
   
  });

  const loadScript = (src) => {
    return new Promise((resovle) => {
      const script = document.createElement("script");
      script.src = src;

      script.onload = () => {
        resovle(true);
      };

      script.onerror = () => {
        resovle(false);
      };

      document.body.appendChild(script);
    });
  };

  const displayRazorpay = async (amount) => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("You are offline... Failed to load Razorpay SDK");
      return;
    }

    const options = {
      key: "rzp_test_wwDeBMKrZ0Blym",
      currency: "INR",
      amount: amount * 100,
      name: "Neha Singh",
      description: "Thanks for purchasing",
      image:
        "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1508919801845-fc2ae1bc2a28%3Fixlib%3Drb-1.2.1%26ixid%3DMnwxMjA3fDB8MHxzZWFyY2h8MXx8aW1nfGVufDB8fDB8fA%253D%253D%26w%3D1000%26q%3D80&imgrefurl=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fimg&tbnid=QbKX_KCUbjkZ4M&vet=12ahUKEwj-m923xa72AhWWR2wGHcOSDD8QMygKegUIARDqAQ..i&docid=f3riLA-4-1potM&w=1000&h=637&q=img&ved=2ahUKEwj-m923xa72AhWWR2wGHcOSDD8QMygKegUIARDqAQ",

      handler: function (response) {
        alert(response.razorpay_payment_id);
        alert("Payment Successfully");
      },
      prefill: {
        name: "Neha Singh",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };
  return (
    
    <div className="App">
      
      <div className="product">
    
          <div className="prod-container">
            <div className="left-container">
              <div className="prod-container-left">
                <img
                  src="https://img.freepik.com/free-photo/dark-haired-woman-with-red-lipstick-smiles-leans-stand-with-clothes-holds-package-pink-background_197531-17609.jpg?size=626&ext=jpg&ga=GA1.1.2010810050.1643673600"
                  alt="pimage"
                />
              </div>
            </div>

            <div className="prod-container-right">
              <div className="prod-container-info">
                <h1>Dress</h1>
                <div className="itemOption__rating">
                  <p>5</p>
                  <span>
                    <img
                      src="https://img.icons8.com/fluency/2x/star.png"
                      alt="don"
                    />
                  </span>
                </div>
                <p>{formatter.format(dressPrice)}</p>
              </div>
            </div>
            <div className="buttons">
              <button onClick={() => displayRazorpay(dressPrice)}>
                BUY NOW
              </button>
            </div>
          </div>
      </div>





      <div className="product">
    
    <div className="prod-container">
      <div className="left-container">
        <div className="prod-container-left">
          <img
            src="https://m.media-amazon.com/images/I/51zHGwS+07L.jpg"
            alt="pimage"
          />
        </div>
      </div>

      <div className="prod-container-right">
        <div className="prod-container-info">
          <h1>Gowns</h1>
          <div className="itemOption__rating">
            <p>6</p>
            <span>
              <img
                src="https://img.icons8.com/fluency/2x/star.png"
                alt="don"
              />
            </span>
          </div>
          <p>{formatter.format(gownsPrice)}</p>
        </div>
      </div>
      <div className="buttons">
        <button onClick={() => displayRazorpay(gownsPrice)}>
          BUY NOW
        </button>
      </div>
    </div>
</div>





<div className="product">
    
          <div className="prod-container">
            <div className="left-container">
              <div className="prod-container-left">
                <img
                  src="https://cdn11.bigcommerce.com/s-pkla4xn3/images/stencil/1280x1280/products/6158/53325/Sperwillton-T-shirt-Women-2018-Spring-camisa-feminina-Cotton-Female-T-Shirts-Tops-Feminine-Casual-Basic__38281.1585557711.jpg?c=2"
                  alt="pimage"
                />
              </div>
            </div>

            <div className="prod-container-right">
              <div className="prod-container-info">
                <h1>T-shirt</h1>
                <div className="itemOption__rating">
                  <p>6.6</p>
                  <span>
                    <img
                      src="https://img.icons8.com/fluency/2x/star.png"
                      alt="don"
                    />
                  </span>
                </div>
                <p>{formatter.format(tshirtPrice)}</p>
              </div>
            </div>
            <div className="buttons">
              <button onClick={() => displayRazorpay(tshirtPrice)}>
                BUY NOW
              </button>
            </div>
          </div>
      </div>





      <div className="product">
    
    <div className="prod-container">
      <div className="left-container">
        <div className="prod-container-left">
          <img
            src="https://images.meesho.com/images/products/73111865/pqsvd_512.jpg"
            alt="pimage"
          />
        </div>
      </div>

      <div className="prod-container-right">
        <div className="prod-container-info">
          <h1>Palazzos</h1>
          <div className="itemOption__rating">
            <p>5.6</p>
            <span>
              <img
                src="https://img.icons8.com/fluency/2x/star.png"
                alt="don"
              />
            </span>
          </div>
          <p>{formatter.format(palazzosPrice)}</p>
        </div>
      </div>
      <div className="buttons">
        <button onClick={() => displayRazorpay(palazzosPrice)}>
          BUY NOW
        </button>
      </div>
    </div>
</div>








<div className="product">
    
          <div className="prod-container">
            <div className="left-container">
              <div className="prod-container-left">
                <img
                  src="https://5.imimg.com/data5/SELLER/Default/2020/9/JV/TW/GM/36681553/ladies-denim-high-waist-jeans-500x500.jpg"
                  alt="pimage"
                />
              </div>
            </div>

            <div className="prod-container-right">
              <div className="prod-container-info">
                <h1>Jeans</h1>
                <div className="itemOption__rating">
                  <p>4</p>
                  <span>
                    <img
                      src="https://img.icons8.com/fluency/2x/star.png"
                      alt="don"
                    />
                  </span>
                </div>
                <p>{formatter.format(jeansPrice)}</p>
              </div>
            </div>
            <div className="buttons">
              <button onClick={() => displayRazorpay(jeansPrice)}>
                BUY NOW
              </button>
            </div>
          </div>
      </div>





      <div className="product">
    
    <div className="prod-container">
      <div className="left-container">
        <div className="prod-container-left">
          <img
            src="https://4.imimg.com/data4/MA/DB/MY-9953785/ladies-western-skirts-500x500.jpg"
            alt="pimage"
          />
        </div>
      </div>

      <div className="prod-container-right">
        <div className="prod-container-info">
          <h1>Skirts</h1>
          <div className="itemOption__rating">
            <p>3.9</p>
            <span>
              <img
                src="https://img.icons8.com/fluency/2x/star.png"
                alt="don"
              />
            </span>
          </div>
          <p>{formatter.format(skirtPrice)}</p>
        </div>
      </div>
      <div className="buttons">
        <button onClick={() => displayRazorpay(skirtPrice)}>
          BUY NOW
        </button>
      </div>
    </div>
</div>








<div className="product">
    
          <div className="prod-container">
            <div className="left-container">
              <div className="prod-container-left">
                <img
                  src="https://images.meesho.com/images/products/16895315/54190_512.jpg"
                  alt="pimage"
                />
              </div>
            </div>

            <div className="prod-container-right">
              <div className="prod-container-info">
                <h1>Kurta Set</h1>
                <div className="itemOption__rating">
                  <p>4.6</p>
                  <span>
                    <img
                      src="https://img.icons8.com/fluency/2x/star.png"
                      alt="don"
                    />
                  </span>
                </div>
                <p>{formatter.format(kurtasetPrice)}</p>
              </div>
            </div>
            <div className="buttons">
              <button onClick={() => displayRazorpay(kurtasetPrice)}>
                BUY NOW
              </button>
            </div>
          </div>
      </div>











      <div className="product">
     <>
          <div className="prod-container">
            <div className="left-container">
              <div className="prod-container-left">
                <img
                  src="https://5.imimg.com/data5/OM/FW/MY-22548213/designer-party-wear-saree-for-women-wholesale-bridal-saree-500x500.jpg"
                  alt="pimage"
                />
              </div>
            </div>

            <div className="prod-container-right">
              <div className="prod-container-info">
                <h1>Saree</h1>
                <div className="itemOption__rating">
                  <p>5.5</p>
                  <span>
                    <img
                      src="https://img.icons8.com/fluency/2x/star.png"
                      alt=""
                    />
                  </span>
                </div>
                <p>{formatter.format(sareePrice)}</p>
              </div>
            </div>
            
            <div className="buttons">
              <button onClick={() => displayRazorpay(sareePrice)}>
                BUY NOW
              </button>
            </div>
          </div>
        </>
      </div>
      
    </div>
    
  );
}

export default App;
