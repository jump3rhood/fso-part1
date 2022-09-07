import Header from "./Header";
import Content from "./Content";
import Total from './Total';

const App = () => {
  const course = {
    name:  'Half Stack application development',
    parts : [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
    ]
  };
  let total = 0;
  course.parts.forEach(part => {
    total += part.exercises;
  });
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total totalExercises={total} />
    </div>
  );
}
export default App;