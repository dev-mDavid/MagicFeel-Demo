export function splitTextPro(target, type) {
  const splitTextProIterationNum = '002';
  console.log('splitTextPro' + splitTextProIterationNum);

  switch (type) {
    case 'lines':
      new SplitText(document.getElementsByTagName(target), { type: 'lines' }).lines;
      break;

    case 'words':
      new SplitText(document.getElementsByTagName(target), { type: 'words' }).words;
      break;
      
    case 'chars':
      new SplitText(document.getElementsByTagName(target), { type: 'chars' }).chars;
      break;
      
    default:
      console.log('Error with splitTextPro' + splitTextProIterationNum)
      break;
  }
}    