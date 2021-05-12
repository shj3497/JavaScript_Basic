// Q1. make a string out of an array
{
  const fruits = ['apple', 'banana', 'orange'];
  console.log('toString : '+fruits.toString())
  console.log('join : ' + fruits.join())
}

// Q2. make an array out of a string
{
  const fruits = '🍎, 🥝, 🍌, 🍒';
  console.log(fruits.split(','))
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  console.log(array.reverse())
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  const result = array.slice(2,5);
  console.log(result);
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
  students.map(student => {
    if(student.score === 90){
      console.log(student);
    }
  })

  const result = students.find(student => {
    return student.score === 90;
  })
  console.log(result);
}

// Q6. make an array of enrolled students
{
  const enrolledStudent = [];
  students.map(student => {
    if(student.enrolled){
      enrolledStudent.push(student)
    }
  })
  console.log(enrolledStudent);

  const result = students.filter(student => student.enrolled);
  console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  const result = [];
  students.map(student =>{
    result.push(student.score)
  })
  console.log(result);

  // 자동으로 배열로 리턴
  const result2 = students.map(student => student.score)
  console.log(result2);
}

// Q8. check if there is a student with the score lower than 50
{
  students.map(student =>{
    if(student.score < 50) console.log(student);
  })

  // some : 일부 데이터가
  const result = students.some(student => student.score < 50);
  console.log(result); // true

  // every : 모든 데이터가
  const result2 = students.every(student => student.score < 50);
  console.log(result2); // false
}

// Q9. compute students' average score
{
  let scoreSum = 0;
  students.map(student => {
    scoreSum += student.score;
  });
  let result = scoreSum/students.length;
  console.log(result);

  // prev는 이전에 리턴된값이 들어온다.
  const result2 = students.reduce((prev, curr) => {
    console.log('------');
    console.log(prev);
    console.log(curr);
    return prev + curr.score;
  },0)
  console.log(result2/students.length)
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  const result = [];
  students.map(student =>{
    result.push(student.score)
  })
  console.log(result.toString());
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  const result = [];
  students.map(student =>{
    result.push(student.score)
  })
  console.log(result.sort().toString());
}