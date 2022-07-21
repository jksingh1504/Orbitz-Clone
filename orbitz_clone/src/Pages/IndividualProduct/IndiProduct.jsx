import React from "react";
import "./IndProduct.css";
import { Tabs, TabList, Tab } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import HotelDetails from "./components/HotelDetails";

const IndiProduct = () => {
	return (
		<div id="ProductParent">
			<br />
			<br />
			<div id="indProductImg">
				<div>
					<img
						src="https://images.trvl-media.com/hotels/1000000/20000/16000/15930/64fa82f5.jpg?impolicy=resizecrop&rw=598&ra=fit"
						alt="hotel img1"
					/>
				</div>
				<div className="childhotelImg">
					<div>
						<img
							src="https://images.trvl-media.com/hotels/1000000/20000/16000/15930/b9d3f5a3.jpg?impolicy=resizecrop&rw=297&ra=fit"
							alt="hotel img2"
						/>
					</div>
					<div>
						<img
							src="https://images.trvl-media.com/hotels/1000000/20000/16000/15930/b9d3f5a3.jpg?impolicy=resizecrop&rw=297&ra=fit"
							alt="hotel img3"
						/>
					</div>
					<div>
						<img
							src="https://images.trvl-media.com/hotels/1000000/20000/16000/15930/b9d3f5a3.jpg?impolicy=resizecrop&rw=297&ra=fit"
							alt="hotel img4"
						/>
					</div>
					<div>
						<img
							src="https://images.trvl-media.com/hotels/1000000/20000/16000/15930/b9d3f5a3.jpg?impolicy=resizecrop&rw=297&ra=fit"
							alt="hotel img5"
						/>
					</div>
				</div>
			</div>
			<Tabs width="80%" margin="auto" padding="5px 0px">
				<TabList display="flex" justifyContent="space-between">
					<div style={{ display: "flex" }}>
						<Tab className="productTabs" fontWeight="600" color="#6b646b">
							Summary
						</Tab>
						<Tab className="productTabs" fontWeight="600" color="#6b646b">
							Rooms
						</Tab>
						<Tab className="productTabs" fontWeight="600" color="#6b646b">
							Location
						</Tab>
						<Tab className="productTabs" fontWeight="600" color="#6b646b">
							Services
						</Tab>
						<Tab className="productTabs" fontWeight="600" color="#6b646b">
							Policies
						</Tab>
						<Tab className="productTabs" fontWeight="600" color="#6b646b">
							Opinions
						</Tab>
					</div>

					<div style={{ marginRight: "10px" }}>
						<Button
							size="md"
							backgroundColor="#c83259"
							marginBottom="3px"
							borderRadius="3px"
							color="white"
						>
							Book a room
						</Button>
					</div>
				</TabList>
			</Tabs>
			<HotelDetails />
		</div>
	);
};

export default IndiProduct;
