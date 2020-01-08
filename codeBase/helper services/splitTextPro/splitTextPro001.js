export function splitTextPro(target, $type) {
  const splitTextProIterationNum = '001';
  console.log('splitTextPro' + splitTextProIterationNum);



  if (document.getElementsByTagName(target).length !== 0) {
    if ($type === 'lines') {
      return (new SplitText(document.getElementsByTagName(target), { type: 'lines' }).lines)
    }
    if ($type === 'words') {
      return (new SplitText(document.getElementsByTagName(target), { type: 'words' }).words)
    }
    if ($type === 'chars') {
      return (new SplitText(document.getElementsByTagName(target), { type: 'chars' }).chars)
    }
  } else {
    return [];
  }
}    