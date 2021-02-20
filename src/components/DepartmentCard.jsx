import Body from "./Body";
import Header from "./Header";
import Score from "./Score";
import Bottom from "./Bottom";
export default function DepartmentCard() {
  return (
    <div className="box">
      <Header />
      <Body />
      <Score />
      <Bottom />
    </div>
  );
}
