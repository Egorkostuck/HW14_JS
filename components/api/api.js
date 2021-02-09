export default function() {
    const response = fetch('https://fakestoreapi.com/products/')
   .then(result => result.json());
    return response;
}