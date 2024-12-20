import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Cards from "../cards/Cards";
import ModalComp from "../modal/ModalComp";

export default function TabsComp({ mealsData, gotTheAllCards, weekName }) {
  const [value, setValue] = React.useState(0);
  const [isSelected, setIsSelected] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [cardsArray, setCardsArray] = React.useState([]);

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event, newValue) => {
    console.log("Selected Tab:", event?.target?.title);
    setValue(newValue);
    if (event?.target?.title === "Add to Week") {
      setOpen(true);
    }
  };

  const tabsContent = [
    { id: 1, title: "All Meals" },
    { id: 2, title: "Week2" },
    { id: 3, title: "Week3" },
    { id: 4, title: "Week4" },
    { id: 5, title: "Week5" },
    { id: 6, title: "Add to Week" },
  ];

  const handleCardClick = (e, item) => {
    setIsSelected(item.id);
    setCardsArray((prevArray) => {
      if (!prevArray.some((card) => card.id === item.id)) {
        return [...prevArray, item];
      }
      return prevArray;
    });
  };
  
  React.useEffect(() => {
    console.log("gotTheAllCards updated:", gotTheAllCards);
  }, [gotTheAllCards]);

  const displayedCards = React.useMemo(() => {
    return gotTheAllCards?.length > 0 ? gotTheAllCards : mealsData;
  }, [gotTheAllCards, mealsData]);

  console.log("displayedCards>>>", displayedCards);

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          className="text-dark p-3 container"
        >
          {tabsContent.map((item, index) => (
            <Tab
              style={
                item.title === "Add to Week"
                  ? { backgroundColor: "#002045", color: "white" }
                  : { color: "black" }
              }
              title={item.title}
              key={index}
              label={item.title}
            />
          ))}
        </Tabs>
      </Box>
      <div
        className="container row mx-auto"
        style={{
          background:
            "linear-gradient(to left, rgba(255, 255, 255, 1), rgb(239, 235, 236), rgb(245, 246, 247))",
        }}
      >
        {displayedCards?.map((item, index) => (
          <div className="col-lg-4 col-md-6 col-sm-12 my-4" key={index}>
            <Cards
              style={{
                border: item.id === isSelected ? "1px solid blue" : "",
              }}
              onClick={(e) => handleCardClick(e, item)}
              image={item.image}
              title={item.name}
              description="Preheat the oven to 475°F (245°C). Roll out the pizza dough and spread tomato sauce evenly. Top with slices of fresh mozzarella and fresh basil leaves. Drizzle with olive oil and season with salt and pepper. Bake in the preheated oven for 12-15 minutes or until the crust is golden brown. Slice and serve hot."
            />
          </div>
        ))}
        {open && (
          <ModalComp
            cardsArray={cardsArray}
            handleClose={handleClose}
            setOpen={setOpen}
            open={open}
          />
        )}
      </div>
    </Box>
  );
}
