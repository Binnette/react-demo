const products = [
  { title: 'Cabbage', ico: '🥗', isFruit: false, id: 1 },
  { title: 'Garlic', ico: '🧄', isFruit: false, id: 2 },
  { title: 'Apple', ico: '🍎', isFruit: true, id: 3 },
  { title: 'Pear', ico: '🍐', isFruit: true, id: 4 },
];

export default function ShoppingList() {
  const listItems = products.map(product =>
      <li
          key={product.id}
          style={{
              color: product.isFruit ? 'magenta' : 'darkgreen'
          }}
      >
          {product.ico} {product.title}
      </li>
  );

  return (
      <ul>{listItems}</ul>
  );
}
