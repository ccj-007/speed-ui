import React from "react";
import Divider, { DividerProps } from "./Divider";

export default {
	title: "布局/Divider",
	component: Divider,
};

const defaultDividerTpl: React.FC<DividerProps> = (args) => {
	const { orientation } = args;

	return (
		<>
			<p>
				Lorem idivsum dolor sit amet, consectetur adipiscing elit. Sed nonne
				merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,
				quo modo.
			</p>
			<Divider orientation={orientation}>Center Text</Divider>
			<p>
				Lorem idivsum dolor sit amet, consectetur adipiscing elit. Sed nonne
				merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,
				quo modo.
			</p>
			<Divider orientation="center" dashed>
				Dashed Center Text
			</Divider>
			<p>
				Lorem idivsum dolor sit amet, consectetur adipiscing elit. Sed nonne
				merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,
				quo modo.
			</p>
			<Divider orientation="left">Left Text</Divider>
			<p>
				Lorem idivsum dolor sit amet, consectetur adipiscing elit. Sed nonne
				merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,
				quo modo.
			</p>
			<Divider orientation="right">Right Text</Divider>
			<p>
				Lorem idivsum dolor sit amet, consectetur adipiscing elit. Sed nonne
				merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,
				quo modo.
			</p>
			<Divider orientation="left" orientationMargin={300}>
				Left Text margin
			</Divider>

			<div style={{ display: "flex", justifyContent: "flex-start" }}>
				Text
				<Divider type="vertical" />
				<a href="#">Link</a>
				<Divider type="vertical" />
				<a href="#">Link</a>
			</div>
		</>
	);
};
export const defaultDivider: any = defaultDividerTpl.bind({});
defaultDivider.argTypes = {
	orientation: {
		options: ["center", "left", "right"],
		control: { type: "radio" },
	},
};
