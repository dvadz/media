import classNames from "classnames";

const Skeleton = ({ times }) => {
  //   const boxes = [];
  //   for (let i = 0; i < times; i++) {
  //     boxes.push(<div key={i} />);
  //   }

  //   this is same as the for loop above
  const boxes = Array(times)
    .fill(0)
    .map((_, i) => {
      return <div key={i}>skeleton</div>;
    });

  return boxes;
};

export default Skeleton;
