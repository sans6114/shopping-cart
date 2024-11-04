export const mapper = (productos) => {
  if (!productos) return [];
    return productos?.map(producto => ({
        id: producto.id,
        img: producto.image,
        title: producto.title,
        category: producto.category,
        price: producto.price
      }))
}