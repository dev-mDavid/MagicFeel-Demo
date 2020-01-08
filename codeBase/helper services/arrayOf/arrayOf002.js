export function arrayOf( target, type ) {
  let arrayOf = [];
  
  switch (type) {
    case 'class':      
      document
        .getElementsByClassName(target)
        .forEach(element => {
          arrayOf.push(element)
        });
        
      break;      
    
    case 'tag':
      document
        .getElementsByClassName('Site-inner')[0].getElementsByTagName(target)
        .forEach(element => {
          arrayOf.push(element)
        });

      break;  

    case 'id':
      document.getElementById(target)
        .forEach(element => {
          arrayOf.push(element)
        });
      
      break;
  
    default:
      console.log('Error, "type" is missing');
      break;
  }
  
  return (arrayOf);
}