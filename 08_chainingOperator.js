
/**
 * utilisez l'opérateur de chaine ?. pour accéder au nom du groupe auquel appartient l'utilisateur
 * Attention, l'utilisateur peut ne pas avoir de groupe (null)
 * renvoi undefined si l'utilisateur n'a pas de groupe
 * 
 * exemple : 
 * {
 *  name: "John",
 *    group: {
 *      name: "admin"
 *    }
 *  }
 * 
 * doit renvoyer "admin"
 * 
 */

const getGroupName = (obj) => {
    return obj?.group?.name;
  };

const user1 = {
    name: "John",
    group: {
      name: "admin"
    }
  };
  
const user2 = {
    name: "Alice",
    group: null,
  };

const groupName1 = getGroupName(user1); // Affiche "admin"
const groupName2 = getGroupName(user2); // Affiche undefined

console.log(groupName1);
console.log(groupName2);

module.exports = {getGroupName};