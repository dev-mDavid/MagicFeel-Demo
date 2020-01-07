function arrayOf( element ) {
    let arrayOf = [];

  for (let index = 0; index < element.length; index++) {
    arrayOf.push(
      // Array.from(
        document.getElementsByClassName(element[index])
      // )
    )
  }
  
  console.log(arrayOf);
}

arrayOf('sqs-gallery-design-grid-slide');