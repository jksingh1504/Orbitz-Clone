import { Button, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import "../IndProduct.css";

const HotelCard = () => {
	return (
		<div id="HotelCard">
			<img
				src="https://images.trvl-media.com/hotels/1000000/200000/198300/198225/a2090e09.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium"
				alt="room img1"
			/>
			<div>
				<Heading size="sm">Room, 1 King Bed</Heading>
				<br />
				<Flex h="7" color="#6b646b" fontSize="14px" alignItems="center">
					<span style={{fontSize:"22px" }} className="material-icons">square_foot</span>
					<p style={{ paddingLeft: "10px" }}>460 sq ft</p>
				</Flex>
				<Flex h="7" color="#6b646b" fontSize="14px" alignItems="center">
					<span style={{fontSize:"22px" }} className="material-icons">group</span>
					<p style={{ paddingLeft: "10px" }}>Sleeps 2</p>
				</Flex>
				<Flex h="7" color="#6b646b" fontSize="14px" alignItems="center">
					<span style={{fontSize:"22px" }} className="material-icons">hotel</span>
					<p style={{ paddingLeft: "10px" }}>1 King Bed</p>
				</Flex>
				<Flex h="7" color="#6b646b" fontSize="14px" alignItems="center">
					<span style={{fontSize:"22px" }} className="material-icons">wifi</span>
					<p style={{ paddingLeft: "10px" }}>Free Wifi</p>
				</Flex>
				<Flex h="7" color="#6b646b" fontSize="14px" alignItems="center">
					<span style={{fontSize:"22px" }} className="material-icons">local_parking</span>
					<p style={{ paddingLeft: "10px" }}>Free Self Parking</p>
				</Flex>
				<Flex h="7" color="#6b646b" fontSize="14px" alignItems="center">
					<span style={{fontSize:"22px" }} className="material-icons">check</span>
					<p style={{ paddingLeft: "10px" }}>Reserve now, pay deposit</p>
				</Flex>
				<Flex h="6" color="green" marginTop="10px">
					<p>Fully Refundable</p>
					<span className="material-icons">info_outline</span>
				</Flex>
				<p style={{ fontSize: "12px", color: "#6b646b" }}>Before Tue, Jul 26</p>
				<br />
				<p
					onMouseOver={(e) => {
						e.target.style.textDecoration = "underline";
						e.target.style.cursor = "pointer";
						return;
					}}
					onMouseLeave={(e) => {
						e.target.style.textDecoration = "none";

						return;
					}}
					style={{
						display: "flex",
						color: "teal",
					}}
				>
					More Details {">"}
				</p>
				<br />
				<div
					style={{
						backgroundColor: "#0e8445",
						color: "white",
						width: "fit-content",
						padding: "3px 8px",
						fontSize: "12px",
						fontWeight: "600",
						borderRadius: "5px",
					}}
				>
					30% off
				</div>
				<Flex h="10" alignItems="center">
					<Heading size="lg">$196 </Heading>
					<s style={{ padding: "0px 10px" }}>$280</s>
					<span className="material-icons" style={{ fontSize: "20px" }}>
						info_outline
					</span>
				</Flex>
				<p style={{ fontSize: "12px", color: "#6b646b", marginBottom: "16px" }}>
					$547 total
				</p>
				<Flex alignItems="center" justifyContent="space-between">
					<p
						onMouseOver={(e) => {
							e.target.style.textDecoration = "underline";
							e.target.style.cursor = "pointer";
							return;
						}}
						onMouseLeave={(e) => {
							e.target.style.textDecoration = "none";

							return;
						}}
						style={{
							display: "flex",
							color: "teal",
						}}
					>
						Price Details {">"}
					</p>
					<Button
						size="md"
						backgroundColor="#c83259"
						marginBottom="3px"
						borderRadius="3px"
						color="white"
					>
						Reserve
					</Button>
				</Flex>
			</div>
		</div>
	);
};

export default HotelCard;
