
const GroupBar = ({ handleSelectCategory, handleSelectPriceOption }) => {
    return (
    <select>
        <option><p>Recommanded</p></option>
        <option onSelect={handleSelectPriceOption}>
            
            <p>Price</p>

       
        </option>
        <option>Sort by distance</option>
        <option>Sort by Rating</option>
        <option onSelect={handleSelectCategory}>Category</option>
    </select>

    //   <Row className="group-bar">
    //     <Group
    //       title="Product group"
    //       element={
    //         <Dropdown
    //           items={["Milk Tea", "Juice"]}
    //           onSelect={handleSelectCategory}
    //         />
    //       }
    //     />
    //     <Group
    //       title="Sort by price"
    //       element={<Dropdown
    //         items={["Low to hight", "Hight to low"]}
    //         onSelect={handleSelectPriceOption}
    //       />}
    //     />
    //     <Group
    //       title="Search"
    //       element={<Search searchTerm="" />}
    //     />
    //   </Row>
    );
  }
  
  export default GroupBar;
  