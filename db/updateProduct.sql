UPDATE products
SET 
    name = ${name}, 
    description = ${description},
    price = ${price}, 
    image_url = ${image_url}

WHERE product_id = ${id};

SELECT * FROM products
ORDER BY product_id;