        // Adding \\

// var brooklynNineNine = {
//     name: 'Raymond Holt',
//     currentRole: 'Captian of brooklyn99',
// }
// brooklynNineNine.husband = 'Kevin'
//  // Or brooklynNineNine['husband'] = 'Kevin'

// console.log(brooklynNineNine);
        
        // Deleting \\

// var brooklynNineNine = {
//     name: 'Amy Santiago',
//     currentRole: 'Detective brooklyn99',
//     husband: 'Jake Peralta',
//     mentor: 'Raymond Holt'
// } 
// delete brooklynNineNine.mentor;

// console.log(brooklynNineNine)


const object = {
        One_A: true,
        One_B: true,
        One_C: {
          Two_A: true,
          Two_B: {
            Three_A: true,
          },
        },
      }
      
      const newObject = object
      newObject.One_C.Two_B.Three_A = false
      
      console.log("newObject: ", newObject)
      console.log("object: ", object)