import { Box, Button, Flex, Input } from "@chakra-ui/react";
import React from "react";
import "../IndProduct.css";

const HotelCardFilter = () => {
	return (
		<div id="hotelCardFilter">
			<Input
				type="date"
				placeholder="Check-in date"
				size="lg"
				outline="1px solid #6b646b"
				width="200px"
			/>
			<Input
				type="date"
				placeholder="Check-out date"
				size="lg"
				outline="1px solid #6b646b"
				width="200px"
			/>
			<Flex alignItems="center" h="12" paddingLeft="16px" width="350px" border="1px solid #6b646b" borderRadius="4px">
            <span style={{fontSize:"22px" }} className="material-icons">group</span>
				<Box paddingLeft="10px">
					<p style={{fontSize:"12px"}}>Travelers</p>
					<p>1 Room, 2 Travelers</p>
				</Box>
			</Flex>

			<Button
				size="lg"
				backgroundColor="#c83259"
				marginBottom="3px"
				borderRadius="3px"
				color="white"
				padding="0px 50px"
			>
				Check Availability
			</Button>
		</div>
	);
};

export default HotelCardFilter;
