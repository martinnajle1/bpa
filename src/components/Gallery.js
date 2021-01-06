import React, { useEffect, useState } from "react";
import Gallery from "react-grid-gallery";
import Grid from './Grid';
import Strapi from "strapi-sdk-javascript/build/main";

const apiUrl = process.env.API_URL || "http://localhost:1337";
const strapi = new Strapi(apiUrl);

const MyGallery = () => {
  const loadProducts = async () => {
    const resp = await strapi.request("POST", "/graphql", {
      data: {
        query: `query {
                    botins {
                        id
                        Marca
                        Modelo
                        images {
                        width
                        height
                        url
                        previewUrl
                        }
                    }
                }`,
      },
    });
    setProducts(mapProducts(resp.data));
  };

  const mapProducts = (data) => {
    const shoes = data?.botins?.map((p) => {
      return {
        src: apiUrl + p.images[0]?.url,
        thumbnail: apiUrl + p.images[0]?.url,
        caption: `${p.Marca} - ${p.Modelo}`,
        thumbnailWidth: 300,
        thumbnailHeight: 300,
      };
    });
    return shoes;
  };

  const [products, setProducts] = useState([]);
  useEffect(async () => {
    const data = await loadProducts();
  }, []);
  console.log("prod", products);
  //return <Gallery images={products} enableImageSelection={false} />;
  return <Grid products={products} />;
};
export default MyGallery;
