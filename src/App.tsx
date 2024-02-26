// import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";
function App() {
  // let cities = ["New York", "Los Angeles", "Houston", "Phoenix"];
  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };

  // return (
  //   <div>
  //     <ListGroup
  //       items={cities}
  //       heading="Cities"
  //       onSelectItem={handleSelectItem}
  //     />
  //   </div>
  // );

  const [alertVisable, setAlertVisable] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleOnClicked = (isClicked: boolean) => {
    console.log("The button is clicked: ", isClicked);
    setAlertVisable(isClicked);
    setIsClicked(isClicked);
  };

  return (
    <div>
      {alertVisable && (
        <Alert isVisable={alertVisable} onClose={() => setAlertVisable(false)}>
          My Alert
        </Alert>
      )}

      <Button
        isClicked={alertVisable}
        onClicked={handleOnClicked}
        unClickedColor="dark"
        clickedColor="danger"
      >
        Confirm
      </Button>
    </div>
  );
}

export default App;
