/*
 * Determine the original side lengths and return an array:
 * - The first element is the length of the shorter side
 * - The second element is the length of the longer side
 * 
 * Parameter(s):
 * literals: The tagged template literal's array of strings.
 * expressions: The tagged template literal's array of expression values (i.e., [area, perimeter]).
 */
function sides(literals, ...expressions) {
    let area = expressions[0];
    let perimeter = expressions[1];

    let root = Math.sqrt(perimeter*perimeter - 16 * area);

    let s1 = (perimeter + root) / 4;
    let s2 = (perimeter - root) / 4;

    return [s1, s2].sort();
}