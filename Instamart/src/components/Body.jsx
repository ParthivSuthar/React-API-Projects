
import GridWidget from "./GridWidget";
import { useWidget } from "../hooks/useWidget";

function Body() {
  const { widget, setWidget } = useWidget();
    console.log(widget);
  return (
    <div>
      {/* <h1>Body</h1> */}
      <ul>
        {widget?.map((item) => (
          <GridWidget key={item?.card?.card?.id} data={item?.card?.card} />
        ))}
      </ul>
    </div>
  );
}

export default Body;
