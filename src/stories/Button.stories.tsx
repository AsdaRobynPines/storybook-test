import Button, { Props } from "../components/Button";

export default {
	title: "Button",
	component: Button,
};

const Template = (args: Props) => (<Button {...args}> Button! </Button>);

export const DefaultButton = Template.bind({
	backgroundColour: "red",
	onClick: () => console.log("clicked!"),
	width: "1500px",
    height: '500px',
});
