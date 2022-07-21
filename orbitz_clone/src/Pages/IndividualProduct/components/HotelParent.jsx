import React from "react";
import HotelCard from "./HotelCard";
import "../IndProduct.css";
import HotelCardFilter from "./HotelCardFilter";
import { Heading } from "@chakra-ui/react";

const HotelParent = () => {
	return (
		<div style={{width:"80%",margin:"auto",backgroundColor:"#f4f2f2"}}>
            <br />
            <Heading size="lg" h="14">Choose your room</Heading>
			<HotelCardFilter />
			<br />
			<div id="HotelParent">
				<HotelCard />
				<HotelCard />
				<HotelCard />
				<HotelCard />
				<HotelCard />
				<HotelCard />
				<HotelCard />
				<HotelCard />
				<HotelCard />
			</div>
		</div>
	);
};

export default HotelParent;
