function solution(sizes) {
    var answer = 0;
    
    const sortSizes = sizes.map((size) => size.sort((a, b) => a - b));
    
    
    const maxWidth = Math.max(...sortSizes.map((size) => size[0]));
    const maxHeight = Math.max(...sortSizes.map((size) => size[1]));
    
    answer = maxWidth * maxHeight;
    return answer;
}