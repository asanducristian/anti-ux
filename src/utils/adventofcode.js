import { DATA } from "./constants";

function calculateTotalDistance(leftList, rightList) {
    // Step 1: Sort both lists
    leftList.sort((a, b) => a - b);
    rightList.sort((a, b) => a - b);

    // Step 2: Calculate total distance
    let totalDistance = 0;
    for (let i = 0; i < leftList.length; i++) {
        totalDistance += Math.abs(leftList[i] - rightList[i]);
    }

    return totalDistance;
}
// Function to calculate the similarity score
function calculateSimilarityScore(leftList, rightList) {
    // Step 1: Create a frequency map for the right list
    const frequencyMap = {};
    rightList.forEach((num) => {
        frequencyMap[num] = (frequencyMap[num] || 0) + 1;
    });

    // Step 2: Calculate the similarity score
    let similarityScore = 0;
    leftList.forEach((num) => {
        if (frequencyMap[num]) {
            similarityScore += num * frequencyMap[num];
        }
    });

    return similarityScore;
}

export const day1 = () => {
    console.log("DATA: ", DATA)
    const leftList = DATA.map(pair => pair[0]);
    const rightList = DATA.map(pair => pair[1]);
    const part1 = calculateTotalDistance(leftList, rightList);
    console.log("Part1:", part1);
    const part2 = calculateSimilarityScore(leftList, rightList);
    console.log("Part2:", part2);
}