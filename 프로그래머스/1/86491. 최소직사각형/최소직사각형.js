function solution(sizes) {
    var answer = 0;
    
    //const sortSizes = sizes.map((size) => size.sort((a, b) => a - b));
     
    sizes.forEach((size) => {
      size.sort((a, b) => a - b);
    });
    
    console.log(sizes);
    
    const maxWidth = Math.max(...sizes.map((size) => size[0]));
    const maxHeight = Math.max(...sizes.map((size) => size[1]));
    
    answer = maxWidth * maxHeight;
    return answer;
}