import { useRef } from "react";
import { useNavigate } from "react-router-dom";

function AddProduct() {
  const navigate = useNavigate();

  const product_name_ref = useRef();
  const image_ref = useRef();
  const price_ref = useRef();
  const textarea_ref = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const product_name = product_name_ref.current.value;
    const image = image_ref.current.value;
    const price = price_ref.current.value;
    const description = textarea_ref.current.value;

    const product = {
      product_name,
      image,
      price,
      description,
    };
    // console.log(product);

    fetch("http://localhost:3002/product", {
      method: "POST",
      body: JSON.stringify(product),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => navigate("/", { replace: true }))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="product_name">Product Name</label>
          <input
            type="text"
            placeholder="product name"
            id="product_name"
            ref={product_name_ref}
          />
        </div>

        <div>
          <label htmlFor="image">Image</label>
          <input type="text" placeholder="image" id="image" ref={image_ref} />
        </div>

        <div>
          <label htmlFor="price">Price</label>
          <input type="text" placeholder="price" id="price" ref={price_ref} />
        </div>

        <div>
          <label htmlFor="description">Text Area</label>
          <textarea rows={5} id="description" ref={textarea_ref} />
        </div>

        <div>
          <button>Add</button>
        </div>
      </form>
    </div>
  );
}

export default AddProduct;
