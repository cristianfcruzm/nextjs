import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Layout from '@components/layout/Layout'
import ProductSummary from '@components/ProductSummary/ProductSummary'
import fetch from 'isomorphic-unfetch'

const ProductItem = () => {
  const { query } = useRouter()
  const [product, setProduct] = useState<TProduct | null>(null)

  useEffect(() => {
    if (query.id) {
      fetch(`/api/avo/${query.id}`)
        .then((response) => response.json())
        .then((data: TProduct) => {
          setProduct(data)
        })
    }
  }, [query.id])

  return (
    <Layout>
      {product == null ? null : <ProductSummary product={product} />}
    </Layout>
  )
};

export default ProductItem;
