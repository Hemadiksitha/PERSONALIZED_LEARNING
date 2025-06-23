
const mongoose = require("mongoose");
const Question = require("./models/Question");

const MONGO_URI = "mongodb+srv://annazzmariya2023:Cy6ITVFn0imOYgxh@cluster0.slenzdx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

//const MONGO_URI = "mongodb+srv://hemadiksitha:HV@hema.arbgjdb.mongodb.net/retryWrites=true&w=majority&tls=true";
//const MONGO_URI = "mongodb+srv://annazzmariya2023:Cy6ITVFn0imOYgxh@cluster0.slenzdx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
//mongodb+srv://hemadiksitha:HV@hema.arbgjdb.mongodb.net/
const sampleQuestions = [
{
  "topic": "arrays",
  "level": "easy",
  "title": "Second Largest",
  "question": "Given an array of positive integers arr[], return the second largest element from the array. If the second largest element doesn't exist then return -1.",
  "sampleInputs": [
    "12 35 1 10 34 1",
    "10 5 10",
    "10 10 10"
  ],
  "sampleOutputs": [
    "34",
    "5",
    "-1"
  ],
  "explanations": [
    "The largest element is 35 and the second largest is 34.",
    "The largest element is 10 and the second largest is 5.",
    "All elements are equal; hence no second largest exists."
  ],
  "testCases": [
    "12 35 1 10 34 1\n",
    "10 5 10\n",
    "10 10 10\n",
    "1 2\n",
    "5 3 1 4\n",
    "100 90 90 100 80\n",
    "9 9 8 7 6\n",
    "1000 999\n",
    "1 2 3 4 5\n",
    "11 11 11 10"
  ],
  "expectedOutputs": [
    "34",
    "5",
    "-1",
    "1",
    "4",
    "90",
    "8",
    "999",
    "4",
    "10"
  ],
  "constraints": "2 ≤ arr.size() ≤ 10^5; 1 ≤ arr[i] ≤ 10^5",
  "expectedTimeComplexity": "O(n)",
  "expectedSpaceComplexity": "O(1)"
},

{
  "topic": "arrays",
  "level": "easy",
  "title": "Third Largest Element",
  "question": "Given an array arr of positive integers. Find the third largest element in it. Return -1 if the third largest element is not found.",
  "sampleInputs": [
    "2 4 1 3 5",
    "10 2",
    "5 5 5"
  ],
  "sampleOutputs": [
    "3",
    "-1",
    "5"
  ],
  "explanations": [
    "The third largest element in the array is 3.",
    "There are less than three elements in the array.",
    "All elements are the same, considered as third largest."
  ],
  "testCases": [
    "2 4 1 3 5\n",
    "10 2\n",
    "5 5 5\n",
    "6 7 8 9\n",
    "1 1 2 3\n",
    "100 99 98 97\n",
    "1 2 3\n",
    "10 20 10 30 40\n",
    "8 6 4 2 0\n",
    "50 60\n"
  ],
  "expectedOutputs": [
    "3",
    "-1",
    "5",
    "7",
    "1",
    "98",
    "1",
    "20",
    "4",
    "-1"
  ],
  "constraints": "1 ≤ arr.size ≤ 10^5; 1 ≤ arr[i] ≤ 10^5",
  "expectedTimeComplexity": "O(n)",
  "expectedSpaceComplexity": "O(1)"
},

{
  "topic": "arrays",
  "level": "easy",
  "title": "Three Great Candidates",
  "question": "The hiring team aims to find 3 candidates who are great collectively. Each candidate has his or her ability expressed as an integer. 3 candidates are great collectively if the product of their abilities is maximum. Given the abilities of some candidates in an array, arr[], return the maximum collective ability from the pool of candidates.",
  "sampleInputs": [
    "10 3 5 6 20",
    "-10 -3 -5 -6 -20",
    "1 2 3 4"
  ],
  "sampleOutputs": [
    "1200",
    "-90",
    "24"
  ],
  "explanations": [
    "Multiplication of 10, 6, and 20 is 1200.",
    "Multiplication of -3, -5 and -6 is -90.",
    "Product of 2, 3, and 4 is 24."
  ],
  "testCases": [
    "10 3 5 6 20\n",
    "-10 -3 -5 -6 -20\n",
    "1 2 3 4\n",
    "1 2 3\n",
    "-1 -2 -3 -4\n",
    "-100 -99 1 2 3\n",
    "0 0 0 1 2 3\n",
    "1 1 1\n",
    "2 2 2 2 2\n",
    "-1 -2 -3 4 5\n"
  ],
  "expectedOutputs": [
    "1200",
    "-90",
    "24",
    "6",
    "-6",
    "29700",
    "6",
    "1",
    "8",
    "30"
  ],
  "constraints": "3 ≤ arr.size ≤ 10^5; -10^3 ≤ arr[i] ≤ 10^3",
  "expectedTimeComplexity": "O(n)",
  "expectedSpaceComplexity": "O(1)"
},

{
  "topic": "arrays",
  "level": "easy",
  "title": "Max Consecutive One or Zero",
  "question": "Given an array arr[] consisting of only 0’s and 1’s, return count of the maximum number of consecutive 1’s or 0’s present in the array.",
  "sampleInputs": [
    "1 1 0 0 1 0 1 0 1 1 1 1",
    "0 0 1 0 1 0 1 0 1 0 1",
    "0 0 0 0"
  ],
  "sampleOutputs": [
    "4",
    "2",
    "4"
  ],
  "explanations": [
    "The maximum number of consecutive 1’s in the array is 4 from index 8-11.",
    "The maximum number of consecutive 0’s in the array is 2 from index 0-1.",
    "The maximum number of consecutive 0’s in the array is 4."
  ],
  "testCases": [
    "1 1 0 0 1 0 1 0 1 1 1 1\n",
    "0 0 1 0 1 0 1 0 1 0 1\n",
    "0 0 0 0\n",
    "1 1 1 1\n",
    "0 1 0 1 0 1 0\n",
    "1 0 1 0 0 0 1 1\n",
    "1 1 0 0 0 1\n",
    "0 0 1 1 1 0\n",
    "1\n",
    "0\n"
  ],
  "expectedOutputs": [
    "4",
    "2",
    "4",
    "4",
    "1",
    "3",
    "3",
    "3",
    "1",
    "1"
  ],
  "constraints": "1 ≤ arr.size() ≤ 10^5",
  "expectedTimeComplexity": "O(n)",
  "expectedSpaceComplexity": "O(1)"
},

{
  "topic": "arrays",
  "level": "easy",
  "title": "Move All Zeroes to End",
  "question": "You are given an array arr[] of non-negative integers. Your task is to move all the zeros in the array to the right end while maintaining the relative order of the non-zero elements. The operation must be performed in place.",
  "sampleInputs": [
    "1 2 0 4 3 0 5 0",
    "10 20 30",
    "0 0"
  ],
  "sampleOutputs": [
    "1 2 4 3 5 0 0 0",
    "10 20 30",
    "0 0"
  ],
  "explanations": [
    "Three 0s moved to the end while maintaining order of non-zero elements.",
    "No zeroes to move.",
    "All are zeroes, so no change."
  ],
  "testCases": [
    "1 2 0 4 3 0 5 0\n",
    "10 20 30\n",
    "0 0\n",
    "0 1 0 2 0 3\n",
    "4 0 5 0 6 0\n",
    "1 0 2 0 3 0 4\n",
    "0 0 0 1 2 3\n",
    "1 2 3 4 5\n",
    "9 0 8 0 7 0\n",
    "1\n"
  ],
  "expectedOutputs": [
    "1 2 4 3 5 0 0 0",
    "10 20 30",
    "0 0",
    "1 2 3 0 0 0",
    "4 5 6 0 0 0",
    "1 2 3 4 0 0 0",
    "1 2 3 0 0 0",
    "1 2 3 4 5",
    "9 8 7 0 0 0",
    "1"
  ],
  "constraints": "1 ≤ arr.size() ≤ 10^5; 0 ≤ arr[i] ≤ 10^5",
  "expectedTimeComplexity": "O(n)",
  "expectedSpaceComplexity": "O(1)"
},

{
  "topic": "arrays",
  "level": "easy",
  "title": "Reverse Array in Groups",
  "question": "Given an array arr of positive integers. Reverse every sub-array group of size k. If k >= array size, reverse the whole array. Modify in-place.",
  "sampleInputs": [
    "1 2 3 4 5, k = 3",
    "5 6 8 9, k = 5"
  ],
  "sampleOutputs": [
    "3 2 1 5 4",
    "9 8 6 5"
  ],
  "explanations": [
    "First group consists of elements 1, 2, 3. Second group consists of 4,5.",
    "Since k >= size of array, the whole array is reversed."
  ],
  "testCases": [
    "1 2 3 4 5, k = 3\n",
    "5 6 8 9, k = 5\n",
    "10 20 30 40 50 60, k = 2\n",
    "1 2 3 4 5 6 7, k = 4\n",
    "100 200, k = 1\n",
    "1, k = 1\n",
    "9 8 7 6 5 4 3 2 1, k = 9\n",
    "11 22 33 44 55 66 77 88 99, k = 5\n",
    "2 4 6 8 10 12, k = 3\n",
    "1 3 5 7 9, k = 10\n"
  ],
  "expectedOutputs": [
    "3 2 1 5 4",
    "9 8 6 5",
    "20 10 40 30 60 50",
    "4 3 2 1 7 6 5",
    "100 200",
    "1",
    "1 2 3 4 5 6 7 8 9",
    "55 44 33 22 11 99 88 77 66",
    "6 4 2 12 10 8",
    "9 7 5 3 1"
  ],
  "constraints": "1 ≤ arr.size(), k ≤ 10^7; 1 ≤ arr[i] ≤ 10^18",
  "expectedTimeComplexity": "O(n)",
  "expectedSpaceComplexity": "O(1)"
},

{
  "topic": "arrays",
  "level": "easy",
  "title": "Stock Buy and Sell – Max one Transaction Allowed",
  "question": "Given an array prices[] of stock prices on different days, return the maximum profit from one transaction (buy then sell). Return 0 if no profit is possible.",
  "sampleInputs": [
    "7 10 1 3 6 9 2",
    "7 6 4 3 1",
    "1 3 6 9 11"
  ],
  "sampleOutputs": [
    "8",
    "0",
    "10"
  ],
  "explanations": [
    "Buy at 1 and sell at 9 → profit = 8.",
    "Prices always decrease → no profit.",
    "Buy at 1 and sell at 11 → profit = 10."
  ],
  "testCases": [
    "7 10 1 3 6 9 2\n",
    "7 6 4 3 1\n",
    "1 3 6 9 11\n",
    "5 4 3 2 1\n",
    "3 2 6 1 4 8\n",
    "10 20 30 40 50\n",
    "8 1 2 4 6 3 10\n",
    "1 5 2 8\n",
    "4 2 8 3 1 9\n",
    "100\n"
  ],
  "expectedOutputs": [
    "8",
    "0",
    "10",
    "0",
    "7",
    "40",
    "9",
    "7",
    "8",
    "0"
  ],
  "constraints": "1 ≤ prices.size() ≤ 10^5; 0 ≤ prices[i] ≤ 10^4",
  "expectedTimeComplexity": "O(n)",
  "expectedSpaceComplexity": "O(1)"
},

{
  "topic": "arrays",
  "level": "easy",
  "title": "Rotate Array",
  "question": "Given an array arr[]. Rotate the array to the left (counter-clockwise direction) by d steps, where d is a positive integer. Modify the array in place.",
  "sampleInputs": [
    "1 2 3 4 5, d = 2",
    "2 4 6 8 10 12 14 16 18 20, d = 3",
    "7 3 9 1, d = 9"
  ],
  "sampleOutputs": [
    "3 4 5 1 2",
    "8 10 12 14 16 18 20 2 4 6",
    "3 9 1 7"
  ],
  "explanations": [
    "When rotated by 2, it becomes 3 4 5 1 2.",
    "When rotated by 3, it becomes 8 10 12 14 16 18 20 2 4 6.",
    "Rotating 9 times is same as rotating 1 time for length 4."
  ],
  "testCases": [
    "1 2 3 4 5, d = 2\n",
    "2 4 6 8 10 12 14 16 18 20, d = 3\n",
    "7 3 9 1, d = 9\n",
    "10 20 30 40, d = 1\n",
    "5 10 15 20 25, d = 5\n",
    "3 6 9 12, d = 2\n",
    "1, d = 10\n",
    "8 6 4 2, d = 0\n",
    "11 22 33, d = 4\n",
    "1 2 3, d = 3\n"
  ],
  "expectedOutputs": [
    "3 4 5 1 2",
    "8 10 12 14 16 18 20 2 4 6",
    "3 9 1 7",
    "20 30 40 10",
    "5 10 15 20 25",
    "9 12 3 6",
    "1",
    "8 6 4 2",
    "22 33 11",
    "1 2 3"
  ],
  "constraints": "1 ≤ arr.size(), d ≤ 10^5; 0 ≤ arr[i] ≤ 10^5",
  "expectedTimeComplexity": "O(n)",
  "expectedSpaceComplexity": "O(1)"
},

{
  "topic": "arrays",
  "level": "easy",
  "title": "Missing Ranges of Numbers",
  "question": "You have an inclusive interval [lower, upper] and a sorted array of unique integers arr[], all within this interval. Return the smallest set of sorted ranges that includes all missing numbers between lower and upper (inclusive), excluding values present in arr[].",
  "sampleInputs": [
    "arr = [14, 15, 20, 30, 31, 45], lower = 10, upper = 50",
    "arr = [-48, -10, -6, -4, 0, 4, 17], lower = -54, upper = 17",
    "arr = [15, 16, 17, 18], lower = 15, upper = 18"
  ],
  "sampleOutputs": [
    "[[10, 13], [16, 19], [21, 29], [32, 44], [46, 50]]",
    "[[-54, -49], [-47, -11], [-9, -7], [-5, -5], [-3, -1], [1, 3], [5, 16]]",
    "[]"
  ],
  "explanations": [
    "These ranges represent all missing numbers between 10 and 50 not present in the array.",
    "These ranges cover all missing numbers between -54 and 17 that are not included in the array.",
    "All numbers between 15 and 18 are present, so no missing intervals."
  ],
  "testCases": [
    "arr = [14, 15, 20, 30, 31, 45], lower = 10, upper = 50\n",
    "arr = [-48, -10, -6, -4, 0, 4, 17], lower = -54, upper = 17\n",
    "arr = [15, 16, 17, 18], lower = 15, upper = 18\n",
    "arr = [1, 3, 5], lower = 1, upper = 5\n",
    "arr = [2, 4, 6, 8], lower = 1, upper = 10\n",
    "arr = [5], lower = 1, upper = 10\n",
    "arr = [], lower = 1, upper = 3\n",
    "arr = [1, 2, 3], lower = 1, upper = 3\n",
    "arr = [100], lower = 98, upper = 102\n",
    "arr = [-1, 0, 1], lower = -2, upper = 2\n"
  ],
  "expectedOutputs": [
    "[[10, 13], [16, 19], [21, 29], [32, 44], [46, 50]]",
    "[[-54, -49], [-47, -11], [-9, -7], [-5, -5], [-3, -1], [1, 3], [5, 16]]",
    "[]",
    "[[2, 2], [4, 4]]",
    "[[1, 1], [3, 3], [5, 5], [7, 7], [9, 10]]",
    "[[1, 4], [6, 10]]",
    "[[1, 3]]",
    "[]",
    "[[98, 99], [101, 102]]",
    "[[-2, -2], [2, 2]]"
  ],
  "constraints": "-10^9 ≤ lower, upper ≤ 10^9; 1 ≤ arr.size() ≤ 10^5; lower ≤ arr[i] ≤ upper",
  "expectedTimeComplexity": "O(n)",
  "expectedSpaceComplexity": "O(1)"
},

{
  "topic": "arrays",
  "level": "easy",
  "title": "Alternate Positive Negative",
  "question": "Given an unsorted array containing both positive and negative numbers, rearrange the array so that positive and negative numbers appear alternately, starting with a positive number. Maintain the relative order of positive and negative numbers.",
  "sampleInputs": [
    "9 4 -2 -1 5 0 -5 -3 2",
    "-5 -2 5 2 4 7 1 8 0 -8",
    "9 5 -2 -1 5 0 -5 -3 2"
  ],
  "sampleOutputs": [
    "9 -2 4 -1 5 -5 0 -3 2",
    "5 -5 2 -2 4 -8 7 1 8 0",
    "9 -2 5 -1 5 -5 0 -3 2"
  ],
  "explanations": [
    "Alternating positive and negative numbers while maintaining relative order. Positive: [9, 4, 5, 0, 2], Negative: [-2, -1, -5, -3].",
    "Positive: [5, 2, 4, 7, 1, 8, 0], Negative: [-5, -2, -8]. Remaining positive numbers appended at the end.",
    "Positive: [9, 5, 5, 0, 2], Negative: [-2, -1, -5, -3]. Order maintained with alternate placement."
  ],
  "testCases": [
    "9 4 -2 -1 5 0 -5 -3 2\n",
    "-5 -2 5 2 4 7 1 8 0 -8\n",
    "9 5 -2 -1 5 0 -5 -3 2\n",
    "-1 2 -3 4 -5\n",
    "0 -1 2 -3 4\n",
    "1 -1 2 -2 3 -3\n",
    "-5 -4 -3 -2 -1\n",
    "5 4 3 2 1\n",
    "-10 0 10\n",
    "1 -1 0 -2 3 -3\n"
  ],
  "expectedOutputs": [
    "9 -2 4 -1 5 -5 0 -3 2",
    "5 -5 2 -2 4 -8 7 1 8 0",
    "9 -2 5 -1 5 -5 0 -3 2",
    "2 -1 4 -3 -5",
    "0 -1 2 -3 4",
    "1 -1 2 -2 3 -3",
    "-5 -4 -3 -2 -1",
    "5 4 3 2 1",
    "0 -10 10",
    "1 -1 0 -2 3 -3"
  ],
  "constraints": "1 ≤ arr.size() ≤ 10^6; -10^6 ≤ arr[i] ≤ 10^6",
  "expectedTimeComplexity": "O(n)",
  "expectedSpaceComplexity": "O(n)"
},

{
  "topic": "arrays",
  "level": "medium",
  "title": "Next Permutation",
  "question": "Given an array of integers arr[] representing a permutation, implement the next permutation that rearranges the numbers into the lexicographically next greater permutation. If no such permutation exists, rearrange the numbers into the lowest possible order (i.e., sorted in ascending order).",
  "sampleInputs": [
    "2 4 1 7 5 0",
    "3 2 1",
    "3 4 2 5 1"
  ],
  "sampleOutputs": [
    "2 4 5 0 1 7",
    "1 2 3",
    "3 4 5 1 2"
  ],
  "explanations": [
    "Find the next greater permutation for the given arrangement.",
    "As it is the last permutation, the result is the lowest permutation.",
    "Reorder to form the next greater permutation lexicographically."
  ],
  "testCases": [
    "2 4 1 7 5 0\n",
    "3 2 1\n",
    "3 4 2 5 1\n",
    "1 2 3\n",
    "1 1 5\n",
    "1 3 2\n",
    "1 5 1\n",
    "6 2 1 5 4 3 0\n",
    "1 4 3 2\n",
    "4 3 2 1\n"
  ],
  "expectedOutputs": [
    "2 4 5 0 1 7",
    "1 2 3",
    "3 4 5 1 2",
    "1 3 2",
    "1 5 1",
    "2 1 3",
    "5 1 1",
    "6 2 3 0 1 4 5",
    "2 1 3 4",
    "1 2 3 4"
  ],
  "constraints": "1 ≤ arr.size() ≤ 10^5; 0 ≤ arr[i] ≤ 10^5",
  "expectedTimeComplexity": "O(n)",
  "expectedSpaceComplexity": "O(1)"
},

{
  "topic": "arrays",
  "level": "medium",
  "title": "Majority Element",
  "question": "Given an array arr[]. Find the majority element in the array. If no majority element exists, return -1. A majority element appears strictly more than arr.size()/2 times.",
  "sampleInputs": [
    "1 1 2 1 3 5 1",
    "7",
    "2 13"
  ],
  "sampleOutputs": [
    "1",
    "7",
    "-1"
  ],
  "explanations": [
    "1 appears 4 times in a 7-element array, which is more than 7/2 = 3.5.",
    "Single element 7 is more than 1/2 times.",
    "No element appears more than 2/2 = 1 times."
  ],
  "testCases": [
    "1 1 2 1 3 5 1\n",
    "7\n",
    "2 13\n",
    "3 3 4 2 4 4 2 4 4\n",
    "1 2 3 4 5\n",
    "2 2 1 1 1 2 2\n",
    "5 5 5 5 5 1 2 3\n",
    "6 6 6 7 7\n",
    "9 9 9 9 9\n",
    "8 8 9 9 8 8 8\n"
  ],
  "expectedOutputs": [
    "1",
    "7",
    "-1",
    "4",
    "-1",
    "2",
    "5",
    "6",
    "9",
    "8"
  ],
  "constraints": "1 ≤ arr.size() ≤ 10^5; 0 ≤ arr[i] ≤ 10^5",
  "expectedTimeComplexity": "O(n)",
  "expectedSpaceComplexity": "O(1)"
},

{
  "topic": "arrays",
  "level": "medium",
  "title": "Minimize the Heights II",
  "question": "Given an array arr[] denoting heights of N towers and a positive integer K, increase or decrease each tower's height by K exactly once. Find the minimum possible difference between the height of the shortest and tallest towers after the operation. Ensure no height becomes negative.",
  "sampleInputs": [
    "k = 2, arr = 1 5 8 10",
    "k = 3, arr = 3 9 12 16 20"
  ],
  "sampleOutputs": [
    "5",
    "11"
  ],
  "explanations": [
    "Modified as [3, 3, 6, 8]; difference = 8 - 3 = 5.",
    "Modified as [6, 12, 9, 13, 17]; difference = 17 - 6 = 11."
  ],
  "testCases": [
    "k = 2, arr = 1 5 8 10\n",
    "k = 3, arr = 3 9 12 16 20\n",
    "k = 1, arr = 4 6\n",
    "k = 10, arr = 1 2 3\n",
    "k = 5, arr = 5 5 5 5\n",
    "k = 7, arr = 2 6 3 4 8 10\n",
    "k = 4, arr = 7 12 3\n",
    "k = 0, arr = 1 5 9\n",
    "k = 1, arr = 1\n",
    "k = 100, arr = 100 200 300 400\n"
  ],
  "expectedOutputs": [
    "5",
    "11",
    "1",
    "2",
    "0",
    "5",
    "5",
    "8",
    "0",
    "200"
  ],
  "constraints": "1 ≤ k ≤ 10^7; 1 ≤ n ≤ 10^5; 1 ≤ arr[i] ≤ 10^7",
  "expectedTimeComplexity": "O(n log n)",
  "expectedSpaceComplexity": "O(1)"
},

{
  "topic": "arrays",
  "level": "medium",
  "title": "Kadane's Algorithm",
  "question": "Given an integer array arr[], find the maximum sum of a contiguous subarray using Kadane's Algorithm.",
  "sampleInputs": [
    "2 3 -8 7 -1 2 3",
    "-2 -4",
    "5 4 1 7 8"
  ],
  "sampleOutputs": [
    "11",
    "-2",
    "25"
  ],
  "explanations": [
    "Maximum sum subarray is {7, -1, 2, 3} with sum 11.",
    "Maximum sum subarray is {-2} with sum -2.",
    "Maximum sum subarray is the entire array with sum 25."
  ],
  "testCases": [
    "2 3 -8 7 -1 2 3\n",
    "-2 -4\n",
    "5 4 1 7 8\n",
    "1 2 3 -2 5\n",
    "-3 8 -2 1 -7 3\n",
    "10 -3 2 1 -1 5 -3\n",
    "1\n",
    "-1 -2 -3 -4\n",
    "100 -90 80 -70 60\n",
    "0 0 0 -1 0\n"
  ],
  "expectedOutputs": [
    "11",
    "-2",
    "25",
    "9",
    "9",
    "14",
    "1",
    "-1",
    "100",
    "0"
  ],
  "constraints": "1 ≤ arr.size() ≤ 10^5; -10^9 ≤ arr[i] ≤ 10^4",
  "expectedTimeComplexity": "O(n)",
  "expectedSpaceComplexity": "O(1)"
},

{
  "topic": "arrays",
  "level": "medium",
  "title": "Maximum Product Subarray",
  "question": "Given an array arr[] that contains positive and negative integers (may contain 0 as well), find the maximum product that we can get in a subarray of arr[].",
  "sampleInputs": [
    "-2 6 -3 -10 0 2",
    "-1 -3 -10 0 6",
    "2 3 4"
  ],
  "sampleOutputs": [
    "180",
    "30",
    "24"
  ],
  "explanations": [
    "The subarray {6, -3, -10} gives maximum product 180.",
    "The subarray {-3, -10} gives product 30.",
    "For an array with all positive numbers, the result is the product of all elements."
  ],
  "testCases": [
    "-2 6 -3 -10 0 2\n",
    "-1 -3 -10 0 6\n",
    "2 3 4\n",
    "-1 -2 -3 -4\n",
    "0 0 0\n",
    "1 0 2 3 -2 -40\n",
    "0 -1 2 3 -5 6\n",
    "10 -3 0 -2 4\n",
    "-5\n",
    "1 -2 -3 4 0 5 -6\n"
  ],
  "expectedOutputs": [
    "180",
    "30",
    "24",
    "24",
    "0",
    "480",
    "180",
    "10",
    "-5",
    "24"
  ],
  "constraints": "1 ≤ arr.size() ≤ 10^6; -10 ≤ arr[i] ≤ 10",
  "expectedTimeComplexity": "O(n)",
  "expectedSpaceComplexity": "O(1)"
},

{
  "topic": "arrays",
  "level": "medium",
  "title": "Min Swaps to Group 1s",
  "question": "Given a binary array consisting of only 0s and 1s, find the minimum number of swaps required to group all 1s together in a contiguous subarray. If there are no 1s, return -1.",
  "sampleInputs": [
    "1 0 1 0 1",
    "1 0 1 0 1 1",
    "0 0 0"
  ],
  "sampleOutputs": [
    "1",
    "1",
    "-1"
  ],
  "explanations": [
    "Swap index 1 and 4 to get [1, 1, 1, 0, 0].",
    "Swap index 1 and 5 to get [1, 1, 1, 0, 1, 0].",
    "No 1s in the array, return -1."
  ],
  "testCases": [
    "1 0 1 0 1\n",
    "1 0 1 0 1 1\n",
    "0 0 0\n",
    "1 1 1 1\n",
    "1 0 0 0 1\n",
    "0 1 0 1 0 1\n",
    "1 0 0 1 0 1 0 1\n",
    "0 0 1 0 0 0 1 0 1\n",
    "1\n",
    "0\n"
  ],
  "expectedOutputs": [
    "1",
    "1",
    "-1",
    "0",
    "1",
    "1",
    "2",
    "2",
    "0",
    "-1"
  ],
  "constraints": "1 ≤ arr.size() ≤ 10^6; 0 ≤ arr[i] ≤ 1",
  "expectedTimeComplexity": "O(n)",
  "expectedSpaceComplexity": "O(1)"
},

{
  "topic": "arrays",
  "level": "medium",
  "title": "Maximize Number of 1's",
  "question": "Given a binary array arr[] and an integer k, you can flip at most k 0s to 1s. Find the maximum number of consecutive 1's that can be obtained after at most k flips.",
  "sampleInputs": [
    "arr = 1 0 1, k = 1",
    "arr = 1 0 0 1 0 1 0 1, k = 2",
    "arr = 1 1, k = 2"
  ],
  "sampleOutputs": [
    "3",
    "5",
    "2"
  ],
  "explanations": [
    "Flip the 0 at index 1 to get [1, 1, 1], max length = 3.",
    "Flip indices 4 and 6 to get subarray [1, 1, 1, 1, 1] from index 3 to 7.",
    "Array already has consecutive 1s, no flips needed."
  ],
  "testCases": [
    "arr = 1 0 1, k = 1\n",
    "arr = 1 0 0 1 0 1 0 1, k = 2\n",
    "arr = 1 1, k = 2\n",
    "arr = 0 0 0, k = 1\n",
    "arr = 0 1 0 1 0 1, k = 3\n",
    "arr = 1 1 0 0 1 1 0 0 1 1, k = 2\n",
    "arr = 1 0 1 1 0 1 1 0 1, k = 1\n",
    "arr = 0 0 0 0 0, k = 5\n",
    "arr = 1, k = 0\n",
    "arr = 0 1 1 0 1 1 1 0 1, k = 1\n"
    
  ],
  "expectedOutputs": [
    "3",
    "5",
    "2",
    "1",
    "6",
    "6",
    "5",
    "5",
    "1",
    "6"
  ],
  "constraints": "1 ≤ arr.size() ≤ 10^5; 0 ≤ k ≤ arr.size(); 0 ≤ arr[i] ≤ 1",
  "expectedTimeComplexity": "O(n)",
  "expectedSpaceComplexity": "O(1)"
},

{
  "topic": "arrays",
  "level": "medium",
  "title": "Split Array in Three Equal Sum Subarrays",
  "question": "Given an array arr[], determine if it can be split into three consecutive parts such that the sum of each part is equal. If possible, return any index pair (i, j) such that sum(arr[0..i]) = sum(arr[i+1..j]) = sum(arr[j+1..n-1]), else return {-1, -1}.",
  "sampleInputs": [
    "1 3 4 0 4",
    "2 3 4",
    "0 1 1"
  ],
  "sampleOutputs": [
    "true",
    "false",
    "false"
  ],
  "explanations": [
    "Sum of subarrays [1,3], [4,0], and [4] is 4 → valid split.",
    "Total sum is 9, not divisible by 3 → no valid split.",
    "No split gives equal sum across 3 parts."
  ],
  "testCases": [
    "1 3 4 0 4\n",
    "2 3 4\n",
    "0 1 1\n",
    "0 2 1 1 1 2 0\n",
    "3 3 3 3 3 3\n",
    "0 0 0\n",
    "1 2 3 0 3 2 1\n",
    "6 1 1 1 1\n",
    "4 2 0 2 4\n",
    "1 1 1 1 1 1\n"
  ],
  "expectedOutputs": [
    "true",
    "false",
    "false",
    "false",
    "true",
    "true",
    "false",
    "false",
    "true",
    "true"
  ],
  "constraints": "3 ≤ arr.size() ≤ 10^6; 0 ≤ arr[i] ≤ 10^6",
  "expectedTimeComplexity": "O(n)",
  "expectedSpaceComplexity": "O(1)"
},

{
  "topic": "arrays",
  "level": "medium",
  "title": "Subarrays Product Less than K",
  "question": "Given an array of positive numbers, find the number of possible contiguous subarrays having product less than a given number k.",
  "sampleInputs": [
    "n = 4, k = 10, a = 1 2 3 4",
    "n = 7, k = 100, a = 1 9 2 8 6 4 3"
  ],
  "sampleOutputs": [
    "7",
    "16"
  ],
  "explanations": [
    "Subarrays with product less than 10 are: {1}, {2}, {3}, {4}, {1,2}, {1,2,3}, {2,3}",
    "All valid subarrays with product < 100 total to 16"
  ],
  "testCases": [
    "n = 4, k = 10, a = 1 2 3 4\n",
    "n = 7, k = 100, a = 1 9 2 8 6 4 3\n",
    "n = 5, k = 5, a = 1 1 1 1 1\n",
    "n = 6, k = 50, a = 10 5 2 6\n",
    "n = 3, k = 1, a = 1 2 3\n",
    "n = 3, k = 0, a = 1 2 3\n",
    "n = 5, k = 20, a = 4 2 1 5 1\n",
    "n = 4, k = 1000, a = 100 10 1 1\n",
    "n = 2, k = 3, a = 1 2\n",
    "n = 1, k = 10, a = 10\n"
  ],
  "expectedOutputs": [
    "7",
    "16",
    "15",
    "6",
    "0",
    "0",
    "13",
    "7",
    "3",
    "0"
  ],
  "constraints": "1 ≤ n ≤ 10^6; 1 ≤ k ≤ 10^15; 1 ≤ a[i] ≤ 10^5",
  "expectedTimeComplexity": "O(n)",
  "expectedSpaceComplexity": "O(1)"
},

{
  "topic": "arrays",
  "level": "medium",
  "title": "Product Array Puzzle",
  "question": "Given an array arr[], construct a product array res[] where each element in res[i] is the product of all elements in arr[] except arr[i]. Return this resultant array, res[].",
  "sampleInputs": [
    "10 3 5 6 2",
    "12 0"
  ],
  "sampleOutputs": [
    "180 600 360 300 900",
    "0 12"
  ],
  "explanations": [
    "res[0] = 3*5*6*2 = 180, res[1] = 10*5*6*2 = 600, etc.",
    "res[0] = 0, res[1] = 12 because one of the elements is 0."
  ],
  "testCases": [
    "10 3 5 6 2\n",
    "12 0\n",
    "1 2 3 4\n",
    "0 0 1 2\n",
    "1 1 1 1\n",
    "5 6 0 2\n",
    "2 3\n",
    "-1 -2 -3 -4\n",
    "100 0 100\n",
    "1 -1 1 -1\n"
  ],
  "expectedOutputs": [
    "180 600 360 300 900",
    "0 12",
    "24 12 8 6",
    "0 0 0 0",
    "1 1 1 1",
    "0 0 60 0",
    "3 2",
    "-24 -12 -8 -6",
    "0 10000 0",
    "-1 1 -1 1"
  ],
  "constraints": "2 ≤ arr.size() ≤ 10^5; -100 ≤ arr[i] ≤ 100",
  "expectedTimeComplexity": "O(n)",
  "expectedSpaceComplexity": "O(1)"
},

{
  "topic": "arrays",
  "level": "hard",
  "title": "Max Sum in the Configuration",
  "question": "Given an integer array arr[], find the maximum value of the sum of i*arr[i] for all i, where the array can be rotated any number of times (clockwise or counterclockwise).",
  "sampleInputs": [
    "8 3 1 2",
    "1 2 3",
    "4 13"
  ],
  "sampleOutputs": [
    "29",
    "8",
    "13"
  ],
  "explanations": [
    "Rotation [3, 1, 2, 8] gives (0*3 + 1*1 + 2*2 + 3*8) = 29.",
    "Rotation [1, 2, 3] gives (0*1 + 1*2 + 2*3) = 8.",
    "Rotation [4, 13] gives max value = 13."
  ],
  "testCases": [
    "8 3 1 2\n",
    "1 2 3\n",
    "4 13\n",
    "10 1 2 3 4 5\n",
    "20 10 30\n",
    "7 7 7 7\n",
    "1 2 1 2\n",
    "10 20\n",
    "5\n",
    "6 7 8 9\n"
  ],
  "expectedOutputs": [
    "29",
    "8",
    "13",
    "75",
    "110",
    "42",
    "11",
    "20",
    "0",
    "38"
  ],
  "constraints": "1 ≤ arr.size() ≤ 10^4; 1 ≤ arr[i] ≤ 20",
  "expectedTimeComplexity": "O(n)",
  "expectedSpaceComplexity": "O(1)"
},

{
  "topic": "arrays",
  "level": "hard",
  "title": "Next Smallest Palindrome",
  "question": "Given a number in the form of an array Num[] of size N containing digits from 1 to 9, find the next smallest palindrome strictly larger than the given number.",
  "sampleInputs": [
    "N = 11, Num[] = 9 4 1 8 7 9 7 8 3 2 2",
    "N = 5, Num[] = 2 3 5 4 5"
  ],
  "sampleOutputs": [
    "9 4 1 8 8 0 8 8 1 4 9",
    "2 3 6 3 2"
  ],
  "explanations": [
    "By incrementing and mirroring, we get 94188088149 as the next palindrome.",
    "Next palindrome strictly greater than 23545 is 23632."
  ],
  "testCases": [
    "N = 11, Num[] = 9 4 1 8 7 9 7 8 3 2 2\n",
    "N = 5, Num[] = 2 3 5 4 5\n",
    "N = 3, Num[] = 9 9 9\n",
    "N = 4, Num[] = 1 2 3 4\n",
    "N = 6, Num[] = 1 2 9 2 2 1\n",
    "N = 2, Num[] = 1 1\n",
    "N = 1, Num[] = 9\n",
    "N = 7, Num[] = 3 4 5 6 5 4 3\n",
    "N = 8, Num[] = 9 8 7 6 6 7 8 9\n",
    "N = 5, Num[] = 1 2 3 2 1\n"
  ],
  "expectedOutputs": [
    "9 4 1 8 8 0 8 8 1 4 9",
    "2 3 6 3 2",
    "1 0 0 0 0 0 0 0 0 0 1",
    "1 3 3 1",
    "1 2 9 3 2 1",
    "1 2 1",
    "1 0 1",
    "3 4 5 7 5 4 3",
    "9 8 7 7 7 7 8 9",
    "1 2 4 2 1"
  ],
  "constraints": "1 ≤ N ≤ 10^5; 1 ≤ Num[i] ≤ 9",
  "expectedTimeComplexity": "O(N)",
  "expectedSpaceComplexity": "O(1)"
},

{
  "topic": "arrays",
  "level": "hard",
  "title": "Subarrays with K Distinct Integers",
  "question": "Given an array arr[] of positive integers and an integer k, find the number of subarrays in arr[] where the count of distinct integers is exactly k.",
  "sampleInputs": [
    "arr = 1 2 2 3, k = 2",
    "arr = 3 1 2 2 3, k = 3",
    "arr = 1 1 1 1, k = 2"
  ],
  "sampleOutputs": [
    "4",
    "4",
    "0"
  ],
  "explanations": [
    "Valid subarrays: [1,2], [1,2,2], [2,2,3], [2,3]",
    "Valid subarrays: [3,1,2], [3,1,2,2], [3,1,2,2,3], [1,2,2,3]",
    "All subarrays contain only 1 distinct integer, so answer is 0"
  ],
  "testCases": [
    "arr = 1 2 2 3, k = 2\n",
    "arr = 3 1 2 2 3, k = 3\n",
    "arr = 1 1 1 1, k = 2\n",
    "arr = 1 2 1 2 3, k = 2\n",
    "arr = 1 2 1 3 4, k = 3\n",
    "arr = 1 2 3 4 5, k = 5\n",
    "arr = 5 5 5 5, k = 1\n",
    "arr = 1 2 1 3 4, k = 4\n",
    "arr = 1 2 1 2 3, k = 3\n",
    "arr = 1 2 3 4 2, k = 4\n"
  ],
  "expectedOutputs": [
    "4",
    "4",
    "0",
    "7",
    "6",
    "1",
    "10",
    "1",
    "3",
    "7"
  ],
  "constraints": "1 ≤ arr.size() ≤ 10^4; 1 ≤ k ≤ arr.size(); 1 ≤ arr[i] ≤ arr.size()",
  "expectedTimeComplexity": "O(n)",
  "expectedSpaceComplexity": "O(n)"
},

{
  "topic": "arrays",
  "level": "hard",
  "title": "Candy",
  "question": "There are n children standing in a line. Each child is assigned a rating value given in the integer array arr[]. You are giving candies to these children subject to the following requirements:\n\n1. Each child must have at least one candy.\n2. Children with a higher rating than their neighbors get more candies than their neighbors.\n\nReturn the minimum number of candies you need to have to distribute.",
  "sampleInputs": [
    "arr = 1 0 2",
    "arr = 1 2 2"
  ],
  "sampleOutputs": [
    "5",
    "4"
  ],
  "explanations": [
    "Children at index 0 and 2 get 2 candies, index 1 gets 1 candy → Total = 5.",
    "Candies: 1, 2, 1 → Total = 4."
  ],
  "testCases": [
    "arr = 1 0 2\n",
    "arr = 1 2 2\n",
    "arr = 1 3 4 5 2\n",
    "arr = 1 2 3 4 5\n",
    "arr = 5 4 3 2 1\n",
    "arr = 1 3 2 2 1\n",
    "arr = 1 1 1 1\n",
    "arr = 3 2 1 2 3\n",
    "arr = 4\n",
    "arr = 2 2 2 3 3 1 2\n"
  ],
  "expectedOutputs": [
    "5",
    "4",
    "11",
    "15",
    "15",
    "7",
    "5",
    "9",
    "1",
    "11"
  ],
  "constraints": "1 ≤ arr.size() ≤ 10^5; 0 ≤ arr[i] ≤ 10^9",
  "expectedTimeComplexity": "O(n)",
  "expectedSpaceComplexity": "O(n)"
},

{
  "topic": "arrays",
  "level": "hard",
  "title": "Smallest Range in K Lists",
  "question": "Given K sorted lists of integers, KSortedArray[] of size N each, find the smallest range that includes at least one element from each of the K lists. If more than one such range is found, return the first such range found.",
  "sampleInputs": [
    "N = 5, K = 3, KSortedArray = [[1 3 5 7 9], [0 2 4 6 8], [2 3 5 7 11]]",
    "N = 4, K = 3, KSortedArray = [[1 2 3 4], [5 6 7 8], [9 10 11 12]]"
  ],
  "sampleOutputs": [
    "1 2",
    "4 9"
  ],
  "explanations": [
    "Range [1,2] includes 1 from list A, 2 from list B and 2 from list C.",
    "Range [4,9] includes 4 from list A, 5 from list B and 9 from list C."
  ],
  "testCases": [
    "N = 5, K = 3, KSortedArray = [[1 3 5 7 9], [0 2 4 6 8], [2 3 5 7 11]]\n",
    "N = 4, K = 3, KSortedArray = [[1 2 3 4], [5 6 7 8], [9 10 11 12]]\n",
    "N = 3, K = 3, KSortedArray = [[1 2 3], [1 2 3], [1 2 3]]\n",
    "N = 2, K = 3, KSortedArray = [[1 10], [2 11], [3 12]]\n",
    "N = 4, K = 2, KSortedArray = [[4 10 15 24], [0 9 12 20]]\n",
    "N = 3, K = 2, KSortedArray = [[1 2 3], [4 5 6]]\n",
    "N = 4, K = 4, KSortedArray = [[1 5 8 10], [2 4 7 12], [3 6 9 13], [0 11 14 15]]\n",
    "N = 1, K = 3, KSortedArray = [[1], [2], [3]]\n",
    "N = 2, K = 3, KSortedArray = [[1 5], [2 6], [3 7]]\n",
    "N = 2, K = 2, KSortedArray = [[1 2], [10 20]]\n"
  ],
  "expectedOutputs": [
    "1 2",
    "4 9",
    "1 1",
    "1 3",
    "20 24",
    "3 4",
    "10 11",
    "1 3",
    "3 5",
    "2 10"
  ],
  "constraints": "1 ≤ K, N ≤ 500; 0 ≤ a[i] ≤ 10^5",
  "expectedTimeComplexity": "O(n * k * log k)",
  "expectedSpaceComplexity": "O(k)"
},

{
  "topic": "arrays",
  "level": "hard",
  "title": "Not a Subset Sum",
  "question": "Given a sorted array arr[] of positive integers, find the smallest positive integer such that it cannot be represented as the sum of elements of any subset of the given array.",
  "sampleInputs": [
    "arr = 1 2 3",
    "arr = 3 6 9 10 20 28"
  ],
  "sampleOutputs": [
    "7",
    "1"
  ],
  "explanations": [
    "All subset sums from 1 to 6 are possible. 7 is the smallest number that cannot be formed.",
    "As the smallest element is 3, we cannot form sum 1."
  ],
  "testCases": [
    "arr = 1 2 3\n",
    "arr = 3 6 9 10 20 28\n",
    "arr = 1 1 1 1\n",
    "arr = 1 1 3 4\n",
    "arr = 2 3 4\n",
    "arr = 1 2 5 10 20 40\n",
    "arr = 1 2 2 5 10\n",
    "arr = 1 3 4 5\n",
    "arr = 1 2 6 10 11 15\n",
    "arr = 1 2 3 8 9 10"
  ],
  "expectedOutputs": [
    "7",
    "1",
    "5",
    "11",
    "1",
    "4",
    "21",
    "15",
    "4",
    "7"
  ],
  "constraints": "1 ≤ arr.size() ≤ 10^6; 1 ≤ arr[i] ≤ 10^8",
  "expectedTimeComplexity": "O(n)",
  "expectedSpaceComplexity": "O(1)"
},

{
  "topic": "arrays",
  "level": "hard",
  "title": "Minimum Jumps",
  "question": "You are given an array arr[] of non-negative numbers. Each number tells you the maximum number of steps you can jump forward from that position.\n\nIf arr[i] = 3, you can jump to index i + 1, i + 2, or i + 3 from position i.\nIf arr[i] = 0, you cannot jump forward from that position.\n\nYour task is to find the minimum number of jumps needed to move from the first position in the array to the last position. Return -1 if you can't reach the end of the array.",
  "sampleInputs": [
    "arr = 1 3 5 8 9 2 6 7 6 8 9",
    "arr = 1 4 3 2 6 7",
    "arr = 0 10 20"
  ],
  "sampleOutputs": [
    "3",
    "2",
    "-1"
  ],
  "explanations": [
    "Jump from index 0 → 1 → 4 → 10 using values 1, 3, 9.",
    "Jump from index 0 → 1 → 5 using values 1, 4.",
    "Can't move from index 0 since value is 0."
  ],
  "testCases": [
    "arr = 1 3 5 8 9 2 6 7 6 8 9\n",
    "arr = 1 4 3 2 6 7\n",
    "arr = 0 10 20\n",
    "arr = 2 3 1 1 4\n",
    "arr = 2 0 2 0 1\n",
    "arr = 1 1 1 1 1\n",
    "arr = 4 1 1 3 1 1 1\n",
    "arr = 1 0 1 0\n",
    "arr = 10 1 1 1 1 1 1 1 1 1 1\n",
    "arr = 3 2 1 0 4\n"
  ],
  "expectedOutputs": [
    "3",
    "2",
    "-1",
    "2",
    "-1",
    "4",
    "2",
    "-1",
    "1",
    "-1"
  ],
  "constraints": "2 ≤ arr.size() ≤ 10^4; 0 ≤ arr[i] ≤ 10^4",
  "expectedTimeComplexity": "O(n)",
  "expectedSpaceComplexity": "O(1)"
},

{
  "topic": "arrays",
  "level": "hard",
  "title": "Smallest Positive Missing",
  "question": "You are given an integer array arr[]. Your task is to find the smallest positive number missing from the array.\n\nNote: Positive numbers start from 1. The array can have negative integers too.",
  "sampleInputs": [
    "arr = 2 -3 4 1 1 7",
    "arr = 5 3 2 5 1",
    "arr = -8 0 -1 -4 -3"
  ],
  "sampleOutputs": [
    "3",
    "4",
    "1"
  ],
  "explanations": [
    "Array contains 1, 2, 4, so 3 is the missing positive number.",
    "Array contains 1, 2, 3, 5, so 4 is missing.",
    "No positive numbers found, hence 1 is the smallest missing."
  ],
  "testCases": [
    "arr = 2 -3 4 1 1 7\n",
    "arr = 5 3 2 5 1\n",
    "arr = -8 0 -1 -4 -3\n",
    "arr = 1 2 3 4 5\n",
    "arr = 3 4 -1 1\n",
    "arr = 7 8 9 11 12\n",
    "arr = 1 1 0 -1 -2\n",
    "arr = [2]\n",
    "arr = [1]\n",
    "arr = [2, 1, 0, -1, 5]"
  ],
  "expectedOutputs": [
    "3",
    "4",
    "1",
    "6",
    "2",
    "1",
    "2",
    "1",
    "2",
    "3"
  ],
  "constraints": "1 ≤ arr.size() ≤ 10^5; -10^6 ≤ arr[i] ≤ 10^6",
  "expectedTimeComplexity": "O(n)",
  "expectedSpaceComplexity": "O(1)"
},

{
  "topic": "arrays",
  "level": "hard",
  "title": "Max Circular Subarray Sum",
  "question": "Given an array of integers arr[] in a circular fashion, find the maximum subarray sum assuming the array wraps around.",
  "sampleInputs": [
    "arr = 8 -8 9 -9 10 -11 12",
    "arr = 10 -3 -4 7 6 5 -4 -1",
    "arr = -1 40 -14 7 6 5 -4 -1"
  ],
  "sampleOutputs": [
    "22",
    "23",
    "52"
  ],
  "explanations": [
    "Max circular subarray: [12, 8, -8, 9, -9, 10] → sum = 22",
    "Max circular subarray: [7, 6, 5, -4, -1, 10] → sum = 23",
    "Max circular subarray: [7, 6, 5, -4, -1, -1, 40] → sum = 52"
  ],
  "testCases": [
    "arr = 8 -8 9 -9 10 -11 12\n",
    "arr = 10 -3 -4 7 6 5 -4 -1\n",
    "arr = -1 40 -14 7 6 5 -4 -1\n",
    "arr = 1 2 3 4 5\n",
    "arr = -3 -2 -1\n",
    "arr = 5 -2 3 4\n",
    "arr = -5 1 2 3 4 -1 -2\n",
    "arr = 0 0 0\n",
    "arr = 1 -2 3 -2\n",
    "arr = 3 -1 2 -1"
  ],
  "expectedOutputs": [
    "22",
    "23",
    "52",
    "15",
    "-1",
    "10",
    "10",
    "0",
    "3",
    "4"
  ],
  "constraints": "1 ≤ arr.size() ≤ 10^5; -10^4 ≤ arr[i] ≤ 10^4",
  "expectedTimeComplexity": "O(n)",
  "expectedSpaceComplexity": "O(1)"
},

{
  "topic": "arrays",
  "level": "hard",
  "title": "Trapping Rain Water",
  "question": "Given an array arr[] with non-negative integers representing the height of blocks. If the width of each block is 1, compute how much water can be trapped between the blocks during the rainy season.",
  "sampleInputs": [
    "arr = 3 0 1 0 4 0 2",
    "arr = 3 0 2 0 4",
    "arr = 1 2 3 4",
    "arr = 2 1 5 3 1 0 4"
  ],
  "sampleOutputs": [
    "10",
    "7",
    "0",
    "9"
  ],
  "explanations": [
    "Water trapped = 0 + 3 + 2 + 3 + 0 + 2 + 0 = 10",
    "Water trapped = 0 + 3 + 1 + 3 + 0 = 7",
    "No pits formed between blocks → 0 water trapped",
    "Water trapped = 0 + 1 + 0 + 1 + 3 + 4 + 0 = 9"
  ],
  "testCases": [
    "arr = 3 0 1 0 4 0 2\n",
    "arr = 3 0 2 0 4\n",
    "arr = 1 2 3 4\n",
    "arr = 2 1 5 3 1 0 4\n",
    "arr = 0 1 0 2 1 0 1 3 2 1 2 1\n",
    "arr = 5 4 1 2\n",
    "arr = 1 1 1 1\n",
    "arr = 2 0 2\n",
    "arr = 4 2 0 3 2 5\n",
    "arr = 0 0 0 0 0\n"
  ],
  "expectedOutputs": [
    "10",
    "7",
    "0",
    "9",
    "6",
    "1",
    "0",
    "2",
    "9",
    "0"
  ],
  "constraints": "1 < arr.size() < 10^5; 0 < arr[i] < 10^3",
  "expectedTimeComplexity": "O(n)",
  "expectedSpaceComplexity": "O(1)"
},

{
  "topic": "strings",
  "level": "easy",
  "title": "Palindrome String",
  "question": "You are given a string s. Your task is to determine if the string is a palindrome. A string is considered a palindrome if it reads the same forwards and backwards.",
  "sampleInputs": ["abba", "abc", "a", "acbca"],
  "sampleOutputs": ["true", "false", "true", "true"],
  "explanations": [
    "\"abba\" reads the same forwards and backwards, so it is a palindrome.",
    "\"abc\" does not read the same forwards and backwards, so it is not a palindrome.",
    "A single-character string is always a palindrome.",
    "\"acbca\" reads the same forwards and backwards, so it is a palindrome."
  ],
  "testCases": [
    "racecar",
    "madam",
    "hello",
    "aa",
    "ab",
    "noon",
    "deed",
    "rotor",
    "python",
    "x"
  ],
  "expectedOutputs": [
    "true",
    "true",
    "false",
    "true",
    "false",
    "true",
    "true",
    "true",
    "false",
    "true"
  ],
  "constraints": "1 ≤ s.size() ≤ 10^6; The string s contains only lowercase letters (a-z).",
  "expectedTimeComplexity": "O(n)",
  "expectedSpaceComplexity": "O(1)"
},

{
  "topic": "strings",
  "level": "easy",
  "title": "Reverse a String",
  "question": "Given a string s, the task is to reverse the string. Reversing a string means rearranging the characters such that the first character becomes the last, the second character becomes second last and so on.",
  "sampleInputs": ["GeeksforGeeks", "abdcfe"],
  "sampleOutputs": ["skeeGrofskeeG", "efcdba"],
  "explanations": [
    "The first character G moves to last position, the second character e moves to second-last and so on.",
    "The first character a moves to last position, the second character b moves to second-last and so on."
  ],
  "testCases": [
    "hello",
    "a",
    "abcdef",
    "aaabbb",
    "racecar",
    "madam",
    "xyz",
    "12345",
    "wow",
    "level"
  ],
  "expectedOutputs": [
    "olleh",
    "a",
    "fedcba",
    "bbbaaa",
    "racecar",
    "madam",
    "zyx",
    "54321",
    "wow",
    "level"
  ],
  "constraints": "1 ≤ s.length ≤ 10^5; The string contains printable ASCII characters.",
  "expectedTimeComplexity": "O(n)",
  "expectedSpaceComplexity": "O(n)"
},

{
  "topic": "strings",
  "level": "easy",
  "title": "First Non-Repeating Character",
  "question": "Given a string s of lowercase English letters, return the first non-repeating character in s. If no such character exists, return '$'.",
  "sampleInputs": ["geeksforgeeks", "racecar", "aabbccc"],
  "sampleOutputs": ["f", "e", "$"],
  "explanations": [
    "'f' is the first character in the string which does not repeat.",
    "'e' is the only character in the string which does not repeat.",
    "All characters in the string are repeating."
  ],
  "testCases": [
    "hello",
    "swiss",
    "abcd",
    "aabbccdd",
    "aabbc",
    "abcabcde",
    "zxyxzy",
    "popcorn",
    "banana",
    "civic"
  ],
  "expectedOutputs": [
    "h",
    "w",
    "a",
    "$",
    "c",
    "d",
    "$",
    "r",
    "b",
    "v"
  ],
  "constraints": "1 ≤ s.size() ≤ 10^5",
  "expectedTimeComplexity": "O(n)",
  "expectedSpaceComplexity": "O(1)"
},

{
  "topic": "strings",
  "level": "easy",
  "title": "Roman to Integer Conversion",
  "question": "Given a string in Roman numeral format s, convert it to an integer.",
  "sampleInputs": ["IX", "XL", "MCMIV"],
  "sampleOutputs": ["9", "40", "1904"],
  "explanations": [
    "'IX' is 10 - 1 = 9.",
    "'XL' is 50 - 10 = 40.",
    "'MCMIV' is 1000 + 900 + 4 = 1904."
  ],
  "testCases": [
    "III",
    "LVIII",
    "XIV",
    "CXL",
    "MMMCMXCIX",
    "MCDXLIV",
    "DCCCXC",
    "CCXLVI",
    "CM",
    "CD"
  ],
  "expectedOutputs": [
    "3",
    "58",
    "14",
    "140",
    "3999",
    "1444",
    "890",
    "246",
    "900",
    "400"
  ],
  "constraints": "1 ≤ roman number ≤ 3999; s[i] ∈ [I, V, X, L, C, D, M]",
  "expectedTimeComplexity": "O(n)",
  "expectedSpaceComplexity": "O(1)"
},

{
  "topic": "strings",
  "level": "easy",
  "title": "Minimum Distance Between Two Words",
  "question": "Given a list of words S and two words word1 and word2, find the minimum distance (number of words) between the given two words in the list.",
  "sampleInputs": [
    "[\"the\", \"quick\", \"brown\", \"fox\", \"quick\"], word1 = \"the\", word2 = \"fox\"",
    "[\"geeks\", \"for\", \"geeks\", \"contribute\", \"practice\"], word1 = \"geeks\", word2 = \"practice\""
  ],
  "sampleOutputs": ["3", "2"],
  "explanations": [
    "Minimum distance between 'the' and 'fox' is 3",
    "Minimum distance between 'geeks' and 'practice' is 2"
  ],
  "testCases": [
    "[\"a\", \"b\", \"c\", \"a\", \"b\"], \"a\", \"b\"",
    "[\"one\", \"two\", \"three\", \"two\", \"one\"], \"one\", \"three\"",
    "[\"a\", \"b\", \"c\", \"d\"], \"b\", \"d\"",
    "[\"cat\", \"dog\", \"mouse\", \"dog\", \"cat\"], \"cat\", \"dog\"",
    "[\"x\", \"y\", \"z\", \"x\", \"y\", \"z\"], \"x\", \"z\"",
    "[\"java\", \"python\", \"c\", \"c++\", \"java\"], \"c\", \"java\"",
    "[\"apple\", \"banana\", \"apple\", \"banana\"], \"apple\", \"banana\"",
    "[\"mango\", \"grape\", \"banana\", \"grape\", \"mango\"], \"mango\", \"banana\"",
    "[\"a\", \"b\", \"a\", \"b\", \"a\", \"b\"], \"a\", \"b\"",
    "[\"red\", \"green\", \"blue\", \"yellow\", \"red\"], \"red\", \"yellow\""
  ],
  "expectedOutputs": ["1", "2", "2", "1", "1", "2", "1", "2", "1", "2"],
  "constraints": "Sum of lengths of words ≤ 10^5",
  "expectedTimeComplexity": "O(n)",
  "expectedSpaceComplexity": "O(1)"
},

{
  "topic": "strings",
  "level": "easy",
  "title": "Check Divisibility by 7",
  "question": "Given a number N, check whether it is divisible by 7 without using modulo (%) or floating-point arithmetic.",
  "sampleInputs": ["371", "483", "777"],
  "sampleOutputs": ["true", "false", "true"],
  "explanations": [
    "371 → 37 - 2×1 = 35 → divisible",
    "483 → not divisible",
    "777 is divisible by 7"
  ],
  "testCases": [
    "154",
    "203",
    "49",
    "70",
    "999",
    "1001",
    "343",
    "98",
    "21",
    "1234"
  ],
  "expectedOutputs": ["true", "true", "true", "true", "false", "true", "true", "true", "true", "false"],
  "constraints": "1 ≤ N ≤ 10^9",
  "expectedTimeComplexity": "O(log n)",
  "expectedSpaceComplexity": "O(log n)"
},

{
  "topic": "strings",
  "level": "easy",
  "title": "Encrypt the String - 2",
  "question": "Given a lowercase string s, replace each group of identical letters with the letter followed by its count in lowercase hexadecimal. Then reverse the entire string.",
  "sampleInputs": ["aaaaaaaaaaa", "abc"],
  "sampleOutputs": ["ba", "1c1b1a"],
  "explanations": [
    "'a' appears 11 times → 'a11' → 'ab' → reversed: 'ba'",
    "'abc' → a1b1c1 → reversed: 1c1b1a"
  ],
  "testCases": [
    "aabbcc",
    "a",
    "zzz",
    "mnnnooo",
    "pppppppppppp",
    "aaabbbccc",
    "abcd",
    "aaaabbbbcccc",
    "xyzz",
    "h"
  ],
  "expectedOutputs": [
    "c2b2a2",
    "1a",
    "z3",
    "o3n3m1",
    "pc",
    "c3b3a3",
    "d1c1b1a1",
    "c4b4a4",
    "z2y1x1",
    "1h"
  ],
  "constraints": "1 ≤ s.length ≤ 10^5; s[i] ∈ [a-z]",
  "expectedTimeComplexity": "O(|s|)",
  "expectedSpaceComplexity": "O(1)"
},

{
  "topic": "strings",
  "level": "easy",
  "title": "Panagram Checking",
  "question": "Given a string s, check if it is a Panagram or not. A Panagram is a sentence containing every letter of the English alphabet either in lowercase or uppercase. Return true if it is a Panagram, else return false.",
  "sampleInputs": [
    "Bawds jog, flick quartz, vex nymph",
    "sdfs"
  ],
  "sampleOutputs": ["true", "false"],
  "explanations": [
    "The string contains every letter of the alphabet at least once.",
    "The string is missing several letters."
  ],
  "testCases": [
    "The quick brown fox jumps over the lazy dog",
    "Pack my box with five dozen liquor jugs",
    "Hello World",
    "abcdefghijklmnopqrstuvwxyz",
    "Sphinx of black quartz, judge my vow",
    "not a panagram",
    "abcdefghijklmnopqrstuvwxy",
    "Zyxwvutsrqponmlkjihgfedcba",
    "1234567890 abcdefghijklmnopqrstuvwxyz",
    "ABCDEFGHIJKLMNOPQRSTUVWXYz"
  ],
  "expectedOutputs": [
    "true",
    "true",
    "false",
    "true",
    "true",
    "false",
    "false",
    "true",
    "true",
    "true"
  ],
  "constraints": "1 ≤ |s| ≤ 10^4; s consists of lowercase and uppercase letters",
  "expectedTimeComplexity": "O(n)",
  "expectedSpaceComplexity": "O(1)"
},

{
  "topic": "strings",
  "level": "easy",
  "title": "Check Divisibility by 7",
  "question": "Given a number N, check whether it is divisible by 7 without using modulo (%) or floating-point arithmetic.",
  "sampleInputs": ["371", "483", "777"],
  "sampleOutputs": ["true", "false", "true"],
  "explanations": [
    "371 → 37 - 2×1 = 35 → divisible",
    "483 → not divisible",
    "777 is divisible by 7"
  ],
  "testCases": [
    "154",
    "203",
    "49",
    "70",
    "999",
    "1001",
    "343",
    "98",
    "21",
    "1234"
  ],
  "expectedOutputs": [
    "true",
    "true",
    "true",
    "true",
    "false",
    "true",
    "true",
    "true",
    "true",
    "false"
  ],
  "constraints": "1 ≤ N ≤ 10^9",
  "expectedTimeComplexity": "O(log n)",
  "expectedSpaceComplexity": "O(log n)"
},

{
  "topic": "strings",
  "level": "easy",
  "title": "Encrypt the String - 2",
  "question": "Given a lowercase string s, replace each group of identical letters with the letter followed by its count in lowercase hexadecimal. Then reverse the entire string.",
  "sampleInputs": ["aaaaaaaaaaa", "abc"],
  "sampleOutputs": ["ba", "1c1b1a"],
  "explanations": [
    "'a' appears 11 times → 'a11' → 'ab' → reversed: 'ba'",
    "'abc' → a1b1c1 → reversed: 1c1b1a"
  ],
  "testCases": [
    "aabbcc",
    "a",
    "zzz",
    "mnnnooo",
    "pppppppppppp",
    "aaabbbccc",
    "abcd",
    "aaaabbbbcccc",
    "xyzz",
    "h"
  ],
  "expectedOutputs": [
    "c2b2a2",
    "1a",
    "z3",
    "o3n3m1",
    "pc",
    "c3b3a3",
    "d1c1b1a1",
    "c4b4a4",
    "z2y1x1",
    "1h"
  ],
  "constraints": "1 ≤ s.length ≤ 10^5; s[i] ∈ [a-z]",
  "expectedTimeComplexity": "O(|s|)",
  "expectedSpaceComplexity": "O(1)"
},

{
  "topic": "strings",
  "level": "medium",
  "title": "String to Integer (Implement atoi)",
  "question": "Given a string s, convert it into integer format without using built-in functions. Skip leading whitespaces, handle optional '+' or '-' signs, and stop conversion on first non-digit. Return 0 if no digits found. Clamp to 32-bit int range if needed.",
  "sampleInputs": ["-123", "  -", " 1231231231311133", "-999999999999", "  -0012gfg4"],
  "sampleOutputs": ["-123", "0", "2147483647", "-2147483648", "-12"],
  "explanations": [
    "Valid negative number parsed: -123",
    "Only whitespace and '-', so output is 0",
    "Number exceeds max int, clamped to 2147483647",
    "Number below min int, clamped to -2147483648",
    "Parsing stops at non-digit 'g', result is -12"
  ],
  "testCases": [
    "42",
    "   +0 123",
    "0032",
    "+1",
    "-2147483649",
    "4193 with words",
    "words and 987",
    "  -00000000123abc",
    "-+12",
    "9999999999"
  ],
  "expectedOutputs": [
    "42",
    "0",
    "32",
    "1",
    "-2147483648",
    "4193",
    "0",
    "-123",
    "0",
    "2147483647"
  ],
  "constraints": "1 ≤ |s| ≤ 15",
  "expectedTimeComplexity": "O(n)",
  "expectedSpaceComplexity": "O(1)"
},

{
  "topic": "strings",
  "level": "medium",
  "title": "License Key Formatting",
  "question": "Given a string S consisting of alphanumeric characters and dashes, and an integer K, reformat the string so that each group contains exactly K characters except the first group which may be shorter. Remove all existing dashes, convert all letters to uppercase, and insert new dashes between groups.",
  "sampleInputs": [
    "S = \"5F3Z-2e-9-w\", K = 4",
    "S = \"2-5g-3-J\", K = 2"
  ],
  "sampleOutputs": [
    "5F3Z-2E9W",
    "2-5G-3J"
  ],
  "explanations": [
    "The groups are formed as 5F3Z and 2E9W after removing dashes and formatting.",
    "The groups are split as 2, 5G, 3J from cleaned string 25G3J."
  ],
  "testCases": [
  "S = \"abcd-efg-hij\", K = 3",
  "S = \"a-b-c-d\", K = 1",
  "S = \"abc-def\", K = 2",
  "S = \"z-x-y\", K = 4",
  "S = \"123-456-789\", K = 5",
  "S = \"gfg-gfg\", K = 4",
  "S = \"AB-CD-EF\", K = 2",
  "S = \"abcde\", K = 5",
  "S = \"---abc---\", K = 3",
  "S = \"\", K = 1"
],
  "expectedOutputs": [
    "ABC-DEF-GHI-J",
    "A-B-C-D",
    "AB-CD-EF",
    "ZXY",
    "12-34567-89",
    "GFGG-FG",
    "AB-CD-EF",
    "ABCDE",
    "ABC",
    ""
  ],
  "constraints": "1 ≤ S.length() ≤ 10^5; 1 ≤ K ≤ 10^4",
  "expectedTimeComplexity": "O(N)",
  "expectedSpaceComplexity": "O(N)"
},

{
  "topic": "strings",
  "level": "medium",
  "title": "Find Largest Word in Dictionary",
  "question": "Given a string s and a list of words (dictionary) d, find the longest word in the dictionary that can be formed by deleting some characters of the string s. If there are more than one possible results, return the longest word with the smallest lexicographical order. If there is no possible result, return an empty string.",
  "sampleInputs": [
    "s = \"abpcplea\", d = [\"ale\", \"apple\", \"monkey\", \"plea\"]",
    "s = \"abpcplea\", d = [\"a\", \"b\", \"c\"]"
  ],
  "sampleOutputs": [
    "apple",
    "a"
  ],
  "explanations": [
    "\"apple\" is the longest word in the dictionary that can be formed by deleting characters from s.",
    "\"a\" is the longest among \"a\", \"b\", and \"c\" that can be formed from s and is smallest lexicographically."
  ],
  "testCases": [
    "s = \"abce\", d = [\"abe\", \"abc\"]",
    "s = \"abce\", d = [\"abc\", \"ab\"]",
    "s = \"abcdef\", d = [\"fed\", \"face\", \"bed\"]",
    "s = \"bab\", d = [\"ba\", \"ab\", \"a\"]",
    "s = \"xyzabc\", d = [\"abc\", \"xbc\", \"yabc\"]",
    "s = \"aaaaa\", d = [\"a\", \"aa\", \"aaa\"]",
    "s = \"coding\", d = [\"co\", \"cod\", \"codi\"]",
    "s = \"algorithm\", d = [\"log\", \"gorithm\", \"alg\"]",
    "s = \"abcabc\", d = [\"aabbcc\", \"abc\"]",
    "s = \"hello\", d = [\"hello\", \"hell\"]"
  ],
  "expectedOutputs": [
    "abe",
    "abc",
    "",
    "ab",
    "abc",
    "aaa",
    "codi",
    "gorithm",
    "abc",
    "hello"
  ],
  "constraints": "1 ≤ length of s, any word in d ≤ 10^3",
  "expectedTimeComplexity": "O(n * x)",
  "expectedSpaceComplexity": "O(x)"
},

{
  "topic": "strings",
  "level": "medium",
  "title": "Replace All Occurrences of Substring",
  "question": "Given strings S, S1, and S2, replace all occurrences of substring S1 in S with S2.",
  "sampleInputs": [
    "S = \"abababa\", S1 = \"aba\", S2 = \"a\"",
    "S = \"geeksforgeeks\", S1 = \"eek\", S2 = \"ok\""
  ],
  "sampleOutputs": [
    "aba",
    "goksforgoks"
  ],
  "explanations": [
    "Replaced two 'aba' with 'a', resulting in 'aba'",
    "Replaced both 'eek' with 'ok'"
  ],
  "testCases": [
    "S = \"abcabcabc\", S1 = \"abc\", S2 = \"x\"",
    "S = \"aaaaa\", S1 = \"aa\", S2 = \"b\"",
    "S = \"abcdef\", S1 = \"def\", S2 = \"123\"",
    "S = \"aaaa\", S1 = \"a\", S2 = \"xy\"",
    "S = \"ababab\", S1 = \"ab\", S2 = \"c\"",
    "S = \"aabbaabbaabb\", S1 = \"aabb\", S2 = \"z\"",
    "S = \"hellohello\", S1 = \"hello\", S2 = \"hi\"",
    "S = \"xxyyx\", S1 = \"yy\", S2 = \"z\"",
    "S = \"banana\", S1 = \"na\", S2 = \"x\"",
    "S = \"testcase\", S1 = \"case\", S2 = \"run\""
  ],
  "expectedOutputs": [
    "xxx",
    "bb",
    "abc123",
    "xyxyxyxy",
    "ccc",
    "zzz",
    "hihi",
    "xxzx",
    "bxxa",
    "testrun"
  ],
  "constraints": "1 ≤ length of S, S1, S2 ≤ 10^5",
  "expectedTimeComplexity": "O(n + m)",
  "expectedSpaceComplexity": "O(m)"
},

{
  "topic": "strings",
  "level": "medium",
  "title": "Add Two Binary Strings",
  "question": "Given two binary strings s1 and s2, return their sum as a binary string. The input strings may contain leading zeros but the output string should not.",
  "sampleInputs": [
    "s1 = \"1101\", s2 = \"111\"",
    "s1 = \"00100\", s2 = \"010\""
  ],
  "sampleOutputs": [
    "10100",
    "110"
  ],
  "explanations": [
    "\"1101\" + \"111\" = \"10100\"",
    "\"00100\" + \"010\" = \"110\""
  ],
  "testCases": [
    "s1 = \"0\", s2 = \"0\"",
    "s1 = \"1\", s2 = \"1\"",
    "s1 = \"1010\", s2 = \"1011\"",
    "s1 = \"1111\", s2 = \"1111\"",
    "s1 = \"1001\", s2 = \"1001\"",
    "s1 = \"0\", s2 = \"1\"",
    "s1 = \"00001\", s2 = \"00001\"",
    "s1 = \"110010\", s2 = \"10111\"",
    "s1 = \"1\", s2 = \"111111111\"",
    "s1 = \"1010101010101\", s2 = \"1010101010101\""
  ],
  "expectedOutputs": [
    "0",
    "10",
    "10101",
    "11110",
    "10010",
    "1",
    "10",
    "1001001",
    "1000000000",
    "10101010101010"
  ],
  "constraints": "1 ≤ s1.size(), s2.size() ≤ 10^6",
  "expectedTimeComplexity": "O(n)",
  "expectedSpaceComplexity": "O(n)"
},

{
  "topic": "strings",
  "level": "medium",
  "title": "Form a Palindrome",
  "question": "Given a string s, find the minimum number of characters to be inserted to convert it to a palindrome.",
  "sampleInputs": ["abcd", "aba"],
  "sampleOutputs": ["3", "0"],
  "explanations": [
    "Insert 3 characters at the beginning: 'dcbabcd'.",
    "Already a palindrome; no insertions needed."
  ],
  "testCases": [
    "a",
    "ab",
    "abc",
    "aab",
    "race",
    "geeks",
    "noon",
    "radar",
    "aaa",
    "civic"
  ],
  "expectedOutputs": [
    "0",
    "1",
    "2",
    "1",
    "3",
    "3",
    "0",
    "0",
    "0",
    "0"
  ],
  "constraints": "1 ≤ s.size() ≤ 500",
  "expectedTimeComplexity": "O(n^2)",
  "expectedSpaceComplexity": "O(n^2)"
},

{
  "topic": "strings",
  "level": "medium",
  "title": "Find i’th Index Character in a Binary String After n Iterations",
  "question": "Given a decimal number m, convert it into a binary string and apply n iterations where 0 becomes '01' and 1 becomes '10'. Find the character at the ith (0-based index) position after all iterations without building the entire string.",
  "sampleInputs": [
    "m = 5, i = 5, n = 3",
    "m = 11, i = 6, n = 4"
  ],
  "sampleOutputs": [
    "1",
    "1"
  ],
  "explanations": [
    "m = 5 → binary '101' → after 3 iterations → index 5 is '1'",
    "m = 11 → binary '1011' → after 4 iterations → index 6 is '1'"
  ],
  "testCases": [
    "m = 1, i = 0, n = 1",
    "m = 2, i = 1, n = 2",
    "m = 3, i = 5, n = 2",
    "m = 7, i = 15, n = 3",
    "m = 4, i = 8, n = 3",
    "m = 10, i = 10, n = 4",
    "m = 8, i = 20, n = 4",
    "m = 9, i = 0, n = 0",
    "m = 15, i = 31, n = 3",
    "m = 1, i = 15, n = 4"
  ],
  "expectedOutputs": [
    "1",
    "0",
    "1",
    "0",
    "1",
    "0",
    "0",
    "1",
    "1",
    "0"
  ],
  "constraints": "1 ≤ m ≤ 10^5; 0 ≤ i ≤ 10^6; 0 ≤ n ≤ 20",
  "expectedTimeComplexity": "O(log Z)",
  "expectedSpaceComplexity": "O(1)"
},

{
  "topic": "strings",
  "level": "medium",
  "title": "Longest Prefix Which Is Also Suffix",
  "question": "Given a string s, find the length of the longest proper prefix which is also a suffix. A proper prefix is a prefix that doesn't include the entire string.",
  "sampleInputs": [
    "s = \"aabcdaabc\"",
    "s = \"ababab\"",
    "s = \"aaaa\""
  ],
  "sampleOutputs": [
    "4",
    "4",
    "3"
  ],
  "explanations": [
    "\"aabc\" is the longest prefix which is also a suffix.",
    "\"abab\" is the longest prefix and suffix.",
    "\"aaa\" is the longest prefix and suffix."
  ],
  "testCases": [
    "abab",
    "abcabc",
    "abcdabc",
    "aaaaaa",
    "aabbaabb",
    "xyzxyz",
    "abababab",
    "abcabdabcabd",
    "abacabadabacaba",
    "a"
  ],
  "expectedOutputs": [
    "2",
    "3",
    "3",
    "5",
    "4",
    "3",
    "6",
    "6",
    "7",
    "0"
  ],
  "constraints": "1 ≤ s.size() ≤ 10^6; s contains only lowercase English alphabets.",
  "expectedTimeComplexity": "O(n)",
  "expectedSpaceComplexity": "O(n)"
},

{
  "topic": "strings",
  "level": "medium",
  "title": "Substrings with K Distinct Characters",
  "question": "Given a string s of lowercase alphabets, count all possible substrings (not necessarily distinct) that have exactly k distinct characters.",
  "sampleInputs": [
    "s = \"aba\", k = 2",
    "s = \"abaaca\", k = 1",
    "s = \"cdad\", k = 4"
  ],
  "sampleOutputs": [
    "3",
    "7",
    "0"
  ],
  "explanations": [
    "Substrings with exactly 2 distinct characters: \"ab\", \"ba\", \"aba\"",
    "Substrings with 1 distinct character: \"a\", \"b\", \"a\", \"aa\", \"a\", \"c\", \"a\"",
    "No substring has exactly 4 distinct characters"
  ],
  "testCases": [
    "s = \"abcbaa\", k = 3",
    "s = \"aaaa\", k = 1",
    "s = \"abcd\", k = 2",
    "s = \"abac\", k = 2",
    "s = \"aabbcc\", k = 2",
    "s = \"abcabcabc\", k = 3",
    "s = \"xxyyz\", k = 2",
    "s = \"abcde\", k = 5",
    "s = \"a\", k = 1",
    "s = \"a\", k = 2"
  ],
  "expectedOutputs": [
    "6",
    "10",
    "6",
    "5",
    "9",
    "19",
    "7",
    "1",
    "1",
    "0"
  ],
  "constraints": "1 ≤ s.size() ≤ 10^6; 1 ≤ k ≤ 26",
  "expectedTimeComplexity": "O(n)",
  "expectedSpaceComplexity": "O(1)"
},

{
  "topic": "strings",
  "level": "medium",
  "title": "Longest Prefix Suffix",
  "question": "Given a string s, find the length of the longest prefix which is also a suffix. The prefix and suffix can overlap but must not be equal to the entire string.",
  "sampleInputs": [
    "s = \"abab\"",
    "s = \"aabcdaabc\"",
    "s = \"aaaa\""
  ],
  "sampleOutputs": [
    "2",
    "4",
    "3"
  ],
  "explanations": [
    "\"ab\" is the longest proper prefix and suffix.",
    "\"aabc\" is the longest prefix and suffix.",
    "\"aaa\" is the longest prefix and suffix."
  ],
  "testCases": [
    "abcab",
    "abcdabca",
    "aabaaab",
    "xyzxyz",
    "abababab",
    "abcabcabc",
    "a",
    "ab",
    "aa",
    "abcdabc"
  ],
  "expectedOutputs": [
    "2",
    "1",
    "3",
    "3",
    "6",
    "6",
    "0",
    "0",
    "1",
    "3"
  ],
  "constraints": "1 ≤ s.size() ≤ 10^6; s contains only lowercase English alphabets.",
  "expectedTimeComplexity": "O(n)",
  "expectedSpaceComplexity": "O(n)"
},

{
  "topic": "strings",
  "level": "hard",
  "title": "Reduce the String by Removing K Consecutive Identical Characters",
  "question": "Given a string s and an integer k, repeatedly remove groups of k consecutive identical characters from the string until no more such groups can be removed. Return the final reduced string.",
  "sampleInputs": [
    "k = 2, s = \"geeksforgeeks\"",
    "k = 3, s = \"qddxxxd\""
  ],
  "sampleOutputs": [
    "gksforgks",
    "q"
  ],
  "explanations": [
    "Remove both 'ee' groups → 'gksforgks'",
    "Remove 'xxx' → 'qddd', then 'ddd' → 'q'"
  ],
  "testCases": [
    "k = 2, s = \"aabbcc\"",
    "k = 3, s = \"aaabbbccc\"",
    "k = 2, s = \"abcd\"",
    "k = 1, s = \"zzzz\"",
    "k = 4, s = \"aaaabbbb\"",
    "k = 2, s = \"aabbccaabb\"",
    "k = 3, s = \"aaabbaaac\"",
    "k = 2, s = \"gfgfgfgfgf\"",
    "k = 3, s = \"abcccba\"",
    "k = 2, s = \"xxxyyyxx\""
  ],
  "expectedOutputs": [
    "",
    "",
    "abcd",
    "",
    "",
    "",
    "c",
    "gfgfgfgfgf",
    "aba",
    "x"
  ],
  "constraints": "1 ≤ |s| ≤ 10^5; 1 ≤ k ≤ |s|",
  "expectedTimeComplexity": "O(|s|)",
  "expectedSpaceComplexity": "O(|s|)"
},

{
  "topic": "strings",
  "level": "hard",
  "title": "Edit Distance",
  "question": "Given two strings s1 and s2, find the minimum number of operations required to convert s1 into s2. Allowed operations are: insert a character, remove a character, or replace a character. All operations have equal cost.",
  "sampleInputs": [
    "s1 = \"geek\", s2 = \"gesek\"",
    "s1 = \"gfg\", s2 = \"gfg\"",
    "s1 = \"abcd\", s2 = \"bcfe\""
  ],
  "sampleOutputs": [
    "1",
    "0",
    "3"
  ],
  "explanations": [
    "Insert 's' in 'geek' to make it 'gesek'",
    "Both strings are the same, so no operation needed",
    "Remove 'a', replace 'd' with 'f', insert 'e'"
  ],
  "testCases": [
    "s1 = \"abc\", s2 = \"yabd\"",
    "s1 = \"kitten\", s2 = \"sitting\"",
    "s1 = \"intention\", s2 = \"execution\"",
    "s1 = \"horse\", s2 = \"ros\"",
    "s1 = \"flaw\", s2 = \"lawn\"",
    "s1 = \"a\", s2 = \"b\"",
    "s1 = \"abcdef\", s2 = \"azced\"",
    "s1 = \"hello\", s2 = \"hola\"",
    "s1 = \"algorithm\", s2 = \"altruistic\"",
    "s1 = \"a\", s2 = \"a\""
  ],
  "expectedOutputs": [
    "2",
    "3",
    "5",
    "3",
    "2",
    "1",
    "3",
    "3",
    "6",
    "0"
  ],
  "constraints": "1 ≤ s1.length(), s2.length() ≤ 10^3; both strings are lowercase letters",
  "expectedTimeComplexity": "O(n * m)",
  "expectedSpaceComplexity": "O(n * m)"
},

{
  "topic": "strings",
  "level": "hard",
  "title": "KMP Algorithm for Pattern Searching",
  "question": "Given two strings txt and pat, return all starting indices of occurrences of pat in txt using the KMP algorithm. Use 0-based indexing. If no match exists, return an empty list.",
  "sampleInputs": [
    "txt = \"abcab\", pat = \"ab\"",
    "txt = \"aabaacaadaabaaba\", pat = \"aaba\"",
    "txt = \"abesdu\", pat = \"edu\""
  ],
  "sampleOutputs": [
    "[0, 3]",
    "[0, 9, 12]",
    "[]"
  ],
  "explanations": [
    "\"ab\" occurs at index 0 and 3",
    "\"aaba\" occurs at index 0, 9, and 12",
    "\"edu\" does not occur in the text"
  ],
  "testCases": [
    "txt = \"aaaaa\", pat = \"aa\"",
    "txt = \"abcdabcabcd\", pat = \"abcd\"",
    "txt = \"abcabcabc\", pat = \"abc\"",
    "txt = \"mississippi\", pat = \"iss\"",
    "txt = \"abababab\", pat = \"abab\"",
    "txt = \"a\", pat = \"a\"",
    "txt = \"a\", pat = \"b\"",
    "txt = \"xyzxyzxyz\", pat = \"xyz\"",
    "txt = \"zzzzzz\", pat = \"zzz\"",
    "txt = \"abcdef\", pat = \"gh\""
  ],
  "expectedOutputs": [
    "[0, 1, 2, 3]",
    "[0, 4, 7]",
    "[0, 3, 6]",
    "[1, 4]",
    "[0, 2, 4]",
    "[0]",
    "[]",
    "[0, 3, 6]",
    "[0, 1, 2, 3]",
    "[]"
  ],
  "constraints": "1 ≤ txt.length() ≤ 10^6; 1 ≤ pat.length() < txt.length(); both strings consist of lowercase English letters",
  "expectedTimeComplexity": "O(n + m)",
  "expectedSpaceComplexity": "O(m)"
},

{
  "topic": "strings",
  "level": "hard",
  "title": "Search Pattern (Rabin-Karp Algorithm)",
  "question": "Given a text string and a pattern string, return a list of starting indices (1-based) of all occurrences of the pattern in the text using the Rabin-Karp algorithm. If no match exists, return an empty list.",
  "sampleInputs": [
    "text = \"birthdayboy\", pattern = \"birth\"",
    "text = \"geeksforgeeks\", pattern = \"geek\""
  ],
  "sampleOutputs": [
    "[1]",
    "[1, 9]"
  ],
  "explanations": [
    "\"birth\" appears at index 1 in the text.",
    "\"geek\" appears at index 1 and 9."
  ],
  "testCases": [
    "text = \"aaaaa\", pattern = \"aa\"",
    "text = \"abcdabcabcd\", pattern = \"abcd\"",
    "text = \"abcabcabc\", pattern = \"abc\"",
    "text = \"mississippi\", pattern = \"iss\"",
    "text = \"abababab\", pattern = \"abab\"",
    "text = \"a\", pattern = \"a\"",
    "text = \"a\", pattern = \"b\"",
    "text = \"xyzxyzxyz\", pattern = \"xyz\"",
    "text = \"zzzzzz\", pattern = \"zzz\"",
    "text = \"abcdef\", pattern = \"gh\""
  ],
  "expectedOutputs": [
    "[1, 2, 3, 4]",
    "[1, 5, 8]",
    "[1, 4, 7]",
    "[2, 5]",
    "[1, 3, 5]",
    "[1]",
    "[]",
    "[1, 4, 7]",
    "[1, 2, 3, 4]",
    "[]"
  ],
  "constraints": "1 ≤ |text| ≤ 5×10^5; 1 ≤ |pattern| ≤ |text|; all strings contain lowercase English letters",
  "expectedTimeComplexity": "O(|text| + |pattern|)",
  "expectedSpaceComplexity": "O(1)"
},

{
  "topic": "strings",
  "level": "hard",
  "title": "Shortest Common Supersequence",
  "question": "Given two strings s1 and s2, return the length of the shortest string that has both s1 and s2 as subsequences.",
  "sampleInputs": [
    "s1 = \"geek\", s2 = \"eke\"",
    "s1 = \"AGGTAB\", s2 = \"GXTXAYB\"",
    "s1 = \"geek\", s2 = \"ek\""
  ],
  "sampleOutputs": [
    "5",
    "9",
    "4"
  ],
  "explanations": [
    "\"geeke\" has both 'geek' and 'eke' as subsequences.",
    "\"AGXGTXAYB\" includes both 'AGGTAB' and 'GXTXAYB'.",
    "\"geek\" includes both 'geek' and 'ek' as subsequences."
  ],
  "testCases": [
    "s1 = \"abc\", s2 = \"ac\"",
    "s1 = \"abcde\", s2 = \"fghij\"",
    "s1 = \"aaa\", s2 = \"aa\"",
    "s1 = \"abcd\", s2 = \"bd\"",
    "s1 = \"abc\", s2 = \"abc\"",
    "s1 = \"abac\", s2 = \"cab\"",
    "s1 = \"a\", s2 = \"b\"",
    "s1 = \"abc\", s2 = \"def\"",
    "s1 = \"aab\", s2 = \"azb\"",
    "s1 = \"xxyyzz\", s2 = \"xyz\""
  ],
  "expectedOutputs": [
    "3",
    "10",
    "3",
    "4",
    "3",
    "5",
    "2",
    "6",
    "4",
    "6"
  ],
  "constraints": "1 ≤ s1.length(), s2.length() ≤ 500; s1 and s2 can contain uppercase or lowercase English letters",
  "expectedTimeComplexity": "O(n * m)",
  "expectedSpaceComplexity": "O(n * m)"
},

{
  "topic": "strings",
  "level": "hard",
  "title": "Number of Distinct Words with at Most K Contiguous Vowels",
  "question": "Given integers N and K, find the number of distinct strings of length N made up of lowercase alphabets such that they contain at most K contiguous vowels. Return the answer modulo 1000000007.",
  "sampleInputs": [
    "N = 1, K = 0",
    "N = 1, K = 1",
    "N = 2, K = 0"
  ],
  "sampleOutputs": [
    "21",
    "26",
    "441"
  ],
  "explanations": [
    "Only consonants are allowed: 21 characters",
    "All 26 lowercase letters are allowed since K = 1",
    "All two-letter combinations with 0 contiguous vowels"
  ],
  "testCases": [
    "N = 3, K = 0",
    "N = 3, K = 1",
    "N = 4, K = 2",
    "N = 5, K = 1",
    "N = 10, K = 2",
    "N = 2, K = 2",
    "N = 6, K = 3",
    "N = 15, K = 0",
    "N = 20, K = 5",
    "N = 25, K = 10"
  ],
  "expectedOutputs": [
    "9261",
    "11981",
    "333991",
    "216216",
    "882866730",
    "676",
    "3350943",
    "506623120",
    "299185404",
    "727448498"
  ],
  "constraints": "1 ≤ N ≤ 1000; 0 ≤ K ≤ N",
  "expectedTimeComplexity": "O(N * K)",
  "expectedSpaceComplexity": "O(N * K)"
},

{
  "topic": "strings",
  "level": "hard",
  "title": "Longest Substring to Form a Palindrome",
  "question": "Given a string S containing only lowercase alphabets, find the length of the longest substring of S such that the characters in it can be rearranged to form a palindrome.",
  "sampleInputs": [
    "S = \"aabe\"",
    "S = \"adbabd\""
  ],
  "sampleOutputs": [
    "3",
    "6"
  ],
  "explanations": [
    "Substring 'aab' can be rearranged as 'aba'",
    "Entire string 'adbabd' can be rearranged to 'abddba'"
  ],
  "testCases": [
    "S = \"abccba\"",
    "S = \"abcabc\"",
    "S = \"xyz\"",
    "S = \"aabbcc\"",
    "S = \"racecar\"",
    "S = \"a\"",
    "S = \"aa\"",
    "S = \"aabbb\"",
    "S = \"abcabcabc\"",
    "S = \"abacdfgdcaba\""
  ],
  "expectedOutputs": [
    "6",
    "6",
    "1",
    "6",
    "7",
    "1",
    "2",
    "5",
    "9",
    "7"
  ],
  "constraints": "1 ≤ |S| ≤ 10^5; S contains only lowercase English alphabets",
  "expectedTimeComplexity": "O(|S| * 26)",
  "expectedSpaceComplexity": "O(|S| * 26)"
},

{
  "topic": "strings",
  "level": "hard",
  "title": "Longest Valid Parentheses Substring",
  "question": "Given a string s consisting of only '(' and ')', return the length of the longest valid (well-formed) parentheses substring.",
  "sampleInputs": [
    "s = \"((()\"",
    "s = \")()())\"",
    "s = \"(()())\""
  ],
  "sampleOutputs": [
    "2",
    "4",
    "6"
  ],
  "explanations": [
    "The longest valid substring is \"()\"",
    "The longest valid substring is \"()()\"",
    "The entire string is a valid parentheses expression"
  ],
  "testCases": [
    "s = \"(()\"",
    "s = \"()(()\"",
    "s = \"()(()))\"",
    "s = \"()()()\"",
    "s = \"((()))\"",
    "s = \"((((((\"",
    "s = \"()))((()\"",
    "s = \"((())())\"",
    "s = \")(()())(\"",
    "s = \"()(()))(()\""
  ],
  "expectedOutputs": [
    "2",
    "2",
    "6",
    "6",
    "6",
    "0",
    "2",
    "8",
    "6",
    "6"
  ],
  "constraints": "1 ≤ s.length ≤ 10^5; s[i] ∈ {'(', ')'}",
  "expectedTimeComplexity": "O(n)",
  "expectedSpaceComplexity": "O(1)"
},

{
  "topic": "strings",
  "level": "hard",
  "title": "Minimum Characters to Make a String Palindromic",
  "question": "Given a string s, determine the minimum number of characters that need to be added to the beginning of the string to make it a palindrome. The added characters must not change the original string's order.",
  "sampleInputs": [
    "s = \"abc\"",
    "s = \"aacecaaa\"",
    "s = \"abcd\""
  ],
  "sampleOutputs": [
    "2",
    "0",
    "3"
  ],
  "explanations": [
    "Add 'cb' to the beginning: 'cbabc'",
    "Already a palindrome",
    "Add 'dcb': 'dcbabcd'"
  ],
  "testCases": [
    "s = \"a\"",
    "s = \"aa\"",
    "s = \"ab\"",
    "s = \"race\"",
    "s = \"aabba\"",
    "s = \"abcdabc\"",
    "s = \"aabbaa\"",
    "s = \"xxyyzz\"",
    "s = \"abcbaabc\"",
    "s = \"xyz\""
  ],
  "expectedOutputs": [
    "0",
    "0",
    "1",
    "3",
    "2",
    "6",
    "0",
    "5",
    "3",
    "2"
  ],
  "constraints": "1 ≤ s.length ≤ 10^5; s contains only lowercase English letters",
  "expectedTimeComplexity": "O(n)",
  "expectedSpaceComplexity": "O(n)"
},

{
  "topic": "strings",
  "level": "hard",
  "title": "Count Substrings with Equal Number of 0s, 1s and 2s",
  "question": "Given a string s consisting only of characters '0', '1', and '2', count the number of substrings that have an equal number of 0s, 1s, and 2s.",
  "sampleInputs": [
    "s = \"0102010\"",
    "s = \"102100211\""
  ],
  "sampleOutputs": [
    "5",
    "6"
  ],
  "explanations": [
    "Substrings: [\"010\", \"102\", \"020\", \"201\", \"010\"]",
    "6 valid substrings with equal number of 0s, 1s, and 2s"
  ],
  "testCases": [
    "s = \"012\"",
    "s = \"000111222\"",
    "s = \"012012\"",
    "s = \"001122\"",
    "s = \"120120120\"",
    "s = \"001122001122\"",
    "s = \"210201012\"",
    "s = \"012012012012\"",
    "s = \"000\"",
    "s = \"111222000\""
  ],
  "expectedOutputs": [
    "1",
    "10",
    "10",
    "4",
    "15",
    "10",
    "6",
    "28",
    "0",
    "10"
  ],
  "constraints": "1 ≤ s.length ≤ 10^5; s[i] ∈ {'0', '1', '2'}",
  "expectedTimeComplexity": "O(n)",
  "expectedSpaceComplexity": "O(n)"
},

{
  "topic": "dynamic programming",
  "level": "easy",
  "title": "Minimum Operations",
  "question": "Given a number n, find the minimum number of operations required to reach n starting from 0. You can perform only two operations: double the number or add one.",
  "sampleInputs": [
    "n = 8",
    "n = 7"
  ],
  "sampleOutputs": [
    "4",
    "5"
  ],
  "explanations": [
    "0 → 1 → 2 → 4 → 8 (4 steps)",
    "0 → 1 → 2 → 3 → 6 → 7 (5 steps)"
  ],
  "testCases": [
    "n = 1",
    "n = 2",
    "n = 3",
    "n = 10",
    "n = 15",
    "n = 20",
    "n = 31",
    "n = 64",
    "n = 100",
    "n = 1"
  ],
  "expectedOutputs": [
    "1",
    "2",
    "3",
    "5",
    "6",
    "6",
    "8",
    "7",
    "9",
    "1"
  ],
  "constraints": "1 ≤ n ≤ 10^6",
  "expectedTimeComplexity": "O(log n)",
  "expectedSpaceComplexity": "O(1)"
},

{
  "topic": "dynamic programming",
  "level": "easy",
  "title": "Count Number of Hops",
  "question": "A frog jumps either 1, 2, or 3 steps to reach the top. In how many distinct ways can it reach the top of the nth step?",
  "sampleInputs": [
    "n = 4",
    "n = 2"
  ],
  "sampleOutputs": [
    "7",
    "2"
  ],
  "explanations": [
    "All 7 combinations of hops to reach step 4",
    "1+1, 2"
  ],
  "testCases": [
    "n = 1",
    "n = 3",
    "n = 5",
    "n = 6",
    "n = 7",
    "n = 8",
    "n = 9",
    "n = 10",
    "n = 11",
    "n = 12"
  ],
  "expectedOutputs": [
    "1",
    "4",
    "13",
    "24",
    "44",
    "81",
    "149",
    "274",
    "504",
    "927"
  ],
  "constraints": "1 ≤ n ≤ 30",
  "expectedTimeComplexity": "O(n)",
  "expectedSpaceComplexity": "O(1)"
},

{
  "topic": "dynamic programming",
  "level": "easy",
  "title": "Minimum Insertions and Deletions",
  "question": "Given two strings s1 and s2, find the minimum number of insertions and deletions required to convert s1 into s2.",
  "sampleInputs": [
    "s1 = \"heap\", s2 = \"pea\"",
    "s1 = \"geeksforgeeks\", s2 = \"geeks\""
  ],
  "sampleOutputs": [
    "3",
    "8"
  ],
  "explanations": [
    "Delete 'h' and 'p', insert 'p' → 2 deletions + 1 insertion",
    "Delete all characters in 'forgeeks' part"
  ],
  "testCases": [
    "s1 = \"abcd\", s2 = \"abc\"",
    "s1 = \"abc\", s2 = \"def\"",
    "s1 = \"\", s2 = \"abc\"",
    "s1 = \"abc\", s2 = \"\"",
    "s1 = \"abcde\", s2 = \"ace\"",
    "s1 = \"a\", s2 = \"a\"",
    "s1 = \"abcdef\", s2 = \"azced\"",
    "s1 = \"abc\", s2 = \"ac\"",
    "s1 = \"abc\", s2 = \"xyz\"",
    "s1 = \"aaa\", s2 = \"aa\""
  ],
  "expectedOutputs": [
    "1",
    "6",
    "3",
    "3",
    "2",
    "0",
    "5",
    "1",
    "6",
    "1"
  ],
  "constraints": "1 ≤ s1.length(), s2.length() ≤ 1000",
  "expectedTimeComplexity": "O(n * m)",
  "expectedSpaceComplexity": "O(n * m)"
},

{
  "topic": "dynamic programming",
  "level": "easy",
  "title": "Coin Change – Minimum Coins to Make Sum",
  "question": "Given an array coins[] representing coin denominations and a target sum, return the minimum number of coins needed to make that sum. If it is not possible, return -1.",
  "sampleInputs": [
    "coins = [25, 10, 5], sum = 30",
    "coins = [9, 6, 5, 1], sum = 19"
  ],
  "sampleOutputs": [
    "2",
    "3"
  ],
  "explanations": [
    "Use coins 25 and 5",
    "Use coins 9 + 9 + 1"
  ],
  "testCases": [
    "coins = [5, 1], sum = 0",
    "coins = [4, 6, 2], sum = 5",
    "coins = [1], sum = 2",
    "coins = [2], sum = 3",
    "coins = [1, 2, 5], sum = 11",
    "coins = [2, 5, 10], sum = 1",
    "coins = [1, 2, 3], sum = 7",
    "coins = [2], sum = 0",
    "coins = [3, 6, 9], sum = 12",
    "coins = [7, 14], sum = 49"
  ],
  "expectedOutputs": [
    "0",
    "-1",
    "2",
    "-1",
    "3",
    "-1",
    "3",
    "0",
    "2",
    "4"
  ],
  "constraints": "1 ≤ sum * coins.length ≤ 10^6; 0 ≤ sum ≤ 10^4; 1 ≤ coins[i] ≤ 10^4; 1 ≤ coins.length ≤ 10^3",
  "expectedTimeComplexity": "O(coins.length * sum)",
  "expectedSpaceComplexity": "O(sum)"
},

{
  "topic": "dynamic programming",
  "level": "easy",
  "title": "Maximum Product Cutting",
  "question": "Given a rope of length n, cut the rope into parts of integer lengths such that the product of lengths is maximized. Return the maximum product possible.",
  "sampleInputs": [
    "n = 2",
    "n = 10"
  ],
  "sampleOutputs": [
    "1",
    "36"
  ],
  "explanations": [
    "Cut into 1 and 1 → 1×1 = 1",
    "Best split: 3 + 3 + 4 → 3×3×4 = 36"
  ],
  "testCases": [
    "n = 1",
    "n = 3",
    "n = 4",
    "n = 5",
    "n = 6",
    "n = 7",
    "n = 8",
    "n = 9",
    "n = 11",
    "n = 15"
  ],
  "expectedOutputs": [
    "1",
    "2",
    "4",
    "6",
    "9",
    "12",
    "18",
    "27",
    "54",
    "243"
  ],
  "constraints": "1 ≤ n ≤ 1000",
  "expectedTimeComplexity": "O(n^2)",
  "expectedSpaceComplexity": "O(n)"
},

{
  "topic": "dynamic programming",
  "level": "easy",
  "title": "Minimum Steps to Delete String Using Palindromic Substrings",
  "question": "Given a string consisting only of digits, find the minimum number of steps required to delete the entire string where in each step you can delete a palindromic substring.",
  "sampleInputs": [
    "s = \"2553432\"",
    "s = \"1234\""
  ],
  "sampleOutputs": [
    "2",
    "4"
  ],
  "explanations": [
    "Step 1: Remove '55' → '23432', Step 2: Remove palindrome '23432'",
    "No palindromic substring longer than 1, remove each digit separately"
  ],
  "testCases": [
    "s = \"a\"",
    "s = \"aa\"",
    "s = \"ab\"",
    "s = \"aba\"",
    "s = \"abcdcba\"",
    "s = \"abccba\"",
    "s = \"abcd\"",
    "s = \"madam\"",
    "s = \"level\"",
    "s = \"aabb\""
  ],
  "expectedOutputs": [
    "1",
    "1",
    "2",
    "1",
    "1",
    "1",
    "4",
    "1",
    "1",
    "2"
  ],
  "constraints": "1 ≤ s.length ≤ 1000",
  "expectedTimeComplexity": "O(n^3)",
  "expectedSpaceComplexity": "O(n^2)"
},

{
  "topic": "dynamic programming",
  "level": "easy",
  "title": "Nth Catalan Number",
  "question": "Given a number n, return the nth Catalan number. The nth Catalan number counts the number of valid expressions with n pairs of parentheses.",
  "sampleInputs": [
    "n = 3",
    "n = 4"
  ],
  "sampleOutputs": [
    "5",
    "14"
  ],
  "explanations": [
    "Possible valid expressions: ((())), (()()), ()(()), (())(), ()()()",
    "14 total valid expressions for n=4 pairs"
  ],
  "testCases": [
    "n = 0",
    "n = 1",
    "n = 2",
    "n = 5",
    "n = 6",
    "n = 7",
    "n = 8",
    "n = 9",
    "n = 10",
    "n = 11"
  ],
  "expectedOutputs": [
    "1",
    "1",
    "2",
    "42",
    "132",
    "429",
    "1430",
    "4862",
    "16796",
    "58786"
  ],
  "constraints": "1 ≤ n ≤ 19",
  "expectedTimeComplexity": "O(n^2)",
  "expectedSpaceComplexity": "O(n)"
},

{
  "topic": "dynamic programming",
  "level": "easy",
  "title": "Longest Valid Parentheses",
  "question": "Given a string consisting only of '(' and ')', find the length of the longest valid parentheses substring.",
  "sampleInputs": [
    "s = \"(()()\"",
    "s = \")()())\""
  ],
  "sampleOutputs": [
    "4",
    "4"
  ],
  "explanations": [
    "Valid substrings: ()(), length = 4",
    "Valid substrings: ()(), length = 4"
  ],
  "testCases": [
    "s = \"(()\"",
    "s = \"()(()\"",
    "s = \"()(()))\"",
    "s = \"()()()\"",
    "s = \"((()))\"",
    "s = \"((((((\"",
    "s = \"()))((()\"",
    "s = \"((())())\"",
    "s = \")(()())(\"",
    "s = \"()(()))(()\""
  ],
  "expectedOutputs": [
    "2",
    "2",
    "6",
    "6",
    "6",
    "0",
    "2",
    "8",
    "6",
    "6"
  ],
  "constraints": "1 ≤ s.length ≤ 10^5",
  "expectedTimeComplexity": "O(n)",
  "expectedSpaceComplexity": "O(1)"
},

{
  "topic": "dynamic programming",
  "level": "easy",
  "title": "Minimum Jumps to Reach End (1, 2, or 3 Steps)",
  "question": "Given an integer n, find the minimum number of jumps needed to reach step n starting from step 0. At each step, you may jump 1, 2, or 3 steps forward.",
  "sampleInputs": [
    "n = 3",
    "n = 5"
  ],
  "sampleOutputs": [
    "1",
    "2"
  ],
  "explanations": [
    "Jump directly from 0 → 3",
    "Jump: 0 → 3 → 5"
  ],
  "testCases": [
    "n = 1",
    "n = 2",
    "n = 4",
    "n = 6",
    "n = 7",
    "n = 8",
    "n = 9",
    "n = 10",
    "n = 11",
    "n = 12"
  ],
  "expectedOutputs": [
    "1",
    "1",
    "2",
    "2",
    "3",
    "3",
    "3",
    "4",
    "4",
    "4"
  ],
  "constraints": "1 ≤ n ≤ 1000",
  "expectedTimeComplexity": "O(n)",
  "expectedSpaceComplexity": "O(n)"
},

{
  "topic": "dynamic programming",
  "level": "easy",
  "title": "Minimum Cost to Climb Stairs",
  "question": "Given an array cost[] where cost[i] is the cost of stepping on the i-th stair, find the minimum cost to reach the top of the floor. You can climb either 1 or 2 steps at a time. You can start from either step 0 or step 1.",
  "sampleInputs": [
    "cost = [10, 15, 20]",
    "cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]"
  ],
  "sampleOutputs": [
    "15",
    "6"
  ],
  "explanations": [
    "Start at step 1 (cost=15), then step to top",
    "1 → 2 → 3 → 4 → 6 → 7 → 9 → top, total = 6"
  ],
  "testCases": [
    "cost = [0, 0, 1, 1]",
    "cost = [5, 5, 5, 5]",
    "cost = [10, 1, 10, 1, 10]",
    "cost = [1, 2, 2, 0]",
    "cost = [0, 1, 0]",
    "cost = [1, 100, 1]",
    "cost = [1, 1, 1, 1]",
    "cost = [0, 2, 2, 1]",
    "cost = [1, 2]",
    "cost = [3, 2, 1, 0]"
  ],
  "expectedOutputs": [
    "1",
    "10",
    "12",
    "2",
    "0",
    "1",
    "2",
    "2",
    "1",
    "2"
  ],
  "constraints": "2 ≤ cost.length ≤ 1000; 0 ≤ cost[i] ≤ 1000",
  "expectedTimeComplexity": "O(n)",
  "expectedSpaceComplexity": "O(1)"
},

{
  "topic": "dynamic programming",
  "level": "medium",
  "title": "0/1 Knapsack Problem",
  "question": "Given n items where each item has a weight and a profit, and a knapsack with maximum capacity W, determine the maximum total profit that can be obtained by selecting items such that their total weight does not exceed W. Note: You can either include the entire item or exclude it (0/1 choice), you cannot break an item.",
  "sampleInputs": [
    "W = 4, profit[] = [1, 2, 3], weight[] = [4, 5, 1]",
    "W = 3, profit[] = [1, 2, 3], weight[] = [4, 5, 6]"
  ],
  "sampleOutputs": [
    "3",
    "0"
  ],
  "explanations": [
    "Items with weights <= 4 are [4, 1]. Selecting the item with weight 1 gives profit 3, which is greater than choosing weight 4 (profit 1). So max profit = 3.",
    "All items have weight greater than the capacity (W=3), so nothing can be selected. Max profit = 0."
  ],
  "testCases": [
    "W = 10, profit[] = [60, 100, 120], weight[] = [1, 2, 3]",
    "W = 50, profit[] = [60, 100, 120], weight[] = [10, 20, 30]",
    "W = 7, profit[] = [10, 20, 30], weight[] = [1, 3, 4]",
    "W = 5, profit[] = [10, 40, 30, 50], weight[] = [5, 4, 6, 3]",
    "W = 0, profit[] = [10, 20, 30], weight[] = [1, 2, 3]",
    "W = 3, profit[] = [10, 20, 30], weight[] = [2, 2, 2]",
    "W = 100, profit[] = [1,2,3,4,5,6,7,8,9,10], weight[] = [1,2,3,4,5,6,7,8,9,10]",
    "W = 8, profit[] = [5, 10, 15, 7], weight[] = [3, 5, 6, 4]",
    "W = 1000, profit[] = [1000000], weight[] = [1000]",
    "W = 1000, profit[] = [1000000, 999999, 888888], weight[] = [1000, 1001, 1002]"
  ],
  "expectedOutputs": [
    "280",
    "220",
    "50",
    "90",
    "0",
    "40",
    "55",
    "20",
    "1000000",
    "1000000"
  ],
  "constraints": "1 <= n <= 1000; 1 <= weight[i], W <= 10000; 0 <= profit[i] <= 10^6",
  "expectedTimeComplexity": "O(n*W)",
  "expectedSpaceComplexity": "O(n*W) or O(W) with space optimization"
},

{
  "topic": "dynamic programming",
  "level": "medium",
  "title": "Longest Common Subsequence (LCS)",
  "question": "Given two strings s1 and s2, return the length of their Longest Common Subsequence (LCS). A subsequence is a sequence derived by deleting 0 or more characters from a string without changing the order of the remaining characters. If no common subsequence exists, return 0.",
  "sampleInputs": [
    "s1 = \"ABC\", s2 = \"ACD\"",
    "s1 = \"AGGTAB\", s2 = \"GXTXAYB\"",
    "s1 = \"ABC\", s2 = \"CBA\""
  ],
  "sampleOutputs": [
    "2",
    "4",
    "1"
  ],
  "explanations": [
    "The common subsequence is \"AC\" with length 2.",
    "The longest common subsequence is \"GTAB\" with length 4.",
    "Common subsequences of length 1 include \"A\", \"B\", and \"C\". So, max length = 1."
  ],
  "testCases": [
    "s1 = \"ABCDGH\", s2 = \"AEDFHR\"",
    "s1 = \"ABC\", s2 = \"DEF\"",
    "s1 = \"AXY\", s2 = \"ADXCPY\"",
    "s1 = \"abcde\", s2 = \"ace\"",
    "s1 = \"abcdef\", s2 = \"fbdamn\"",
    "s1 = \"aaaa\", s2 = \"aa\"",
    "s1 = \"abc\", s2 = \"abc\"",
    "s1 = \"\", s2 = \"abc\"",
    "s1 = \"abcdefghij\", s2 = \"cdgi\"",
    "s1 = \"abcdefghij\", s2 = \"klmnopqrst\""
  ],
  "expectedOutputs": [
    "3",
    "0",
    "3",
    "3",
    "2",
    "2",
    "3",
    "0",
    "4",
    "0"
  ],
  "constraints": "1 <= |s1|, |s2| <= 1000; s1 and s2 consist of lowercase or uppercase English letters",
  "expectedTimeComplexity": "O(n * m), where n and m are the lengths of the strings",
  "expectedSpaceComplexity": "O(n * m) or O(min(n, m)) with space optimization"
},

{
  "topic": "dynamic programming",
  "level": "medium",
  "title": "Edit Distance",
  "question": "Given two strings s1 and s2, find the minimum number of operations required to convert s1 into s2. The allowed operations are: \n1. Insert a character \n2. Remove a character \n3. Replace a character \nAll operations have equal cost.",
  "sampleInputs": [
    "s1 = \"geek\", s2 = \"gesek\"",
    "s1 = \"gfg\", s2 = \"gfg\"",
    "s1 = \"abcd\", s2 = \"bcfe\""
  ],
  "sampleOutputs": [
    "1",
    "0",
    "3"
  ],
  "explanations": [
    "Insert 's' between the two 'e's in 'geek' to make 'gesek'.",
    "Strings are already the same, so no operation is needed.",
    "Remove 'a', replace 'd' with 'f', and insert 'e' at the end."
  ],
  "testCases": [
    "s1 = \"horse\", s2 = \"ros\"",
    "s1 = \"intention\", s2 = \"execution\"",
    "s1 = \"\", s2 = \"abc\"",
    "s1 = \"abc\", s2 = \"\"",
    "s1 = \"sunday\", s2 = \"saturday\"",
    "s1 = \"a\", s2 = \"b\"",
    "s1 = \"abcdef\", s2 = \"azced\"",
    "s1 = \"aabbcc\", s2 = \"abcabc\"",
    "s1 = \"abcde\", s2 = \"abfde\"",
    "s1 = \"kitten\", s2 = \"sitting\""
  ],
  "expectedOutputs": [
    "3",
    "5",
    "3",
    "3",
    "3",
    "1",
    "3",
    "3",
    "1",
    "3"
  ],
  "constraints": "1 <= |s1|, |s2| <= 1000; s1 and s2 consist of lowercase English letters",
  "expectedTimeComplexity": "O(n * m), where n and m are the lengths of s1 and s2",
  "expectedSpaceComplexity": "O(n * m) or O(min(n, m)) with optimization"
},

{
  "topic": "dynamic programming",
  "level": "medium",
  "title": "Longest Increasing Subsequence (LIS)",
  "question": "Given an array arr[] of size n, return the length of the Longest Increasing Subsequence (LIS). A subsequence is a sequence that can be derived from the array by deleting some or no elements without changing the order of the remaining elements. The LIS is the longest such subsequence where elements are in strictly increasing order.",
  "sampleInputs": [
    "3 10 2 1 20",
    "30 20 10",
    "2 2 2",
    "10 20 35 80"
  ],
  "sampleOutputs": [
    "3",
    "1",
    "1",
    "4"
  ],
  "explanations": [
    "The LIS is [3, 10, 20] of length 3.",
    "Each element alone is an LIS, max length is 1.",
    "All elements are equal, so the longest strictly increasing subsequence is of length 1.",
    "The entire array is strictly increasing, so LIS length is 4."
  ],
  "testCases": [
    "50 3 10 7 40 80",
    "10 22 9 33 21 50 41 60",
    "1 2 3 4 5",
    "5 4 3 2 1",
    "5 1 6 2 7 3 8",
    "10 10 10 10",
    "1 3 2 3 4 8 7",
    "1",
    "1000000 999999 999998",
    "1 101 2 102 3 103 4 104"
  ],
  "expectedOutputs": [
    "4",
    "5",
    "5",
    "1",
    "5",
    "1",
    "5",
    "1",
    "1",
    "8"
  ],
  "constraints": "1 <= n <= 1000; -10^4 <= arr[i] <= 10^4",
  "expectedTimeComplexity": "O(n^2) or O(n log n) with binary search",
  "expectedSpaceComplexity": "O(n)"
},

{
  "topic": "dynamic programming",
  "level": "medium",
  "title": "Coin Change – Count Ways to Make Sum",
  "question": "Given an integer array coins[] representing different denominations and an integer sum, return the number of combinations to make up that sum. You may use each coin denomination an unlimited number of times.",
  "sampleInputs": [
    "sum = 4, coins = [1, 2, 3]",
    "sum = 10, coins = [2, 5, 3, 6]",
    "sum = 10, coins = [10]",
    "sum = 5, coins = [4]"
  ],
  "sampleOutputs": [
    "4",
    "5",
    "1",
    "0"
  ],
  "explanations": [
    "The 4 combinations are [1,1,1,1], [1,1,2], [2,2], and [1,3].",
    "The 5 combinations are [2,2,2,2,2], [2,2,3,3], [2,2,6], [2,3,5], [5,5].",
    "Only one way: pick one coin of 10.",
    "There is no way to reach 5 using only coins of 4."
  ],
  "testCases": [
    "sum = 0, coins = [1, 2, 3]",
    "sum = 5, coins = [1, 2]",
    "sum = 7, coins = [2, 3, 5]",
    "sum = 3, coins = [2]",
    "sum = 100, coins = [1, 5, 10, 25, 50]",
    "sum = 11, coins = [2, 5, 3, 6]",
    "sum = 8, coins = [1, 4, 6]",
    "sum = 20, coins = [2, 3, 7]",
    "sum = 1, coins = [2, 3, 5]",
    "sum = 50, coins = [10, 20, 30]"
  ],
  "expectedOutputs": [
    "1",
    "3",
    "2",
    "0",
    "341",
    "6",
    "4",
    "6",
    "0",
    "4"
  ],
  "constraints": "1 <= sum <= 10^3; 1 <= coins.length <= 100; 1 <= coins[i] <= sum",
  "expectedTimeComplexity": "O(sum * n), where n is the number of coins",
  "expectedSpaceComplexity": "O(sum)"
},

{
  "topic": "dynamic programming",
  "level": "medium",
  "title": "Rod Cutting",
  "question": "Given a rod of length n inches and an array price[], where price[i] represents the value of a rod piece of length i+1 (1-indexed), return the maximum value obtainable by cutting the rod and selling the pieces.",
  "sampleInputs": [
    "price = [1, 5, 8, 9, 10, 17, 17, 20]",
    "price = [3, 5, 8, 9, 10, 17, 17, 20]",
    "price = [3]"
  ],
  "sampleOutputs": [
    "22",
    "24",
    "3"
  ],
  "explanations": [
    "Best cut is lengths 2 and 6: 5 + 17 = 22.",
    "Best cut is eight pieces of length 1: 8 * 3 = 24.",
    "Only one piece can be taken of full length 1: price[0] = 3."
  ],
  "testCases": [
    "price = [2, 5, 7, 8]",
    "price = [1, 5, 8, 9, 10]",
    "price = [5, 6, 8, 9, 10, 17, 17, 20]",
    "price = [1, 2, 3, 4, 5]",
    "price = [1, 2, 3, 4, 5, 6]",
    "price = [10, 20, 30, 40, 50]",
    "price = [2, 3, 7, 8, 9]",
    "price = [5, 8, 9, 10, 17, 17, 20]",
    "price = [1]",
    "price = [10, 9, 8, 7, 6, 5, 4, 3]"
  ],
  "expectedOutputs": [
    "10",
    "13",
    "22",
    "5",
    "6",
    "50",
    "12",
    "24",
    "1",
    "80"
  ],
  "constraints": "1 <= n <= 1000; 1 <= price[i] <= 10^4",
  "expectedTimeComplexity": "O(n^2)",
  "expectedSpaceComplexity": "O(n)"
},

{
  "topic": "dynamic programming",
  "level": "medium",
  "title": "Word Break",
  "question": "Given a string s and a dictionary of valid words, check if the string can be segmented into a sequence of valid dictionary words.",
  "sampleInputs": [
    "s = \"ilike\", dictionary = [\"i\", \"like\", \"gfg\"]",
    "s = \"ilikegfg\", dictionary = [\"i\", \"like\", \"man\", \"india\", \"gfg\"]",
    "s = \"ilikemangoes\", dictionary = [\"i\", \"like\", \"gfg\"]"
  ],
  "sampleOutputs": [
    "true",
    "true",
    "false"
  ],
  "explanations": [
    "The string can be segmented as 'i like'.",
    "The string can be segmented as 'i like gfg'.",
    "The string cannot be segmented using the given dictionary."
  ],
  "testCases": [
    "s = \"catsanddog\", dictionary = [\"cat\", \"cats\", \"and\", \"sand\", \"dog\"]",
    "s = \"leetcode\", dictionary = [\"leet\", \"code\"]",
    "s = \"applepenapple\", dictionary = [\"apple\", \"pen\"]",
    "s = \"catsandog\", dictionary = [\"cats\", \"dog\", \"sand\", \"and\", \"cat\"]",
    "s = \"pineapplepenapple\", dictionary = [\"apple\", \"pen\", \"applepen\", \"pine\", \"pineapple\"]",
    "s = \"aaaaaaa\", dictionary = [\"aaaa\", \"aaa\"]",
    "s = \"cars\", dictionary = [\"car\", \"ca\", \"rs\"]",
    "s = \"\", dictionary = [\"a\", \"b\"]",
    "s = \"word\", dictionary = []",
    "s = \"ilikecoding\", dictionary = [\"i\", \"like\", \"coding\", \"code\"]"
  ],
  "expectedOutputs": [
    "true",
    "true",
    "true",
    "false",
    "true",
    "true",
    "true",
    "true",
    "false",
    "true"
  ],
  "constraints": "1 <= s.length <= 1000; 1 <= dictionary.length <= 1000; 1 <= dictionary[i].length <= 100",
  "expectedTimeComplexity": "O(n^2)",
  "expectedSpaceComplexity": "O(n)"
},

{
  "topic": "dynamic programming",
  "level": "medium",
  "title": "Longest Palindromic Substring",
  "question": "Given a string s, find the longest substring which is a palindrome. If there are multiple answers, return the one that appears first.",
  "sampleInputs": [
    "forgeeksskeegfor",
    "Geeks",
    "abc",
    ""
  ],
  "sampleOutputs": [
    "geeksskeeg",
    "ee",
    "a",
    ""
  ],
  "explanations": [
    "The longest palindromic substring is 'geeksskeeg'.",
    "The longest palindromic substring is 'ee'.",
    "The longest palindromic substrings are 'a', 'b', or 'c'. We return 'a' as it appears first.",
    "The string is empty, so the result is also an empty string."
  ],
  "testCases": [
    "banana",
    "cbbd",
    "racecar",
    "a",
    "abcdedcba",
    "noonabbad",
    "aaaa",
    "abcba",
    "abcddcbaxyz",
    "abacdfgdcaba"
  ],
  "expectedOutputs": [
    "anana",
    "bb",
    "racecar",
    "a",
    "abcdedcba",
    "abba",
    "aaaa",
    "abcba",
    "abcddcba",
    "aba"
  ],
  "constraints": "0 <= s.length <= 1000; s consists of printable ASCII characters",
  "expectedTimeComplexity": "O(n^2)",
  "expectedSpaceComplexity": "O(n^2)"
},

{
  "topic": "dynamic programming",
  "level": "medium",
  "title": "Total Decoding Messages",
  "question": "Given a digit string where each digit maps to a character (1 -> A, 2 -> B, ..., 26 -> Z), count the number of valid decodings. A decoding is valid only if all its parts represent numbers between 1 and 26 and do not start with 0.",
  "sampleInputs": [
    "121",
    "1234",
    "123",
    "230",
    "10"
  ],
  "sampleOutputs": [
    "3",
    "3",
    "3",
    "0",
    "1"
  ],
  "explanations": [
    "Valid decodings: ABA, AU, LA",
    "Valid decodings: ABCD, AWD, LCD",
    "Valid decodings: ABC, AW, LC",
    "Invalid due to 0 and 30 (> 26)",
    "Valid decoding: J (10)"
  ],
  "testCases": [
    "111",
    "101",
    "226",
    "0",
    "27",
    "100",
    "11106",
    "123123",
    "2611055971756562",
    "2101"
  ],
  "expectedOutputs": [
    "3",   // AAA, AK, KA
    "1",   // JA
    "3",   // BBF, BZ, VF
    "0",   // No valid decoding
    "1",   // BG
    "0",   // No valid decoding
    "2",   // AAJF, KJF
    "9",   // Multiple valid combinations
    "4",   // Complex valid sequence
    "1"    // Only one valid decoding: UAA
  ],
  "constraints": "1 <= s.length <= 100; s consists of digits only (0-9)",
  "expectedTimeComplexity": "O(n)",
  "expectedSpaceComplexity": "O(n)"
},

{
  "topic": "dynamic programming",
  "level": "medium",
  "title": "Egg Dropping Puzzle",
  "question": "You are given n identical eggs and a k-floored building. Find the minimum number of moves required to determine the highest floor from which an egg can be dropped without breaking.",
  "sampleInputs": [
    "2, 36",
    "1, 36",
    "2, 10",
    "3, 50",
    "3, 100"
  ],
  "sampleOutputs": [
    "8",
    "36",
    "4",
    "6",
    "9"
  ],
  "explanations": [
    "For 2 eggs and 36 floors, the minimum number of moves required is 8, using a binary search-like strategy for the floors.",
    "With only 1 egg, you must test each floor from 1 to 36 sequentially, requiring 36 moves in the worst case.",
    "For 2 eggs and 10 floors, 4 moves are required to determine the highest non-breaking floor.",
    "With 3 eggs and 50 floors, 6 moves are required for an optimal strategy.",
    "For 3 eggs and 100 floors, the optimal strategy requires 9 moves to determine the floor."
  ],
  "testCases": [
    "2, 36",
    "1, 36",
    "2, 10",
    "3, 50",
    "3, 100",
    "2, 1000",
    "5, 200",
    "10, 1000",
    "4, 100",
    "6, 500"
  ],
  "expectedOutputs": [
    "8",
    "36",
    "4",
    "6",
    "9",
    "14",
    "8",
    "14",
    "7",
    "11"
  ],
  "constraints": "1 <= n <= 100; 1 <= k <= 1000",
  "expectedTimeComplexity": "O(n * k)",
  "expectedSpaceComplexity": "O(n * k)"
},

{
  "topic": "dynamic programming",
  "level": "hard",
  "title": "Count Digit Groupings of a Number",
  "question": "Given a string str consisting of digits, divide it into sub-groups such that the sum of digits in each sub-group is less than or equal to the sum of the digits of the sub-group immediately right to it. Return the total number of valid groupings.",
  "sampleInputs": [
    "str = 1119",
    "str = 12"
  ],
  "sampleOutputs": [
    "7",
    "2"
  ],
  "explanations": [
    "Valid groupings: {\"1\",\"11\",\"9\"}, {\"1\",\"119\"}, {\"1\",\"1\",\"19\"}, {\"1\",\"1\",\"1\",\"9\"}, {\"11\",\"19\"}, {\"111\",\"9\"}, {\"1119\"}",
    "Valid groupings: {\"1\",\"2\"}, {\"12\"}"
  ],
  "testCases": [
    "str = 1119\n",
    "str = 12\n",
    "str = 123\n",
    "str = 111\n",
    "str = 321\n",
    "str = 112358\n",
    "str = 999\n",
    "str = 10\n",
    "str = 2222\n",
    "str = 54321\n"
  ],
  "expectedOutputs": [
    "7",
    "2",
    "4",
    "4",
    "1",
    "22",
    "7",
    "1",
    "5",
    "1"
  ],
  "constraints": "1 ≤ N ≤ 100; str[i] ∈ {0, 1, 2, 3, 4, 5, 6, 7, 8, 9}",
  "expectedTimeComplexity": "O(N^3)",
  "expectedSpaceComplexity": "O(N^2)"
},

{
  "topic": "dynamic programming",
  "level": "hard",
  "title": "Maximum Difference of Zeros and Ones in Binary String",
  "question": "Given a binary string S consisting of 0s and 1s, find the maximum difference (number of 0s – number of 1s) in any substring. Return -1 if all characters are 1.",
  "sampleInputs": [
    "S = 11000010001",
    "S = 111111"
  ],
  "sampleOutputs": [
    "6",
    "-1"
  ],
  "explanations": [
    "From index 2 to 9, there are 7 0s and 1 1 → difference = 6.",
    "All characters are 1 → no zeros → answer is -1."
  ],
  "testCases": [
    "S = 11000010001\n",
    "S = 111111\n",
    "S = 000\n",
    "S = 101010\n",
    "S = 000111000\n",
    "S = 100001\n",
    "S = 0111100000\n",
    "S = 1\n",
    "S = 0\n",
    "S = 001100"
  ],
  "expectedOutputs": [
    "6",
    "-1",
    "3",
    "1",
    "3",
    "4",
    "4",
    "-1",
    "1",
    "2"
  ],
  "constraints": "1 ≤ |S| ≤ 10^5; S contains 0s and 1s only",
  "expectedTimeComplexity": "O(|S|)",
  "expectedSpaceComplexity": "O(1)"
},

{
  "topic": "dynamic programming",
  "level": "hard",
  "title": "Array Partition",
  "question": "Given an array of N integers, determine if it is possible to partition the array into groups such that:\n\n1. Each element belongs to exactly one group.\n2. Each group has at least K elements.\n3. The absolute difference between any pair of elements in the same group does not exceed M.",
  "sampleInputs": [
    "N = 5, K = 2, M = 3, A = 8 3 9 1 2"
  ],
  "sampleOutputs": [
    "YES"
  ],
  "explanations": [
    "We can partition as {8,9} and {3,1,2}. All groups have at least 2 elements, and max diff within each group is ≤ 3."
  ],
  "testCases": [
    "N = 5, K = 2, M = 3, A = 8 3 9 1 2\n",
    "N = 4, K = 2, M = 1, A = 1 2 3 4\n",
    "N = 6, K = 3, M = 5, A = 1 10 15 20 25 30\n",
    "N = 3, K = 2, M = 2, A = 1 2 5\n",
    "N = 5, K = 2, M = 2, A = 1 2 3 10 11\n",
    "N = 6, K = 3, M = 0, A = 1 1 1 2 2 2\n",
    "N = 5, K = 2, M = 10, A = 100 90 80 70 60\n",
    "N = 3, K = 1, M = 0, A = 5 5 5\n",
    "N = 2, K = 2, M = 0, A = 1 2\n",
    "N = 8, K = 2, M = 4, A = 2 4 6 8 10 12 14 16"
  ],
  "expectedOutputs": [
    "YES",
    "NO",
    "NO",
    "NO",
    "YES",
    "YES",
    "YES",
    "YES",
    "NO",
    "YES"
  ],
  "constraints": "1 ≤ N ≤ 2×10^5; 1 ≤ K ≤ N; 1 ≤ M ≤ 10^9; 1 ≤ A[i] ≤ 10^9",
  "expectedTimeComplexity": "O(N * Log(N))",
  "expectedSpaceComplexity": "O(N)"
},

{
  "topic": "dynamic programming",
  "level": "hard",
  "title": "Palindromic Partitioning",
  "question": "Given a string s, determine the fewest cuts needed for palindrome partitioning such that every substring in the partition is a palindrome.",
  "sampleInputs": [
    "s = geek",
    "s = aaaa",
    "s = ababbbabbababa"
  ],
  "sampleOutputs": [
    "2",
    "0",
    "3"
  ],
  "explanations": [
    "Minimum 2 cuts needed: g | ee | k",
    "No cuts needed as entire string is a palindrome",
    "Minimum 3 cuts: aba | bb | babbab | aba"
  ],
  "testCases": [
    "s = geek\n",
    "s = aaaa\n",
    "s = ababbbabbababa\n",
    "s = racecar\n",
    "s = abcd\n",
    "s = abccbc\n",
    "s = banana\n",
    "s = abcba\n",
    "s = aaabbb\n",
    "s = abcdef"
  ],
  "expectedOutputs": [
    "2",
    "0",
    "3",
    "0",
    "3",
    "1",
    "1",
    "0",
    "1",
    "5"
  ],
  "constraints": "1 ≤ |s| ≤ 10^3; s contains only lowercase letters",
  "expectedTimeComplexity": "O(n^2)",
  "expectedSpaceComplexity": "O(n^2)"
},

{
  "topic": "dynamic programming",
  "level": "hard",
  "title": "The Painter's Partition Problem-II",
  "question": "Dilpreet wants to paint his dog's home that has n boards with different lengths. He hired k painters and each painter can only paint continuous boards. Return the minimum time required to paint all boards if all painters start together.",
  "sampleInputs": [
    "arr = 5 10 30 20 15, k = 3",
    "arr = 10 20 30 40, k = 2",
    "arr = 100 200 300 400, k = 1"
  ],
  "sampleOutputs": [
    "35",
    "60",
    "1000"
  ],
  "explanations": [
    "Painter 1: [5,10], Painter 2: [30], Painter 3: [20,15] → max time = 35",
    "Painter 1: [10,20,30], Painter 2: [40] → max time = 60",
    "Only one painter must paint everything → 1000"
  ],
  "testCases": [
    "arr = 5 10 30 20 15, k = 3\n",
    "arr = 10 20 30 40, k = 2\n",
    "arr = 100 200 300 400, k = 1\n",
    "arr = 10 10 10 10, k = 2\n",
    "arr = 10 20 30 40 50, k = 2\n",
    "arr = 10 20 30, k = 3\n",
    "arr = 10 20 30, k = 1\n",
    "arr = 1 1 1 1 1 1, k = 3\n",
    "arr = 1 2 3 4 5, k = 5\n",
    "arr = 1 2 3 4 5, k = 1"
  ],
  "expectedOutputs": [
    "35",
    "60",
    "1000",
    "20",
    "90",
    "30",
    "60",
    "2",
    "5",
    "15"
  ],
  "constraints": "1 ≤ arr.size() ≤ 10^5; 1 ≤ arr[i] ≤ 10^5; 1 ≤ k ≤ 10^5",
  "expectedTimeComplexity": "O(N * log(sum(arr[])))",
  "expectedSpaceComplexity": "O(1)"
},

{
  "topic": "dynamic programming",
  "level": "hard",
  "title": "Stock Buy and Sell – Max K Transactions Allowed",
  "question": "You are given an array prices[] representing stock prices on different days and a positive integer k. Find the maximum profit you can make with at most k transactions. A transaction consists of buying and selling a stock, and a new transaction can only start after the previous one is completed.",
  "sampleInputs": [
    "prices = 10 22 5 80, k = 2",
    "prices = 20 580 420 900, k = 3",
    "prices = 100 90 80 50 25, k = 1"
  ],
  "sampleOutputs": [
    "87",
    "1040",
    "0"
  ],
  "explanations": [
    "Transactions: Buy at 10, sell at 22 (Profit 12), Buy at 5, sell at 80 (Profit 75) → Total = 87",
    "Transactions: Buy at 20, sell at 580 (Profit 560), Buy at 420, sell at 900 (Profit 480) → Total = 1040",
    "No profitable transaction possible → 0"
  ],
  "testCases": [
    "prices = 10 22 5 80, k = 2\n",
    "prices = 20 580 420 900, k = 3\n",
    "prices = 100 90 80 50 25, k = 1\n",
    "prices = 1 2 3 4 5, k = 2\n",
    "prices = 5 4 3 2 1, k = 2\n",
    "prices = 3 2 6 5 0 3, k = 2\n",
    "prices = 2 4 1, k = 1\n",
    "prices = 2 4 1, k = 2\n",
    "prices = 6 1 3 2 4 7, k = 3\n",
    "prices = 3 3 5 0 0 3 1 4, k = 2"
  ],
  "expectedOutputs": [
    "87",
    "1040",
    "0",
    "4",
    "0",
    "7",
    "2",
    "3",
    "10",
    "6"
  ],
  "constraints": "1 ≤ prices.size() ≤ 10^3; 1 ≤ k ≤ 200; 1 ≤ prices[i] ≤ 10^3",
  "expectedTimeComplexity": "O(n * k)",
  "expectedSpaceComplexity": "O(k)"
},

{
  "topic": "dynamic programming",
  "level": "hard",
  "title": "Longest Zig-Zag Sub Sequence",
  "question": "Given an array nums of n positive integers, find the longest Zig-Zag subsequence such that elements are alternating in direction (nums[i-1] < nums[i] > nums[i+1] or nums[i-1] > nums[i] < nums[i+1]).",
  "sampleInputs": [
    "nums = 1 5 4",
    "nums = 1 17 5 10 13 15 10 5 16 8"
  ],
  "sampleOutputs": [
    "3",
    "7"
  ],
  "explanations": [
    "Entire sequence {1,5,4} is a Zig-Zag of length 3.",
    "One possible longest Zig-Zag subsequence: {1,17,10,13,10,16,8} → length 7"
  ],
  "testCases": [
    "nums = 1 5 4\n",
    "nums = 1 17 5 10 13 15 10 5 16 8\n",
    "nums = 1 2 3 4 5\n",
    "nums = 100 90 80 70\n",
    "nums = 10 20 10 20 10 20 10\n",
    "nums = 5 1 5 1 5 1 5\n",
    "nums = 1 7 4 9 2 5\n",
    "nums = 70 55 13 2 3 4 1 5 6 7\n",
    "nums = 10 10 10 10 10\n",
    "nums = 3 1 4 2 5 3 6"
  ],
  "expectedOutputs": [
    "3",
    "7",
    "2",
    "2",
    "7",
    "7",
    "6",
    "7",
    "1",
    "7"
  ],
  "constraints": "1 ≤ n ≤ 10^5",
  "expectedTimeComplexity": "O(n)",
  "expectedSpaceComplexity": "O(1)"
},

{
  "topic": "dynamic programming",
  "level": "hard",
  "title": "Matrix Chain Multiplication",
  "question": "Given an array arr[] representing dimensions of a sequence of matrices, where the ith matrix has dimensions (arr[i-1] x arr[i]), find the minimum number of scalar multiplications needed to multiply the chain of matrices.",
  "sampleInputs": [
    "arr = 2 1 3 4",
    "arr = 1 2 3 4 3",
    "arr = 3 4"
  ],
  "sampleOutputs": [
    "20",
    "30",
    "0"
  ],
  "explanations": [
    "((M1 x M2) x M3) requires 30 multiplications; (M1 x (M2 x M3)) requires 20 → minimum = 20",
    "((M1 x M2) x M3) x M4 requires 30 multiplications → minimum = 30",
    "Only one matrix → no multiplication needed → 0"
  ],
  "testCases": [
    "arr = 2 1 3 4\n",
    "arr = 1 2 3 4 3\n",
    "arr = 3 4\n",
    "arr = 5 4 6 2 7\n",
    "arr = 10 20 30\n",
    "arr = 40 20 30 10 30\n",
    "arr = 1 2 3\n",
    "arr = 10 100 5 50\n",
    "arr = 30 35 15 5 10 20 25\n",
    "arr = 5 10 3 12 5 50 6"
  ],
  "expectedOutputs": [
    "20",
    "30",
    "0",
    "124",
    "6000",
    "26000",
    "6",
    "7500",
    "15125",
    "2010"
  ],
  "constraints": "2 ≤ arr.size() ≤ 100; 1 ≤ arr[i] ≤ 200",
  "expectedTimeComplexity": "O(n^3)",
  "expectedSpaceComplexity": "O(n^2)"
},

{
  "topic": "dynamic programming",
  "level": "hard",
  "title": "Boolean Parenthesization",
  "question": "You are given a boolean expression s containing 'T' (true), 'F' (false), and operators '&' (AND), '|' (OR), '^' (XOR). Count the number of ways we can parenthesize the expression so that the final result evaluates to true.",
  "sampleInputs": [
    "s = T|T&F^T",
    "s = T^F|F"
  ],
  "sampleOutputs": [
    "4",
    "2"
  ],
  "explanations": [
    "4 ways: ((T|T)&(F^T)), (T|(T&(F^T))), (((T|T)&F)^T), (T|((T&F)^T))",
    "2 ways: ((T^F)|F) and (T^(F|F))"
  ],
  "testCases": [
    "s = T|T&F^T\n",
    "s = T^F|F\n",
    "s = T\n",
    "s = F\n",
    "s = T^T^T\n",
    "s = T&T|F\n",
    "s = T^F&T\n",
    "s = T|F&T^F\n",
    "s = F|T&T^F\n",
    "s = T^F^T^F^T"
  ],
  "expectedOutputs": [
    "4",
    "2",
    "1",
    "0",
    "0",
    "2",
    "1",
    "5",
    "5",
    "5"
  ],
  "constraints": "1 ≤ |s| ≤ 100",
  "expectedTimeComplexity": "O(n^3)",
  "expectedSpaceComplexity": "O(n^2)"
},

{
  "topic": "dynamic programming",
  "level": "hard",
  "title": "Minimum Sum Partition",
  "question": "Given an array arr[] containing non-negative integers, divide it into two subsets such that the absolute difference of their sums is minimized. Return the minimum possible difference.",
  "sampleInputs": [
    "arr = 1 6 11 5",
    "arr = 1 4",
    "arr = 1"
  ],
  "sampleOutputs": [
    "1",
    "3",
    "1"
  ],
  "explanations": [
    "Subset1 = {1, 5, 6} → sum = 12, Subset2 = {11} → sum = 11 → diff = 1",
    "Subset1 = {1} → sum = 1, Subset2 = {4} → sum = 4 → diff = 3",
    "Subset1 = {1}, Subset2 = {} → diff = 1"
  ],
  "testCases": [
    "arr = 1 6 11 5\n",
    "arr = 1 4\n",
    "arr = 1\n",
    "arr = 2 3 5\n",
    "arr = 10 20 15 5 25\n",
    "arr = 1 2 3 4 5\n",
    "arr = 3 1 4 2 2 1\n",
    "arr = 40 10 20 15\n",
    "arr = 8 6 5\n",
    "arr = 1 1 1 1 1"
  ],
  "expectedOutputs": [
    "1",
    "3",
    "1",
    "0",
    "5",
    "1",
    "1",
    "5",
    "1",
    "1"
  ],
  "constraints": "1 ≤ arr.size() × |sum of array elements| ≤ 10^5; 1 ≤ arr[i] ≤ 10^5",
  "expectedTimeComplexity": "O(n × sum)",
  "expectedSpaceComplexity": "O(n × sum)"
},

{
  "topic": "graphs",
  "level": "easy",
  "title": "Print Adjacency List for a Directed Graph",
  "question": "Given the number of vertices and a list of directed edges in a graph, print the adjacency list representing the graph.",
  "sampleInputs": [
    "3\n3\n0 1\n1 2\n2 0",
    "4\n5\n0 1\n1 2\n1 3\n2 3\n3 0"
  ],
  "sampleOutputs": [
    "0 -> 1\n1 -> 2\n2 -> 0",
    "0 -> 1\n1 -> 2 3\n2 -> 3\n3 -> 0"
  ],
  "explanations": [
    "Vertex 0 has an edge to 1, 1 has an edge to 2, and 2 has an edge to 0.",
    "Vertex 0 -> 1, 1 -> 2, 3; 2 -> 3; 3 -> 0. All edges are represented."
  ],
  "testCases": [
    "3\n3\n0 1\n1 2\n2 0",
    "4\n5\n0 1\n1 2\n1 3\n2 3\n3 0",
    "5\n4\n0 1\n1 2\n2 3\n3 4",
    "6\n0",
    "2\n1\n0 1",
    "3\n2\n0 2\n1 2",
    "4\n4\n0 1\n1 2\n2 3\n3 1",
    "5\n5\n0 1\n0 2\n0 3\n0 4\n1 3",
    "3\n3\n0 1\n1 1\n1 2",
    "7\n6\n0 1\n1 2\n2 3\n3 4\n4 5\n5 6"
  ],
  "expectedOutputs": [
    "0 -> 1\n1 -> 2\n2 -> 0",
    "0 -> 1\n1 -> 2 3\n2 -> 3\n3 -> 0",
    "0 -> 1\n1 -> 2\n2 -> 3\n3 -> 4\n4 ->",
    "0 ->\n1 ->\n2 ->\n3 ->\n4 ->\n5 ->",
    "0 -> 1\n1 ->",
    "0 -> 2\n1 ->\n2 ->",
    "0 -> 1\n1 -> 2\n2 -> 3\n3 -> 1",
    "0 -> 1 2 3 4\n1 -> 3\n2 ->\n3 ->\n4 ->",
    "0 -> 1\n1 -> 1 2\n2 ->",
    "0 -> 1\n1 -> 2\n2 -> 3\n3 -> 4\n4 -> 5\n5 -> 6\n6 ->"
  ],
  "constraints": "1 <= V <= 1000; 0 <= E <= V*(V-1); 0 <= from, to < V",
  "expectedTimeComplexity": "O(V + E)",
  "expectedSpaceComplexity": "O(V + E)"
},

{
  "topic": "graphs",
  "level": "easy",
  "title": "Breadth First Search (BFS) for a Graph",
  "question": "Given an undirected graph represented by an adjacency list, perform a Breadth First Search (BFS) starting from vertex 0 and return the BFS traversal as a list of vertices.",
  "sampleInputs": [
    "5\n0 1 2\n1 0 2 3\n2 0 1 4\n3 1 4\n4 2 3",
    "5\n0 1 2\n1 0 2\n2 0 1 3 4\n3 2\n4 2"
  ],
  "sampleOutputs": [
    "0 1 2 3 4",
    "0 1 2 3 4"
  ],
  "explanations": [
    "Start BFS from 0 → [0]; Visit 1 → [0,1]; Visit 2 → [0,1,2]; Visit 3 from 1 → [0,1,2,3]; Visit 4 from 2 → [0,1,2,3,4].",
    "Start BFS from 0 → [0]; Visit 1 and 2 → [0,1,2]; Then visit 3 and 4 from 2 → [0,1,2,3,4]."
  ],
  "testCases": [
    "5\n0 1 2\n1 0 2 3\n2 0 1 4\n3 1 4\n4 2 3",
    "5\n0 1 2\n1 0 2\n2 0 1 3 4\n3 2\n4 2",
    "4\n0 1\n1 0 2\n2 1 3\n3 2",
    "1\n0",
    "2\n0 1\n1 0",
    "6\n0 1 2\n1 0 3\n2 0 4\n3 1 5\n4 2\n5 3",
    "3\n0 1\n1 0\n2",
    "7\n0 1 2\n1 0 3 4\n2 0 5 6\n3 1\n4 1\n5 2\n6 2",
    "5\n0 1 4\n1 0 2 3\n2 1\n3 1\n4 0",
    "3\n0\n1 2\n2 1"
  ],
  "expectedOutputs": [
    "0 1 2 3 4",
    "0 1 2 3 4",
    "0 1 2 3",
    "0",
    "0 1",
    "0 1 2 3 4 5",
    "0 1",
    "0 1 2 3 4 5 6",
    "0 1 4 2 3",
    "0"
  ],
  "constraints": "1 <= V <= 1000; 0 <= E <= V*(V-1)/2; The graph is connected and undirected.",
  "expectedTimeComplexity": "O(V + E)",
  "expectedSpaceComplexity": "O(V)"
},

{
  "topic": "graphs",
  "level": "easy",
  "title": "Depth First Search (DFS) for a Graph",
  "question": "Given an undirected graph represented by an adjacency list, perform a Depth First Search (DFS) starting from vertex 0 and return the DFS traversal as a list of vertices. Pick adjacent vertices in the order of their appearance in the list.",
  "sampleInputs": [
    "5\n0 1 2\n1 0 2\n2 0 1 3 4\n3 2\n4 2",
    "5\n0 2 3 1\n1 0\n2 0 4\n3 0\n4 2"
  ],
  "sampleOutputs": [
    "0 1 2 3 4",
    "0 2 4 3 1"
  ],
  "explanations": [
    "Start at 0 → Visit 1 → Visit 2 → Visit 3 → Backtrack → Visit 4 → Final: [0 1 2 3 4]",
    "Start at 0 → Visit 2 → Visit 4 → Backtrack → Visit 3 → Backtrack → Visit 1 → Final: [0 2 4 3 1]"
  ],
  "testCases": [
    "5\n0 1 2\n1 0 2\n2 0 1 3 4\n3 2\n4 2",
    "5\n0 2 3 1\n1 0\n2 0 4\n3 0\n4 2",
    "4\n0 1\n1 0 2\n2 1 3\n3 2",
    "1\n0",
    "2\n0 1\n1 0",
    "6\n0 1 2\n1 0 3\n2 0 4\n3 1 5\n4 2\n5 3",
    "3\n0 1\n1 0\n2",
    "7\n0 1 2\n1 0 3 4\n2 0 5 6\n3 1\n4 1\n5 2\n6 2",
    "5\n0 1 4\n1 0 2 3\n2 1\n3 1\n4 0",
    "3\n0\n1 2\n2 1"
  ],
  "expectedOutputs": [
    "0 1 2 3 4",
    "0 2 4 3 1",
    "0 1 2 3",
    "0",
    "0 1",
    "0 1 3 5 2 4",
    "0 1",
    "0 1 3 4 2 5 6",
    "0 1 2 3 4",
    "0"
  ],
  "constraints": "1 <= V <= 1000; 0 <= E <= V*(V-1)/2; The graph is connected and undirected.",
  "expectedTimeComplexity": "O(V + E)",
  "expectedSpaceComplexity": "O(V)"
},

{
  "topic": "graphs",
  "level": "easy",
  "title": "Transitive Closure of a Graph using Floyd-Warshall Algorithm",
  "question": "Given a directed graph represented as an adjacency matrix, compute the transitive closure matrix using the Floyd-Warshall algorithm. The transitive closure matrix shows whether vertex j is reachable from vertex i (1 if reachable, 0 otherwise).",
  "sampleInputs": [
    "4\n0 1 1 0\n0 0 1 0\n1 0 0 1\n0 0 0 0",
    "3\n0 1 0\n0 0 1\n0 0 0"
  ],
  "sampleOutputs": [
    "1 1 1 1\n1 1 1 1\n1 1 1 1\n0 0 0 1",
    "1 1 1\n0 1 1\n0 0 1"
  ],
  "explanations": [
    "All vertices are reachable from each other except from vertex 3, which has no outgoing edge.",
    "There is a path from 0→1→2, so 0 can reach 2. Vertex 2 cannot reach any other vertex."
  ],
  "testCases": [
    "4\n0 1 1 0\n0 0 1 0\n1 0 0 1\n0 0 0 0",
    "3\n0 1 0\n0 0 1\n0 0 0",
    "2\n0 1\n0 0",
    "1\n0",
    "4\n0 0 0 0\n0 0 0 0\n0 0 0 0\n0 0 0 0",
    "4\n0 1 0 0\n0 0 1 0\n0 0 0 1\n0 0 0 0",
    "5\n0 1 0 0 0\n0 0 1 0 0\n0 0 0 1 0\n0 0 0 0 1\n0 0 0 0 0",
    "3\n0 1 1\n1 0 1\n1 1 0",
    "3\n0 0 0\n1 0 0\n1 1 0",
    "3\n1 1 0\n0 1 1\n0 0 1"
  ],
  "expectedOutputs": [
    "1 1 1 1\n1 1 1 1\n1 1 1 1\n0 0 0 1",
    "1 1 1\n0 1 1\n0 0 1",
    "1 1\n0 1",
    "1",
    "0 0 0 0\n0 0 0 0\n0 0 0 0\n0 0 0 0",
    "1 1 1 1\n0 1 1 1\n0 0 1 1\n0 0 0 1",
    "1 1 1 1 1\n0 1 1 1 1\n0 0 1 1 1\n0 0 0 1 1\n0 0 0 0 1",
    "1 1 1\n1 1 1\n1 1 1",
    "1 0 0\n1 1 0\n1 1 1",
    "1 1 1\n0 1 1\n0 0 1"
  ],
  "constraints": "1 <= V <= 100; The graph is represented by a square matrix of 0s and 1s.",
  "expectedTimeComplexity": "O(V^3)",
  "expectedSpaceComplexity": "O(V^2)"
},

{
  "topic": "graphs",
  "level": "easy",
  "title": "Introduction to Disjoint Set (Union-Find Algorithm)",
  "question": "Given a set of individuals and a list of friendship relations, implement Union-Find operations to group friends into disjoint sets. Also, process queries to check whether two individuals belong to the same set (i.e., are friends either directly or indirectly).",
  "sampleInputs": [
    "10\n6\n0 1\n1 3\n2 5\n2 8\n9 4\n6 9\n3\n0 3\n2 8\n0 5",
    "5\n3\n0 2\n1 3\n3 4\n2\n0 2\n1 4"
  ],
  "sampleOutputs": [
    "YES\nYES\nNO",
    "YES\nYES"
  ],
  "explanations": [
    "10 individuals: 0-9. Union operations create 4 groups: {0,1,3}, {2,5,8}, {4,6,9}, {7}. Queries confirm whether individuals are in the same group.",
    "5 individuals: After unions, we have groups {0,2} and {1,3,4}. Queries verify that individuals 0 and 2, and 1 and 4, are in the same group."
  ],
  "testCases": [
    "10\n6\n0 1\n1 3\n2 5\n2 8\n9 4\n6 9\n3\n0 3\n2 8\n0 5",
    "5\n3\n0 2\n1 3\n3 4\n2\n0 2\n1 4",
    "6\n4\n0 1\n2 3\n4 5\n1 2\n2\n0 3\n3 5",
    "7\n5\n0 1\n1 2\n3 4\n4 5\n5 6\n2\n0 6\n2 3",
    "4\n2\n0 1\n2 3\n2\n1 2\n0 1",
    "3\n0\n0",
    "1\n0\n0",
    "8\n7\n0 1\n1 2\n2 3\n3 4\n4 5\n5 6\n6 7\n3\n0 7\n1 5\n3 6",
    "6\n3\n0 1\n2 3\n4 5\n3\n0 2\n1 3\n4 5",
    "9\n4\n0 3\n1 4\n2 5\n6 8\n3\n0 4\n1 2\n6 8"
  ],
  "expectedOutputs": [
    "YES\nYES\nNO",
    "YES\nYES",
    "YES\nYES",
    "YES\nNO",
    "NO\nYES",
    "",
    "",
    "YES\nYES\nYES",
    "NO\nNO\nYES",
    "NO\nNO\nYES"
  ],
  "constraints": "1 <= number of individuals <= 1000; 0 <= person ID < number of individuals; Union and Find operations must be optimized using path compression and union by rank.",
  "expectedTimeComplexity": "O(α(n)) per operation, where α is the inverse Ackermann function",
  "expectedSpaceComplexity": "O(n)"
},

{
  "topic": "graphs",
  "level": "easy",
  "title": "Detect Cycle in Graph using DSU",
  "question": "Given an undirected graph with V vertices and E edges, use the Disjoint Set Union (DSU) data structure to determine whether the graph contains a cycle.",
  "sampleInputs": [
    "3 3\n0 1\n1 2\n2 0",
    "4 2\n0 1\n2 3"
  ],
  "sampleOutputs": [
    "Yes",
    "No"
  ],
  "explanations": [
    "The graph contains a cycle formed by the vertices 0 -> 1 -> 2 -> 0.",
    "There are no cycles in this graph. All edges connect separate components."
  ],
  "testCases": [
    "3 3\n0 1\n1 2\n2 0",
    "4 2\n0 1\n2 3",
    "5 4\n0 1\n1 2\n2 3\n3 4",
    "5 5\n0 1\n1 2\n2 3\n3 4\n4 0",
    "6 5\n0 1\n1 2\n2 3\n3 4\n4 5",
    "6 6\n0 1\n1 2\n2 3\n3 4\n4 5\n5 0",
    "7 6\n0 1\n1 2\n2 0\n3 4\n4 5\n5 6",
    "8 5\n0 1\n1 2\n2 3\n4 5\n6 7",
    "3 1\n0 1",
    "2 1\n0 1"
  ],
  "expectedOutputs": [
    "Yes",
    "No",
    "No",
    "Yes",
    "No",
    "Yes",
    "Yes",
    "No",
    "No",
    "No"
  ],
  "constraints": "1 <= V <= 1000; 0 <= E <= V*(V-1)/2; 0 <= u, v < V",
  "expectedTimeComplexity": "O(E * α(V))",
  "expectedSpaceComplexity": "O(V)"
},

{
  "topic": "graphs",
  "level": "medium",
  "title": "Connected Components in an Undirected Graph",
  "question": "Given an undirected graph, return all the connected components as a list of lists, where each list represents one connected component. Vertices are numbered from 0 to V-1.",
  "sampleInputs": [
    "[[1, 2], [0, 2], [0, 1], [4], [3]]",
    "[[1], [0], [3], [2], []]",
    "[[1], [0, 2], [1, 3], [2], [5], [4]]"
  ],
  "sampleOutputs": [
    "[[0, 1, 2], [3, 4]]",
    "[[0, 1], [2, 3], [4]]",
    "[[0, 1, 2, 3], [4, 5]]"
  ],
  "explanations": [
    "There are 2 connected components: {0,1,2} and {3,4}.",
    "There are 3 connected components: {0,1}, {2,3}, and {4}.",
    "There are 2 connected components: {0,1,2,3} and {4,5}."
  ],
  "testCases": [
    "[[1, 2], [0, 2], [0, 1], [4], [3]]\n",
    "[[1], [0], [3], [2], []]\n",
    "[[1], [0, 2], [1, 3], [2], [5], [4]]\n",
    "[[1], [0], [3], [2], [5], [4], [7], [6]]\n",
    "[[1, 3], [0], [4, 5], [0], [2], [2], []]\n",
    "[[1, 2], [0, 2], [0, 1], [4], [3], [6], [5], [8], [7]]\n",
    "[[1], [0, 2, 3], [1], [1, 4], [3], [], [], []]\n",
    "[[], [], [], [], [], [], [], [], []]\n",
    "[[1], [2], [3], [0]]\n",
    "[[1], [2], [3], [4], [5], [6], [7], [8], [9], [0]]\n"
  ],
  "expectedOutputs": [
    "[[0,1,2],[3,4]]",
    "[[0,1],[2,3],[4]]",
    "[[0,1,2,3],[4,5]]",
    "[[0,1],[2,3],[4,5],[6,7]]",
    "[[0,1,3],[2,4,5],[6]]",
    "[[0,1,2],[3,4],[5,6],[7,8]]",
    "[[0,1,2,3,4],[5],[6],[7]]",
    "[[0],[1],[2],[3],[4],[5],[6],[7],[8]]",
    "[[0,1,2,3]]",
    "[[0,1,2,3,4,5,6,7,8,9]]"
  ],
  "constraints": "1 <= V <= 1000; 0 <= edges <= V*(V-1)/2",
  "expectedTimeComplexity": "O(V + E)",
  "expectedSpaceComplexity": "O(V + E)"
},

{
  "topic": "graphs",
  "level": "medium",
  "title": "Detect cycle in an undirected graph",
  "question": "Given an undirected graph with V vertices and a list of edges, determine whether the graph contains a cycle. Return true if a cycle exists, otherwise false.",
  "sampleInputs": [
    "V = 4, edges = [[0, 1], [0, 2], [1, 2], [2, 3]]",
    "V = 4, edges = [[0, 1], [1, 2], [2, 3]]"
  ],
  "sampleOutputs": [
    "true",
    "false"
  ],
  "explanations": [
    "The diagram clearly shows a cycle: 0 → 2 → 1 → 0.",
    "There is no cycle in the given graph."
  ],
  "testCases": [
    "V = 3, edges = [[0, 1], [1, 2], [2, 0]]",
    "V = 5, edges = [[0, 1], [1, 2], [3, 4]]",
    "V = 6, edges = [[0, 1], [1, 2], [2, 3], [3, 0], [4, 5]]",
    "V = 3, edges = [[0, 1], [1, 2]]",
    "V = 7, edges = [[0, 1], [1, 2], [2, 0], [3, 4], [5, 6]]"
  ],
  "expectedOutputs": [
    "true",
    "false",
    "true",
    "false",
    "true"
  ],
  "constraints": "1 <= V <= 10^3; 0 <= edges.length <= V*(V-1)/2",
  "expectedTimeComplexity": "O(V + E)",
  "expectedSpaceComplexity": "O(V)"
},

{
  "topic": "graphs",
  "level": "medium",
  "title": "Find the ordering of task from given dependencies (Course Schedule II)",
  "question": "Given N tasks labeled from 0 to N-1 and a list of prerequisite pairs, return an ordering of the tasks to finish them all. Each prerequisite pair [a, b] indicates that task 'a' can only be completed after completing task 'b'. Return any valid ordering. If no ordering is possible (i.e., there is a cycle), return an empty array.",
  "sampleInputs": [
    "N = 2, Prerequisite_Pairs = [[1, 0]]",
    "N = 4, Prerequisite_Pairs = [[1, 0], [2, 0], [3, 1], [3, 2]]"
  ],
  "sampleOutputs": [
    "[0, 1]",
    "[0, 1, 2, 3] or [0, 2, 1, 3]"
  ],
  "explanations": [
    "There are 2 tasks. Task 1 depends on task 0, so the correct order is [0, 1].",
    "To pick task 3, tasks 1 and 2 must be done first, and both 1 and 2 depend on task 0. Valid orders are [0, 1, 2, 3] or [0, 2, 1, 3]."
  ],
  "testCases": [
    "N = 3, Prerequisite_Pairs = [[1, 0], [2, 1]]",
    "N = 3, Prerequisite_Pairs = [[1, 0], [0, 1]]",
    "N = 5, Prerequisite_Pairs = [[1, 0], [2, 1], [3, 2], [4, 3]]",
    "N = 4, Prerequisite_Pairs = []",
    "N = 3, Prerequisite_Pairs = [[0, 2], [1, 2]]"
  ],
  "expectedOutputs": [
    "[0, 1, 2]",
    "[]",
    "[0, 1, 2, 3, 4]",
    "[0, 1, 2, 3] (any order)",
    "[2, 0, 1] or [2, 1, 0]"
  ],
  "constraints": "1 <= N <= 10^4; 0 <= Prerequisite_Pairs.length <= min(N*(N-1)/2, 10^5)",
  "expectedTimeComplexity": "O(N + E)",
  "expectedSpaceComplexity": "O(N + E)"
},

{
  "topic": "graphs",
  "level": "medium",
  "title": "Check whether a given graph is Bipartite or not",
  "question": "Given a graph with V vertices numbered from 0 to V-1 and a list of edges, determine whether the graph is bipartite or not. A bipartite graph is one where the set of vertices can be divided into two disjoint sets such that every edge connects a vertex in one set to a vertex in the other set. No edges exist between vertices within the same set.",
  "sampleInputs": [
    "V = 4, edges = [[0, 1], [0, 2], [1, 2], [2, 3]]",
    "V = 4, edges = [[0, 1], [1, 2], [2, 3]]"
  ],
  "sampleOutputs": [
    "false",
    "true"
  ],
  "explanations": [
    "The graph is not bipartite because there is an odd-length cycle (1-2-0-1), leading to a situation where two adjacent nodes (1 and 2) would share the same color.",
    "The graph can be colored in two colors, so it is a bipartite graph."
  ],
  "testCases": [
    "V = 3, edges = [[0, 1], [1, 2], [2, 0]]",
    "V = 5, edges = [[0, 1], [1, 2], [2, 3], [3, 4], [4, 0]]",
    "V = 4, edges = [[0, 1], [1, 3], [2, 3], [0, 2]]",
    "V = 6, edges = [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 0]]"
  ],
  "expectedOutputs": [
    "false",
    "false",
    "true",
    "true"
  ],
  "constraints": "1 <= V <= 10^4; 0 <= edges.length <= min(V*(V-1)/2, 10^5)",
  "expectedTimeComplexity": "O(V + E)",
  "expectedSpaceComplexity": "O(V + E)"
},

{
  "topic": "graphs",
  "level": "medium",
  "title": "Detect Cycle in a Directed Graph",
  "question": "Given the number of vertices V and a list of directed edges, determine whether the graph contains a cycle or not. A cycle occurs when there is a path from a vertex back to itself, directly or indirectly, in a directed graph.",
  "sampleInputs": [
    "V = 4, edges = [[0, 1], [0, 2], [1, 2], [2, 0], [2, 3]]",
    "V = 4, edges = [[0, 1], [0, 2], [1, 2], [2, 3]]"
  ],
  "sampleOutputs": [
    "true",
    "false"
  ],
  "explanations": [
    "The graph contains a cycle 0 → 2 → 0.",
    "The graph does not contain any cycle."
  ],
  "testCases": [
    "V = 3, edges = [[0, 1], [1, 2], [2, 0]]",
    "V = 5, edges = [[0, 1], [1, 2], [2, 3], [3, 4], [4, 0]]",
    "V = 6, edges = [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 0]]",
    "V = 4, edges = [[0, 1], [1, 2], [2, 3]]"
  ],
  "expectedOutputs": [
    "true",
    "true",
    "true",
    "false"
  ],
  "constraints": "1 <= V <= 10^4; 0 <= edges.length <= V*(V-1)/2",
  "expectedTimeComplexity": "O(V + E)",
  "expectedSpaceComplexity": "O(V + E)"
},

{
  "topic": "graphs",
  "level": "medium",
  "title": "Topological Sorting",
  "question": "Topological sorting for Directed Acyclic Graph (DAG) is a linear ordering of vertices such that for every directed edge u-v, vertex u comes before v in the ordering. Topological Sorting for a graph is not possible if the graph is not a DAG.",
  "sampleInputs": [
    "V = 6, edges = [[2, 3], [3, 1], [4, 0], [4, 1], [5, 0], [5, 2]]",
    "V = 4, edges = [[0, 1], [1, 2], [2, 3]]"
  ],
  "sampleOutputs": [
    "5 4 2 3 1 0",
    "3 2 1 0"
  ],
  "explanations": [
    "The topological sorting of the given graph is 5 4 2 3 1 0. There can be multiple valid topological orderings, such as 4 5 2 3 1 0.",
    "The topological sorting of the given graph is 3 2 1 0."
  ],
  "testCases": [
    "V = 6, edges = [[2, 3], [3, 1], [4, 0], [4, 1], [5, 0], [5, 2]]",
    "V = 4, edges = [[0, 1], [1, 2], [2, 3]]",
    "V = 5, edges = [[0, 1], [1, 2], [2, 3], [3, 4]]",
    "V = 4, edges = [[0, 2], [1, 2], [2, 3], [3, 1]]"
  ],
  "expectedOutputs": [
    "5 4 2 3 1 0",
    "3 2 1 0",
    "4 3 2 1 0",
    "IMPOSSIBLE"
  ],
  "constraints": "1 <= V <= 10^4; 0 <= edges.length <= V*(V-1)/2",
  "expectedTimeComplexity": "O(V + E)",
  "expectedSpaceComplexity": "O(V + E)"
},

{
  "topic": "graphs",
  "level": "medium",
  "title": "Find a Mother Vertex in a Graph",
  "question": "Write a function to find a mother vertex in the graph. A mother vertex in a graph G = (V, E) is a vertex v such that all other vertices in G can be reached by a path from v.",
  "sampleInputs": [
    "Graph = [[1, 2], [3], [3], [], [2], []]",
    "Graph = [[1], [2], [3], [4], []]"
  ],
  "sampleOutputs": [
    "5",
    "4"
  ],
  "explanations": [
    "In the first example, vertex 5 is a mother vertex because all other vertices can be reached from vertex 5.",
    "In the second example, vertex 4 is the mother vertex because all other vertices can be reached from vertex 4."
  ],
  "testCases": [
    "Graph = [[1, 2], [3], [3], [], [2], []]",
    "Graph = [[1], [2], [3], [4], []]",
    "Graph = [[1, 2], [3], [4], [], []]",
    "Graph = [[1], [], [], [0], []]"
  ],
  "expectedOutputs": [
    "5",
    "4",
    "2",
    "IMPOSSIBLE"
  ],
  "constraints": "1 <= V <= 10^4; 0 <= E <= V*(V-1)/2",
  "expectedTimeComplexity": "O(V + E)",
  "expectedSpaceComplexity": "O(V + E)"
},

{
  "topic": "graphs",
  "level": "medium",
  "title": "Dijkstra’s Algorithm to find Shortest Paths from a Source to all",
  "question": "Given a weighted undirected graph represented as an edge list and a source vertex src, find the shortest path distances from the source vertex to all other vertices in the graph. The graph contains V vertices, numbered from 0 to V - 1. The given graph does not contain any negative edge.",
  "sampleInputs": [
    "src = 0, V = 5, edges = [[0, 1, 4], [0, 2, 8], [1, 4, 6], [2, 3, 2], [3, 4, 10]]"
  ],
  "sampleOutputs": [
    "0 4 8 10 10"
  ],
  "explanations": [
    "Shortest Paths: 0 to 1 = 4. Path: 0 → 1, 0 to 2 = 8. Path: 0 → 2, 0 to 3 = 10. Path: 0 → 2 → 3, 0 to 4 = 10. Path: 0 → 1 → 4"
  ],
  "testCases": [
    "src = 0, V = 5, edges = [[0, 1, 4], [0, 2, 8], [1, 4, 6], [2, 3, 2], [3, 4, 10]]",
    "src = 1, V = 5, edges = [[0, 1, 4], [0, 2, 8], [1, 4, 6], [2, 3, 2], [3, 4, 10]]",
    "src = 0, V = 4, edges = [[0, 1, 5], [1, 2, 6], [2, 3, 1], [3, 0, 7]]",
    "src = 3, V = 5, edges = [[0, 1, 3], [1, 2, 2], [2, 3, 6], [0, 4, 2], [4, 3, 5]]"
  ],
  "expectedOutputs": [
    "0 4 8 10 10",
    "4 0 6 8 10",
    "0 5 11 7",
    "5 6 8 0 5"
  ],
  "constraints": "1 <= V <= 10^4; 1 <= E <= V * (V - 1) / 2",
  "expectedTimeComplexity": "O((V + E) log V)",
  "expectedSpaceComplexity": "O(V + E)"
},

{
  "topic": "graphs",
  "level": "medium",
  "title": "Strongly Connected Components",
  "question": "Strongly Connected Components (SCCs) are a fundamental concept in graph theory and algorithms. In a directed graph, a Strongly Connected Component is a subset of vertices where every vertex in the subset is reachable from every other vertex in the same subset by traversing the directed edges. Finding the SCCs of a graph can provide important insights into the structure and connectivity of the graph, with applications in various fields such as social network analysis, web crawling, and network routing. This tutorial will explore the definition, properties, and efficient algorithms for identifying Strongly Connected Components in graph data structures.",
  "sampleInputs": [
    "Graph = [[1], [2], [3], [4], [0], [2], [6], [5]]"
  ],
  "sampleOutputs": [
    "[[0, 1, 2, 3, 4], [5, 6], [7]]"
  ],
  "explanations": [
    "The graph is divided into three strongly connected components. The vertices {0, 1, 2, 3, 4} form one SCC, {5, 6} form another SCC, and {7} is a single SCC."
  ],
  "testCases": [
    "Graph = [[1], [2], [3], [4], [0], [2], [6], [5]]",
    "Graph = [[1, 2], [0, 3], [3], [0], []]",
    "Graph = [[1], [2], [0]]"
  ],
  "expectedOutputs": [
    "[[0, 1, 2, 3, 4], [5, 6], [7]]",
    "[[0, 1, 2, 3], [4]]",
    "[[0, 1, 2]]"
  ],
  "constraints": "1 <= V <= 10^5; 1 <= E <= V * (V - 1) / 2",
  "expectedTimeComplexity": "O(V + E)",
  "expectedSpaceComplexity": "O(V + E)"
},

{
  "topic": "graphs",
  "level": "medium",
  "title": "Kruskal’s Minimum Spanning Tree (MST) Algorithm",
  "question": "A minimum spanning tree (MST) or minimum weight spanning tree for a weighted, connected, and undirected graph is a spanning tree (no cycles and connects all vertices) that has minimum weight. The weight of a spanning tree is the sum of all edges in the tree. In Kruskal’s algorithm, we sort all edges of the given graph in increasing order. Then it keeps on adding new edges and nodes in the MST if the newly added edge does not form a cycle. It picks the minimum weighted edge at first and the maximum weighted edge at last. Thus, we can say that it makes a locally optimal choice in each step in order to find the optimal solution. Hence, this is a Greedy Algorithm.",
  "sampleInputs": [
    "V = 4, E = 5, edges = [[0, 1, 10], [0, 2, 6], [0, 3, 5], [1, 3, 15], [2, 3, 4]]"
  ],
  "sampleOutputs": [
    "Minimum Spanning Tree: [[2, 3, 4], [0, 3, 5], [0, 2, 6]]"
  ],
  "explanations": [
    "The edges are sorted by weight: [[2, 3, 4], [0, 3, 5], [0, 2, 6], [0, 1, 10], [1, 3, 15]]. The MST is formed by adding edges one by one, avoiding cycles. The final MST has a total weight of 15."
  ],
  "testCases": [
    "V = 5, E = 7, edges = [[0, 1, 10], [0, 2, 6], [0, 3, 5], [1, 3, 15], [2, 3, 4], [2, 4, 8], [3, 4, 7]]",
    "V = 3, E = 3, edges = [[0, 1, 1], [1, 2, 2], [0, 2, 3]]"
  ],
  "expectedOutputs": [
    "Minimum Spanning Tree: [[2, 3, 4], [0, 3, 5], [0, 2, 6], [3, 4, 7]]",
    "Minimum Spanning Tree: [[0, 1, 1], [1, 2, 2]]"
  ],
  "constraints": "1 <= V <= 10^5; 1 <= E <= V * (V - 1) / 2",
  "expectedTimeComplexity": "O(E log E)",
  "expectedSpaceComplexity": "O(V + E)"
},

{
  "topic": "graphs",
  "level": "hard",
  "title": "Bridges in a graph",
  "question": "Given an undirected Graph, the task is to find all the Bridges in this graph.\n\nAn edge in an undirected connected graph is a bridge if removing it disconnects the graph. For a disconnected undirected graph, the definition is similar—a bridge is an edge whose removal increases the number of disconnected components.\n\nLike Articulation Points, bridges represent vulnerabilities in a connected network and are useful for designing reliable networks.",
  "sampleInputs": [
    "V = 5, edges = [[1, 0], [0, 2], [2, 1], [0, 3], [3, 4]]"
  ],
  "sampleOutputs": [
    "Bridges: [[3, 4], [0, 3]]"
  ],
  "explanations": [
    "If we remove edge [3, 4], vertex 4 gets disconnected. Similarly, removing [0, 3] will disconnect vertex 3 (and its connected subtree). Other edges belong to cycles and are not bridges."
  ],
  "testCases": [
    "V = 4, edges = [[0, 1], [1, 2], [2, 3]]",
    "V = 5, edges = [[0, 1], [1, 2], [2, 0], [1, 3], [3, 4]]"
  ],
  "expectedOutputs": [
    "Bridges: [[2, 3], [1, 2], [0, 1]]",
    "Bridges: [[3, 4], [1, 3]]"
  ],
  "constraints": "1 <= V <= 10^5; 0 <= E <= V * (V - 1) / 2",
  "expectedTimeComplexity": "O(V + E)",
  "expectedSpaceComplexity": "O(V + E)"
},

{
  "topic": "graphs",
  "level": "hard",
  "title": "Minimum Cost Path with Left, Right, Bottom and Up moves allowed",
  "question": "Given a 2D grid of size n*n, where each cell represents the cost to traverse through that cell, the task is to find the minimum cost to move from the top-left cell (0, 0) to the bottom-right cell (n-1, n-1). From a given cell, you are allowed to move in four directions: left, right, up, and down.\n\nNote: It is assumed that negative cost cycles do not exist in the input matrix.",
  "sampleInputs": [
    "grid = [[9, 4, 9, 9], [6, 7, 6, 4], [8, 3, 3, 7], [7, 4, 9, 10]]"
  ],
  "sampleOutputs": [
    "43"
  ],
  "explanations": [
    "The minimum cost path is: 9 → 4 → 7 → 3 → 3 → 7 → 10, which gives a total cost of 43."
  ],
  "testCases": [
    "grid = [[1, 2], [1, 1]]",
    "grid = [[1, 3, 1], [1, 5, 1], [4, 2, 1]]"
  ],
  "expectedOutputs": [
    "3",
    "7"
  ],
  "constraints": "1 <= n <= 1000; 0 <= grid[i][j] <= 10^3",
  "expectedTimeComplexity": "O(n^2 * log n)",
  "expectedSpaceComplexity": "O(n^2)"
},

{
  "topic": "graphs",
  "level": "hard",
  "title": "Tarjan’s Algorithm to find Strongly Connected Components",
  "question": "A directed graph is strongly connected if there is a path between all pairs of vertices. A strongly connected component (SCC) of a directed graph is a maximal strongly connected subgraph. Tarjan’s Algorithm finds all SCCs in a graph using only one DFS traversal.\n\nTarjan’s Algorithm is based on:\n- DFS traversal producing DFS trees.\n- SCCs form subtrees in the DFS tree.\n- No back edge connects one SCC to another.\n\nWe use:\n- `disc[]`: Discovery time of each node.\n- `low[]`: Earliest visited vertex reachable from the subtree rooted at that node.\n\nA node `u` is the head of an SCC if `disc[u] == low[u]`.\n\nThe algorithm maintains a stack to keep track of visited vertices in the current DFS path.\n\nYour task is to find and print all SCCs in a given directed graph.",
  "sampleInputs": [
    "V = 5, edges = [[1, 0], [0, 2], [2, 1], [0, 3], [3, 4]]"
  ],
  "sampleOutputs": [
    "[[1, 2, 0], [3], [4]]"
  ],
  "explanations": [
    "There is one SCC containing nodes 0, 1, 2 since all are mutually reachable. Nodes 3 and 4 form individual SCCs as they are not part of any cycle."
  ],
  "testCases": [
    "V = 8, edges = [[0,1],[1,2],[2,3],[3,0],[2,4],[4,5],[5,6],[6,4],[6,7]]"
  ],
  "expectedOutputs": [
    "[[0,1,2,3], [4,5,6], [7]]"
  ],
  "constraints": "1 <= V <= 10^4; 0 <= edges.length <= 10^5",
  "expectedTimeComplexity": "O(V + E)",
  "expectedSpaceComplexity": "O(V)"
},

{
  "topic": "graphs",
  "level": "hard",
  "title": "Articulation Points (or Cut Vertices) in a Graph",
  "question": "Given an undirected graph with V vertices and E edges (edges[][]), your task is to return all the articulation points in the graph. If no such point exists, return [-1].\n\nNote:\nAn articulation point is a vertex whose removal, along with all its connected edges, increases the number of connected components in the graph.\nThe graph may contain more than one connected component.",
  "sampleInputs": [
    "V = 5, edges[][] = [[0, 1], [1, 4], [4, 3], [4, 2], [2, 3]]"
  ],
  "sampleOutputs": [
    "[1, 4]"
  ],
  "explanations": [
    "Removing vertex 1 or vertex 4 will disconnect the graph. Hence, they are articulation points."
  ],
  "testCases": [
    "V = 4, edges[][] = [[0, 1], [0, 2]]"
  ],
  "expectedOutputs": [
    "[0]"
  ],
  "constraints": "1 <= V <= 10^4; 0 <= E <= 10^5",
  "expectedTimeComplexity": "O(V + E)",
  "expectedSpaceComplexity": "O(V)"
},

{
  "topic": "graphs",
  "level": "hard",
  "title": "Articulation Point - II",
  "question": "You are given an undirected graph with V vertices and E edges. The graph is represented as a 2D array edges[][], where each element edges[i] = [u, v] indicates an undirected edge between vertices u and v. Your task is to return all the articulation points (or cut vertices) in the graph.\n\nAn articulation point is a vertex whose removal, along with all its connected edges, increases the number of connected components in the graph.\n\nNote: The graph may be disconnected, i.e., it may consist of more than one connected component. If no such point exists, return [-1].",
  "sampleInputs": [
    "V = 5, edges[][] = [[0, 1], [1, 4], [4, 3], [4, 2], [2, 3]]"
  ],
  "sampleOutputs": [
    "[1, 4]"
  ],
  "explanations": [
    "Removing the vertex 1 or 4 will disconnect the graph as shown in the structure."
  ],
  "testCases": [
    "V = 4, edges[][] = [[0, 1], [0, 2]]"
  ],
  "expectedOutputs": [
    "[0]"
  ],
  "constraints": "1 ≤ V, E ≤ 10^4",
  "expectedTimeComplexity": "O(V + E)",
  "expectedSpaceComplexity": "O(V + E)"
},

{
  "topic": "graphs",
  "level": "hard",
  "title": "Alien Dictionary",
  "question": "Given an array of strings words[], sorted in an alien language. Your task is to determine the correct order of letters in this alien language based on the given words. If the order is valid, return a string containing the unique letters in lexicographically increasing order as per the new language’s rules.\n\nNote: There can be multiple valid orders for a given input, so you may return any one of them. If no valid order exists due to conflicting constraints, return an empty string.",
  "sampleInputs": [
    "words[] = [\"baa\", \"abcd\", \"abca\", \"cab\", \"cad\"]"
  ],
  "sampleOutputs": [
    "\"bdac\""
  ],
  "explanations": [
    "The pair \"baa\" and \"abcd\" suggests ‘b’ appears before ‘a’ in the alien dictionary.\nThe pair \"abcd\" and \"abca\" suggests ‘d’ appears before ‘a’ in the alien dictionary.\nThe pair \"abca\" and \"cab\" suggests ‘a’ appears before ‘c’ in the alien dictionary.\nThe pair \"cab\" and \"cad\" suggests ‘b’ appears before ‘d’ in the alien dictionary.\nSo, ‘b’ → ‘d’ → ‘a’ → ‘c’ is a valid ordering."
  ],
  "testCases": [
    "words[] = [\"caa\", \"aaa\", \"aab\"]"
  ],
  "expectedOutputs": [
    "\"cab\""
  ],
  "constraints": "1 ≤ words.length ≤ 100, 1 ≤ words[i].length ≤ 100, All characters are lowercase English letters.",
  "expectedTimeComplexity": "O(N + K)",
  "expectedSpaceComplexity": "O(K)",
  "notes": "N is the total number of characters in all words, and K is the total number of unique characters."
},

{
  "topic": "graphs",
  "level": "hard",
  "title": "Word Ladder – Shortest Chain To Reach Target Word",
  "question": "Given an array of strings arr[], and two different strings start and target, representing two words. The task is to find the length of the smallest chain from string start to target, such that only one character of the adjacent words differs and each word exists in arr[].\n\nNote: Print 0 if it is not possible to form a chain. Each word in array arr[] is of same size m and contains only lowercase English alphabets.",
  "sampleInputs": [
    "start = \"toon\", target = \"plea\", arr[] = [\"poon\", \"plee\", \"same\", \"poie\", \"plea\", \"plie\", \"poin\"]"
  ],
  "sampleOutputs": [
    "7"
  ],
  "explanations": [
    "toon -> poon -> poin -> poie -> plie -> plee -> plea"
  ],
  "testCases": [
    "start = \"abcv\", target = \"ebad\", arr[] = [\"abcd\", \"ebad\", \"ebcd\", \"xyza\"]"
  ],
  "expectedOutputs": [
    "4"
  ],
  "constraints": "1 ≤ |arr[]| ≤ 5000, 1 ≤ |arr[i]| = |start| = |target| ≤ 20, All words contain lowercase English letters only.",
  "expectedTimeComplexity": "O(N * M * 26)",
  "expectedSpaceComplexity": "O(N)",
  "notes": "N is the number of words in arr[], and M is the length of each word. The approach uses BFS to find the shortest path."
},

{
  "topic": "graphs",
  "level": "hard",
  "title": "Print all possible shortest chains to reach a target word",
  "question": "Given two strings start and target (both of the same length) and a list of strings str[], the task is to print all possible smallest sequences starting from start to target if it exists, such that adjacent words in the sequence only differ by a single character and each word in the sequence is present in the given list.\n\nNote: It may be assumed that the target word is present in the list and the length of all the words is the same. If multiple sequences occur, print all of them.",
  "sampleInputs": [
    "str[] = [\"poon\", \"plee\", \"same\", \"poie\", \"plea\", \"plie\", \"poin\"], start = \"toon\", target = \"plea\""
  ],
  "sampleOutputs": [
    "[[\"toon\", \"poon\", \"poin\", \"poie\", \"plee\", \"plea\"]]"
  ],
  "explanations": [
    "toon → poon → poin → poie → plee → plea"
  ],
  "testCases": [
    "str[] = [\"ted\", \"tex\", \"red\", \"tax\", \"tad\", \"den\", \"rex\", \"pee\"], start = \"red\", target = \"tax\""
  ],
  "expectedOutputs": [
    "[[\"red\", \"ted\", \"tad\", \"tax\"], [\"red\", \"ted\", \"tex\", \"tax\"], [\"red\", \"rex\", \"tex\", \"tax\"]]"
  ],
  "constraints": "1 ≤ |str[]| ≤ 5000, 1 ≤ |str[i]| = |start| = |target| ≤ 20, All words consist of lowercase English letters only.",
  "expectedTimeComplexity": "O(N * M * 26)",
  "expectedSpaceComplexity": "O(N * M)",
  "notes": "This problem can be solved using a combination of BFS for finding the shortest path length and DFS for backtracking all valid shortest sequences."
},

{
  "topic": "graphs",
  "level": "hard",
  "title": "Find number of closed islands in given Matrix",
  "question": "Given a binary matrix mat[][] of dimensions NxM such that 1 denotes the island and 0 denotes the water. The task is to find the number of closed islands in the given matrix.\n\nA closed island is a group of 1s that is completely surrounded by 0s on all four sides (excluding diagonals). Any group of 1s that touches the edge of the matrix is **not** considered closed.\n\nReturn the count of all such closed islands.",
  "sampleInputs": [
    "N = 5, M = 8, mat[][] = [[0, 0, 0, 0, 0, 0, 0, 1], [0, 1, 1, 1, 1, 0, 0, 1], [0, 1, 0, 1, 0, 0, 0, 1], [0, 1, 1, 1, 1, 0, 1, 0], [0, 0, 0, 0, 0, 0, 0, 1]]"
  ],
  "sampleOutputs": [
    "2"
  ],
  "explanations": [
    "There are 2 closed islands in the matrix. The island cells on the last column touch the boundary, so they are not counted."
  ],
  "testCases": [
    "N = 3, M = 3, mat[][] = [[1, 0, 0], [0, 1, 0], [0, 0, 1]]"
  ],
  "expectedOutputs": [
    "1"
  ],
  "constraints": "1 ≤ N, M ≤ 500",
  "expectedTimeComplexity": "O(N × M)",
  "expectedSpaceComplexity": "O(N × M)",
  "notes": "To solve this problem, flood fill (DFS or BFS) from the boundary to mark all 1s that are not closed. Then count the number of unvisited 1 regions."
},

{
  "topic": "graphs",
  "level": "hard",
  "title": "Find number of closed islands in given Matrix",
  "question": "Given a binary matrix mat[][] of dimensions NxM such that 1 denotes the island and 0 denotes the water. The task is to find the number of closed islands in the given matrix.\n\nA closed island is a group of 1s that is completely surrounded by 0s on all four sides (excluding diagonals). Any group of 1s that touches the edge of the matrix is **not** considered closed.\n\nReturn the count of all such closed islands.",
  "sampleInputs": [
    "N = 5, M = 8, mat[][] = [[0, 0, 0, 0, 0, 0, 0, 1], [0, 1, 1, 1, 1, 0, 0, 1], [0, 1, 0, 1, 0, 0, 0, 1], [0, 1, 1, 1, 1, 0, 1, 0], [0, 0, 0, 0, 0, 0, 0, 1]]"
  ],
  "sampleOutputs": [
    "2"
  ],
  "explanations": [
    "There are 2 closed islands in the matrix. The island cells on the last column touch the boundary, so they are not counted."
  ],
  "testCases": [
    "N = 3, M = 3, mat[][] = [[1, 0, 0], [0, 1, 0], [0, 0, 1]]",
    "N = 4, M = 4, mat[][] = [[1, 1, 1, 0], [1, 0, 1, 0], [1, 1, 1, 0], [0, 0, 0, 0]]",
    "N = 3, M = 5, mat[][] = [[0, 1, 0, 1, 0], [1, 0, 1, 0, 1], [0, 1, 0, 1, 0]]"
  ],
  "expectedOutputs": [
    "1",
    "1",
    "0"
  ],
  "constraints": "1 ≤ N, M ≤ 500",
  "expectedTimeComplexity": "O(N × M)",
  "expectedSpaceComplexity": "O(N × M)",
  "notes": "To solve this problem, flood fill (DFS or BFS) from the boundary to mark all 1s that are not closed. Then count the number of unvisited 1 regions."
},

{
  "topic": "strings",
  "level": "hard",
  "title": "Min Length String with All Substrings of Size N",
  "question": "Given two integers n and k, your task is to find a string of minimum length that contains all possible strings of size n as a substring. The characters of the string should be integers ranging from 0 to k - 1.",
  "sampleInputs": [
    "n = 2, k = 2"
  ],
  "sampleOutputs": [
    "00110"
  ],
  "explanations": [
    "Allowed characters are from 0 to k-1 (i.e., 0 and 1). There are 4 strings possible of size n = 2, namely: '00', '01', '10', '11'. The string '00110' contains all these substrings as a part of it."
  ],
  "testCases": [
    "n = 2, k = 3",
    "n = 3, k = 2"
  ],
  "expectedOutputs": [
    "0022120110",
    "000101"
  ],
  "constraints": "1 ≤ n ≤ 12, 1 ≤ k ≤ 4",
  "expectedTimeComplexity": "O(k^n)",
  "expectedSpaceComplexity": "O(k^n)",
  "notes": "This problem can be solved using the concept of De Bruijn sequences, where we construct a string that contains all possible n-length substrings from a k-character alphabet."
},

{
  "topic": "trees",
  "level": "easy",
  "title": "Height of Binary Tree",
  "question": "Given the root of a binary tree, return its height. Height is defined as the number of edges on the longest path from root to a leaf.",
  "sampleInputs": [
    "1 2 3 N 4",
    "1 N 2 N 3",
    "1"
  ],
  "sampleOutputs": [
    "2",
    "2",
    "0"
  ],
  "explanations": [
    "The path is 1 → 2 → 4, which is 2 edges.",
    "The tree is skewed right: 1 → 2 → 3 → height = 2.",
    "Only root node exists, height = 0."
  ],
  "testCases": [
    "1 2 3 N 4\n",
    "1 N 2 N 3\n",
    "1\n",
    "1 2 N 3 N 4 N\n",
    "1 2 3 4 5 6 7\n",
    "1 N 2 N 3 N 4 N 5\n",
    "1 2 3 4 N N 5 N N 6\n",
    "1 2 N 3 4\n",
    "1 2 3 N N N 4\n",
    "1 2 N 3 N 4 N 5\n"
  ],
  "expectedOutputs": [
    "2",
    "2",
    "0",
    "3",
    "2",
    "4",
    "4",
    "2",
    "3",
    "4"
  ],
  "constraints": "1 <= number of nodes <= 10^5",
  "expectedTimeComplexity": "O(n)",
  "expectedSpaceComplexity": "O(h)"
},

{
  "topic": "trees",
  "level": "easy",
  "title": "Count Leaf Nodes",
  "question": "Return the number of leaf nodes in a binary tree.",
  "sampleInputs": [
    "1 2 3 N N 4 5",
    "10 20 30 N N N 40",
    "1"
  ],
  "sampleOutputs": [
    "3",
    "2",
    "1"
  ],
  "explanations": [
    "Leaves are 2, 4, and 5.",
    "Leaves are 20 and 40.",
    "Only root node exists, which is also a leaf."
  ],
  "testCases": [
    "1 2 3 N N 4 5\n",
    "10 20 30 N N N 40\n",
    "1\n",
    "1 2 N 3 N 4 N\n",
    "1 2 3 4 5 6 7\n",
    "1 N 2 N 3 N 4 N 5\n",
    "1 2 3 N 4 N 5\n",
    "1 N N\n",
    "1 2 3 N N N 6 7\n",
    "1 2 N N 3 4 N"
  ],
  "expectedOutputs": [
    "3",
    "2",
    "1",
    "1",
    "4",
    "1",
    "2",
    "1",
    "2",
    "2"
  ],
  "constraints": "1 <= number of nodes <= 10^5",
  "expectedTimeComplexity": "O(n)",
  "expectedSpaceComplexity": "O(h)"
},

{
  "topic": "trees",
  "level": "easy",
  "title": "Inorder Traversal",
  "question": "Return the inorder traversal of a binary tree as a space-separated string.",
  "sampleInputs": [
    "1 N 2 3",
    "4 2 5 1 3",
    "1"
  ],
  "sampleOutputs": [
    "1 3 2",
    "1 2 3 4 5",
    "1"
  ],
  "explanations": [
    "Inorder: left-root-right → 1, then 3, then 2.",
    "Standard inorder of full binary tree.",
    "Only root exists."
  ],
  "testCases": [
    "1 N 2 3\n",
    "4 2 5 1 3\n",
    "1\n",
    "3 2 N 1\n",
    "5 3 6 2 4\n",
    "1 2 3 N N 4 5\n",
    "6 3 8 1 4 7 9\n",
    "7 4 9 2 5 N 10 1 3\n",
    "10 N 20 15 25\n",
    "5 2 6 1 N N 7"
  ],
  "expectedOutputs": [
    "1 3 2",
    "1 2 3 4 5",
    "1",
    "1 2 3",
    "2 3 4 5 6",
    "1 2 4 3 5",
    "1 3 4 6 7 8 9",
    "1 2 3 4 5 7 9 10",
    "10 15 20 25",
    "1 2 5 6 7"
  ],
  "constraints": "1 <= number of nodes <= 10^5",
  "expectedTimeComplexity": "O(n)",
  "expectedSpaceComplexity": "O(n)"
},

{
  "topic": "trees",
  "level": "easy",
  "title": "Sum of All Nodes",
  "question": "Return the sum of all node values in a binary tree.",
  "sampleInputs": [
    "10 20 30",
    "5 1 2 3 N N 4",
    "100"
  ],
  "sampleOutputs": [
    "60",
    "15",
    "100"
  ],
  "explanations": [
    "10 + 20 + 30 = 60",
    "Sum = 5 + 1 + 2 + 3 + 4 = 15",
    "Only one node: 100"
  ],
  "testCases": [
    "10 20 30\n",
    "5 1 2 3 N N 4\n",
    "100\n",
    "1 2 3 4 5 6 7\n",
    "50 25 75 10 30 60 90\n",
    "1 N 2 N 3 N 4\n",
    "10 20 30 40 50 60 70\n",
    "15 10 20 8 12 17 25\n",
    "5 N 7 N 9 N 11\n",
    "2 3 5 N N 4 6"
  ],
  "expectedOutputs": [
    "60",
    "15",
    "100",
    "28",
    "340",
    "10",
    "280",
    "107",
    "32",
    "20"
  ],
  "constraints": "1 <= number of nodes <= 10^5",
  "expectedTimeComplexity": "O(n)",
  "expectedSpaceComplexity": "O(h)"
},

{
  "topic": "trees",
  "level": "easy",
  "title": "Maximum Element in Binary Tree",
  "question": "Return the maximum element in a binary tree.",
  "sampleInputs": [
    "10 2 30",
    "5 12 4",
    "7"
  ],
  "sampleOutputs": [
    "30",
    "12",
    "7"
  ],
  "explanations": [
    "Maximum of 10, 2, and 30 is 30",
    "Among 5, 12, 4 → max is 12",
    "Single node value is 7"
  ],
  "testCases": [
    "10 2 30\n",
    "5 12 4\n",
    "7\n",
    "1 2 3 4 5 6 7\n",
    "50 25 75 10 30 60 90\n",
    "1 N 100 N 200 N 300\n",
    "15 10 20 5 12 17 25\n",
    "99 101 45 33 N 120\n",
    "8 N 16 N 32\n",
    "5 3 9 1 4 7 10"
  ],
  "expectedOutputs": [
    "30",
    "12",
    "7",
    "7",
    "90",
    "300",
    "25",
    "120",
    "32",
    "10"
  ],
  "constraints": "1 <= node value <= 10^6",
  "expectedTimeComplexity": "O(n)",
  "expectedSpaceComplexity": "O(h)"
},

{
  "topic": "trees",
  "level": "easy",
  "title": "Check for Identical Trees",
  "question": "Given roots of two binary trees, return true if they are identical in structure and node values.",
  "sampleInputs": [
    "Tree1: 1 2 3; Tree2: 1 2 3",
    "Tree1: 1 2 N; Tree2: 1 N 2",
    "Tree1: 5; Tree2: 5"
  ],
  "sampleOutputs": [
    "true",
    "false",
    "true"
  ],
  "explanations": [
    "Both trees are same",
    "Structure is different",
    "Both are single-node trees"
  ],
  "testCases": [
    "1 2 3; 1 2 3\n",
    "1 2 N; 1 N 2\n",
    "5; 5\n",
    "2 1 3; 2 1 3\n",
    "4 2 5 1 3; 4 2 5 1 3\n",
    "1 2 3; 1 2 4\n",
    "10 N 20 30; 10 N 20 30\n",
    "7 3 9; 7 3 8\n",
    "15 10 20; 15 10 20\n",
    "1 2 3 N 4; 1 2 3 N 5"
  ],
  "expectedOutputs": [
    "true",
    "false",
    "true",
    "true",
    "true",
    "false",
    "true",
    "false",
    "true",
    "false"
  ],
  "constraints": "1 <= number of nodes <= 10^5",
  "expectedTimeComplexity": "O(n)",
  "expectedSpaceComplexity": "O(h)"
},

{
  "topic": "trees",
  "level": "easy",
  "title": "Mirror Binary Tree",
  "question": "Convert a binary tree to its mirror. Return inorder traversal of the mirror.",
  "sampleInputs": [
    "1 2 3",
    "4 2 5 1 3",
    "1"
  ],
  "sampleOutputs": [
    "3 1 2",
    "5 4 3 2 1",
    "1"
  ],
  "explanations": [
    "Left and right children are swapped at every node.",
    "Full tree mirrored.",
    "Single node remains the same."
  ],
  "testCases": [
    "1 2 3\n",
    "4 2 5 1 3\n",
    "1\n",
    "2 1 3\n",
    "5 3 6 2 4 N 7\n",
    "10 5 15 3 7 12 17\n",
    "8 4 10 2 6 9 12\n",
    "1 N 2 N 3\n",
    "1 2 N 3 N 4\n",
    "7 3 9 1 N 8 10\n"
  ],
  "expectedOutputs": [
    "3 1 2",
    "5 4 3 2 1",
    "1",
    "3 2 1",
    "7 6 5 4 3",
    "17 15 12 10 7 5 3",
    "12 10 9 8 6 4 2",
    "3 2 1",
    "4 3 2 1",
    "10 9 7 3 8 1"
  ],
  "constraints": "1 <= number of nodes <= 10^5",
  "expectedTimeComplexity": "O(n)",
  "expectedSpaceComplexity": "O(h)"
},

{
  "topic": "trees",
  "level": "easy",
  "title": "Children Sum Property",
  "question": "Return true if every non-leaf node's value is equal to the sum of its left and right children.",
  "sampleInputs": [
    "10 8 2",
    "5 3 1",
    "1"
  ],
  "sampleOutputs": [
    "true",
    "false",
    "true"
  ],
  "explanations": [
    "10 = 8 + 2",
    "5 ≠ 3 + 1",
    "Single node is a leaf"
  ],
  "testCases": [
    "10 8 2\n",
    "5 3 1\n",
    "1\n",
    "20 8 12\n",
    "5 2 3 1 1\n",
    "40 20 20 10 10 10 10\n",
    "10 5 5 N 2 2 N\n",
    "15 10 5 5 5 N N\n",
    "8 3 5 N N 2 3\n",
    "100 60 40 30 30 20 20\n"
  ],
  "expectedOutputs": [
    "true",
    "false",
    "true",
    "true",
    "false",
    "true",
    "false",
    "true",
    "true",
    "true"
  ],
  "constraints": "1 <= node value <= 10^6",
  "expectedTimeComplexity": "O(n)",
  "expectedSpaceComplexity": "O(h)"
},

{
  "topic": "trees",
  "level": "easy",
  "title": "Level Order Traversal",
  "question": "Print the level order traversal of a binary tree (from left to right, level by level). Return values as a space-separated string.",
  "sampleInputs": [
    "1 2 3 4 5",
    "3 9 20 N N 15 7",
    "1"
  ],
  "sampleOutputs": [
    "1 2 3 4 5",
    "3 9 20 15 7",
    "1"
  ],
  "explanations": [
    "Nodes are visited level by level: root, then 2-3, then 4-5.",
    "Standard BFS traversal from top to bottom.",
    "Only root node exists."
  ],
  "testCases": [
    "1 2 3 4 5\n",
    "3 9 20 N N 15 7\n",
    "1\n",
    "10 5 15 3 7 12 20\n",
    "8 4 10 2 6 N 14\n",
    "1 N 2 N 3 N 4\n",
    "5 2 6 1 N N 7\n",
    "100 50 150 25 75 125 175\n",
    "9 6 12 3 8 10 15\n",
    "2 1 3 N N N 4"
  ],
  "expectedOutputs": [
    "1 2 3 4 5",
    "3 9 20 15 7",
    "1",
    "10 5 15 3 7 12 20",
    "8 4 10 2 6 14",
    "1 2 3 4",
    "5 2 6 1 7",
    "100 50 150 25 75 125 175",
    "9 6 12 3 8 10 15",
    "2 1 3 4"
  ],
  "constraints": "1 <= number of nodes <= 10^5",
  "expectedTimeComplexity": "O(n)",
  "expectedSpaceComplexity": "O(n)"
},

{
  "topic": "trees",
  "level": "easy",
  "title": "Check if Tree is Balanced",
  "question": "Given a binary tree, return true if it is height-balanced. A height-balanced tree is one where the left and right subtrees of every node differ in height by at most 1.",
  "sampleInputs": [
    "3 9 20 N N 15 7",
    "1 2 N 3",
    "1"
  ],
  "sampleOutputs": [
    "true",
    "false",
    "true"
  ],
  "explanations": [
    "All subtrees are balanced in height.",
    "Left-skewed tree has imbalance at root.",
    "Single node is balanced."
  ],
  "testCases": [
    "3 9 20 N N 15 7\n",
    "1 2 N 3\n",
    "1\n",
    "10 5 15 3 7 12 20\n",
    "1 N 2 N 3\n",
    "1 2 2 3 3 N N 4 4\n",
    "5 3 8 1 4 7 9\n",
    "1 2 3 4 N N 5\n",
    "30 20 40 10 25 35 50\n",
    "10 5 N 3 N 1\n"
  ],
  "expectedOutputs": [
    "true",
    "false",
    "true",
    "true",
    "false",
    "false",
    "true",
    "false",
    "true",
    "false"
  ],
  "constraints": "1 <= number of nodes <= 10^5",
  "expectedTimeComplexity": "O(n)",
  "expectedSpaceComplexity": "O(h)"
},

{
  "topic": "trees",
  "level": "medium",
  "title": "Diameter of Binary Tree",
  "question": "Given a binary tree, return the length of the diameter. The diameter is the number of nodes on the longest path between any two leaves.",
  "sampleInputs": [
    "1 2 3 4 5",
    "10 20 30 40 60",
    "5"
  ],
  "sampleOutputs": [
    "4",
    "4",
    "0"
  ],
  "explanations": [
    "The longest path is 4->2->1->3.",
    "The longest path is 40->20->10->30.",
    "Only one node, so no path."
  ],
  "testCases": [
    "1 2 3 4 5\n",
    "10 20 30 40 60\n",
    "5\n",
    "1 2 3 4 5 6 7\n",
    "1 2 N 3 N 4 N 5\n",
    "1 N 2 N 3 N 4 N 5\n",
    "15 10 20 5 12 17 25\n",
    "1 2 3 N 4 N 5\n",
    "9 4 10 2 6 N 11\n",
    "7 3 8 1 N 6 N"
  ],
  "expectedOutputs": [
    "4",
    "4",
    "0",
    "5",
    "5",
    "5",
    "5",
    "5",
    "5",
    "5"
  ],
  "constraints": "1 <= number of nodes <= 10^4",
  "expectedTimeComplexity": "O(n)",
  "expectedSpaceComplexity": "O(h)"
},

{
  "topic": "trees",
  "level": "medium",
  "title": "Lowest Common Ancestor in Binary Tree",
  "question": "Given a binary tree and two node values n1 and n2, return the lowest common ancestor (LCA) of the two nodes.",
  "sampleInputs": [
    "1 2 3 4 5; 4 5",
    "3 5 1 6 2 0 8; 6 2",
    "1 2; 1 2"
  ],
  "sampleOutputs": [
    "2",
    "5",
    "1"
  ],
  "explanations": [
    "LCA of 4 and 5 is 2.",
    "LCA of 6 and 2 is 5.",
    "LCA of 1 and 2 is 1."
  ],
  "testCases": [
    "1 2 3 4 5; 4 5\n",
    "3 5 1 6 2 0 8; 6 2\n",
    "1 2; 1 2\n",
    "10 20 30 40 50 60 70; 40 50\n",
    "10 5 15 2 7 12 20; 2 7\n",
    "1 2 3 4 5 6 7; 4 6\n",
    "8 4 10 2 6 N 20; 2 6\n",
    "7 4 9 2 5 8 10; 5 10\n",
    "100 50 150 25 75 125 175; 25 175\n",
    "15 10 20 5 12 18 25; 5 25"
  ],
  "expectedOutputs": [
    "2",
    "5",
    "1",
    "20",
    "5",
    "1",
    "4",
    "7",
    "100",
    "15"
  ],
  "constraints": "1 <= number of nodes <= 10^4",
  "expectedTimeComplexity": "O(n)",
  "expectedSpaceComplexity": "O(h)"
},

{
  "topic": "trees",
  "level": "medium",
  "title": "Validate Binary Search Tree",
  "question": "Check if the given binary tree is a valid Binary Search Tree (BST).",
  "sampleInputs": [
    "2 1 3",
    "5 1 4 N N 3 6",
    "10"
  ],
  "sampleOutputs": [
    "true",
    "false",
    "true"
  ],
  "explanations": [
    "2 > 1 and 2 < 3 so valid BST.",
    "4 is in the left subtree of 5 but greater, so invalid.",
    "Single node is always valid BST."
  ],
  "testCases": [
    "2 1 3\n",
    "5 1 4 N N 3 6\n",
    "10\n",
    "10 5 15 2 7 12 20\n",
    "8 3 10 1 6 N 14\n",
    "5 1 6 N N 4 7\n",
    "100 50 150 25 75 125 175\n",
    "30 20 40 10 25 35 50\n",
    "10 5 15 N N 6 20\n",
    "7 4 10 1 6 8 12\n"
  ],
  "expectedOutputs": [
    "true",
    "false",
    "true",
    "true",
    "true",
    "false",
    "true",
    "true",
    "false",
    "true"
  ],
  "constraints": "1 <= number of nodes <= 10^4",
  "expectedTimeComplexity": "O(n)",
  "expectedSpaceComplexity": "O(h)"
},

{
  "topic": "trees",
  "level": "medium",
  "title": "Convert Sorted Array to Binary Search Tree",
  "question": "Given an array of integers sorted in ascending order, convert it into a height-balanced BST.",
  "sampleInputs": [
    "[-10, -3, 0, 5, 9]",
    "[1, 2, 3, 4]",
    "[1]"
  ],
  "sampleOutputs": [
    "0 -10 5 -3 9",
    "2 1 3 N N N 4",
    "1"
  ],
  "explanations": [
    "0 is the middle; left is -10,-3; right is 5,9.",
    "2 is the middle; left = [1], right = [3,4].",
    "Only one element in array forms the root."
  ],
  "testCases": [
    "[-10, -3, 0, 5, 9]\n",
    "[1, 2, 3, 4]\n",
    "[1]\n",
    "[-5, -3, -1, 0, 2, 4, 6]\n",
    "[1, 3, 5, 7, 9, 11, 13]\n",
    "[10, 20, 30]\n",
    "[0, 1, 2, 3, 4, 5]\n",
    "[100]\n",
    "[1, 2]\n",
    "[1, 2, 3]\n"
  ],
  "expectedOutputs": [
    "0 -5 4 -3 -1 2 6",
    "5 3 11 1 4 7 13",
    "20 10 30",
    "2 0 5 N 1 3 4",
    "100",
    "1 2",
    "2 1 3"
  ],
  "constraints": "1 <= array.length <= 10^4",
  "expectedTimeComplexity": "O(n)",
  "expectedSpaceComplexity": "O(log n)"
},

{
  "topic": "trees",
  "level": "medium",
  "title": "Path Sum",
  "question": "Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all the values equals the sum.",
  "sampleInputs": [
    "5 4 8 11 N 13 4 7 2 N N N 1; 22",
    "1 2 3; 5",
    "1 2; 0"
  ],
  "sampleOutputs": [
    "true",
    "false",
    "false"
  ],
  "explanations": [
    "5 → 4 → 11 → 2 = 22.",
    "No such path gives 5.",
    "Path sum is not 0."
  ],
  "testCases": [
    "5 4 8 11 N 13 4 7 2 N N N 1; 22\n",
    "1 2 3; 5\n",
    "1 2; 0\n",
    "1 2 3 4 5 N 6; 10\n",
    "10 5 -3 3 2 N 11 3 -2 N 1; 18\n",
    "1 2; 3\n",
    "1 -2 -3 1 3 N -2; -1\n",
    "1 2 3 4 N N 5; 8\n",
    "7 4 12 2 5 10 15; 22\n",
    "1 2 3 4 5 6 7; 18\n"
  ],
  "expectedOutputs": [
    "true",
    "false",
    "false",
    "true",
    "true",
    "true",
    "true",
    "true",
    "true",
    "true"
  ],
  "constraints": "1 <= number of nodes <= 10^4",
  "expectedTimeComplexity": "O(n)",
  "expectedSpaceComplexity": "O(h)"
},

{
  "topic": "trees",
  "level": "medium",
  "title": "Kth Smallest Element in BST",
  "question": "Given a binary search tree, write a function to return the kth smallest element in it.",
  "sampleInputs": [
    "3 1 4 N 2; 1",
    "5 3 6 2 4 1; 3",
    "1; 1"
  ],
  "sampleOutputs": [
    "1",
    "3",
    "1"
  ],
  "explanations": [
    "In-order: [1, 2, 3, 4], 1st is 1.",
    "In-order: [1, 2, 3, 4, 5, 6], 3rd is 3.",
    "Only one element."
  ],
  "testCases": [
    "3 1 4 N 2; 1\n",
    "5 3 6 2 4 1; 3\n",
    "1; 1\n",
    "7 4 10 2 6 9 12 1 3 5 N 8 11 13; 5\n",
    "15 10 20 5 12 18 25; 6\n",
    "8 3 10 1 6 N 14; 4\n",
    "6 2 8 1 4 7 9 N N 3 5; 7\n",
    "50 30 70 20 40 60 80; 4\n",
    "9 5 12 2 7 10 14; 6\n",
    "100 50 200 25 75 150 300; 2\n"
  ],
  "expectedOutputs": [
    "1",
    "3",
    "1",
    "5",
    "18",
    "6",
    "7",
    "50",
    "10",
    "50"
  ],
  "constraints": "1 <= number of nodes <= 10^4; 1 <= k <= n",
  "expectedTimeComplexity": "O(h + k)",
  "expectedSpaceComplexity": "O(h)"
},

{
  "topic": "trees",
  "level": "medium",
  "title": "Construct Tree from Inorder and Preorder",
  "question": "Given preorder and inorder traversal of a tree, construct the binary tree.",
  "sampleInputs": [
    "pre: [3,9,20,15,7]; in: [9,3,15,20,7]",
    "pre: [1,2]; in: [2,1]",
    "pre: [1]; in: [1]"
  ],
  "sampleOutputs": [
    "3 9 20 N N 15 7",
    "1 2",
    "1"
  ],
  "explanations": [
    "Standard tree construction logic using root from preorder and inorder indices.",
    "Root is 1, left is 2.",
    "Only one node."
  ],
  "testCases": [
    "pre: [3,9,20,15,7]; in: [9,3,15,20,7]\n",
    "pre: [1,2]; in: [2,1]\n",
    "pre: [1]; in: [1]\n",
    "pre: [10,5,2,8,15,12,20]; in: [2,5,8,10,12,15,20]\n",
    "pre: [7,4,2,6,10,8,12]; in: [2,4,6,7,8,10,12]\n",
    "pre: [100,50,25,75,200,150,300]; in: [25,50,75,100,150,200,300]\n",
    "pre: [5,3,2,4,7,6,8]; in: [2,3,4,5,6,7,8]\n",
    "pre: [20,10,5,15,30,25,35]; in: [5,10,15,20,25,30,35]\n",
    "pre: [1,2,3,4,5]; in: [1,2,3,4,5]\n",
    "pre: [5,4,3,2,1]; in: [1,2,3,4,5]\n"
  ],
  "expectedOutputs": [
    "3 9 20 N N 15 7",
    "1 2",
    "1",
    "10 5 15 2 8 12 20",
    "7 4 10 2 6 8 12",
    "100 50 200 25 75 150 300",
    "5 3 7 2 4 6 8",
    "20 10 30 5 15 25 35",
    "1 N 2 N 3 N 4 N 5",
    "5 4 N 3 N 2 N 1"
  ],
  "constraints": "1 <= number of nodes <= 10^4",
  "expectedTimeComplexity": "O(n)",
  "expectedSpaceComplexity": "O(n)"
},

{
  "topic": "trees",
  "level": "medium",
  "title": "Zigzag Level Order Traversal",
  "question": "Return the zigzag level order traversal of its nodes' values from left to right, then right to left for the next level and so on.",
  "sampleInputs": [
    "3 9 20 N N 15 7",
    "1 2 3 4 N N 5",
    "1"
  ],
  "sampleOutputs": [
    "[[3], [20, 9], [15, 7]]",
    "[[1], [3, 2], [4, 5]]",
    "[[1]]"
  ],
  "explanations": [
    "Level 0: 3 → Left to right, Level 1: 20, 9 → Right to left.",
    "Traverse alternates at each level.",
    "One level."
  ],
  "testCases": [
    "3 9 20 N N 15 7\n",
    "1 2 3 4 N N 5\n",
    "1\n",
    "10 5 15 3 7 13 18\n",
    "8 4 10 2 6 N 14\n",
    "5 3 8 1 4 7 9\n",
    "100 50 150 25 75 125 175\n",
    "1 2 N 3 N 4 N 5\n",
    "1 N 2 N 3 N 4 N 5\n",
    "7 4 9 2 5 8 10\n"
  ],
  "expectedOutputs": [
    "[[3], [20, 9], [15, 7]]",
    "[[1], [3, 2], [4, 5]]",
    "[[1]]",
    "[[10], [15, 5], [3, 7, 13, 18]]",
    "[[8], [10, 4], [2, 6, 14]]",
    "[[5], [8, 3], [1, 4, 7, 9]]",
    "[[100], [150, 50], [25, 75, 125, 175]]",
    "[[1], [2], [3], [4], [5]]",
    "[[1], [2], [3], [4], [5]]",
    "[[7], [9, 4], [2, 5, 8, 10]]"
  ],
  "constraints": "1 <= number of nodes <= 10^4",
  "expectedTimeComplexity": "O(n)",
  "expectedSpaceComplexity": "O(n)"
},

{
  "topic": "trees",
  "level": "medium",
  "title": "Flatten Binary Tree to Linked List",
  "question": "Flatten the binary tree into a linked list in-place such that each node’s right points to the next node in preorder traversal.",
  "sampleInputs": [
    "1 2 5 3 4 N 6",
    "1",
    "1 2"
  ],
  "sampleOutputs": [
    "1 2 3 4 5 6",
    "1",
    "1 2"
  ],
  "explanations": [
    "Preorder is [1,2,3,4,5,6], tree is flattened in that order.",
    "Single node tree.",
    "2 is left of 1, becomes right."
  ],
  "testCases": [
    "1 2 5 3 4 N 6\n",
    "1\n",
    "1 2\n",
    "10 5 15 3 7 12 18\n",
    "8 4 10 2 6 N 14\n",
    "5 3 8 1 4 7 9\n",
    "100 50 150 25 75 125 175\n",
    "1 2 3 4 N N 5\n",
    "1 N 2 N 3 N 4\n",
    "7 4 9 2 5 8 10\n"
  ],
  "expectedOutputs": [
    "1 2 3 4 5 6",
    "1",
    "1 2",
    "10 5 3 7 15 12 18",
    "8 4 2 6 10 14",
    "5 3 1 4 8 7 9",
    "100 50 25 75 150 125 175",
    "1 2 4 3 5",
    "1 2 3 4",
    "7 4 2 5 9 8 10"
  ],
  "constraints": "1 <= number of nodes <= 10^4",
  "expectedTimeComplexity": "O(n)",
  "expectedSpaceComplexity": "O(n) or O(1) depending on method"
},

{
  "topic": "trees",
  "level": "medium",
  "title": "Count Nodes Equal to Subtree Average",
  "question": "Given the root of a binary tree, return the number of nodes where the value of the node is equal to the average of values in its subtree (including itself).",
  "sampleInputs": [
    "4 8 5 0 1 N 6",
    "1",
    "1 1 1"
  ],
  "sampleOutputs": [
    "5",
    "1",
    "3"
  ],
  "explanations": [
    "Each subtree where root equals average is counted.",
    "1 = avg(1).",
    "All nodes are 1, and equal to average."
  ],
  "testCases": [
    "4 8 5 0 1 N 6\n",
    "1\n",
    "1 1 1\n",
    "5 6 1 N N 0 2\n",
    "10 3 4 2 5\n",
    "2 2 2 2 2 2 2\n",
    "7 3 4 2 N N 5\n",
    "100 100 100 100 100 N 100\n",
    "1 N 1 N 1 N 1\n",
    "15 7 8 3 4 6 10\n"
  ],
  "expectedOutputs": [
    "5",
    "1",
    "3",
    "3",
    "1",
    "7",
    "3",
    "7",
    "4",
    "1"
  ],
  "constraints": "1 <= number of nodes <= 10^4; 0 <= Node.val <= 1000",
  "expectedTimeComplexity": "O(n)",
  "expectedSpaceComplexity": "O(h)"
},

{
  "topic": "trees",
  "level": "hard",
  "title": "Maximum Path Sum Between Two Leaves",
  "question": "Given a binary tree, find the maximum path sum between two leaves.",
  "sampleInputs": [
    "10 2 10 N N -20 N N 1 3",
    "1 2 3",
    "1 -2 -3 1 3 -2 N -1"
  ],
  "sampleOutputs": [
    "42",
    "6",
    "2"
  ],
  "explanations": [
    "Maximum path: 1 → 3 → -20 → 10 → 2 → 10 = 42",
    "Path: 2 → 1 → 3 = 6",
    "Path: -1 → 1 → -2 → 1 → 3 = 2"
  ],
  "testCases": [
    "10 2 10 N N -20 N N 1 3\n",
    "1 2 3\n",
    "1 -2 -3 1 3 -2 N -1\n",
    "5 3 8 1 4 6 9\n",
    "-10 -20 -30\n",
    "1 2 N 3 N 4 N 5\n",
    "100 -200 300 -400 N N 500\n",
    "10 5 5 3 7 6 8\n",
    "1 -2 -3 N 4 N 5\n",
    "-15 5 6 -8 1 3 9 N N 2 N N N 0 4\n"
  ],
  "expectedOutputs": [
    "42",
    "6",
    "2",
    "26",
    "-50",
    "5",
    "900",
    "26",
    "6",
    "27"
  ],
  "constraints": "1 <= Number of nodes <= 10^4; -10^5 <= Node value <= 10^5",
  "expectedTimeComplexity": "O(n)",
  "expectedSpaceComplexity": "O(h)"
},

{
  "topic": "trees",
  "level": "hard",
  "title": "Serialize and Deserialize Binary Tree",
  "question": "Design an algorithm to serialize and deserialize a binary tree.",
  "sampleInputs": [
    "1 2 3 N N 4 5",
    "1 2 N 3 N 4 N 5",
    "1 N 2 N 3 N 4 N 5"
  ],
  "sampleOutputs": [
    "1 2 N N 3 4 N N 5 N N",
    "1 2 3 4 5",
    "1 2 3 4 5"
  ],
  "explanations": [
    "Serialization converts the tree into a string representation using preorder + null markers.",
    "Deserialization reconstructs the original structure accurately.",
    "Works for both left- and right-skewed trees."
  ],
  "testCases": [
    "1 2 3 N N 4 5\n",
    "1 2 N 3 N 4 N 5\n",
    "1 N 2 N 3 N 4 N 5\n",
    "10 5 20 3 7 15 25\n",
    "8 4 12 2 6 10 14\n",
    "100 50 N 25 N 10 N\n",
    "1 N 2 3 4 N N\n",
    "5 3 7 2 4 6 8\n",
    "0 N -1 N -2\n",
    "9 6 15 3 N 12 20"
  ],
  "expectedOutputs": [
    "1 2 N N 3 4 N N 5 N N",
    "1 2 3 4 5",
    "1 2 3 4 5",
    "10 5 3 N N 7 N N 20 15 N N 25 N N",
    "8 4 2 N N 6 N N 12 10 N N 14 N N",
    "100 50 25 10 N N N N N",
    "1 N 2 3 4 N N N N",
    "5 3 2 N N 4 N N 7 6 N N 8 N N",
    "0 N -1 N -2 N N",
    "9 6 3 N N N 15 12 N N 20 N N"
  ],
  "constraints": "1 <= Number of nodes <= 10^4",
  "expectedTimeComplexity": "O(n)",
  "expectedSpaceComplexity": "O(n)"
},

{
  "topic": "trees",
  "level": "hard",
  "title": "Recover Binary Search Tree",
  "question": "Two elements of a binary search tree (BST) are swapped by mistake. Recover the tree without changing its structure.",
  "sampleInputs": [
    "1 3 N N 2",
    "3 1 4 N N 2",
    "2 3 1"
  ],
  "sampleOutputs": [
    "3 1 N N 2",
    "2 1 4 N N 3",
    "2 1 3"
  ],
  "explanations": [
    "In the first case, nodes 1 and 3 are swapped in an inorder-violating way. Recovering yields BST: 3 1 N N 2.",
    "In the second case, 2 and 3 are swapped. After recovery, the valid BST becomes 2 1 4 N N 3.",
    "Swapped 1 and 3; correcting gives the sorted inorder traversal 1 2 3."
  ],
  "testCases": [
    "1 3 N N 2\n",
    "3 1 4 N N 2\n",
    "2 3 1\n",
    "10 5 15 2 7 12 20\n",     
    "6 3 8 1 4 7 9\n",       
    "6 9 3\n",                
    "8 5 10 1 7 9 12\n",          
    "3 1 4 N N 2 N\n",       
    "2 1 4 N N 3 N\n",           
    "5 3 9 1 4 7 10\n"         
  ],
  "expectedOutputs": [
    "3 1 N N 2",
    "2 1 4 N N 3",
    "2 1 3",
    "10 5 15 2 7 12 20",
    "6 3 8 1 4 7 9",
    "6 3 9",
    "8 9 10 1 7 5 12",
    "2 1 4 N N 3 N",
    "3 1 4 N N 2 N",
    "5 3 9 1 4 7 10"
  ],
  "constraints": "1 <= Number of nodes <= 10^4",
  "expectedTimeComplexity": "O(n)",
  "expectedSpaceComplexity": "O(h)"
},

{
  "topic": "trees",
  "level": "hard",
  "title": "Count All Possible Binary Trees",
  "question": "Given preorder and inorder traversals, count all possible binary trees that can be formed.",
  "sampleInputs": [
    "Preorder: [1, 2, 3]; Inorder: [2, 1, 3]",
    "Preorder: [1, 2, 3, 4]; Inorder: [4, 3, 2, 1]",
    "Preorder: [1, 2, 3]; Inorder: [3, 2, 1]"
  ],
  "sampleOutputs": [
    "1",
    "1",
    "1"
  ],
  "explanations": [
    "A valid unique binary tree exists for the given traversals.",
    "Despite reversed inorder, there's only one valid tree matching the preorder.",
    "Only one tree structure is possible."
  ],
  "testCases": [
    "Preorder: [1, 2, 3]; Inorder: [2, 1, 3]\n",
    "Preorder: [1, 2, 3, 4]; Inorder: [4, 3, 2, 1]\n",
    "Preorder: [1, 2, 3]; Inorder: [3, 2, 1]\n",
    "Preorder: [7, 5, 4, 6, 10, 8, 11]; Inorder: [4, 5, 6, 7, 8, 10, 11]\n",
    "Preorder: [10, 5, 1, 7, 15, 12, 20]; Inorder: [1, 5, 7, 10, 12, 15, 20]\n",
    "Preorder: [3, 2, 1]; Inorder: [1, 2, 3]\n",
    "Preorder: [3]; Inorder: [3]\n",
    "Preorder: [5, 3, 2, 4, 7, 6, 8]; Inorder: [2, 3, 4, 5, 6, 7, 8]\n",
    "Preorder: [1, 2]; Inorder: [1, 2]\n",
    "Preorder: [1, 2]; Inorder: [2, 1]\n"
  ],
  "expectedOutputs": [
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1"
  ],
  "constraints": "1 <= Number of nodes <= 10^4",
  "expectedTimeComplexity": "O(n)",
  "expectedSpaceComplexity": "O(n)"
},

{
  "topic": "trees",
  "level": "hard",
  "title": "Binary Tree Maximum Width",
  "question": "Given a binary tree, return its maximum width. The width of a level is defined as the length between the end-nodes (the leftmost and rightmost non-null nodes), including the nulls in between.",
  "sampleInputs": [
    "1 3 2 5 3 N 9",
    "1 3 N 5 3",
    "1 3 2 5"
  ],
  "sampleOutputs": [
    "4",
    "2",
    "2"
  ],
  "explanations": [
    "Level 2: [5, 3, N, 9] has width 4.",
    "Level 2: [5, 3] has width 2.",
    "Level 2: [5, N] has width 2."
  ],
  "testCases": [
    "1 3 2 5 3 N 9\n",
    "1 3 N 5 3\n",
    "1 3 2 5\n",
    "1 2 3 4 N N 5\n",
    "1\n",
    "1 2 3 4 5 6 7 8 N N N N N N 9\n",
    "1 2 3 N N 4 5 N N 6 N N N\n",
    "1 N 3 N 4 N 5 N 6\n",
    "1 2 N 3 N 4 N 5\n",
    "1 2 3 4 N N 5 6 N N N 7\n"
  ],
  "expectedOutputs": [
    "4",
    "2",
    "2",
    "4",
    "1",
    "8",
    "4",
    "5",
    "4",
    "8"
  ],
  "constraints": "1 <= Number of nodes <= 10^4",
  "expectedTimeComplexity": "O(n)",
  "expectedSpaceComplexity": "O(n)"
},

{
  "topic": "trees",
  "level": "hard",
  "title": "All Nodes Distance K in Binary Tree",
  "question": "Given a binary tree, a target node, and an integer K, return all nodes that are K distance from the target node.",
  "sampleInputs": [
    "3 5 1 6 2 0 8 N N 7 4; Target: 5; K: 2",
    "1 2 3 4 5 6 7; Target: 3; K: 1",
    "1 2 3; Target: 2; K: 2"
  ],
  "sampleOutputs": [
    "[7, 4, 1]",
    "[1, 6, 7]",
    "[3]"
  ],
  "explanations": [
    "Nodes at distance 2 from 5 are 7, 4, and 1.",
    "Nodes at distance 1 from 3 are 1, 6, and 7.",
    "Only 3 is at distance 2 from node 2."
  ],
  "testCases": [
    "3 5 1 6 2 0 8 N N 7 4; Target: 5; K: 2\n",
    "1 2 3 4 5 6 7; Target: 3; K: 1\n",
    "1 2 3; Target: 2; K: 2\n",
    "1 2 N 3 N 4 N 5; Target: 2; K: 3\n",
    "5 3 6 2 4 N N 1; Target: 3; K: 2\n",
    "1 2 3; Target: 1; K: 0\n",
    "1 2 3 4 N N 5; Target: 5; K: 3\n",
    "10 5 15 3 7 12 20; Target: 10; K: 2\n",
    "2 1 3 N N N 4; Target: 1; K: 2\n",
    "1; Target: 1; K: 0\n"
  ],
  "expectedOutputs": [
    "[7, 4, 1]",
    "[1, 6, 7]",
    "[3]",
    "[5]",
    "[1, 4]",
    "[1]",
    "[1]",
    "[3, 7, 12, 20]",
    "[4]",
    "[1]"
  ],
  "constraints": "1 <= Number of nodes <= 10^4; 0 <= K <= 100",
  "expectedTimeComplexity": "O(n)",
  "expectedSpaceComplexity": "O(n)"
},

{
  "topic": "trees",
  "level": "hard",
  "title": "Maximum Path Sum in Binary Tree",
  "question": "Given a binary tree, find the maximum path sum. The path sum of a binary tree is the sum of the values along the path between any two nodes in the tree. The path must contain at least one node and does not need to go through the root.",
  "sampleInputs": [
    "Tree: [1, 2, 3]"
  ],
  "sampleOutputs": [
    "6"
  ],
  "explanations": [
    "The maximum path sum is from node 2 → node 1 → node 3 = 6."
  ],
  "testCases": [
    "Tree: [1, 2, 3]",
    "Tree: [-10, 9, 20, null, null, 15, 7]",
    "Tree: [1, -2, 3, -4, -5]",
    "Tree: [2, -1]",
    "Tree: [9, 6, -3, null, null, -6, 2, null, null, 2, null, -6, -6, -6]",
    "Tree: [-2, -1]",
    "Tree: [10]",
    "Tree: [-1, -2, -3]",
    "Tree: [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1]",
    "Tree: [1, null, 2, null, 3]"
  ],
  "expectedOutputs": [
    "6",
    "42",
    "3",
    "2",
    "16",
    "-1",
    "10",
    "-1",
    "48",
    "6"
  ],
  "constraints": "1 <= Number of nodes <= 10^4",
  "expectedTimeComplexity": "O(n)",
  "expectedSpaceComplexity": "O(h), where h is the height of the tree"
},

{
  "topic": "trees",
  "level": "hard",
  "title": "Recover Binary Search Tree",
  "question": "Two elements of a Binary Search Tree (BST) are swapped by mistake. Recover the tree without changing its structure.",
  "sampleInputs": [
    "Tree: [3,1,4,null,null,2]"
  ],
  "sampleOutputs": [
    "Recovered Tree Inorder: [1, 2, 3, 4]"
  ],
  "explanations": [
    "The nodes 2 and 3 are swapped. After fixing, the inorder traversal becomes sorted."
  ],
  "testCases": [
    "Tree: [3,1,4,null,null,2]",
    "Tree: [1,3,null,null,2]",
    "Tree: [5,3,9,2,4,8,10]",
    "Tree: [10,5,15,3,7,12,20]",
    "Tree: [6,9,3]",
    "Tree: [1,2,3]",
    "Tree: [7,3,10,1,5,8,11,0,null,4,6,9]",
    "Tree: [4,2,6,1,3,5,7]",
    "Tree: [1,null,2,null,3]",
    "Tree: [3,2,null,1]"
  ],
  "expectedOutputs": [
    "[1, 2, 3, 4]",
    "[1, 2, 3]",
    "[2, 3, 4, 5, 8, 9, 10]",
    "[3, 5, 7, 10, 12, 15, 20]",
    "[3, 6, 9]",
    "[1, 2, 3]",
    "[0, 1, 3, 4, 5, 6, 7, 8, 9, 10, 11]",
    "[1, 2, 3, 4, 5, 6, 7]",
    "[1, 2, 3]",
    "[1, 2, 3]"
  ],
  "constraints": "1 <= Number of nodes <= 10^4; Values are unique.",
  "expectedTimeComplexity": "O(n)",
  "expectedSpaceComplexity": "O(h), where h is the height of the tree"
},

{
  "topic": "trees",
  "level": "hard",
  "title": "Vertical Order Traversal of Binary Tree",
  "question": "Given a binary tree, return the vertical order traversal of its nodes' values. For each column, list the nodes from top to bottom. If two nodes have the same row and column, sort them by their value.",
  "sampleInputs": [
    "Tree: [3,9,20,null,null,15,7]"
  ],
  "sampleOutputs": [
    "[[9], [3, 15], [20], [7]]"
  ],
  "explanations": [
    "In the vertical order, nodes are grouped by their horizontal distance from the root. Nodes are sorted by their value if they are on the same level and column."
  ],
  "testCases": [
    "Tree: [3,9,20,null,null,15,7]",
    "Tree: [1,2,3,4,5,6,7]",
    "Tree: [1,2,3,4,5,6,7,8,9]",
    "Tree: [1,2,3,4,null,5,6,null,null,7]",
    "Tree: [10,20,30,40,50,60,70]",
    "Tree: [1,null,2,null,3,null,4]",
    "Tree: [1,2,null,3,null,4]",
    "Tree: [5]",
    "Tree: [1,2,3,4,5,null,6,null,null,7]",
    "Tree: [1,2,3,4,5,6,7,8,9,10]"
  ],
  "expectedOutputs": [
    "[[9], [3, 15], [20], [7]]",
    "[[4], [2], [1, 5, 6], [3, 7]]",
    "[[8], [4], [2], [1, 5, 6], [3, 7], [9]]",
    "[[4], [2, 7], [1, 5], [3], [6]]",
    "[[40], [20], [10, 50, 60], [30], [70]]",
    "[[1], [2], [3], [4]]",
    "[[4], [3], [2], [1]]",
    "[[5]]",
    "[[4, 7], [2], [1, 5], [3], [6]]",
    "[[8], [4], [2], [1, 5, 6], [3, 9], [7], [10]]"
  ],
  "constraints": "1 <= Number of nodes <= 10^4",
  "expectedTimeComplexity": "O(n log n)",
  "expectedSpaceComplexity": "O(n)"
}

];

mongoose.connect(MONGO_URI)
  .then(() => Question.insertMany(sampleQuestions))
  .then(() => {
    console.log("✅ All updated DSA questions inserted successfully.");
    mongoose.disconnect();
  })
  .catch(err => console.error("❌ Error inserting questions:", err));
