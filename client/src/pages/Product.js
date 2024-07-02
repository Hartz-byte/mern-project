import { useEffect, useState } from "react";
import { useContext } from "react";
import FavContext from "../store/contextFav";

function Product() {
  let [products, setProducts] = useState([]);
  let [isLoading, setIsLoading] = useState(true);

  const favContext = useContext(FavContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3002/product");
        const data = await response.json();
        setProducts(data.data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  // const isFav = favContext.isFavItem(products._id);

  // const toggleFav = (product, id) => {
  //   if (isFav) {
  //     favContext.removeFavItem(id);
  //     console.log("Removed");
  //   } else {
  //     favContext.addFavItem({ ...product });
  //     console.log("Added");
  //   }
  // };

  const isFav = (productId) => {
    if (!favContext.favoriteIds) {
      return false;
    }
    return favContext.favoriteIds.includes(productId);
  };

  const toggleFav = (product) => {
    const productId = product._id;

    if (isFav(productId)) {
      favContext.removeFavItem(productId);
      console.log("Removed from favorites");
    } else {
      favContext.addFavItem({ ...product });
      console.log("Added to favorites");
    }
  };

  return (
    <div>
      {isLoading ? (
        <h1>Data is loading</h1>
      ) : (
        <ul>
          {products.length > 0 ? (
            products.map((product) => (
              <div key={product._id} style={{ display: "flex", margin: 5 }}>
                <li>{product.product_name}</li>
                <button
                  onClick={() => toggleFav(product)}
                  style={{ marginLeft: 5 }}
                >
                  {isFav(product._id)
                    ? "Remove from Favorites"
                    : "Add to Favorites"}
                </button>
              </div>
            ))
          ) : (
            <p>No products found.</p>
          )}
        </ul>
      )}
    </div>
  );
}

export default Product;
