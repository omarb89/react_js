
/**
 * utilisez les nouveau guillets ` (alt gr + 7) pour concaténer le nom et le prénom passé en paramètre
 * Renvoi le résultat
 * 
 * exemple: "John", "Doe" => "John Doe"
 * 
 * contrainte:
 *  - ne pas utiliser l'opérateur +
 *  - ne pas utiliser la fonction concat de String
 */

const concat = (firstName, lastName) => {
    return `${firstName} ${lastName}`;
  };

const firstName = "John";
const lastName = "Doe";

const fullName = concat(firstName, lastName); 
console.log(fullName);

module.exports = {concat};