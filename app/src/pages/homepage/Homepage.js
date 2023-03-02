import React, { useEffect } from "react";
import "./Homepage.css";
import Category from "../../components/category/Category";
import SingleCategory from "../../components/singlecategory/SingleCategory";
import ProductList from "../../components/productlist/ProductList";
import { SliderData } from "../../components/slider/SliderData"
import { useSelector, useDispatch } from "react-redux";
import {
  fetchCategories,
  fetchProductsByCategory,
} from "../../store/categorySlice";
import { fetchProducts } from "../../store/productSlice";
import Slider from "../../components/slider/Slider";
const Homepage = () => {
  const dispatch = useDispatch();
  const { data: categories, status: categoryStatus } = useSelector(
    (state) => state.category
  );
  const { data: products, status: productStatus } = useSelector(
    (state) => state.product
  );
  const {
    catProductAll: productsByCategory,
    catProductAllStatus,
  } = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCategories());
    dispatch(fetchProductsByCategory(1, "all"));
    dispatch(fetchProductsByCategory(2, "all"));
  }, []);
  return (
    <div className="home-page">
      <Slider slides={SliderData} />
      <Category categories={categories} status={categoryStatus} />
      <ProductList products={products} status={productStatus} />
      {/* category one product */}
      <section>
        {productsByCategory[0] && (
          <SingleCategory
            products={productsByCategory[0]}
            status={catProductAllStatus}
          />
        )}
      </section>

      {/* category two product */}

      <section>
        {productsByCategory[1] && (
          <SingleCategory
            products={productsByCategory[1]}
            status={catProductAllStatus}
          />
        )}
      </section>
    </div>
  );
};
export default Homepage;
