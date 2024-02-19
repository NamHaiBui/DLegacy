"use client";

const ProductComp = ({ product }) => {
  return (
    <>
      <Link
        href={`/product/${product.id}`}
        className="max-w-[200px] p-1.5 border border-gray-50 hover:border-gray-200 hover:shadow-xl bg-gray-100 rounded mx-auto"
      >
        {product?.url ? (
          <Image
            className="rounded cursor-pointer"
            src={product.url + "/190"}
          />
        ) : null}
        <div className="pt-2 px-1">
          <div className="font-semibold text-[15px] hover:underline cursor-pointer">
            {product?.title}
          </div>
          <div className="font-extrabold">${(product?.price).toFixed(2)}</div>
          {/* <div className="relative flex items-center text-[12px] text-gray-500">
            {" A price tracker for the market on amazon"} 
            <div className="line-through">{(product?.marketPrice).toFixed(2)}</div>
            <div className = "px-2">-</div>
            Math stuff
          </div> */}
        </div>
      </Link>
    </>
  );
};

export default ProductComp;
